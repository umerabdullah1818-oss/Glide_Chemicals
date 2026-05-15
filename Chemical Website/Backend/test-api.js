const testFormData = async () => {
    try {
        const formData = new FormData();
        formData.append('name', 'Test User');
        formData.append('email', 'test@example.com');
        formData.append('subject', 'Test');
        formData.append('message', 'Message');
        
        const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        console.log(data);
    } catch(e) { console.error(e); }
};
testFormData();
