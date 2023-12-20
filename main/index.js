
//The variable states contains an array of objects that has the states name and file path.

const states = [
    { name: 'Alabama', path: '/Alabama/index.html' },
    { name: 'Alaska', path: '/Alaska/index.html' },
    { name: 'Arizona', path: '/Arizona/index.html' },
    { name: 'Arkansas', path: '/Arkansas/index.html' },
    { name: 'California', path: '/California/index.html' },
    { name: 'Colorado', path: '/Colorado/index.html' },
    { name: 'Connecticut', path: '/Connecticut/index.html' },
    { name: 'Delaware', path: '/Delaware/index.html' },
    { name: 'Florida', path: '/Florida/index.html' },
    { name: 'Georgia', path: '/Georgia/index.html' },
    { name: 'Hawaii', path: '/Hawaii/index.html' },
    { name: 'Idaho', path: '/Idaho/index.html' },
    { name: 'Illinois', path: '/Illinois/index.html' },
    { name: 'Indiana', path: '/Indiana/index.html' },
    { name: 'Iowa', path: '/Iowa/index.html' },
    { name: 'Kansas', path: '/Kansas/index.html' },
    { name: 'Kentucky', path: '/Kentucky/index.html' },
    { name: 'Louisiana', path: '/Louisiana/index.html' },
    { name: 'Maine', path: '/Maine/index.html' },
    { name: 'Maryland', path: '/Maryland/index.html' },
    { name: 'Massachusetts', path: '/Massachusetts/index.html' },
    { name: 'Michigan', path: '/Michigan/index.html' },
    { name: 'Minnesota', path: '/Minnesota/index.html' },
    { name: 'Mississippi', path: '/Mississippi/index.html' },
    { name: 'Missouri', path: '/Missouri/index.html' },
    { name: 'Montana', path: '/Montana/index.html' },
    { name: 'Nebraska', path: '/Nebraska/index.html' },
    { name: 'Nevada', path: '/Nevada/index.html' },
    { name: 'New-Hampshire', path: '/New-Hampshire/index.html' },
    { name: 'New-Jersey', path: '/New-Jersey/index.html' },
    { name: 'New-Mexico', path: '/New-Mexico/index.html' },
    { name: 'New-York', path: '/New-York/index.html' },
    { name: 'North-Carolina', path: '/North-Carolina/index.html' },
    { name: 'North-Dakota', path: '/North-Dakota/index.html' },
    { name: 'Ohio', path: '/Ohio/index.html' },
    { name: 'Oklahoma', path: '/Oklahoma/index.html' },
    { name: 'Oregon', path: '/Oregon/index.html' },
    { name: 'Pennsylvania', path: '/Pennsylvania/index.html' },
    { name: 'Rhode-Island', path: '/Rhode-Island/index.html' },
    { name: 'South-Carolina', path: '/South-Carolina/index.html' },
    { name: 'South-Dakota', path: '/South-Dakota/index.html' },
    { name: 'Tennessee', path: '/Tennessee/index.html' },
    { name: 'Texas', path: '/Texas/index.html' },
    { name: 'Utah', path: '/Utah/index.html' },
    { name: 'Vermont', path: '/Vermont/index.html'},
    { name: 'Virginia', path: '/Virginia/index.html'},
    { name: 'Washington', path: '/Washington/index.html'},
    { name: 'West-Virginia', path: '/West-Virginia/index.html'},
    { name: 'Wisconsin', path: '/Wisconsin/index.html'},
    { name: 'Wyoming', path: '/Wyoming/index.html' },
  ];
  
  // picks a random number 0 - 50 and opens to that states path
document.querySelector('.random-location').addEventListener('click', ()=>{
  randomNumber = Math.floor(Math.random() * 51)
  window.location = `${states[randomNumber].path}`
})

//when a state is clicked on it'll open their respective path
states.forEach((state) => {
    document.querySelector(`.${state.name}`).addEventListener('click', () =>{
        window.location = `${state.path}`
    })
}) 
    


//if mouse is hovering over a state it'll show the name of the state
states.forEach((state) => {
    document.querySelector(`.${state.name}`).addEventListener('mouseover', ()=>{
        document.querySelector('.show-states').innerHTML = `${state.name}`
    })
})

// if mouse is not hovering the div will be empty
states.forEach((state) => {
    document.querySelector(`.${state.name}`).addEventListener('mouseout', ()=>{
        document.querySelector('.show-states').innerHTML = '';
    })
})



// night mode, setting up some variables
const toggleButton = document.getElementById('toggler');
const stateOutline = document.querySelectorAll('.state-outline');
const surpriseBtn = document.getElementById('surpriseBtn')



    function toggler() {
      const body = document.body;
      const isLightMode = body.classList.contains('light-mode');

      if (isLightMode) {
        body.classList.remove('light-mode');
        body.classList.add('night-mode-body');
        toggleButton.innerHTML = 'Light Mode';
        toggleButton.classList.add('dark-button')
        surpriseBtn.classList.add('dark-button')

        //looping through the state outlines and applying night-mode to them

        stateOutline.forEach(outline => {
            outline.classList.add('night-mode-outline');
          });

        //saving the css changes to local storage  
        localStorage.setItem('mode', 'night');
        
        } else {
        body.classList.remove('night-mode-body');
        body.classList.add('light-mode');
        stateOutline.forEach(outline => {
          outline.classList.remove('night-mode-outline');
          });
        toggleButton.classList.remove('dark-button')
        surpriseBtn.classList.remove('dark-button')
        toggleButton.innerHTML = 'Night Mode';
        localStorage.setItem('mode', 'light');
      }
    }

    function applyModePreference() {
      const body = document.body;
      const mode = localStorage.getItem('mode');

      if (mode === 'night') {
        body.classList.remove('light-mode');
        body.classList.add('night-mode-body');

        stateOutline.forEach(outline => {
          outline.classList.add('night-mode-outline');
          });

        toggleButton.innerHTML = 'Light Mode';
        toggleButton.classList.add('dark-button')
        surpriseBtn.classList.add('dark-button')
      } else {
        body.classList.remove('night-mode');
        body.classList.remove('night-mode-body');

        stateOutline.forEach(outline => {
          outline.classList.remove('night-mode-outline');
          });

        toggleButton.classList.remove('dark-button')
        surpriseBtn.classList.remove('dark-button')
        body.classList.add('light-mode');
        toggleButton.innerHTML = 'Night Mode';
      }
    }

    toggleButton.addEventListener('click', toggler);

    // Apply saved mode preference on page load
    applyModePreference();
