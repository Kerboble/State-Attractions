locations = [
    {
        name: "Sedgwick County Zoo",
        location: "Wichita",
        photo: "/Kansas/images/Sedgwick County Zoo.jpg",
        description: "Visit the Sedgwick County Zoo in Wichita, one of the largest in the Midwest. Explore diverse animal exhibits, including the Downing Gorilla Forest and Penguin Cove.",
        link: "https://scz.org/"
    },
    {
        name: "Tallgrass Prairie National Preserve",
        location: "Strong City",
        photo: "/Kansas/images/Tallgrass Prairie National Preserve.jpg",
        description: "Explore the Tallgrass Prairie National Preserve, a testament to the vast prairies of the Midwest. Hike through native grasses and learn about prairie conservation.",
        link: "https://www.nps.gov/tapr/index.htm"
    },
    {
        name: "Boot Hill Museum",
        location: "Dodge City",
        photo: "/Kansas/images/Boot Hill Museum.jpg",
        description: "Step into the Wild West at the Boot Hill Museum in Dodge City. Discover the history of gunfighters, cowboys, and the town's role in frontier life.",
        link: "https://www.boothill.org/"
    },
    {
        name: "Strataca - Kansas Underground Salt Museum",
        location: "Hutchinson",
        photo: "/Kansas/images/Kansas Underground Salt Museum.jpg",
        description: "Descend into Strataca, the Kansas Underground Salt Museum in Hutchinson. Explore an active salt mine, learn about mining history, and experience unique underground exhibits.",
        link: "https://underkansas.org/"
    },
    {
        name: "Eisenhower Presidential Library, Museum, and Boyhood Home",
        location: "Abilene",
        photo: "/Kansas/images/Eisenhower Presidential Library, Museum, and Boyhood Home.jpg",
        description: "Visit the Eisenhower Presidential Library, Museum, and Boyhood Home in Abilene. Learn about the life and legacy of President Dwight D. Eisenhower.",
        link: "https://www.eisenhowerlibrary.gov/"
    },
    {
        name: "Monument Rocks",
        location: "Gove County",
        photo: "/Kansas/images/Monument Rocks.jpg",
        description: "Explore the stunning Monument Rocks, a natural wonder in western Kansas. These chalk formations, also known as the Chalk Pyramids, are a geological marvel.",
        link: "https://www.nps.gov/nr/travel/scenic_byways/Smoky_Valley_Chalk_Pyramids.html"
    },
    {
        name: "Kansas Cosmosphere and Space Center",
        location: "Hutchinson",
        photo: "/Kansas/images/Kansas Cosmosphere and Space Center.jpg",
        description: "Discover space exploration at the Kansas Cosmosphere and Space Center in Hutchinson. Explore space artifacts, attend planetarium shows, and learn about space history.",
        link: "https://cosmo.org/"
    },
    {
        name: "Old Cowtown Museum",
        location: "Wichita",
        photo: "/Kansas/images/Old Cowtown Museum.jpg",
        description: "Step into the past at the Old Cowtown Museum in Wichita. Experience life in a 19th-century cattle town through historic buildings, reenactments, and educational programs.",
        link: "https://www.oldcowtown.org/"
    },
    {
        name: "Konza Prairie Biological Station",
        location: "Manhattan",
        photo: "/Kansas/images/Konza Prairie Biological Station.jpg",
        description: "Explore the Konza Prairie Biological Station near Manhattan. Hike the tallgrass prairie trails, learn about ecological research, and appreciate native Kansas landscapes.",
        link: "https://kpbs.konza.k-state.edu/"
    },
    {
        name: "Kansas Museum of History",
        location: "Topeka",
        photo: "/Kansas/images/Kansas Museum of History.jpg",
        description: "Visit the Kansas Museum of History in Topeka. Discover the state's past through exhibits, artifacts, and interactive displays that showcase its cultural and historical heritage.",
        link: "https://www.kshs.org/kmoh"
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
