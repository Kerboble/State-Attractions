const locations= [
    {
        name: "Glacier National Park",
        photo: "/Montana/images/Glacier National Park.jpg",
        description: "Glacier National Park is a pristine wilderness with stunning alpine scenery and glaciers. Visitors can hike on numerous trails, drive the scenic Going-to-the-Sun Road, and spot wildlife like grizzly bears. The park offers a unique opportunity to experience rugged beauty and outdoor adventures in the Northern Rockies.",
        location: "West Glacier, Montana",
        link: "https://www.nps.gov/glac/index.htm",
    },
    {
        name: "Yellowstone National Park",
        photo: "/Montana/images/Yellowstone National Park.jpg",
        description: "Yellowstone National Park, extending into Montana, is famous for its geothermal wonders, wildlife, and iconic Old Faithful geyser. Visitors can explore geysers, hot springs, and watch for bison, wolves, and bears. The park is a unique natural laboratory and an adventure in the heart of the American West.",
        location: "Gardiner, Montana",
        link: "https://www.nps.gov/yell/index.htm",
    },
    {
        name: "Big Sky Resort",
        photo: "/Montana/images/Big Sky Resort.jpg",
        description: "Big Sky Resort is a premier destination for skiing, snowboarding, and outdoor activities. In winter, visitors can enjoy world-class slopes, while summer offers hiking and mountain biking. The resort provides a range of accommodations and dining options amidst the stunning Gallatin Range. It's a place of adventure and relaxation year-round.",
        location: "Big Sky, Montana",
        link: "https://bigskyresort.com/",
    },
    {
        name: "Lewis and Clark Caverns State Park",
        photo: "/Montana/images/Lewis and Clark Caverns State Park.jpg",
        description: "Lewis and Clark Caverns State Park features an underground wonderland of limestone caves. Visitors can take guided tours and explore the stunning formations and underground chambers. The park also offers hiking, picnicking, and camping, making it a unique natural and recreational attraction.",
        location: "Whitehall, Montana",
        link: "http://stateparks.mt.gov/lewis-and-clark-caverns/",
    },
    {
        name: "Little Bighorn Battlefield National Monument",
        photo: "/Montana/images/Little Bighorn Battlefield National Monument.jpg",
        description: "Little Bighorn Battlefield National Monument commemorates the Battle of Little Bighorn, a significant event in American history. Visitors can explore the battlefield, learn about the battle's history, and pay respects at the memorials. The monument provides a glimpse into the past and the clash of cultures on the western frontier.",
        location: "Crow Agency, Montana",
        link: "https://www.nps.gov/libi/index.htm",
    },
    {
        name: "Flathead Lake",
        photo: "/Montana/images/Flathead Lake.jpg",
        description: "Flathead Lake is the largest natural freshwater lake in the western U.S. Visitors can enjoy boating, fishing, and swimming in its pristine waters. The lake's scenic beauty, framed by the Mission Mountains, provides opportunities for relaxation and outdoor recreation. It's a place of tranquility and water-based adventures.",
        location: "Polson, Montana",
        link: "https://www.flatheadlake.com/",
    },
    {
        name: "Custer Gallatin National Forest",
        photo: "/Montana/images/Custer Gallatin National Forest.jpg",
        description: "Custer Gallatin National Forest encompasses vast wilderness, including mountain ranges, forests, and wild rivers. Visitors can hike, camp, fish, and view wildlife. The forest offers outdoor exploration in various ecosystems and provides opportunities for solitude and natural discovery.",
        location: "Bozeman, Montana",
        link: "https://www.fs.usda.gov/custergallatin/",
    },
    {
        name: "Museum of the Rockies",
        photo: "/Montana/images/Museum of the Rockies.jpg",
        description: "The Museum of the Rockies is known for its dinosaur exhibits and paleontological collections. Visitors can explore the region's prehistoric past, including the world-renowned dinosaur fossils. The museum also features cultural and historical exhibits, making it an educational and fascinating destination.",
        location: "Bozeman, Montana",
        link: "https://www.museumoftherockies.org/",
    },
    {
        name: "Garnet Ghost Town",
        photo: "/Montana/images/Garnet Ghost Town.jpg",
        description: "Garnet Ghost Town is a well-preserved mining town from the late 1800s. Visitors can explore the historic buildings and learn about Montana's gold rush history. The ghost town offers a glimpse into the past and a taste of the Old West in a mountain setting.",
        location: "Missoula, Montana",
        link: "https://garnetghosttown.net/",
    },
    {
        name: "Whitefish Mountain Resort",
        photo: "/Montana/images/Whitefish Mountain Resort.jpg",
        description: "Whitefish Mountain Resort is a year-round destination for outdoor enthusiasts. In winter, it offers skiing and snowboarding, while summer brings hiking, mountain biking, and zip-lining. The resort features stunning views of Glacier National Park and the Flathead Valley. It's a place of alpine adventures and natural beauty.",
        location: "Whitefish, Montana",
        link: "https://skiwhitefish.com/",
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