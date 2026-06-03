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

if (liveInput && liveAddBtn && liveList) {
  liveAddBtn.addEventListener('click', () => {
    const taskText = liveInput.value.trim();
    if (taskText !== '') {
      const taskItem = document.createElement('div');
      taskItem.className = 'live-task-item';
      taskItem.textContent = taskText;
      liveList.appendChild(taskItem);
      liveInput.value = '';
    }
  });

  liveInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      liveAddBtn.click();
    }
  });
}


