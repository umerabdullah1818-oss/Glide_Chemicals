// Glide Chemicals — Contact Form Backend Server
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───
const allowedOrigins = [
  'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:3000',
  process.env.FRONTEND_URL // Your deployed frontend URL (set this in Railway)
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// ─── Multer config for file uploads ───
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
    'image/jpg'
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, DOCX, JPG, and PNG are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB max per file
});

// ─── Nodemailer transporter ───
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// ─── Build HTML email template ───
const buildEmailHTML = (data) => {
  const inquiryLabels = {
    technical: 'Technical Support',
    sales: 'Sales Inquiry',
    product: 'Product Information',
    other: 'Other'
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f0fdfa;">
  <div style="max-width:600px;margin:0 auto;background-color:#ffffff;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0d9488,#06b6d4);padding:32px 24px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;">
        🧪 New Contact Form Submission
      </h1>
      <p style="color:#ccfbf1;margin:8px 0 0;font-size:14px;">
        Glide Chemicals Inc. — Website Inquiry
      </p>
    </div>

    <!-- Inquiry Type Badge -->
    <div style="padding:20px 24px 0;">
      <div style="display:inline-block;background:linear-gradient(135deg,#0d9488,#06b6d4);color:#fff;padding:6px 16px;border-radius:20px;font-size:13px;font-weight:600;">
        ${inquiryLabels[data.inquiryType] || data.inquiryType}
      </div>
    </div>

    <!-- Contact Details -->
    <div style="padding:20px 24px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;font-weight:600;width:130px;vertical-align:top;">Full Name</td>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">Email</td>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">
            <a href="mailto:${data.email}" style="color:#0d9488;text-decoration:none;">${data.email}</a>
          </td>
        </tr>
        ${data.company ? `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">Company</td>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">${data.company}</td>
        </tr>` : ''}
        ${data.phone ? `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">Phone</td>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;">
            <a href="tel:${data.phone}" style="color:#0d9488;text-decoration:none;">${data.phone}</a>
          </td>
        </tr>` : ''}
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top;">Subject</td>
          <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;font-weight:600;">${data.subject}</td>
        </tr>
      </table>
    </div>

    <!-- Message -->
    <div style="padding:0 24px 20px;">
      <div style="background-color:#f0fdfa;border:1px solid #ccfbf1;border-radius:12px;padding:16px;">
        <p style="color:#6b7280;font-size:12px;font-weight:600;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
        <p style="color:#111827;font-size:14px;line-height:1.6;margin:0;white-space:pre-wrap;">${data.message}</p>
      </div>
    </div>

    ${data.attachmentCount > 0 ? `
    <!-- Attachments Info -->
    <div style="padding:0 24px 20px;">
      <div style="background-color:#fef3c7;border:1px solid #fde68a;border-radius:12px;padding:12px 16px;">
        <p style="color:#92400e;font-size:13px;margin:0;font-weight:600;">
          📎 ${data.attachmentCount} file(s) attached to this email
        </p>
      </div>
    </div>` : ''}

    <!-- Footer -->
    <div style="background-color:#f9fafb;padding:20px 24px;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">
        This message was sent from the Glide Chemicals Inc. website contact form.
      </p>
      <p style="color:#9ca3af;font-size:11px;margin:8px 0 0;">
        © ${new Date().getFullYear()} Glide Chemicals Inc. | www.glidechemicals.com
      </p>
    </div>

  </div>
</body>
</html>`;
};

// ─── API Routes ───

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Glide Chemicals API is running',
    contactEmail: process.env.CONTACT_EMAIL || 'sales@glidechemicals.com'
  });
});

// Contact form submission
app.post('/api/contact', upload.array('attachments', 5), async (req, res) => {
  try {
    const { name, email, company, phone, subject, message, inquiryType } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, subject, message).'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Prepare attachments for nodemailer
    const attachments = (req.files || []).map(file => ({
      filename: file.originalname,
      path: file.path,
      contentType: file.mimetype
    }));

    // Build email
    const emailData = {
      name,
      email,
      company: company || '',
      phone: phone || '',
      subject,
      message,
      inquiryType: inquiryType || 'other',
      attachmentCount: attachments.length
    };

    const mailOptions = {
      from: `"Glide Chemicals Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'sales@glidechemicals.com',
      replyTo: email,
      subject: `[Website Inquiry] ${subject}`,
      html: buildEmailHTML(emailData),
      attachments
    };

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);

    // Clean up uploaded files after sending
    (req.files || []).forEach(file => {
      fs.unlink(file.path, () => {});
    });

    console.log(`✅ Email sent successfully from ${name} (${email})`);

    res.json({
      success: true,
      message: 'Your message has been sent successfully! We will get back to you within 24 hours.'
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error.message);

    // Clean up uploaded files on error
    (req.files || []).forEach(file => {
      fs.unlink(file.path, () => {});
    });

    res.status(500).json({
      success: false,
      message: `Failed to send your message. Please try again later or contact us directly at ${process.env.CONTACT_EMAIL || 'sales@glidechemicals.com'}`
    });
  }
});

// Multer error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum file size is 10MB.'
      });
    }
    return res.status(400).json({
      success: false,
      message: `Upload error: ${err.message}`
    });
  }
  if (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  next();
});

// ─── Start Server ───
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════════╗
  ║  🧪 Glide Chemicals API Server              ║
  ║  Running on: http://localhost:${PORT}          ║
  ║  Contact endpoint: POST /api/contact         ║
  ╚══════════════════════════════════════════════╝
  `);
});
