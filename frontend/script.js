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
const liveInput = document.getElementById('liveTaskInput');
const liveAddBtn = document.getElementById('liveAddTaskBtn');
const liveList = document.getElementById('liveTaskList');

// Load saved tasks on page load
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  liveList.innerHTML = '';
  tasks.forEach((task, index) => renderTask(task, index));
}

// Render one task item
function renderTask(task, index) {
  const taskItem = document.createElement('div');
  taskItem.className = 'live-task-item';
  taskItem.style.display = 'flex';
  taskItem.style.justifyContent = 'space-between';
  taskItem.style.alignItems = 'center';

  taskItem.innerHTML = `
    <span>${task}</span>
    <button onclick="deleteTask(${index})" style="
      background: none;
      border: none;
      color: red;
      font-size: 18px;
      cursor: pointer;
    ">❌</button>
  `;
  liveList.appendChild(taskItem);
}

// Save task
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task
function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

if (liveInput && liveAddBtn && liveList) {
  liveAddBtn.addEventListener('click', () => {
    const taskText = liveInput.value.trim();
    if (taskText !== '') {
      saveTask(taskText);
      loadTasks();
      liveInput.value = '';
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


