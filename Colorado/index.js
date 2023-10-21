const locations = [
    {
        name: "Rocky Mountain National Park",
        photo: "/Colorado/images/Rocky Mountain National Park.jpg",
        description: "Rocky Mountain National Park is a natural wonderland of towering peaks, alpine lakes, and abundant wildlife. Visitors can hike, camp, and drive along Trail Ridge Road, the highest continuous paved road in the U.S. The park offers a chance to connect with the great outdoors and explore the pristine beauty of the Rockies.",
        location: "Estes Park, Colorado",
        link: "https://www.nps.gov/romo/index.htm",
    },
    {
        name: "Garden of the Gods",
        photo: "/Colorado/images/Garden of the Gods.jpg",
        description: "Garden of the Gods is a stunning city park with red rock formations and hiking trails. Visitors can explore the unique sandstone formations, such as Balanced Rock and Kissing Camels. The park provides breathtaking vistas and opportunities for rock climbing and photography. It's a place of natural artistry and outdoor adventure.",
        location: "Colorado Springs, Colorado",
        link: "https://www.gardenofgods.com/",
    },
    {
        name: "Mesa Verde National Park",
        photo: "/Colorado/images/Mesa Verde National Park.jpg",
        description: "Mesa Verde National Park preserves ancient Puebloan cliff dwellings and archaeological sites. Visitors can tour the well-preserved dwellings, such as Cliff Palace and Balcony House, and learn about the history of the ancestral Pueblo people. The park is a journey into the past, offering a glimpse into an ancient civilization's way of life.",
        location: "Cortez, Colorado",
        link: "https://www.nps.gov/meve/index.htm",
    },
    {
        name: "Great Sand Dunes National Park",
        photo: "/Colorado/images/Great Sand Dunes National Park.jpg",
        description: "Great Sand Dunes National Park is home to the tallest sand dunes in North America, set against a backdrop of the Sangre de Cristo Mountains. Visitors can hike on the dunes, sled down their slopes, and wade in Medano Creek. The park is a place of contrasting landscapes, where sand meets mountain in a surreal natural spectacle.",
        location: "Mosca, Colorado",
        link: "https://www.nps.gov/grsa/index.htm",
    },
    {
        name: "Breckenridge",
        photo: "/Colorado/images/Breckenridge.jpg",
        description: "Breckenridge is a historic mountain town known for its world-class skiing, charming downtown, and outdoor activities. Visitors can ski or snowboard at Breckenridge Ski Resort in the winter and explore hiking and biking trails in the summer. The town's Victorian architecture, shops, and restaurants offer a perfect blend of adventure and relaxation.",
        location: "Breckenridge, Colorado",
        link: "https://www.gobreck.com/",
    },
    {
        name: "Royal Gorge Bridge and Park",
        photo: "/Colorado/images/Royal Gorge Bridge and Park.jpg",
        description: "The Royal Gorge Bridge is one of the world's highest suspension bridges, spanning the Arkansas River. Visitors can walk across the bridge, ride an aerial tram, and enjoy stunning views of the gorge. The park offers ziplining, a scenic railway, and other thrilling attractions. It's a place where adventure meets natural beauty in a grand scale.",
        location: "Cañon City, Colorado",
        link: "https://royalgorgebridge.com/",
    },
    {
        name: "Aspen",
        photo: "/Colorado/images/Aspen.jpg",
        description: "Aspen is a renowned mountain resort town, known for its world-class skiing, cultural events, and natural beauty. Visitors can ski in the winter, hike or bike in the summer, and explore the vibrant arts and dining scene year-round. The town's iconic Maroon Bells and White River National Forest offer endless outdoor adventures. Aspen is a place of luxury and outdoor excitement.",
        location: "Aspen, Colorado",
        link: "https://www.aspenchamber.org/",
    },
    {
        name: "Pikes Peak",
        photo: "/Colorado/images/Pikes Peak.jpg",
        description: "Pikes Peak, known as 'America's Mountain,' is one of Colorado's famous Fourteeners. Visitors can drive the scenic Pikes Peak Highway or hike to the summit. The peak offers breathtaking views of the surrounding landscapes and the opportunity to witness 'purple mountain majesties' mentioned in 'America the Beautiful.' Pikes Peak is a place of inspiration and natural grandeur.",
        location: "Cascade, Colorado",
        link: "https://www.pikes-peak.com/",
    },
    {
        name: "Black Canyon of the Gunnison National Park",
        photo: "/Colorado/images/Black Canyon of the Gunnison National Park.jpg",
        description: "Black Canyon of the Gunnison National Park features a dramatic canyon with sheer cliffs and the Gunnison River. Visitors can explore overlooks, hike, and marvel at the geologic history of the area. The park offers a unique and challenging landscape for outdoor enthusiasts and photographers. It's a place where the forces of erosion have carved a stunning masterpiece.",
        location: "Montrose, Colorado",
        link: "https://www.nps.gov/blca/index.htm",
    },
    {
        name: "Denver",
        photo: "/Colorado/images/Denver.jpg",
        description: "Denver, Colorado's capital, is a vibrant urban center with a mix of cultural attractions, shopping, and outdoor adventures. Visitors can explore the Denver Art Museum, attend sporting events, and enjoy the city's food and music scenes. Nearby, the Rocky Mountains offer hiking, skiing, and scenic drives. Denver is a place where city life and natural beauty coexist harmoniously.",
        location: "Denver, Colorado",
        link: "https://www.denver.org/",
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