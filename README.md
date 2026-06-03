# 📝 Todoist Clone – Full Stack Web App

A full-stack task management web application inspired by [Todoist](https://todoist.com), built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

---

## ✨ Features

### Frontend
- 🌙 Dark mode toggle
- 📱 Mobile responsive design
- ✅ Add, view, and delete tasks
- 🎯 Task priority levels (Low, Medium, High)
- 📅 Task due dates
- 🎬 Smooth scroll animations
- 🔽 Dropdown navigation menus

### Backend
- 🔐 User registration and login
- 🔑 JWT authentication
- 💾 Tasks saved to MongoDB database
- 🛡️ Protected API routes
- 🔒 Passwords encrypted with bcrypt

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Auth | JWT, bcryptjs |
| Icons | Remix Icon |
| Version Control | Git, GitHub |

---

## 📁 Folder Structure

todoist-clone/
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── style.css
│   ├── script.js
│   ├── auth.js
│   ├── img1.png
│   ├── img2.png
│   └── video4.mp4
├── backend/
│   ├── server.js
│   ├── .env
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   └── routes/
│       ├── auth.js
│       └── tasks.js
├── .gitignore
└── README.md

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Steps

1. Clone the repo
```bash
git clone https://github.com/payalgaikwad07/todoist-clone.git
cd todoist-clone
```

2. Setup backend
```bash
cd backend
npm install
```

3. Create `.env` file in backend folder

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


4. Start backend server
```bash
node server.js
```

5. Open frontend
Open frontend/index.html with Live Server in VS Code

---

## 🔧 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|---------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/tasks` | Get all tasks | Yes |
| POST | `/api/tasks` | Add new task | Yes |
| DELETE | `/api/tasks/:id` | Delete a task | Yes |

---

## 🔮 Future Enhancements
- [ ] Deploy on Vercel + Render
- [ ] Task completion toggle
- [ ] Drag and drop tasks
- [ ] Project categories
- [ ] Email notifications
- [ ] React.js frontend

---

## 👩‍💻 Author
**Payal Gaikwad**
- GitHub: [@payalgaikwad07](https://github.com/payalgaikwad07)

---

## 🙏 Acknowledgements
- UI inspired by [Todoist](https://todoist.com)
- Icons by [Remix Icon](https://remixicon.com)

---
