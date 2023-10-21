const locations = [{
    name: "Winterthur Museum, Garden & Library",
    photo: "/Delaware/images/Winterthur Museum Garden and Library.jpg",
    description: "The Winterthur Museum, Garden & Library in Wilmington is a magnificent estate and museum showcasing American decorative arts. Visitors can explore the beautifully landscaped gardens, tour the opulent mansion, and view a vast collection of antiques, including furniture, ceramics, and textiles. It's a journey through the elegance and craftsmanship of America's past, making it a treasure for art and history enthusiasts.",
    location: "Wilmington, Delaware",
    link: "http://www.winterthur.org/"
  },
  {
    name: "Delaware Seashore State Park",
    photo: "/Delaware/images/Delaware Seashore State Park.jpg",
    description: "Delaware Seashore State Park offers pristine beaches and natural beauty along the Atlantic Ocean. It's a haven for sunbathers, swimmers, and water sports enthusiasts. The park features miles of shoreline, hiking trails, and opportunities for birdwatching. With diverse ecosystems and scenic views, it's an ideal destination for nature lovers and beachgoers.",
    location: "Rehoboth Beach, Delaware",
    link: "https://destateparks.com/Beaches/DelawareSeashore"
  },
  {
    name: "Hagley Museum and Library",
    photo: "/Delaware/images/Hagley Museum and Library.jpg",
    description: "The Hagley Museum and Library in Wilmington is the site of the original DuPont powder mills and ancestral home of the DuPont family. Visitors can explore the historic industrial complex, including working machinery and the family's estate. The museum delves into American innovation and industry, making it a unique experience for history and technology enthusiasts.",
    location: "Wilmington, Delaware",
    link: "https://www.hagley.org/"
  },
  {
    name: "Nemours Mansion and Gardens",
    photo: "/Delaware/images/Nemours Mansion and Gardens.jpg",
    description: "Nemours Mansion and Gardens in Wilmington is a grand French-style château and estate built by Alfred I. du Pont. The mansion is a marvel of architecture, filled with opulent furnishings and surrounded by exquisite gardens. Visitors can take guided tours to learn about the du Pont family and the Gilded Age. It's a step back in time to a world of wealth and luxury.",
    location: "Wilmington, Delaware",
    link: "https://www.nemoursmansion.org/"
  },
  {
    name: "Brandywine Zoo",
    photo: "/Delaware/images/Brandywine Zoo.jpg",
    description: "The Brandywine Zoo in Wilmington is a small and family-friendly zoo featuring a variety of animals from North and South America. Visitors can see red pandas, capuchin monkeys, and other fascinating creatures. The zoo offers educational programs and a serene atmosphere for animal lovers and families with children.",
    location: "Wilmington, Delaware",
    link: "https://brandywinezoo.org/"
  },
  {
    name: "Bombay Hook National Wildlife Refuge",
    photo: "/Delaware/images/Bombay Hook National Wildlife Refuge.jpg",
    description: "The Bombay Hook National Wildlife Refuge is a coastal haven for wildlife and birdwatching. Located along the Delaware Bay, the refuge is a vital stopover point for migratory birds. Visitors can explore the diverse habitats and walking trails while observing a wide array of bird species and other wildlife. It's a natural sanctuary for birdwatchers and nature enthusiasts.",
    location: "Smyrna, Delaware",
    link: "https://www.fws.gov/refuge/bombay_hook/"
  },
  {
    name: "Delaware Art Museum",
    photo: "/Delaware/images/Delaware Art Museum.jpg",
    description: "The Delaware Art Museum in Wilmington features an impressive collection of American and European art. It includes works by renowned artists like Howard Pyle and John Sloan. Visitors can explore the museum's galleries, attend special exhibitions, and appreciate a rich cultural heritage. It's a hub of artistic inspiration for art lovers and those interested in visual culture.",
    location: "Wilmington, Delaware",
    link: "https://www.delart.org/"
  },
  {
    name: "Killens Pond State Park",
    photo: "/Delaware/images/Killens Pond State Park.jpg",
    description: "Killens Pond State Park in Felton offers outdoor recreation in a serene setting. The park features a large pond for swimming and boating, as well as hiking trails and picnic areas. Visitors can enjoy a day in the great outdoors, have a lakeside adventure, or even go camping. It's an ideal destination for those seeking relaxation and outdoor activities.",
    location: "Felton, Delaware",
    link: "https://destateparks.com/KillensPond"
  },
  {
    name: "John Dickinson Plantation",
    photo: "/Delaware/images/John Dickinson Plantation.jpg",
    description: "The John Dickinson Plantation in Dover is the former home of John Dickinson, a Founding Father and signer of the U.S. Constitution. Visitors can tour the plantation house, learn about the history of the site, and explore the surrounding grounds. It's a historic gem that provides insights into the life and times of an influential figure in American history.",
    location: "Dover, Delaware",
    link: "https://history.delaware.gov/museums/jdp/jdp_main.shtml"
  },
  {
    name: "Air Mobility Command Museum",
    photo: "/Delaware/images/Air Mobility Command Museum.jpg",
    description: "The Air Mobility Command Museum in Dover showcases a vast collection of military aircraft and artifacts. It's a tribute to the history of airlift and air refueling missions. Visitors can explore aircraft such as the C-47 Skytrain and the C-141 Starlifter. The museum is a place to honor the heroes of aviation and military history.",
    location: "Dover, Delaware",
    link: "https://amcmuseum.org/"
  }]

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