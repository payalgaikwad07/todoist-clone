// function setupDropdown(containerId, menuId) {
//   const container = document.getElementById(containerId);
//   const menu = document.getElementById(menuId);

//   container.addEventListener('mouseenter', () => {
//     menu.style.display = 'block';
//   });

//   container.addEventListener('mouseleave', () => {
//     menu.style.display = 'none';
//   });
// }


  const video = document.getElementById("myVideo");
  const controls = document.getElementById("controls");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const replayBtn = document.getElementById("replayBtn");

  function showControls() {
    controls.style.display = "flex";
    updateButtons();
  }

  function hideControls() {
    controls.style.display = "none";
  }

  function updateButtons() {
    if (video.ended) {
      playBtn.style.display = "none";
      pauseBtn.style.display = "none";
      replayBtn.style.display = "inline-block";
    } else if (video.paused) {
      playBtn.style.display = "inline-block";
      pauseBtn.style.display = "none";
      replayBtn.style.display = "none";
    } else {
      playBtn.style.display = "none";
      pauseBtn.style.display = "inline-block";
      replayBtn.style.display = "none";
    }
  }

  function playVideo() {
    video.play();
    updateButtons();
  }

  function pauseVideo() {
    video.pause();
    updateButtons();
  }

  function replayVideo() {
    video.currentTime = 0;
    video.play();
    updateButtons();
  }

  video.addEventListener("play", updateButtons);
  video.addEventListener("pause", updateButtons);
  video.addEventListener("ended", updateButtons);

  // Initialize state
  window.onload = () => updateButtons();


  // Live Task Demo (Page 5)
const API = 'http://localhost:5000/api';
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));

const liveInput = document.getElementById('liveTaskInput');
const liveAddBtn = document.getElementById('liveAddTaskBtn');
const liveList = document.getElementById('liveTaskList');
const prioritySelect = document.getElementById('prioritySelect');
const dueDateInput = document.getElementById('dueDateInput');

// Load tasks from backend
async function loadTasks() {
  if (!token) {
    liveList.innerHTML = '<p style="color:#888">Please <a href="login.html">login</a> to see your tasks!</p>';
    return;
  }
  try {
    const res = await fetch(`${API}/tasks`, {
      headers: { 'Authorization': token }
    });
    const tasks = await res.json();
    liveList.innerHTML = '';
    tasks.forEach(task => renderTask(task));
  } catch (err) {
    liveList.innerHTML = '<p style="color:red">Error loading tasks!</p>';
  }
}

// Render one task
function renderTask(task) {
  const taskItem = document.createElement('div');
  taskItem.className = `live-task-item priority-${task.priority}`;
  taskItem.style.display = 'flex';
  taskItem.style.justifyContent = 'space-between';
  taskItem.style.alignItems = 'center';

  taskItem.innerHTML = `
    <div>
      <span>${task.text}</span>
      <div class="task-meta">
        ${task.priority.toUpperCase()} priority
        ${task.dueDate ? '· Due: ' + task.dueDate : ''}
      </div>
    </div>
    <button onclick="deleteTask('${task._id}')" style="
      background:none; border:none;
      color:red; font-size:18px; cursor:pointer;">❌</button>
  `;
  liveList.appendChild(taskItem);
}

// Add task to backend
async function addTask(text, priority, dueDate) {
  if (!token) {
    alert('Please login first!');
    window.location.href = 'login.html';
    return;
  }
  try {
    const res = await fetch(`${API}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ text, priority, dueDate })
    });
    const task = await res.json();
    renderTask(task);
  } catch (err) {
    alert('Error adding task!');
  }
}

// Delete task from backend
async function deleteTask(id) {
  try {
    await fetch(`${API}/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': token }
    });
    loadTasks();
  } catch (err) {
    alert('Error deleting task!');
  }
}

if (liveInput && liveAddBtn && liveList) {
  liveAddBtn.addEventListener('click', () => {
    const taskText = liveInput.value.trim();
    const priority = prioritySelect.value;
    const dueDate = dueDateInput.value;
    if (taskText !== '') {
      addTask(taskText, priority, dueDate);
      liveInput.value = '';
      dueDateInput.value = '';
    }
  });

  liveInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') liveAddBtn.click();
  });

  loadTasks();
}
// dark button

const darkBtn = document.getElementById('darkModeBtn');

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Remember dark mode after page refresh
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  darkBtn.textContent = '☀️';
}

//logout
const logoutBtn = document.getElementById('logoutBtn');
const loginLink = document.querySelector('.about a[href="login.html"]');
const registerLink = document.querySelector('.start a[href="register.html"]');

if (user && logoutBtn) {
  logoutBtn.style.display = 'block';
  // Hide login and register when logged in
  if (loginLink) loginLink.parentElement.style.display = 'none';
  if (registerLink) registerLink.parentElement.style.display = 'none';

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  });
}