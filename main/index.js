// these have to be external from the loop because it throws and error when they are included???

document.querySelector('.Wisconsin').addEventListener('click', ()=> {
    window.location = '/Wisconsin/index.html'
});

document.querySelector('.Vermont').addEventListener('click', ()=> {
    window.location = '/Vermont/index.html'
});

document.querySelector('.Virginia').addEventListener('click', ()=> {
    window.location = '/Virginia/index.html'
});

document.querySelector('.West-Virginia').addEventListener('click', ()=> {
    window.location = '/West-Virginia/index.html'
});

document.querySelector('.Virginia').addEventListener('mouseover', ()=>{
    document.querySelector('.show-states').innerHTML = 'Virginia'
});

document.querySelector('.West-Virginia').addEventListener('mouseover', ()=>{
    document.querySelector('.show-states').innerHTML = 'West-Virginia'
});

document.querySelector('.Wisconsin').addEventListener('mouseover', ()=>{
    document.querySelector('.show-states').innerHTML = 'Wisconsin'
});

document.querySelector('.Vermont').addEventListener('mouseover', ()=>{
    document.querySelector('.show-states').innerHTML = 'Vermont'
});


document.querySelector('.random-location').addEventListener('click', ()=>{
    randomNumber = Math.ceil(Math.random() * 49)
    window.location = `${states[randomNumber].path}`
})

//This loops through each state object, making the code more manipulative

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
    { name: 'Washington', path: '/Washington/index.html' },
    { name: 'Wyoming', path: '/Wyoming/index.html' },
  ];
  
 
states.forEach((state) => {
    document.querySelector(`.${state.name}`).addEventListener('click', () =>{
        window.location = `${state.path}`
    })
}) 
    



states.forEach((state) => {
    document.querySelector(`.${state.name}`).addEventListener('mouseover', ()=>{
        document.querySelector('.show-states').innerHTML = `${state.name}`
    })
})

//if mouse is hovering over a state it'll show the name of the state
states.forEach((state) => {
    document.querySelector(`.${state.name}`).addEventListener('mouseout', ()=>{
        document.querySelector('.show-states').innerHTML = '';
    })
})

// if mouse is not hovering the div will be empty

document.querySelector('.Vermont').addEventListener('mouseout', ()=>{
    document.querySelector('.show-states').innerHTML = ''
});

/*localStorage.getItem('bodyColor')

const bodyColor = document.body

document.querySelector('.dark-mode-button').addEventListener('click', () => {
    localStorage.setItem('bodyColor', (bodyColor.classList.add('dark-mode')))

})

document.querySelector('.light-mode-button').addEventListener('click', () => {
    bodyColor.classList.remove('dark-mode')
    localStorage.setItem('bodyColor', (bodyColor.classList))
})*/


