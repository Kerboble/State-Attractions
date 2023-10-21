const locations = [
    {
        name: "Crater Lake National Park",
        photo: "/Oregon/images/Crater Lake National Park.jpg",
        description: "Crater Lake is a stunning natural wonder, known for its deep blue waters and the caldera of Mount Mazama. It offers hiking trails, scenic drives, and boat tours, allowing visitors to immerse themselves in the sheer beauty and tranquility of the lake. Surrounded by old-growth forests, this pristine lake is one of the clearest in the world, offering captivating reflections of the surrounding cliffs. Crater Lake National Park is a destination for outdoor enthusiasts, photographers, and anyone seeking the serenity of a remarkable natural masterpiece.",
        location: "Southern Oregon",
        link: "https://www.nps.gov/crla/index.htm",
    },
    {
        name: "Columbia River Gorge",
        photo: "/Oregon/images/Columbia River Gorge.jpg",
        description: "The Columbia River Gorge is a magnificent river canyon with countless waterfalls, lush greenery, and hiking opportunities. It offers the iconic Multnomah Falls, scenic drives along the Historic Columbia River Highway, and access to various outdoor activities. The gorge is a place where nature showcases its power and beauty, carving a dramatic landscape that draws visitors from around the world.",
        location: "Northern Oregon",
        link: "https://www.fs.usda.gov/crgnsa/",
    },
    {
        name: "Portland",
        photo: "/Oregon/images/Portland.jpg",
        description: "Portland is Oregon's largest city, known for its vibrant arts scene, diverse neighborhoods, and a unique blend of urban and natural environments. Visitors can explore the city's many parks, gardens, and cultural attractions, including the Portland Art Museum and the Oregon Zoo. The city is also famous for its craft breweries and delicious food scene, offering a wide range of culinary experiences. With its quirky charm and beautiful landscapes, Portland is a city that combines urban vitality with a love for the outdoors.",
        location: "Portland, Oregon",
        link: "https://www.travelportland.com/",
    },
    {
        name: "Mount Hood",
        photo: "/Oregon/images/Mount Hood.jpg",
        description: "Mount Hood is the highest peak in Oregon and a year-round playground for outdoor enthusiasts. It offers skiing and snowboarding in the winter and hiking, mountain biking, and camping in the summer. The Timberline Lodge, a historic mountain resort, provides a cozy base for exploration. With its iconic profile and picturesque surroundings, Mount Hood is a symbol of the Pacific Northwest's natural beauty.",
        location: "Northern Oregon",
        link: "https://www.skihood.com/",
    },
    {
        name: "Oregon Coast",
        photo: "/Oregon/images/Oregon Coast.jpg",
        description: "The Oregon Coast is a stunning stretch of coastline with picturesque beaches, rugged cliffs, and charming coastal towns. It offers outdoor activities like hiking, tidepooling, and whale watching. The coast is home to iconic landmarks such as Haystack Rock and Cape Perpetua, where visitors can explore tidepools, lush forests, and tide pools. The coastal towns, including Cannon Beach and Newport, provide opportunities to enjoy fresh seafood, shop for local art, and experience the region's maritime culture. The Oregon Coast is a place where the beauty of the sea meets the charm of seaside communities, creating a perfect destination for relaxation and exploration.",
        location: "Oregon Coast",
        link: "https://visittheoregoncoast.com/",
    },
    {
        name: "Smith Rock State Park",
        photo: "/Oregon/images/Smith Rock State Park.jpg",
        description: "Smith Rock State Park is a rock climbing mecca with towering volcanic rock formations and hiking trails. The park offers stunning views of the Crooked River, perfect for outdoor enthusiasts and climbers. It's a place where the desert landscape meets adrenaline-pumping adventure.",
        location: "Central Oregon",
        link: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=36",
    },
    {
        name: "Oregon Caves National Monument",
        photo: "/Oregon/images/Oregon Caves National Monument.jpg",
        description: "Oregon Caves National Monument, hidden within the Siskiyou Mountains, is a subterranean wonderland of marble caves. Visitors can take guided tours to explore these unique geological formations, from the stalactites and stalagmites to the delicate helictites that seem to defy gravity. The monument offers a glimpse into the mysterious world below the Earth's surface, where water and time have sculpted intricate passageways. It's an opportunity to discover the underground beauty of Oregon, learn about cave ecology, and witness the silent wonders of the dark world beneath us.",
        location: "Cave Junction, Oregon",
        link: "https://www.nps.gov/orca/index.htm",
    },
    {
        name: "Oregon Dunes National Recreation Area",
        photo: "/Oregon/images/Oregon Dunes National Recreation Area.jpg",
        description: "The Oregon Dunes National Recreation Area is a playground of shifting sand dunes, where visitors can go dune buggy riding, hiking, and wildlife watching. It offers a unique coastal ecosystem with dunes towering up to 500 feet, creating a surreal landscape. The recreation area is home to diverse plant and animal species, making it a fascinating destination for nature lovers and adventure seekers.",
        location: "Oregon Coast",
        link: "https://www.fs.usda.gov/recarea/siuslaw/recarea/?recid=42465",
    },
    {
        name: "Deschutes National Forest",
        photo: "/Oregon/images/Deschutes National Forest.jpg",
        description: "Deschutes National Forest is a vast natural playground in Central Oregon, offering a wide range of outdoor activities. Visitors can enjoy hiking, mountain biking, fishing, and winter sports. The forest is home to the pristine Cascade Lakes, including Sparks Lake and Elk Lake, known for their stunning mountain reflections. It's a place where natural beauty and outdoor adventures come together in a stunning alpine setting.",
        location: "Central Oregon",
        link: "https://www.fs.usda.gov/deschutes/",
    },
    {
        name: "Powell's City of Books",
        photo: "/Oregon/images/Powell's City of Books.jpg",
        description: "Powell's City of Books in Portland is one of the world's largest and most famous independent bookstores. It offers a vast collection of new and used books, rare editions, and a labyrinthine layout. Visitors can spend hours exploring its many rooms and discovering literary treasures. Powell's is a paradise for book lovers and a place where the written word takes center stage.",
        location: "Portland, Oregon",
        link: "https://www.powells.com/",
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