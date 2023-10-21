locations = [
    {
        name: "Omaha's Henry Doorly Zoo and Aquarium",
        location: "Omaha",
        photo: "/Nebraska/images/Omaha's Henry Doorly Zoo and Aquarium.jpg",
        description: "Explore Omaha's Henry Doorly Zoo and Aquarium, one of the largest in the Midwest. Encounter diverse wildlife, including the Lied Jungle, Desert Dome, and Scott Aquarium.",
        link: "https://www.omahazoo.com/"
    },
    {
        name: "Chimney Rock National Historic Site",
        location: "Bayard",
        photo: "/Nebraska/images/Chimney Rock National Historic Site.jpg",
        description: "Visit Chimney Rock National Historic Site, an iconic landmark on the Oregon Trail. Learn about pioneer history and the significance of this towering natural formation.",
        link: "https://www.chimneyrockpark.com/"
    },
    {
        name: "Strategic Air Command & Aerospace Museum",
        location: "Ashland",
        photo: "/Nebraska/images/Strategic Air Command & Aerospace Museum.jpg",
        description: "Discover the history of aviation and strategic deterrence at the Strategic Air Command & Aerospace Museum. View an impressive collection of aircraft and exhibits.",
        link: "https://sacmuseum.org/"
    },
    {
        name: "Scotts Bluff National Monument",
        location: "Gering",
        photo: "/Nebraska/images/Scotts Bluff National Monument.jpg",
        description: "Explore Scotts Bluff National Monument, a prominent landmark on the Oregon Trail. Hike to the summit for panoramic views and discover the history of westward expansion.",
        link: "https://www.nps.gov/scbl/index.htm"
    },
    {
        name: "Joslyn Art Museum",
        location: "Omaha",
        photo: "/Nebraska/images/Joslyn Art Museum.jpg",
        description: "Visit the Joslyn Art Museum in Omaha. Experience an extensive collection of European, American, and Native American art, along with special exhibitions.",
        link: "https://www.joslyn.org/"
    },
    {
        name: "Pioneer Village",
        location: "Minden",
        photo: "/Nebraska/images/Pioneer Village.jpg",
        description: "Step back in time at Pioneer Village in Minden. Explore historic buildings, antique cars, and an array of artifacts that depict life on the American frontier.",
        link: "https://www.pioneervillage.org/"
    },
    {
        name: "Nebraska State Capitol",
        location: "Lincoln",
        photo: "/Nebraska/images/Nebraska State Capitol.jpg",
        description: "Discover the architectural grandeur of the Nebraska State Capitol in Lincoln. Join guided tours to explore its unique features, art, and learn about the state's government.",
        link: "https://capitol.nebraska.gov/"
    },
    {
        name: "Lake McConaughy",
        location: "Ogallala",
        photo: "/Nebraska/images/Lake McConaughy.jpg",
        description: "Experience the beauty of Lake McConaughy, a large reservoir in western Nebraska. Enjoy boating, fishing, camping, and relaxing on its sandy beaches.",
        link: "https://www.lakemcconaughy.com/"
    },
    {
        name: "Homestead National Monument of America",
        location: "Beatrice",
        photo: "/Nebraska/images/Homestead National Monument of America.jpg",
        description: "Learn about the Homestead Act and pioneers at Homestead National Monument of America. Explore the education center, walking trails, and the Palmer-Epard Cabin.",
        link: "https://www.nps.gov/home/index.htm"
    },
    {
        name: "Sunken Gardens",
        location: "Lincoln",
        photo: "/Nebraska/images/Sunken Gardens.jpg",
        description: "Enjoy the vibrant beauty of Lincoln's Sunken Gardens. This stunning horticultural display features themed gardens, fountains, and a tranquil environment for visitors.",
        link: "https://lincolnsunkengardens.org/"
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