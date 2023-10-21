const locations = [
    {
        name: "The Alamo",
        photo: "/Texas/images/The Alamo.jpg",
        description: "The Alamo in San Antonio is a historic mission and symbol of Texas independence. Visitors can explore the preserved chapel and learn about the famous 1836 battle. The site offers a significant piece of Texan history and a sense of reverence.",
        location: "San Antonio, Texas",
        link: "https://www.thealamo.org/",
    },
    {
        name: "Big Bend National Park",
        photo: "/Texas/images/Big Bend National Park.jpg",
        description: "Big Bend National Park, located along the Rio Grande, is known for its rugged landscapes, canyons, and desert flora. Visitors can hike, camp, and take in panoramic views. The park offers a remote and untamed wilderness experience in the Chihuahuan Desert.",
        location: "Alpine, Texas",
        link: "https://www.nps.gov/bibe/index.htm",
    },
    {
        name: "San Antonio River Walk",
        photo: "/Texas/images/San Antonio River Walk.jpg",
        description: "The San Antonio River Walk is a picturesque urban waterway with shops and restaurants. Visitors can stroll along the scenic paths, dine at waterside cafes, and enjoy boat tours. The River Walk offers a charming and vibrant city experience.",
        location: "San Antonio, Texas",
        link: "https://www.thesanantonioriverwalk.com/",
    },
    {
        name: "Space Center Houston",
        photo: "/Texas/images/Space Center Houston.jpg",
        description: "Space Center Houston is the visitor center for NASA's Johnson Space Center. Visitors can explore exhibits, see spacecraft, and learn about space exploration. The center offers an out-of-this-world experience and a look into the wonders of space.",
        location: "Houston, Texas",
        link: "https://spacecenter.org/",
    },
    {
        name: "Texas Hill Country",
        photo: "/Texas/images/Texas Hill Country.jpg",
        description: "Texas Hill Country is a scenic and historic region known for rolling hills, rivers, and charming towns. Visitors can hike, visit wineries, and explore places like Fredericksburg. The region offers a relaxing and picturesque getaway in the heart of Texas.",
        location: "Various Locations in Texas Hill Country",
        link: "https://texashillcountry.com/",
    },
    {
        name: "The Sixth Floor Museum at Dealey Plaza",
        photo: "/Texas/images/The Sixth Floor Museum at Dealey Plaza.jpg",
        description: "The Sixth Floor Museum at Dealey Plaza in Dallas is dedicated to the life and legacy of President John F. Kennedy. Visitors can explore exhibits and the site of the 1963 assassination. The museum offers a glimpse into a pivotal moment in American history.",
        location: "Dallas, Texas",
        link: "https://www.jfk.org/",
    },
    {
        name: "Padre Island National Seashore",
        photo: "/Texas/images/Padre Island National Seashore.jpg",
        description: "Padre Island National Seashore is a barrier island with pristine beaches and natural beauty. Visitors can relax, camp, and watch for nesting sea turtles. The seashore offers a coastal paradise and a refuge for wildlife and beachgoers.",
        location: "Corpus Christi, Texas",
        link: "https://www.nps.gov/pais/index.htm",
    },
    {
        name: "Battleship Texas State Historic Site",
        photo: "/Texas/images/Battleship Texas State Historic Site.jpg",
        description: "The Battleship Texas State Historic Site is home to the USS Texas, a historic battleship. Visitors can tour the ship and learn about its role in both World Wars. The site offers a look into naval history and a floating museum.",
        location: "La Porte, Texas",
        link: "https://tpwd.texas.gov/state-parks/battleship-texas",
    },
    {
        name: "LBJ Presidential Library",
        photo: "/Texas/images/LBJ Presidential Library.jpg",
        description: "The LBJ Presidential Library in Austin is dedicated to President Lyndon B. Johnson. Visitors can explore exhibits, documents, and the history of the Johnson administration. The library offers insights into a pivotal era in American politics.",
        location: "Austin, Texas",
        link: "https://www.lbjlibrary.org/",
    },
    {
        name: "Guadalupe Mountains National Park",
        photo: "/Texas/images/Guadalupe Mountains National Park.jpg",
        description: "Guadalupe Mountains National Park is known for its rugged terrain and hiking trails. Visitors can explore McKittrick Canyon, climb Guadalupe Peak, and witness desert and mountain landscapes. The park offers outdoor adventures and scenic beauty in West Texas.",
        location: "Salt Flat, Texas",
        link: "https://www.nps.gov/gumo/index.htm",
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