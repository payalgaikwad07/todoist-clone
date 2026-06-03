const API = 'http://localhost:5000/api';

// REGISTER
const registerBtn = document.getElementById('registerBtn');
if (registerBtn) {
  registerBtn.addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    if (!name || !email || !password) {
      errorMsg.textContent = 'Please fill all fields!';
      errorMsg.style.color = 'red';
      return;
    }

    try {
      const res = await fetch(`${API}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'index.html';
      } else {
        errorMsg.textContent = data.msg;
        errorMsg.style.color = 'red';
      }
    } catch (err) {
      errorMsg.textContent = 'Server error. Make sure backend is running!';
      errorMsg.style.color = 'red';
    }
  });
}

// LOGIN
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error-msg');

    if (!email || !password) {
      errorMsg.textContent = 'Please fill all fields!';
      errorMsg.style.color = 'red';
      return;
    }

    try {
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'index.html';
      } else {
        errorMsg.textContent = data.msg;
        errorMsg.style.color = 'red';
      }
    } catch (err) {
      errorMsg.textContent = 'Server error. Make sure backend is running!';
      errorMsg.style.color = 'red';
    }
  });
}