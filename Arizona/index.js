const locations = [
    {
        name: 'Grand Canyon National Park',
        photo: '/Arizona/images/Grand Canyon National Park.jpg',
        description: 'The Grand Canyon is one of the world\'s most famous natural wonders, known for its awe-inspiring size and breathtaking vistas. Visitors can explore its rugged beauty through various viewpoints and hiking trails, experiencing the changing colors of the canyon walls as the sun moves across the sky. Its a place of geological wonder and an outdoor enthusiast\'s paradise, offering opportunities for hiking, camping, and river rafting in the heart of Northern Arizona. Be prepared to be captivated by the sheer scale and majesty of this iconic canyon, carved by the mighty Colorado River over millions of years. A visit to the Grand Canyon is an unforgettable journey into the Earth\'s geological history.'
        ,
        location: 'Northern Arizona',
        link: 'https://www.nps.gov/grca/index.htm',
    },
    {
        name: 'Antelope Canyon',
        photo: '/Arizona/images/Antelope Canyon.jpg',
        description: 'Antelope Canyon, a slot canyon near Page, is renowned for its stunning sandstone formations and light beams that create a surreal, picturesque environment. Guided tours offer a unique experience as you walk through narrow passageways and marvel at the interplay of light and shadows on the smooth, flowing rock walls. The striking beauty of the canyon makes it a photographer\'s dream. Its a place of natural artistry, where wind and water have sculpted the stone into breathtaking shapes. A visit to Antelope Canyon is a visual and spiritual journey into the heart of the earth.'
        ,
        location: 'Page, Arizona',
        link: 'https://www.antelopecanyon.com/',
    },
    {
        name: 'Sedona',
        photo: '/Arizona/images/Sedona.jpg',
        description: 'Sedona is a haven for nature lovers and artists, known for its striking red rock formations, scenic hiking trails, and a vibrant arts community. The fiery hues of the rocks against the backdrop of clear blue skies create an enchanting landscape that has drawn artists and visitors for generations. The area is blessed with a variety of natural wonders, including Oak Creek Canyon, Cathedral Rock, and the vortexes that are believed to have special spiritual energy. Sedona offers a harmonious blend of outdoor adventure, artistic inspiration, and a sense of profound serenity that can be felt throughout the town.'
        ,
        location: 'Northern Arizona',
        link: 'https://visitsedona.com/',
    },
    {
        name: 'Horseshoe Bend',
        photo: '/Arizona/images/Horseshoe Bend.jpg',
        description: 'Horseshoe Bend is a picturesque meander of the Colorado River near Page, Arizona. It offers a breathtaking view of the river\'s horseshoe-shaped curve as it flows through the canyon, surrounded by sandstone cliffs that tower 1,000 feet above the water. The panoramic vistas are truly awe-inspiring, especially during sunrise or sunset when the light enhances the colors and contrasts of the landscape. A short hike leads to a viewpoint, where visitors can gaze into the depths of the canyon and appreciate the incredible power of water and time that have shaped this natural wonder.'
        ,
        location: 'Page, Arizona',
        link: 'https://www.horseshoebend.com/',
    },
    {
        name: 'Monument Valley',
        photo: '/Arizona/images/Monument Valley.jpg',
        description: 'Monument Valley, situated within the Navajo Nation, is famous for its iconic buttes and mesas that have appeared in countless Western films. Guided tours provide cultural insights and spectacular views, taking you deep into the heart of the desert landscape. As you explore this sacred land, you\'ll gain a deeper appreciation for the Navajo culture and the striking beauty of the Southwest. The towering sandstone formations against the wide-open desert skies create a visual masterpiece that will stay with you long after your visit. Monument Valley is a place where nature, culture, and cinematic history converge.'
        ,
        location: 'Navajo Nation, Arizona',
        link: 'https://navajonationparks.org/tribal-parks/monument-valley/',
    },
    {
        name: 'Phoenix Desert Botanical Garden',
        photo: '/Arizona/images/Phoenix Desert Botanical Garden.jpg',
        description: 'The Desert Botanical Garden in Phoenix showcases an impressive collection of desert plants from around the world. Its an educational and serene place to explore the beauty of arid landscapes, with a variety of cacti, succulents, and other desert flora on display. The garden offers a peaceful escape from the bustling city, allowing visitors to connect with the natural world and gain a deeper understanding of desert ecosystems. With educational programs, art exhibitions, and beautiful walking paths, the Phoenix Desert Botanical Garden is a place where the arid beauty of the desert comes to life.'
        ,
        location: 'Phoenix, Arizona',
        link: 'https://www.dbg.org/',
    },
    {
        name: 'Petrified Forest National Park',
        photo: '/Arizona/images/Petrified Forest National Park.jpg',
        description: 'Petrified Forest National Park is known for its petrified wood and colorful badlands. Visitors can explore ancient petroglyphs and fossils in this unique desert landscape. The park offers a fascinating journey through time, with evidence of prehistoric life, petrified logs, and eroded rock formations. Its an outdoor classroom where you can learn about the ancient past while hiking among the vibrant hues of the painted desert. The petrified wood found here is a testament to the power of geological processes, transforming fallen trees into magnificent stones. A visit to Petrified Forest National Park is a voyage back in time.'
        ,
        location: 'Northern Arizona',
        link: 'https://www.nps.gov/pefo/index.htm',
    },
    {
        name: 'Tombstone',
        photo: '/Arizona/images/Tombstone.jpg',
        description: 'Tombstone is a historic Wild West town famous for the Gunfight at the O.K. Corral. Visitors can step back in time, watch reenactments, and explore its Western heritage. The town retains its Old West charm, with wooden sidewalks and authentic saloons that transport you to the days of Wyatt Earp and Doc Holliday. You can witness gunfights, visit historic museums, and even explore the famous graveyard where many legendary figures from the Old West rest. Tombstone is a place where history and legend come to life, offering a glimpse into the wild days of the frontier.'
        ,
        location: 'Tombstone, Arizona',
        link: 'https://tombstonechamber.com/',
    },
    {
        name: 'Jerome',
        photo: '/Arizona/images/Jerome.jpg',
        description: 'Jerome is a historic copper mining town turned artist colony, nestled on the side of Cleopatra Hill. It offers art galleries, unique shops, and a rich mining history to explore. The towns unique location on the hillside provides breathtaking views of the Verde Valley below. With its winding streets and historic buildings, Jerome offers a sense of stepping back in time. Visitors can explore art galleries, dine in quaint restaurants, and discover the towns fascinating history. Jerome is a place where creativity, history, and stunning vistas converge, making it a captivating destination in Arizona.'
        ,
        location: 'Jerome, Arizona',
        link: 'https://jeromechamber.com/',
    },
    {
        name: 'Canyon de Chelly National Monument',
        photo: '/Arizona/images/Canyon de Chelly National Monument.jpg',
        description: 'Canyon de Chelly National Monument, located in the Navajo Nation, features ancient ruins, dramatic sandstone cliffs, and cultural significance. Guided tours provide insight into its history and significance, allowing visitors to explore the canyons many wonders. As you hike or drive through the monument, youll encounter stunning views of towering red cliffs and historic dwellings that tell the story of the indigenous people who have inhabited the canyon for centuries. Its a place of natural and cultural significance, where the past comes to life in a breathtaking landscape.'
        ,
        location: 'Navajo Nation, Arizona',
        link: 'https://www.nps.gov/cach/index.htm',
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