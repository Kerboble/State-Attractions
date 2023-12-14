const toggleButton = document.getElementById('toggler');
const attractions = document.querySelectorAll('.attraction')
const infoButton = document.querySelectorAll('.info-button')
console.log(infoButton)


function toggler() {
  const body = document.body;
  const isLightMode = body.classList.contains('light-mode');

  if (isLightMode) {
    body.classList.remove('light-mode');
    body.classList.add('night-mode-body');
    toggleButton.innerHTML = 'Light Mode';
    toggleButton.classList.add('dark-button')

    //looping through the attractions and applying night-mode to them

      attractions.forEach(attraction => {
        attraction.classList.add('attraction-dark');
      });

    //looping through the info buttons
    infoButton.forEach(button => {
      button.classList.add('dark-button');
    });
    //saving the css changes to local storage  

    localStorage.setItem('mode', 'night');
  } else {
    body.classList.remove('night-mode-body');
    body.classList.add('light-mode');

    //loop through each attraction and remove the dark theme
    attractions.forEach(attraction => {
      attraction.classList.remove('attraction-dark');
    });

    //loop through each button and remove dark theme
    infoButton.forEach(button => {
      button.classList.remove('dark-button');
    });

    toggleButton.classList.remove('dark-button')
    toggleButton.innerHTML = 'Night Mode';
    localStorage.setItem('mode', 'light');
  }
}

//saving to local storage so on refresh the browser will remember if its on night mode or not
function applyModePreference() {
  const body = document.body;
  const mode = localStorage.getItem('mode');

  if (mode === 'night') {
    body.classList.remove('light-mode');
    body.classList.add('night-mode-body');
    attractions.forEach(attraction => {
      attraction.classList.add('attraction-dark');
    });
    infoButton.forEach(button => {
      button.classList.add('dark-button');
    });
    toggleButton.innerHTML = 'Light Mode';
    toggleButton.classList.add('dark-button')

  } else {
    body.classList.remove('night-mode');
    body.classList.remove('night-mode-body');
    attractions.forEach(attraction => {
      attraction.classList.remove('attraction-dark');
    });
    infoButton.forEach(button => {
      button.classList.remove('dark-button');
    });
    toggleButton.classList.remove('dark-button')
    body.classList.add('light-mode');
    toggleButton.innerHTML = 'Night Mode';
  }
}

toggleButton.addEventListener('click', toggler);

// Apply saved mode preference on page load
applyModePreference();
