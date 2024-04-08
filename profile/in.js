const eventTabs = document.querySelectorAll('.event-tab');

eventTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    eventTabs.forEach((tab) => tab.classList.remove('active'));
    e.target.classList.add('active');
  });
});


document.getElementById('upcoming-link').addEventListener('click', function() {
  document.querySelectorAll('.upcoming-event').forEach(function(event) {
      event.style.display = 'block';
  });
  document.querySelectorAll('.past-event').forEach(function(event) {
      event.style.display = 'none';
  });
});

document.getElementById('past-link').addEventListener('click', function() {
  document.querySelectorAll('.upcoming-event').forEach(function(event) {
      event.style.display = 'none';
  });
  document.querySelectorAll('.past-event').forEach(function(event) {
      event.style.display = 'none';
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const firstUpcomingEventLink = document.querySelector('.text-events-title:first-of-type');
  if (firstUpcomingEventLink) {
    firstUpcomingEventLink.click();
  }
});


const achievementsLink = document.getElementById('achievements-link');
const tasksLink = document.getElementById('tasks-link');
const tasksContent = document.querySelector('.tasks-content');

achievementsLink.addEventListener('click', () => {
  tasksContent.innerHTML = achievements-link;
  achievementsLink.classList.add('tasks-tab--active');
  tasksLink.classList.remove('tasks-tab--active');
});

tasksLink.addEventListener('click', () => {
  tasksContent.innerHTML = tasks-link;
  tasksLink.classList.add('tasks-tab--active');
  achievementsLink.classList.remove('tasks-tab--active');
});



