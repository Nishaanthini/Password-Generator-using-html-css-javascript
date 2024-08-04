function password() {
    const length = 8;
    const value = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += value.charAt(Math.floor(Math.random() * value.length));
    }
    document.getElementById('password').value = password;
    }


