const locations = [
    {
        name: "Zion National Park",
        photo: "/Utah/images/Zion National Park.jpg",
        description: "Zion National Park is a captivating landscape of red rock canyons, towering cliffs, and the Virgin River. The park offers world-class hiking trails like the Narrows and Angels Landing, where adventurers can experience breathtaking views. It's a place where the beauty of the Southwest desert shines, providing opportunities for outdoor exploration and photography.",
        location: "Southern Utah",
        link: "https://www.nps.gov/zion/index.htm",
    },
    {
        name: "Arches National Park",
        photo: "/Utah/images/Arches National Park.jpg",
        description: "Arches National Park is a wonderland of natural stone arches, balanced rocks, and unique geological formations. Visitors can hike to iconic arches like Delicate Arch and Landscape Arch. The park is a testament to the forces of erosion and time, creating a surreal landscape that has fascinated travelers for centuries.",
        location: "Eastern Utah",
        link: "https://www.nps.gov/arch/index.htm",
    },
    {
        name: "Bryce Canyon National Park",
        photo: "/Utah/images/Bryce Canyon National Park.jpg",
        description: "Bryce Canyon National Park is famous for its hoodoos, spire-shaped rock formations, and striking amphitheaters. The park offers hiking trails that lead visitors through a maze of colorful canyons. The viewpoints, like Bryce Point and Sunrise Point, provide awe-inspiring panoramas of the unique landscape. Bryce Canyon is a place of geological wonder and unparalleled beauty.",
        location: "Southern Utah",
        link: "https://www.nps.gov/brca/index.htm",
    },
    {
        name: "Capitol Reef National Park",
        photo: "/Utah/images/Capitol Reef National Park.jpg",
        description: "Capitol Reef National Park showcases a stunning Waterpocket Fold, a warp in the Earth's crust. Visitors can explore deep canyons, natural bridges, and petroglyphs. The park's diverse landscapes offer hiking, rock climbing, and scenic drives. It's a place where geological marvels and ancient history converge in a mesmerizing setting.",
        location: "Southern Utah",
        link: "https://www.nps.gov/care/index.htm",
    },
    {
        name: "Salt Lake City",
        photo: "/Utah/images/Salt Lake City.jpg",
        description: "Salt Lake City, Utah's capital, is a vibrant urban center surrounded by breathtaking mountain landscapes. The city is home to the historic Temple Square, the Utah State Capitol, and the vibrant Sugar House neighborhood. Visitors can enjoy outdoor activities in the nearby Wasatch Mountains and explore the city's cultural attractions, including museums and theaters. Salt Lake City offers a unique blend of cosmopolitan experiences and natural beauty.",
        location: "Salt Lake City, Utah",
        link: "https://www.visitsaltlake.com/",
    },
    {
        name: "Canyonlands National Park",
        photo: "/Utah/images/Canyonlands National Park.jpg",
        description: "Canyonlands National Park is a rugged wilderness of canyons, mesas, and buttes carved by the Colorado River. The park is divided into four districts, each with unique landscapes and experiences. Visitors can hike to overlooks like Mesa Arch, go white-water rafting, and explore the remote Maze District. Canyonlands is a place where geological forces have created a maze of breathtaking canyons.",
        location: "Southern Utah",
        link: "https://www.nps.gov/cany/index.htm",
    },
    {
        name: "Monument Valley",
        photo: "/Utah/images/Monument Valley.jpg",
        description: "Monument Valley, situated within the Navajo Nation, is known for its iconic sandstone buttes and mesas. Visitors can take guided tours to explore the valley's stunning formations and rich Navajo culture. The area has been featured in numerous films and photographs, becoming a symbol of the American West. Monument Valley is a place of natural wonder and cultural significance.",
        location: "Navajo Nation, Utah",
        link: "https://navajonationparks.org/tribal-parks/monument-valley/",
    },
    {
        name: "Antelope Island State Park",
        photo: "/Utah/images/Antelope Island State Park.jpg",
        description: "Antelope Island State Park is a unique island in the Great Salt Lake, known for its wildlife and outdoor activities. Visitors can spot bison, pronghorn antelope, and a variety of bird species. The park offers hiking and biking trails, along with beautiful beaches and scenic viewpoints. It's a place where nature thrives in a striking lake environment.",
        location: "Great Salt Lake, Utah",
        link: "https://stateparks.utah.gov/parks/antelope-island/",
    },
    {
        name: "Grand Staircase-Escalante National Monument",
        photo: "/Utah/images/Grand Staircase-Escalante National Monument.jpg",
        description: "Grand Staircase-Escalante National Monument is a vast and remote wilderness with rugged canyons, plateaus, and unique geological formations. Visitors can explore slot canyons like Peek-a-Boo Gulch and hike to waterfalls like Lower Calf Creek Falls. The monument's vastness offers solitude and natural beauty, making it a destination for adventure seekers and photographers.",
        location: "Southern Utah",
        link: "https://www.blm.gov/programs/national-conservation-lands/utah/grand-staircase-escalante-national-monument",
    },
    {
        name: "Bonneville Salt Flats",
        photo: "/Utah/images/Bonneville Salt Flats.jpg",
        description: "The Bonneville Salt Flats are a unique natural wonder, known for their vast, white expanse. Visitors can witness land speed record attempts and enjoy the surreal, flat landscape. During the Speed Week, the salt flats become a playground for racing enthusiasts. It's a place of speed and serene simplicity, offering an otherworldly experience.",
        location: "Wendover, Utah",
        link: "https://utah.com/bonneville-salt-flats",
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