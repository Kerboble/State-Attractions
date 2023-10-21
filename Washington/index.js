const locations = [
    {
        name: "Mount Rainier National Park",
        photo: "/Washington/images/Mount Rainier National Park.jpg",
        description: "Mount Rainier National Park is home to the iconic Mount Rainier, an active stratovolcano and the highest mountain in the state. The park offers breathtaking vistas, extensive hiking trails, and wildflower-filled meadows. Visitors can explore glaciers, waterfalls, and pristine alpine scenery, with opportunities for mountaineering and wildlife viewing. Mount Rainier's beauty and diverse landscapes make it a paradise for nature enthusiasts and adventurers.",
        location: "Western Washington",
        link: "https://www.nps.gov/mora/index.htm",
    },
    {
        name: "Olympic National Park",
        photo: "/Washington/images/Olympic National Park.jpg",
        description: "Olympic National Park is a UNESCO World Heritage Site renowned for its diverse ecosystems. Visitors can explore temperate rainforests, rugged coastline, and glaciated mountains all in one park. The Hoh Rainforest, Hurricane Ridge, and the beaches of the Pacific coast are some of the park's highlights. It's a place of extraordinary biodiversity, offering hiking, camping, and the chance to witness nature's wonders.",
        location: "Western Washington",
        link: "https://www.nps.gov/olym/index.htm",
    },
    {
        name: "Seattle",
        photo: "/Washington/images/Seattle.jpg",
        description: "Seattle, Washington's largest city, is a vibrant cultural hub nestled between Puget Sound and the Cascade Mountains. The city offers iconic attractions like the Space Needle, Pike Place Market, and the Museum of Pop Culture. With a rich music scene, diverse cuisine, and stunning waterfront views, Seattle is a dynamic urban destination that harmoniously blends modernity with nature.",
        location: "Seattle, Washington",
        link: "https://www.visitseattle.org/",
    },
    {
        name: "San Juan Islands",
        photo: "/Washington/images/San Juan Islands.jpg",
        description: "The San Juan Islands are a picturesque archipelago in the Salish Sea, known for their scenic beauty, outdoor activities, and abundant wildlife. Visitors can explore the islands' charming villages, hike through forests, go whale watching, and enjoy outdoor adventures like kayaking and cycling. It's a serene and natural escape in the heart of the Pacific Northwest.",
        location: "San Juan Islands, Washington",
        link: "https://www.visitsanjuans.com/",
    },
    {
        name: "North Cascades National Park",
        photo: "/Washington/images/North Cascades National Park.jpg",
        description: "North Cascades National Park is a wilderness gem, boasting rugged mountains, pristine lakes, and glaciers. The park is a paradise for backpackers, hikers, and outdoor enthusiasts. With over 300 glaciers, it's often called the 'American Alps.' The park offers stunning alpine vistas, cascading waterfalls, and unparalleled opportunities for adventure. North Cascades National Park is a place of solitude and natural grandeur.",
        location: "Northern Washington",
        link: "https://www.nps.gov/noca/index.htm",
    },
    {
        name: "Leavenworth",
        photo: "/Washington/images/Leavenworth.jpg",
        description: "Leavenworth is a charming Bavarian-style village tucked in the Cascade Mountains. The town is known for its festive atmosphere, outdoor recreation, and cultural events. Visitors can explore the village's unique shops, savor German cuisine, and participate in seasonal celebrations. Leavenworth offers a delightful blend of old-world charm and Pacific Northwest beauty.",
        location: "Leavenworth, Washington",
        link: "https://leavenworth.org/",
    },
    {
        name: "Mount St. Helens National Volcanic Monument",
        photo: "/Washington/images/Mount St. Helens National Volcanic Monument.jpg",
        description: "Mount St. Helens National Volcanic Monument is a living laboratory of volcanic and ecological processes. Visitors can witness the effects of the 1980 eruption, explore lava tubes, and hike through landscapes shaped by volcanic activity. The monument provides a unique opportunity to learn about the power of nature and the resilience of life in the aftermath of destruction.",
        location: "Southwestern Washington",
        link: "https://www.fs.usda.gov/recarea/giffordpinchot/recarea/?recid=31168",
    },
    {
        name: "Spokane",
        photo: "/Washington/images/Spokane.jpg",
        description: "Spokane is Eastern Washington's largest city, known for its natural beauty and cultural attractions. The city offers the Spokane River Centennial Trail, Riverfront Park, and the Northwest Museum of Arts and Culture. Spokane is a place of outdoor recreation, art, and history, where visitors can enjoy urban amenities alongside scenic wonders.",
        location: "Spokane, Washington",
        link: "https://www.visitspokane.com/",
    },
    {
        name: "Mount Baker-Snoqualmie National Forest",
        photo: "/Washington/images/Mount Baker-Snoqualmie National Forest.jpg",
        description: "Mount Baker-Snoqualmie National Forest encompasses a diverse landscape, from alpine meadows to temperate rainforests. Visitors can hike, camp, and enjoy outdoor activities throughout the forest. Iconic attractions include the Artist Point viewpoint and the stunning Heather Meadows. The forest offers year-round opportunities for adventure and exploration in the natural beauty of Washington.",
        location: "Western Washington",
        link: "https://www.fs.usda.gov/mbs/",
    },
    {
        name: "Palouse Falls State Park",
        photo: "/Washington/images/Palouse Falls State Park.jpg",
        description: "Palouse Falls State Park is home to one of Washington's most iconic waterfalls. The park offers hiking trails and viewpoints that provide stunning vistas of the falls and the unique landscape of the Palouse region. It's a place of geological wonder and natural beauty, perfect for photographers and outdoor enthusiasts.",
        location: "Eastern Washington",
        link: "https://parks.state.wa.us/560/Palouse-Falls",
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