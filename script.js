document.getElementById('generateEmail').addEventListener('click', function() {
    const randomString = Math.random().toString(36).substring(2, 15);
    const tempEmail = `${randomString}@tempmail.com`;
    document.getElementById('tempEmail').textContent = `Your temporary email: ${tempEmail}`;
});
