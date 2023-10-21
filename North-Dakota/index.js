 const locations = [
    {
        name: "Theodore Roosevelt National Park",
        location: "Medora",
        photo: "/North-Dakota/images/Theodore Roosevelt National Park.jpg",
        description: "Explore Theodore Roosevelt National Park, known for its striking badlands. Hike the trails, view wildlife, and appreciate the natural beauty that inspired President Theodore Roosevelt.",
        link: "https://www.nps.gov/thro/index.htm"
    },
    {
        name: "International Peace Garden",
        location: "Dunseith",
        photo: "/North-Dakota/images/International Peace Garden.jpg",
        description: "Visit the International Peace Garden on the U.S.-Canada border. Discover beautiful gardens, the Peace Chapel, and the symbolic Peace Tower, representing international friendship.",
        link: "https://www.peacegarden.com/"
    },
    {
        name: "Fort Abraham Lincoln State Park",
        location: "Mandan",
        photo: "/North-Dakota/images/Fort Abraham Lincoln State Park.jpg",
        description: "Step into history at Fort Abraham Lincoln State Park. Explore reconstructed military buildings, including General Custer's home, and learn about the frontier military life.",
        link: "https://www.parkrec.nd.gov/fort-abraham-lincoln"
    },
    {
        name: "Knife River Indian Villages National Historic Site",
        location: "Stanton",
        photo: "/North-Dakota/images/Knife River Indian Villages National Historic Site.jpg",
        description: "Learn about Native American history at Knife River Indian Villages National Historic Site. Explore earthlodge ruins and discover the culture of the Hidatsa and Mandan tribes.",
        link: "https://www.nps.gov/knri/index.htm"
    },
    {
        name: "North Dakota Heritage Center & State Museum",
        location: "Bismarck",
        photo: "/North-Dakota/images/North Dakota Heritage Center & State Museum.jpg",
        description: "Visit the North Dakota Heritage Center & State Museum in Bismarck. Explore the state's history, culture, and paleontology through engaging exhibits and artifacts.",
        link: "https://statemuseum.nd.gov/"
    },
    {
        name: "Maah Daah Hey Trail",
        location: "Western North Dakota",
        photo: "/North-Dakota/images/Maah Daah Hey Trail.jpg",
        description: "Hike or bike the Maah Daah Hey Trail, a challenging adventure through North Dakota's badlands. Enjoy scenic beauty and the opportunity for outdoor exploration.",
        link: "https://www.mdhta.com/"
    },
    {
        name: "Red River Zoo",
        location: "Fargo",
        photo: "/North-Dakota/images/Red River Zoo.jpg",
        description: "Visit the Red River Zoo in Fargo. Discover a diverse collection of animals and engage in conservation efforts while exploring themed exhibits and habitats.",
        link: "https://redriverzoo.org/"
    },
    {
        name: "Fort Union Trading Post National Historic Site",
        location: "Williston",
        photo: "/North-Dakota/images/Fort Union Trading Post National Historic Site.jpg",
        description: "Explore the history of the fur trade at Fort Union Trading Post National Historic Site. Visit the reconstructed fort and learn about its role in early American commerce.",
        link: "https://www.nps.gov/fous/index.htm"
    },
    {
        name: "Plains Art Museum",
        location: "Fargo",
        photo: "/North-Dakota/images/Plains Art Museum.jpg",
        description: "Experience art and culture at the Plains Art Museum in Fargo. View contemporary art exhibits, participate in workshops, and engage with creative expressions.",
        link: "https://plainsart.org/"
    },
    {
        name: "Lake Sakakawea",
        location: "Western North Dakota",
        photo: "/North-Dakota/images/Lake Sakakawea.jpg",
        description: "Enjoy outdoor recreation at Lake Sakakawea, a vast reservoir on the Missouri River. Fishing, boating, camping, and scenic vistas await in this natural playground.",
        link: "https://www.lakesakakawea.com/"
    }
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
        ${location.description}
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

