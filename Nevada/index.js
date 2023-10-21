const locations = [
    {
        name: 'Las Vegas Strip',
        photo: '/Nevada/images/Las Vegas Strip.jpg',
        description: 'The Las Vegas Strip is a world-famous entertainment corridor in Las Vegas, known for its dazzling lights, iconic hotels, casinos, and a wide range of entertainment options. Its the ultimate destination for nightlife and entertainment.',
        location: 'Las Vegas, Nevada',
        link: 'https://www.vegas.com/',
    },
    {
        name: 'Hoover Dam',
        photo: '/Nevada/images/Hoover Dam.jpg',
        description: 'The Hoover Dam, a marvel of modern engineering, stands as a symbol of human achievement. It offers tours and stunning views of the Colorado River and Black Canyon.',
        location: 'Boulder City, Nevada',
        link: 'https://www.usbr.gov/lc/hooverdam/',
    },
    {
        name: 'Red Rock Canyon National Conservation Area',
        photo: '/Nevada/images/Red Rock Canyon National Conservation Area.jpg',
        description: 'Located just outside Las Vegas, Red Rock Canyon is a stunning natural playground with unique red rock formations, hiking trails, and scenic drives for outdoor enthusiasts.',
        location: 'Near Las Vegas, Nevada',
        link: 'https://www.redrockcanyonlv.org/',
    },
    {
        name: 'Great Basin National Park',
        photo: '/Nevada/images/Great Basin National Park.jpg',
        description: 'Great Basin National Park, located in eastern Nevada, boasts a unique underground limestone cave system, diverse ecosystems, and opportunities for stargazing in the dark skies of Nevada.',
        location: 'Baker, Nevada',
        link: 'https://www.nps.gov/grba/index.htm',
    },
    {
        name: 'Valley of Fire State Park',
        photo: '/Nevada/images/Valley of Fire State Park.jpg',
        description: 'Valley of Fire State Park is known for its vibrant red sandstone formations, ancient petroglyphs, and stunning desert landscapes. Its a hidden gem in the Nevada desert.',
        location: 'Overton, Nevada',
        link: 'http://parks.nv.gov/parks/valley-of-fire',
    },
    {
        name: 'Reno',
        photo: '/Nevada/images/Reno.jpg',
        description: 'Reno, known as "The Biggest Little City in the World," offers a mix of outdoor adventures, entertainment, and a vibrant arts scene. Its also a gateway to the beautiful Lake Tahoe.',
        location: 'Reno, Nevada',
        link: 'https://www.visitrenotahoe.com/',
    },
    {
        name: 'The Mob Museum',
        photo: '/Nevada/images/The Mob Museum.jpg',
        description: 'Located in downtown Las Vegas, The Mob Museum is a captivating journey into the history of organized crime in America. It features interactive exhibits and artifacts from the Mob era.',
        location: 'Las Vegas, Nevada',
        link: 'https://themobmuseum.org/',
    },
    {
        name: 'Virginia City',
        photo: '/Nevada/images/Virginia City.jpg',
        description: 'Virginia City is a historic mining town that takes you back in time to the Wild West. Explore preserved 19th-century buildings, take a historic train ride, and immerse yourself in the Old West.',
        location: 'Virginia City, Nevada',
        link: 'https://visitvirginiacitynv.com/',
    },
    {
        name: 'Lake Mead National Recreation Area',
        photo: '/Nevada/images/Lake Mead National Recreation Area.jpg',
        description: 'Lake Mead National Recreation Area offers boating, fishing, and water sports on the largest reservoir in the U.S. Its a perfect destination for outdoor enthusiasts and water lovers.',
        location: 'Near Las Vegas, Nevada',
        link: 'https://www.nps.gov/lake/index.htm',
    },
    {
        name: 'Great Reno Balloon Race',
        photo: '/Nevada/images/Great Reno Balloon Race.jpg',
        description: 'The Great Reno Balloon Race is the largest free hot-air balloon event in the world. Its a mesmerizing spectacle with colorful balloons filling the Nevada sky at dawn.',
        location: 'Reno, Nevada',
        link: 'https://renoballoon.com/',
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
});

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