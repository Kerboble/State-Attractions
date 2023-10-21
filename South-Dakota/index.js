const locations = [
    {
        name: "Mount Rushmore National Memorial",
        location: "Keystone",
        photo: "/South-Dakota/images/Mount Rushmore National Memorial.jpg",
        description: "Visit the iconic Mount Rushmore National Memorial featuring the carved faces of Presidents Washington, Jefferson, Roosevelt, and Lincoln. Explore the Avenue of Flags and the Sculptor's Studio.",
        link: "https://www.nps.gov/moru/index.htm"
    },
    {
        name: "Badlands National Park",
        location: "Interior",
        photo: "/South-Dakota/images/Badlands National Park.jpg",
        description: "Discover the surreal landscapes of Badlands National Park. Hike the trails, spot bison, and explore the striking rock formations and canyons in this unique wilderness.",
        link: "https://www.nps.gov/badl/index.htm"
    },
    {
        name: "Custer State Park",
        location: "Custer",
        photo: "/South-Dakota/images/Custer.jpg",
        description: "Experience the natural beauty of Custer State Park. Drive the scenic Needles Highway, witness the annual buffalo roundup, and enjoy outdoor activities in the Black Hills.",
        link: "https://gfp.sd.gov/parks/detail/custer-state-park/"
    },
    {
        name: "Wind Cave National Park",
        location: "Hot Springs",
        photo: "/South-Dakota/images/Wind Cave National Park.jpg",
        description: "Explore Wind Cave National Park, known for its unique boxwork formations. Take guided cave tours, hike the park's trails, and observe wildlife in the mixed-grass prairie.",
        link: "https://www.nps.gov/wica/index.htm"
    },
    {
        name: "The Mammoth Site",
        location: "Hot Springs",
        photo: "/South-Dakota/images/The Mammoth Site.jpg",
        description: "Step back in time at The Mammoth Site in Hot Springs. Discover a world-renowned fossil site with the remains of over 60 mammoths and other Ice Age creatures.",
        link: "https://www.mammothsite.org/"
    },
    {
        name: "Crazy Horse Memorial",
        location: "Crazy Horse",
        photo: "/South-Dakota/images/Crazy Horse Memorial.jpg",
        description: "Visit the ambitious Crazy Horse Memorial, a work in progress honoring the Lakota leader. Learn about Native American culture, history, and the ongoing carving of this monumental sculpture.",
        link: "https://crazyhorsememorial.org/"
    },
    {
        name: "Jewel Cave National Monument",
        location: "Custer",
        photo: "/South-Dakota/images/Jewel Cave National Monument.jpg",
        description: "Explore Jewel Cave National Monument, home to one of the world's longest cave systems. Join guided cave tours to see its exquisite calcite crystals and unique underground formations.",
        link: "https://www.nps.gov/jeca/index.htm"
    },
    {
        name: "Deadwood",
        location: "Deadwood",
        photo: "/South-Dakota/images/Deadwood.jpg",
        description: "Immerse in the Wild West history of Deadwood. Walk its historic streets, visit saloons, and learn about figures like Wild Bill Hickok and Calamity Jane at local museums.",
        link: "https://www.deadwood.com/"
    },
    {
        name: "Dinosaur Park",
        location: "Rapid City",
        photo: "/South-Dakota/images/Dinosaur Park.jpg",
        description: "Roam among life-sized dinosaur sculptures at Dinosaur Park in Rapid City. Enjoy panoramic views of the city while discovering these prehistoric creatures.",
        link: "https://www.visitrapidcity.com/dinosaur-park"
    },
    {
        name: "Spearfish Canyon",
        location: "Spearfish",
        photo: "/South-Dakota/images/Spearfish Canyon.jpg",
        description: "Drive through the picturesque Spearfish Canyon and marvel at its waterfalls, hiking trails, and vibrant foliage. It's a natural wonderland in the northern Black Hills.",
        link: "https://visitspearfish.com/things-to-do/spearfish-canyon/"
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