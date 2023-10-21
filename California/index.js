const locations = [
    {
        name: 'Yosemite National Park',
        photo: '/California/images/Yosemite National Park.jpg',
        description: 'Known for its breathtaking waterfalls, giant sequoias, and stunning rock formations like El Capitan and Half Dome, Yosemite is a haven for outdoor enthusiasts.',
        location: 'Northern California',
        link: 'https://www.nps.gov/yose/index.htm',
    },
    {
        name: 'Golden Gate Bridge',
        photo: '/California/images/Golden Gate Bridge.jpg',
        description: "San Francisco's iconic red suspension bridge is not only a marvel of engineering but also a symbol of the city itself.",
        location: 'San Francisco',
        link: 'https://www.goldengate.org/',
    },
    {
        name: 'Disneyland Resort',
        photo: '/California/images/Disneyland Resort.jpg',
        description: 'Located in Anaheim, Disneyland is a world-famous theme park featuring magical attractions, entertainment, and beloved Disney characters.',
        location: 'Anaheim',
        link: 'https://disneyland.disney.go.com/',
    },
    {
        name: 'Hollywood',
        photo: '/California/images/Hollywood.jpg',
        description: 'Explore the entertainment industry heart, where you can visit the Hollywood Walk of Fame, TCL Chinese Theatre, and the Griffith Observatory for a panoramic view of the city.',
        location: 'Los Angeles',
        link: 'https://www.discoverlosangeles.com/things-to-do/los-angeles-hollywood',
    },
    {
        name: 'Napa Valley',
        photo: '/California/images/Napa Valley.jpg',
        description: "California's premier wine region offers wine tasting at numerous vineyards, beautiful landscapes, and gourmet dining experiences.",
        location: 'Napa Valley',
        link: 'https://www.visitnapavalley.com/',
    },
    {
        name: 'Alcatraz Island',
        photo: '/California/images/Alcatraz Island.jpg',
        description: 'Take a ferry to the former prison island in San Francisco Bay, where you can tour the notorious Alcatraz Penitentiary.',
        location: 'San Francisco',
        link: 'https://www.nps.gov/alca/index.htm',
    },
    {
        name: 'Big Sur',
        photo: '/California/images/Big Sur.jpg',
        description: 'This rugged stretch of coastline on Highway 1 offers dramatic cliffs, redwood forests, and unbeatable ocean views.',
        location: 'Central California',
        link: 'https://www.bigsurcalifornia.org/',
    },
    {
        name: 'San Diego Zoo',
        photo: '/California/images/San Diego Zoo.jpg',
        description: "One of the world's most renowned zoos, it's home to a diverse array of animals and offers a chance to learn about conservation efforts.",
        location: 'San Diego',
        link: 'https://zoo.sandiegozoo.org/',
    },
    {
        name: 'Lake Tahoe',
        photo: '/California/images/Lake Tahoe.jpg',
        description: 'Whether you visit in summer for outdoor activities or in winter for skiing, Lake Tahoe is a stunning destination for all seasons.',
        location: 'Northern California',
        link: 'https://tahoesouth.com/',
    },
    {
        name: 'Venice Beach',
        photo: '/California/images/Venice Beach.jpg',
        description: 'Located in Los Angeles, Venice Beach is famous for its eclectic boardwalk, street performers, Muscle Beach gym, and vibrant atmosphere.',
        location: 'Los Angeles',
        link: 'https://www.venicebeach.com/',
    },
];

let locationHTML = '';

locations.forEach((location) => {

locationHTML += `<div class="attraction">
<div class="attraction-photo">
    <img src="${location.photo}" alt="" id="attraction-photo">
</div>
<div class="attraction-information">
    <div class="location-name">
        <h2>${location.name}</h2>
        <h4>${location.location}</h4>
    </div>
    <div class="location-information">
        <p>${location.description}</p>
    </div>
    <a href="${location.link}" target="_blank">
        <input type="button" value="More Information" class="info-button">
    </a>
</div>
</div>`

document.querySelector('main').innerHTML = locationHTML;
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const attractionElements = document.querySelectorAll('.attraction');
attractionElements.forEach((el) => observer.observe(el));