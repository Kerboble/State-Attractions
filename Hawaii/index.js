const locations = [{
    name:'Waikiki Beach, Oahu',
    photo: '/Hawaii/images/Waikiki.jpg',
    description: 'Known for its stunning white sandy beach and iconic Diamond Head backdrop, Waikiki Beach is a popular destination for sunbathing, swimming, and water sports.',
    link: 'https://www.hawaii-guide.com/oahu/beaches/waikiki-beach'
},{
    name:'Volcanoes National Park',
    photo: '/Hawaii/images/Volcanoes.jpg',
    description: 'On the Big Island of Hawaii, you can visit Hawaii Volcanoes National Park, where you can witness active volcanoes, lava flows, and explore unique geological features..',
    link: 'https://www.nps.gov/havo/index.htm'
}, {
    name:'Haleakalā National Park',
    photo: '/Hawaii/images/Haleakalā National Park.jpg',
    description: ' Located on Maui, this park is home to the Haleakalā Crater, known for its dramatic sunrise and sunset views, as well as hiking opportunities.',
    link: 'https://www.nps.gov/hale/index.htm'
}, {
    name:'Pearl Harbor',
    photo: '/Hawaii/images/pear-harbor.jpg',
    description: 'On Oahu, you can visit the Pearl Harbor National Memorial to learn about the history of the attack on Pearl Harbor and explore the USS Arizona Memorial and USS Missouri battleship',
    link: 'https://www.nps.gov/perl/index.htm'
}, {
    name:'Road to Hana',
    photo: '/Hawaii/images/Road to Hana.jpg',
    description: 'The winding Road to Hana on Maui is famous for its lush rainforests, waterfalls, and scenic overlooks. Its a memorable drive with many stops along the way.',
    link: 'https://roadtohana.com/'
}, {
    name:'Na Pali Coast',
    photo: '/Hawaii/images/Na Pali Coast.jpg',
    description: 'Located on the island of Kauai, the Na Pali Coast is known for its rugged cliffs, lush valleys, and pristine beaches. You can explore this area via boat tours, hiking, or helicopter rides.',
    link: 'https://dlnr.hawaii.gov/dsp/parks/kauai/napali-coast-state-wilderness-park/'
},{
    name:'Mauna Kea Observatories',
    photo: '/Hawaii/images/Mauna Kea Observatories.jpg',
    description: ' On the Big Island, Mauna Kea is home to some of the worlds most advanced astronomical observatories. You can stargaze and take in breathtaking views from the summit.',
    link: 'https://www.maunakeaobservatories.org/'
},{
    name:'Hanauma Bay',
    photo: '/Hawaii/images/Hanauma Bay.jpg',
    description: 'This nature preserve on Oahu is a popular spot for snorkeling and viewing colorful marine life in a protected bay.',
    link: 'https://hanaumabaystatepark.com/'
},{
    name:'Lanikai Beach:',
    photo: '/Hawaii/images/Lanikai Beach.jpg',
    description: 'Located on the east side of Oahu, Lanikai Beach is known for its calm, clear waters and stunning views of the Mokulua Islands. Its a fantastic spot for kayaking and stand-up paddleboarding.',
    link: 'https://www.best-of-oahu.com/Lanikai-Beach-Oahu-Hawaii.html'
},{
    name:'Molokini Crater',
    photo: '/Hawaii/images/Molokini Crater.jpg',
    description: ' This partially submerged volcanic crater, located between Maui and Kaho`olawe, is a fantastic spot for snorkeling and scuba diving, with crystal-clear waters and an abundance of marine life.',
    link: 'https://www.gohawaii.com/islands/maui/regions/south-maui/Molokini'
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
        <h2>${location.name}</h2>
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