const locations = [
   
    {
        name: "Carlsbad Caverns National Park",
        photo: "/New-Mexico/images/Carlsbad Caverns National Park.jpg",
        description: "Carlsbad Caverns National Park is a subterranean wonderland with stunning limestone caves. Visitors can explore the caverns' unique formations and witness the bat flight at dusk. The park offers an otherworldly experience beneath the Earth's surface.",
        location: "Carlsbad, New Mexico",
        link: "https://www.nps.gov/cave/index.htm",
    },
    {
        name: "White Sands National Park",
        photo: "/New-Mexico/images/White Sands National Park.jpg",
        description: "White Sands National Park is a surreal desert landscape of gypsum dunes. Visitors can sled down the dunes, hike, and view the striking white sands. The park offers a unique and mesmerizing natural spectacle.",
        location: "Alamogordo, New Mexico",
        link: "https://www.nps.gov/whsa/index.htm",
    },
    {
        name: "Santa Fe",
        photo: "/New-Mexico/images/Santa Fe.jpg",
        description: "Santa Fe is New Mexico's capital, known for its rich history and vibrant arts scene. Visitors can explore the historic Plaza, visit art galleries, and savor the unique Southwestern cuisine. The city offers a cultural and culinary journey in a scenic setting.",
        location: "Santa Fe, New Mexico",
        link: "https://santafe.org/",
    },
    {
        name: "Taos Pueblo",
        photo: "/New-Mexico/images/Taos Pueblo.jpg",
        description: "Taos Pueblo is a UNESCO World Heritage site and Native American community. Visitors can tour the multi-story adobe dwellings and learn about the Pueblo's culture and history. The site offers a cultural and historical immersion into the Native American way of life.",
        location: "Taos, New Mexico",
        link: "https://taospueblo.com/",
    },
    {
        name: "Bandelier National Monument",
        photo: "/New-Mexico/images/Bandelier National Monument.jpg",
        description: "Bandelier National Monument features ancient Puebloan ruins and rugged canyons. Visitors can explore the cliff dwellings, hike the trails, and appreciate the archaeological significance. The monument provides a glimpse into the prehistoric Southwest and outdoor adventures.",
        location: "Los Alamos, New Mexico",
        link: "https://www.nps.gov/band/index.htm",
    },
    {
        name: "Chaco Culture National Historical Park",
        photo: "/New-Mexico/images/Chaco Culture National Historical Park.jpg",
        description: "Chaco Culture National Historical Park is a UNESCO World Heritage site with ancient Puebloan ruins and astronomical observatories. Visitors can tour the massive structures, hike the trails, and explore the Chacoan culture. The park offers a journey into the mysterious past of the Southwest.",
        location: "Nageezi, New Mexico",
        link: "https://www.nps.gov/chcu/index.htm",
    },
    {
        name: "Roswell",
        photo: "/New-Mexico/images/Roswell.jpg",
        description: "Roswell is famous for its association with UFO sightings. Visitors can explore UFO-themed attractions, museums, and the International UFO Museum and Research Center. The city offers a unique and otherworldly experience for enthusiasts of the unexplained.",
        location: "Roswell, New Mexico",
        link: "https://www.roswellnm.org/",
    },
    {
        name: "Gila Cliff Dwellings National Monument",
        photo: "/New-Mexico/images/Gila Cliff Dwellings National Monument.jpg",
        description: "Gila Cliff Dwellings National Monument preserves Mogollon cliff dwellings. Visitors can hike to the dwellings, explore the caves, and learn about the ancient inhabitants. The monument offers a connection to the past and the natural beauty of the Gila Wilderness.",
        location: "Silver City, New Mexico",
        link: "https://www.nps.gov/gicl/index.htm",
    },
    {
        name: "Albuquerque International Balloon Fiesta",
        photo: "/New-Mexico/images/Albuquerque International Balloon Fiesta.jpg",
        description: "The Albuquerque International Balloon Fiesta is the world's largest hot air balloon event. Visitors can witness the mass ascension of colorful balloons, enjoy music and food, and even take balloon rides. The fiesta offers a sky full of wonder and a festive atmosphere.",
        location: "Albuquerque, New Mexico",
        link: "https://balloonfiesta.com/",
    },
    {
        name: "Meow Wolf",
        photo: "/New-Mexico/images/Meow Wolf.jpg",
        description: "Meow Wolf is an immersive art experience and interactive art installation in Santa Fe. Visitors can explore a surreal, multi-dimensional world filled with art, technology, and mystery. Meow Wolf offers a unique and mind-bending journey into creativity and imagination.",
        location: "Santa Fe, New Mexico",
        link: "https://meowwolf.com/",
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
        <div id="location-name">
        <h2>${location.name}</h2>
        </div>
        <div class="specific-location">
        <h4>${location.location}</h4>
        </div>
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