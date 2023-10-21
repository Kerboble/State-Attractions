const locations = [
    {
        name: "Sawtooth National Recreation Area",
        photo: "/Idaho/images/Sawtooth National Recreation Area.jpg",
        description: "Sawtooth National Recreation Area is a pristine wilderness with over 700 miles of trails, crystal-clear lakes, and jagged peaks. Visitors can hike, fish, camp, and explore the scenic byways. The area's crown jewel is Redfish Lake, offering boating, swimming, and stunning mountain reflections. Sawtooth NRA is a natural paradise for outdoor enthusiasts and nature lovers.",
        location: "Central Idaho",
        link: "https://www.fs.usda.gov/recarea/sawtooth/recreation/recarea/?recid=5929",
    },
    {
        name: "Yellowstone Bear World",
        photo: "/Idaho/images/Yellowstone Bear World.jpg",
        description: "Yellowstone Bear World is a wildlife park near Rexburg, Idaho, where visitors can observe bears, wolves, bison, and other North American animals in a natural setting. The drive-through experience offers an up-close encounter with these fascinating creatures. It's a place where wildlife enthusiasts can connect with nature and learn about native species.",
        location: "Rexburg, Idaho",
        link: "https://yellowstonebearworld.com/",
    },
    {
        name: "Sun Valley",
        photo: "/Idaho/images/sun valley idaho.jpg",
        description: "Sun Valley is a renowned destination for outdoor recreation, including skiing, hiking, and mountain biking. The area offers world-class ski resorts, picturesque hiking trails, and a vibrant arts scene. Sun Valley's charming village features shops, restaurants, and cultural events. It's a year-round playground for adventurers and those seeking mountain beauty.",
        location: "Sun Valley, Idaho",
        link: "https://www.visitsunvalley.com/",
    },
    {
        name: "Shoshone Falls",
        photo: "/Idaho/images/Shoshone Falls.jpg",
        description: "Shoshone Falls, often called the 'Niagara of the West,' is a majestic waterfall on the Snake River. It's higher than Niagara Falls and offers stunning viewpoints and recreational opportunities. Visitors can hike, picnic, and witness the falls' seasonal beauty. Shoshone Falls is a natural wonder and a peaceful escape in the heart of Idaho.",
        location: "Twin Falls, Idaho",
        link: "https://tfsd.org/shoshone-falls/",
    },
    {
        name: "Craters of the Moon National Monument",
        photo: "/Idaho/images/Craters of the Moon National Monument.jpg",
        description: "Craters of the Moon National Monument is a unique volcanic landscape with lava flows, cinder cones, and caves. Visitors can explore the otherworldly terrain, hike the trails, and discover lava tube caves. The monument offers a glimpse into the Earth's geological history and the resilience of life in extreme environments.",
        location: "Arco, Idaho",
        link: "https://www.nps.gov/crmo/index.htm",
    },
    {
        name: "Coeur d'Alene",
        photo: "/Idaho/images/Coeur d'Alene.jpg",
        description: "Coeur d'Alene is a picturesque city located on the shores of Lake Coeur d'Alene. The city offers a beautiful waterfront, outdoor adventures, and cultural attractions. Visitors can explore the Tubbs Hill Nature Trails, enjoy water sports on the lake, and stroll along the charming downtown area. Coeur d'Alene is a place where natural beauty and urban amenities blend seamlessly.",
        location: "Coeur d'Alene, Idaho",
        link: "https://www.coeurdalene.org/",
    },
    {
        name: "Idaho Potato Museum",
        photo: "/Idaho/images/Idaho Potato Museum.jpg",
        description: "The Idaho Potato Museum, located in the heart of potato country, celebrates the history and significance of the potato. Visitors can explore exhibits on potato farming, view the world's largest potato chip, and even enjoy potato ice cream. The museum is a fun and educational destination for all ages.",
        location: "Blackfoot, Idaho",
        link: "https://idahopotatomuseum.com/",
    },
    {
        name: "Hell's Canyon",
        photo: "/Idaho/images/Hell's Canyon.jpg",
        description: "Hell's Canyon is North America's deepest river gorge, carved by the Snake River. Visitors can take boat tours, go white-water rafting, and enjoy stunning vistas. The canyon offers diverse wildlife, including bighorn sheep and eagles. It's a place where the power of nature is on full display, and adventure beckons around every bend.",
        location: "Western Idaho",
        link: "https://www.fs.usda.gov/recarea/wallowa-whitman/recarea/?recid=52315",
    },
    {
        name: "Idaho Botanical Garden",
        photo: "/Idaho/images/Idaho Botanical Garden.jpg",
        description: "The Idaho Botanical Garden is a serene oasis in Boise, featuring diverse gardens, seasonal plant displays, and educational programs. Visitors can explore themed gardens, enjoy outdoor concerts, and participate in events. The garden is a place of beauty and learning, offering a peaceful escape in the city.",
        location: "Boise, Idaho",
        link: "https://idahobotanicalgarden.org/",
    },
    {
        name: "Idaho's Sawtooth Mountains",
        photo: "/Idaho/images/Idaho's Sawtooth Mountains.jpg",
        description: "Idaho's Sawtooth Mountains are a pristine and rugged wilderness with stunning alpine lakes, jagged peaks, and abundant hiking trails. Visitors can explore areas like Sawtooth Lake and Alice Lake, offering backcountry adventures and breathtaking scenery. The mountains are a destination for backpackers, campers, and those seeking solitude in the wild.",
        location: "Central Idaho",
        link: "https://www.fs.usda.gov/recarea/sawtooth/recreation/hiking/recarea/?recid=57378",
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