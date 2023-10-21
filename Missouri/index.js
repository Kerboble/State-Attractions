locations = [
    {
        name: "Gateway Arch National Park",
        location: "St. Louis",
        photo: "/Missouri/images/Gateway Arch National Park.jpg",
        description: "Visit the Gateway Arch National Park in St. Louis, an iconic symbol of westward expansion. Take an elevator to the top for breathtaking views of the city and the Mississippi River.",
        link: "https://www.nps.gov/jeff/index.htm"
    },
    {
        name: "Silver Dollar City",
        location: "Branson",
        photo: "/Missouri/images/Silver Dollar City.jpg",
        description: "Experience the magic of Silver Dollar City in Branson. Enjoy thrilling rides, live entertainment, and craft demonstrations in this 1880s-themed amusement park.",
        link: "https://www.silverdollarcity.com/"
    },
    {
        name: "Missouri Botanical Garden",
        location: "St. Louis",
        photo: "/Missouri/images/Missouri Botanical Garden.jpg",
        description: "Explore the Missouri Botanical Garden in St. Louis, one of the oldest botanical institutions in the United States. Stroll through lush gardens, conservatories, and historical landscapes.",
        link: "https://www.missouribotanicalgarden.org/"
    },
    {
        name: "Mark Twain Boyhood Home and Museum",
        location: "Hannibal",
        photo: "/Missouri/images/Mark Twain Boyhood Home and Museum.jpg",
        description: "Step into the world of Mark Twain at his boyhood home in Hannibal. Visit the museum, explore historic buildings, and learn about the life of the famous author.",
        link: "https://www.marktwainmuseum.org/"
    },
    {
        name: "Wilson's Creek National Battlefield",
        location: "Republic",
        photo: "/Missouri/images/Wilson's Creek National Battlefield.jpg",
        description: "Visit Wilson's Creek National Battlefield in Republic. Explore the site of a significant Civil War battle and learn about the conflict's impact on Missouri.",
        link: "https://www.nps.gov/wicr/index.htm"
    },
    {
        name: "Kansas City Zoo",
        location: "Kansas City",
        photo: "/Missouri/images/Kansas City Zoo.jpg",
        description: "Discover the Kansas City Zoo in Kansas City. Explore diverse animal exhibits, including the African Savannah, Australian Outback, and the world's most complete T. rex exhibit.",
        link: "https://www.kansascityzoo.org/"
    },
    {
        name: "City Museum",
        location: "St. Louis",
        photo: "/Missouri/images/City Museum.jpg",
        description: "Experience the unique City Museum in St. Louis. This interactive playground features tunnels, slides, and art installations, making it a favorite for all ages.",
        link: "https://www.citymuseum.org/"
    },
    {
        name: "Elephant Rocks State Park",
        location: "Belleview",
        photo: "/Missouri/images/Elephant Rocks State Park.jpg",
        description: "Explore the fascinating rock formations of Elephant Rocks State Park in Belleview. Climb among giant elephant-shaped boulders and enjoy a scenic picnic.",
        link: "https://mostateparks.com/park/elephant-rocks-state-park"
    },
    {
        name: "St. Louis Science Center",
        location: "St. Louis",
        photo: "/Missouri/images/St. Louis Science Center.jpg",
        description: "Engage with science and technology at the St. Louis Science Center. Discover interactive exhibits, a planetarium, an OMNIMAX theater, and hands-on learning for all ages.",
        link: "https://www.slsc.org/"
    },
    {
        name: "Ha Ha Tonka State Park",
        location: "Camdenton",
        photo: "/Missouri/images/Ha Ha Tonka State Park.jpg",
        description: "Visit the unique geological formations of Ha Ha Tonka State Park in Camdenton. Explore trails, sinkholes, a castle ruins, and the scenic Lake of the Ozarks.",
        link: "https://mostateparks.com/park/ha-ha-tonka-state-park"
    },
]



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