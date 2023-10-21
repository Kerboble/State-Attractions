const locations = [
    {
      name: "Biltmore Estate",
      photo: "/North-Carolina/images/Biltmore Estate.jpg",
      description: "The Biltmore Estate in Asheville is America's largest privately-owned home, built by George Washington Vanderbilt II. Visitors can tour the grand château, its gardens, and the winery. It's a place of opulence, history, and scenic beauty.",
      location: "Asheville, North Carolina",
      link: "https://www.biltmore.com/"
    },
    {
      name: "Great Smoky Mountains National Park",
      photo: "/North-Carolina/images/Great Smoky Mountains National Park.jpg",
      description: "Great Smoky Mountains National Park, straddling the North Carolina and Tennessee border, is a natural paradise. Visitors can explore lush forests, hike to waterfalls, and observe diverse wildlife. It's a haven for outdoor enthusiasts and a UNESCO World Heritage Site.",
      location: "North Carolina and Tennessee",
      link: "https://www.nps.gov/grsm/index.htm"
    },
    {
      name: "Blue Ridge Parkway",
      photo: "/North-Carolina/images/Blue Ridge Parkway.jpg",
      description: "The Blue Ridge Parkway is a scenic highway winding through the Appalachian Highlands. Visitors can drive along the Blue Ridge Mountains, stop at overlooks, and enjoy outdoor activities. It's a journey through natural beauty and a scenic drive like no other.",
      location: "North Carolina and Virginia",
      link: "https://www.blueridgeparkway.org/"
    },
    {
      name: "Cape Hatteras National Seashore",
      photo: "/North-Carolina/images/Cape Hatteras National Seashore.jpg",
      description: "Cape Hatteras National Seashore on the Outer Banks is known for its pristine beaches and historic lighthouses. Visitors can swim, surf, and climb the Cape Hatteras Lighthouse. It's a place of coastal beauty, water sports, and maritime history.",
      location: "Outer Banks, North Carolina",
      link: "https://www.nps.gov/caha/index.htm"
    },
    {
      name: "Wright Brothers National Memorial",
      photo: "/North-Carolina/images/Wright Brothers National Memorial.jpg",
      description: "The Wright Brothers National Memorial in Kill Devil Hills commemorates the first powered flight by Wilbur and Orville Wright. Visitors can explore the visitor center, see the reconstructed camp, and view the iconic memorial. It's a place of aviation history and innovation.",
      location: "Kill Devil Hills, North Carolina",
      link: "https://www.nps.gov/wrbr/index.htm"
    },
    {
      name: "Chimney Rock State Park",
      photo: "/North-Carolina/images/Chimney Rock State Park.jpg",
      description: "Chimney Rock State Park near Lake Lure offers scenic hikes and stunning views of the Hickory Nut Gorge. Visitors can climb to the top of Chimney Rock, explore waterfalls, and visit the park's wildlife education center. It's a place of natural wonder and outdoor adventure.",
      location: "Lake Lure, North Carolina",
      link: "https://www.chimneyrockpark.com/"
    },
    {
      name: "Battleship North Carolina",
      photo: "/North-Carolina/images/Battleship North Carolina.jpg",
      description: "The Battleship North Carolina in Wilmington is a historic World War II battleship open for tours. Visitors can explore the ship's decks, crew quarters, and learn about its wartime service. It's a place of naval history and a unique museum experience.",
      location: "Wilmington, North Carolina",
      link: "https://www.battleshipnc.com/"
    },
    {
      name: "North Carolina Zoo",
      photo: "/North-Carolina/images/North Carolina Zoo.jpg",
      description: "The North Carolina Zoo in Asheboro is one of the largest zoos in the world. Visitors can see a wide variety of animals, including elephants, gorillas, and polar bears, in natural habitats. It's a place for family outings, wildlife conservation, and educational experiences.",
      location: "Asheboro, North Carolina",
      link: "https://www.nczoo.org/"
    },
    {
      name: "Grandfather Mountain",
      photo: "/North-Carolina/images/Grandfather Mountain.jpg",
      description: "Grandfather Mountain is a rugged peak in the Blue Ridge Mountains. Visitors can cross the Mile-High Swinging Bridge, hike the trails, and see native wildlife. It's a destination for outdoor enthusiasts and a place to explore the high country of North Carolina.",
      location: "Linville, North Carolina",
      link: "https://grandfather.com/"
    },
    {
      name: "The Outer Banks",
      photo: "/North-Carolina/images/The Outer Banks.jpg",
      description: "The Outer Banks is a chain of barrier islands off the coast of North Carolina, known for its sandy beaches and historic sites. Visitors can explore Roanoke Island, see the wild horses of Corolla, and visit Cape Hatteras National Seashore. It's a place of coastal beauty and rich history.",
      location: "Outer Banks, North Carolina",
      link: "https://www.outerbanks.org/"
    }
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