locations = [
    {
        name: "Mall of America",
        location: "Bloomington",
        photo: "/Minnesota/images/Mall of America.jpg",
        description: "Explore the massive Mall of America in Bloomington, the largest shopping and entertainment complex in the United States. Shop, dine, and enjoy attractions like Nickelodeon Universe and SEA LIFE Minnesota.",
        link: "https://www.mallofamerica.com/"
    },
    {
        name: "Boundary Waters Canoe Area Wilderness",
        location: "Northeastern Minnesota",
        photo: "/Minnesota/images/Boundary Waters Canoe Area Wilderness.jpg",
        description: "Experience the pristine wilderness of the Boundary Waters Canoe Area. Canoe, camp, and hike through a vast network of lakes and forests in northern Minnesota.",
        link: "https://www.fs.usda.gov/detail/superior/specialplaces/?cid=stelprdb5145206"
    },
    {
        name: "Minnehaha Park",
        location: "Minneapolis",
        photo: "/Minnesota/images/Minnehaha Park.jpg",
        description: "Visit the scenic Minnehaha Park in Minneapolis. Discover a beautiful waterfall, walking trails, and the historic Longfellow House, all within the city limits.",
        link: "https://www.minneapolisparks.org/parks__destinations/parks__lakes/minnehaha_regional_park/"
    },
    {
        name: "Voyageurs National Park",
        location: "International Falls",
        photo: "/Minnesota/images/Voyageurs National Park.jpg",
        description: "Explore Voyageurs National Park in northern Minnesota, known for its pristine lakes, water-based recreation, and stunning night skies. Discover a unique water-based wilderness.",
        link: "https://www.nps.gov/voya/index.htm"
    },
    {
        name: "Science Museum of Minnesota",
        location: "St. Paul",
        photo: "/Minnesota/images/Science Museum of Minnesota.png",
        description: "Visit the Science Museum of Minnesota in St. Paul. Explore hands-on exhibits, engage with science education, and discover the Omnitheater for immersive films.",
        link: "https://new.smm.org/"
    },
    {
        name: "Split Rock Lighthouse",
        location: "Two Harbors",
        photo: "/Minnesota/images/Split Rock Lighthouse.jpg",
        description: "Admire the iconic Split Rock Lighthouse on Lake Superior's North Shore. Explore the historic lighthouse, visitor center, and enjoy breathtaking lake views.",
        link: "https://www.mnhs.org/splitrock"
    },
    {
        name: "The Guthrie Theater",
        location: "Minneapolis",
        photo: "/Minnesota/images/The Guthrie Theater.jpg",
        description: "Experience world-class theater at The Guthrie Theater in Minneapolis. Enjoy classic and contemporary performances in a striking architectural setting along the Mississippi River.",
        link: "https://www.guthrietheater.org/"
    },
    {
        name: "Lake Minnetonka",
        location: "Minneapolis-St. Paul Metropolitan Area",
        photo: "/Minnesota/images/Lake Minnetonka.jpg",
        description: "Enjoy the recreational opportunities of Lake Minnetonka, a large and picturesque lake in the Minneapolis-St. Paul metropolitan area. Boating, fishing, and lakeside dining are popular here.",
        link: "https://www.lmcd.org/"
    },
    {
        name: "Como Park Zoo & Conservatory",
        location: "St. Paul",
        photo: "/Minnesota/images/Como Park Zoo & Conservatory.jpg",
        description: "Visit Como Park Zoo & Conservatory in St. Paul. Explore the zoo's animal exhibits and the lush conservatory featuring a wide variety of plants from around the world.",
        link: "https://comozooconservatory.org/"
    },
    {
        name: "The Minneapolis Institute of Art",
        location: "Minneapolis",
        photo: "/Minnesota/images/The Minneapolis Institute of Art.jpg",
        description: "Discover the Minneapolis Institute of Art, home to a vast and diverse collection of art spanning cultures and time periods. Explore exhibitions, galleries, and special events.",
        link: "https://new.artsmia.org/"
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