locations = [
    {
        name: "Oklahoma City National Memorial & Museum",
        location: "Oklahoma City",
        photo: "/Oklahoma/images/Oklahoma City National Memorial & Museum.jpg",
        description: "Pay tribute at the Oklahoma City National Memorial & Museum, a solemn remembrance of the 1995 bombing. Explore the outdoor memorial and visit the museum for a deeper understanding of the event.",
        link: "https://www.oklahomacitynationalmemorial.org/"
    },
    {
        name: "Chickasaw Cultural Center",
        location: "Sulphur",
        photo: "/Oklahoma/images/Chickasaw Cultural Center.jpg",
        description: "Discover the rich culture of the Chickasaw Nation at the Chickasaw Cultural Center in Sulphur. Explore exhibits, cultural demonstrations, and the traditional village.",
        link: "https://chickasawculturalcenter.com/"
    },
    {
        name: "Wichita Mountains Wildlife Refuge",
        location: "Southwestern Oklahoma",
        photo: "/Oklahoma/images/Wichita Mountains Wildlife Refuge.jpg",
        description: "Explore the Wichita Mountains Wildlife Refuge in southwestern Oklahoma. Hike, watch wildlife, and admire rugged granite peaks in this natural oasis.",
        link: "https://www.fws.gov/refuge/Wichita_Mountains/"
    },
    {
        name: "Philbrook Museum of Art",
        location: "Tulsa",
        photo: "/Oklahoma/images/Philbrook Museum of Art.jpg",
        description: "Visit the Philbrook Museum of Art in Tulsa. Enjoy diverse art collections, stunning gardens, and special exhibitions in a historic mansion setting.",
        link: "https://philbrook.org/"
    },
    {
        name: "Tulsa Air and Space Museum & Planetarium",
        location: "Tulsa",
        photo: "/Oklahoma/images/Tulsa Air and Space Museum & Planetarium.jpg",
        description: "Explore aviation and space history at the Tulsa Air and Space Museum & Planetarium. View aircraft, artifacts, and enjoy planetarium shows for all ages.",
        link: "https://www.tulsamuseum.org/"
    },
    {
        name: "Tallgrass Prairie Preserve",
        location: "Pawhuska",
        photo: "/Oklahoma/images/Tallgrass Prairie Preserve.jpg",
        description: "Experience the Tallgrass Prairie Preserve in Pawhuska, preserving a remnant of the once-vast tallgrass prairie. Hike, watch bison, and savor the open prairie landscapes.",
        link: "https://www.nature.org/en-us/what-we-do/our-insights/perspectives/tallgrass-prairie-preserve-oklahoma/"
    },
    {
        name: "National Cowboy & Western Heritage Museum",
        location: "Oklahoma City",
        photo: "/Oklahoma/images/National Cowboy & Western Heritage Museum.jpg",
        description: "Visit the National Cowboy & Western Heritage Museum in Oklahoma City. Explore the Old West's history and culture through art, artifacts, and engaging exhibits.",
        link: "https://nationalcowboymuseum.org/"
    },
    {
        name: "Oklahoma Aquarium",
        location: "Jenks",
        photo: "/Oklahoma/images/Oklahoma Aquarium.jpg",
        description: "Dive into marine life at the Oklahoma Aquarium in Jenks. Encounter diverse aquatic species, touch tanks, and explore the underwater tunnel for an immersive experience.",
        link: "https://okaquarium.org/"
    },
    {
        name: "Spiro Mounds Archaeological Center",
        location: "Spiro",
        photo: "/Oklahoma/images/Spiro Mounds Archaeological Center.jpg",
        description: "Explore Native American history at the Spiro Mounds Archaeological Center. Visit the ancient mound site, learn about the Spiro culture, and view artifacts from a pre-Columbian civilization.",
        link: "https://www.okhistory.org/sites/spiromounds.php"
    },
    {
        name: "Beavers Bend State Park",
        location: "Broken Bow",
        photo: "/Oklahoma/images/Beavers Bend State Park.jpg",
        description: "Escape to nature at Beavers Bend State Park in Broken Bow. Enjoy outdoor activities like hiking, fishing, and boating in the scenic setting of the Ouachita Mountains.",
        link: "https://www.travelok.com/state-parks/7346"
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
