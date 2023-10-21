const locations = [
    {
        name: 'Denali National Park',
        photo: '/Alaska/images/Denali National Park.jpg',
        description: 'Denali National Park, located in Interior Alaska, is home to the highest peak in North America, Denali. It offers stunning wilderness, wildlife, and the chance to see the iconic Denali mountain, a must-visit for outdoor enthusiasts and nature lovers.',
        location: 'Interior Alaska',
        link: 'https://www.nps.gov/dena/index.htm',
    },
    {
        name: 'Glacier Bay National Park',
        photo: '/Alaska/images/Glacier Bay National Park.jpg',
        description: 'Glacier Bay National Park, a UNESCO World Heritage Site in Southeast Alaska, boasts massive glaciers, dramatic fjords, and a diverse range of marine life. Its a pristine natural wonder waiting to be explored.',
        location: 'Southeast Alaska',
        link: 'https://www.nps.gov/glba/index.htm',
    },
    {
        name: 'Kenai Fjords National Park',
        photo: '/Alaska/images/Kenai Fjords National Park.jpg',
        description: 'Kenai Fjords National Park, located in Southcentral Alaska, is a haven for those seeking icy fjords, tidewater glaciers, and rich marine life. The park offers unforgettable adventures and breathtaking views.',
        location: 'Southcentral Alaska',
        link: 'https://www.nps.gov/kefj/index.htm',
    },
    {
        name: 'Mendenhall Glacier',
        photo: '/Alaska/images/Mendenhall Glacier.jpg',
        description: 'Mendenhall Glacier, near Juneau in Southeast Alaska, is a captivating natural wonder. Visitors can witness the beauty of a receding glacier and explore the surrounding areas stunning landscapes.',
        location: 'Southeast Alaska',
        link: 'https://www.fs.usda.gov/tongass/',
    },
    {
        name: 'Northern Lights',
        photo: '/Alaska/images/Northern Lights.jpg',
        description: 'Alaska is one of the best places on Earth to witness the mesmerizing Northern Lights, also known as the Aurora Borealis. These natural light displays are a magical and unforgettable spectacle.',
        location: 'Various locations in Alaska',
        link: 'https://www.travelalaska.com/Things-to-Do/Northern-Lights.aspx',
    },
    {
        name: 'Anchorage',
        photo: '/Alaska/images/Anchorage.jpg',
        description: 'Anchorage, Alaska’s largest city in Southcentral Alaska, offers a blend of cultural attractions, outdoor adventures, and serves as a gateway to the state’s natural wonders, making it a diverse and vibrant urban destination.',
        location: 'Southcentral Alaska',
        link: 'https://www.anchorage.net/',
    },
    {
        name: 'Seward',
        photo: '/Alaska/images/Seward.jpg',
        description: 'Seward, a charming coastal town in Southcentral Alaska, is known for its picturesque harbor, access to Kenai Fjords National Park, and hosting the annual Iditarod Trail Sled Dog Race, making it a unique and exciting destination.',
        location: 'Southcentral Alaska',
        link: 'https://www.seward.com/',
    },
    {
        name: 'Fairbanks',
        photo: '/Alaska/images/Fairbanks.jpg',
        description: 'Fairbanks, the gateway to the Arctic in Interior Alaska, offers opportunities to experience the Midnight Sun, dog sledding, and the World Ice Art Championships. Its a city with a unique blend of culture and adventure.',
        location: 'Interior Alaska',
        link: 'https://www.explorefairbanks.com/',
    },
    {
        name: 'Wrangell-St. Elias National Park',
        photo: '/Alaska/images/Wrangell-St. Elias National Park.jpg',
        description: 'Wrangell-St. Elias National Park, the largest national park in the U.S., is located in Southcentral Alaska. It boasts towering mountains, massive glaciers, and historic mining sites, making it a paradise for outdoor enthusiasts and history buffs.',
        location: 'Southcentral Alaska',
        link: 'https://www.nps.gov/wrst/index.htm',
    },
    {
        name: 'Ketchikan',
        photo: '/Alaska/images/Ketchikan.jpg',
        description: 'Ketchikan, known as the "Salmon Capital of the World" in Southeast Alaska, offers a wealth of outdoor activities, rich cultural experiences, and a gateway to the stunning Misty Fjords National Monument. Its a place where nature and heritage come together beautifully.',
        location: 'Southeast Alaska',
        link: 'https://www.visit-ketchikan.com/',
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