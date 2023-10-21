const locations = [
    {
        name: "Yellowstone National Park",
        photo: "/Wyoming/images/Yellowstone National Park.jpg",
        description: "Yellowstone National Park, primarily in Wyoming, is famous for geothermal features, wildlife, and stunning landscapes. Visitors can witness geysers, hot springs, and observe bison, elk, and bears. The park's diverse ecosystems offer a captivating natural experience in the American West.",
        location: "Gardiner, Montana",
        link: "https://www.nps.gov/yell/index.htm",
    },
    {
        name: "Grand Teton National Park",
        photo: "/Wyoming/images/Grand Teton National Park.jpg",
        description: "Grand Teton National Park, located in northwestern Wyoming, features the iconic Teton Range and pristine lakes. Visitors can hike, camp, and enjoy water activities on Jenny Lake. The park provides a striking mountain backdrop for outdoor adventures and breathtaking scenery.",
        location: "Moose, Wyoming",
        link: "https://www.nps.gov/grte/index.htm",
    },
    {
        name: "Devils Tower National Monument",
        photo: "/Wyoming/images/Devils Tower National Monument.jpg",
        description: "Devils Tower National Monument is a striking geological formation in northeastern Wyoming. Visitors can hike around the tower's base and witness unique rock columns. The monument is a sacred site for several Native American tribes and an intriguing natural wonder.",
        location: "Devils Tower, Wyoming",
        link: "https://www.nps.gov/deto/index.htm",
    },
    {
        name: "Buffalo Bill Center of the West",
        photo: "/Wyoming/images/Buffalo Bill Center of the West.jpg",
        description: "The Buffalo Bill Center of the West in Cody is a complex of museums dedicated to the American West. Visitors can explore exhibits on art, history, and firearms, as well as the Buffalo Bill Museum. The center offers a comprehensive look at the western frontier's heritage and culture.",
        location: "Cody, Wyoming",
        link: "https://centerofthewest.org/",
    },
    {
        name: "Hot Springs State Park",
        photo: "/Wyoming/images/Hot Springs State Park.jpg",
        description: "Hot Springs State Park in Thermopolis is known for its thermal mineral waters and unique terraces. Visitors can soak in the state bathhouse, view the bison herd, and explore the Rainbow Terraces. The park offers relaxation and geological fascination in a scenic setting.",
        location: "Thermopolis, Wyoming",
        link: "https://wyoparks.wyo.gov/index.php/places-to-go/hot-springs",
    },
    {
        name: "Jackson Hole",
        photo: "/Wyoming/images/Jackson Hole.jpg",
        description: "Jackson Hole is a charming valley surrounded by the Teton Range and Gros Ventre Mountains. Visitors can explore the town of Jackson, ski at Jackson Hole Mountain Resort, and enjoy outdoor activities. The valley is known for its natural beauty and a gateway to the national parks.",
        location: "Jackson, Wyoming",
        link: "https://www.jacksonholechamber.com/",
    },
    {
        name: "Fossil Butte National Monument",
        photo: "/Wyoming/images/Fossil Butte National Monument.jpg",
        description: "Fossil Butte National Monument is a paleontological treasure in southwestern Wyoming. Visitors can view fossils of ancient fish, plants, and reptiles in well-preserved layers. The monument offers a journey into the prehistoric past and a unique window into Earth's history.",
        location: "Kemmerer, Wyoming",
        link: "https://www.nps.gov/fobu/index.htm",
    },
    {
        name: "Wyoming Dinosaur Center",
        photo: "/Wyoming/images/Wyoming Dinosaur Center.jpg",
        description: "The Wyoming Dinosaur Center in Thermopolis is a museum and active dig site. Visitors can view dinosaur fossils, take guided tours, and participate in the dig experience. The center is a hub of paleontological discovery and an educational attraction for dinosaur enthusiasts.",
        location: "Thermopolis, Wyoming",
        link: "https://wyomingdinosaurcenter.org/",
    },
    {
        name: "Medicine Wheel/Medicine Mountain National Historic Landmark",
        photo: "/Wyoming/images/Medicine Mountain National Historic Landmark.jpg",
        description: "Medicine Wheel/Medicine Mountain National Historic Landmark in the Bighorn Mountains features a sacred Native American site with a stone wheel. Visitors can hike to the landmark and learn about its cultural significance. The site offers a spiritual and historical connection to indigenous traditions.",
        location: "Lovell, Wyoming",
        link: "https://www.fs.usda.gov/recarea/bighorn/recarea/?recid=30902",
    },
    {
        name: "Grand Targhee Resort",
        photo: "/Wyoming/images/Grand Targhee Resort.jpg",
        description: "Grand Targhee Resort is a year-round mountain destination for outdoor activities. In winter, it offers skiing and snowboarding, while summer brings hiking and music festivals. The resort is known for its stunning views of the Teton Range and a laid-back mountain atmosphere. It's a place of alpine adventures and relaxation.",
        location: "Alta, Wyoming",
        link: "https://www.grandtarghee.com/",
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