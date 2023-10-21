const locations = [
    {
      name: "Yale University",
      photo: "/Connecticut/images/Yale University.jpg",
      description: "Yale University, located in New Haven, is one of the Ivy League schools and renowned for its academic excellence and historic campus. Visitors can explore the beautiful architecture, world-class museums, and the iconic Yale University Art Gallery. The campus is a hub of intellectual and cultural activity, making it a must-visit for those interested in education and the arts.",
      location: "New Haven, Connecticut",
      link: "https://www.yale.edu/"
    },
    {
      name: "Mystic Seaport Museum",
      photo: "/Connecticut/images/Mystic Seaport Museum.jpg",
      description: "Mystic Seaport Museum, located in Mystic, is the nation's leading maritime museum. It offers a glimpse into the history of America's maritime heritage. Visitors can explore historic ships, a recreated 19th-century coastal village, and fascinating exhibits on maritime life. It's a journey through time and a great educational experience for maritime enthusiasts.",
      location: "Mystic, Connecticut",
      link: "https://www.mysticseaport.org/"
    },
    {
      name: "Mark Twain House & Museum",
      photo: "/Connecticut/images/Mark Twain House & Museum.jpg",
      description: "The Mark Twain House & Museum in Hartford is the former home of the famous author Mark Twain. It's a beautifully preserved Victorian mansion where Twain wrote some of his most iconic works. Visitors can take guided tours to learn about the life and work of this literary giant. The museum offers a unique glimpse into the world of Mark Twain and the 19th century.",
      location: "Hartford, Connecticut",
      link: "https://marktwainhouse.org/"
    },
    {
      name: "The Dinosaur Place at Nature's Art Village",
      photo: "/Connecticut/images/The Dinosaur Place at Nature's Art Village.jpg",
      description: "The Dinosaur Place at Nature's Art Village in Montville is a dinosaur-themed outdoor adventure park. It features more than 40 life-sized dinosaurs, a dinosaur-themed maze, and a splash pad. Kids and families can have a roaring good time exploring prehistoric creatures and enjoying hands-on activities. It's an educational and fun experience for young paleontologists.",
      location: "Montville, Connecticut",
      link: "https://naturesartvillage.com/the-dinosaur-place/"
    },
    {
      name: "Connecticut Science Center",
      photo: "/Connecticut/images/Connecticut Science Center.jpg",
      description: "The Connecticut Science Center in Hartford is an interactive science museum designed for all ages. It features hundreds of hands-on exhibits, a rooftop garden, and exciting live demonstrations. Visitors can explore topics from physics to biology and engage with STEM concepts in a fun and accessible way. It's an inspiring destination for science enthusiasts and curious minds.",
      location: "Hartford, Connecticut",
      link: "https://ctsciencecenter.org/"
    },
    {
      name: "Mystic Aquarium",
      photo: "/Connecticut/images/Mystic Aquarium.jpg",
      description: "Mystic Aquarium in Mystic is a marine life and oceanography center. It's home to a variety of sea creatures, including beluga whales and African penguins. Visitors can observe marine animals, attend educational presentations, and even interact with stingrays. The aquarium is a fantastic place for aquatic adventures and learning about the world's oceans.",
      location: "Mystic, Connecticut",
      link: "https://www.mysticaquarium.org/"
    },
    {
      name: "Gillette Castle State Park",
      photo: "/Connecticut/images/Gillette Castle State Park.jpg",
      description: "Gillette Castle State Park in East Haddam is the former home of actor William Gillette, famous for portraying Sherlock Holmes on stage. The castle is a masterpiece of eccentric architecture and offers scenic views of the Connecticut River. Visitors can tour the castle, hike the trails, and enjoy a picnic in the park. It's a unique historical and natural attraction.",
      location: "East Haddam, Connecticut",
      link: "https://portal.ct.gov/DEEP/State-Parks/Parks/Gillette-Castle-State-Park"
    },
    {
      name: "Wadsworth Atheneum Museum of Art",
      photo: "/Connecticut/images/Wadsworth Atheneum Museum of Art.jpg",
      description: "The Wadsworth Atheneum Museum of Art in Hartford is the oldest public art museum in the United States. It houses a vast and diverse collection of art, including European Baroque paintings, American decorative arts, and contemporary works. Visitors can explore the museum's galleries, participate in special exhibitions, and appreciate art from various time periods and cultures.",
      location: "Hartford, Connecticut",
      link: "https://www.thewadsworth.org/"
    },
    {
      name: "Lake Compounce",
      photo: "/Connecticut/images/Lake Compounce.jpg",
      description: "Lake Compounce in Bristol is the oldest continuously operating amusement park in the United States. It offers a mix of thrilling rides, water attractions, and family-friendly entertainment. Visitors can enjoy roller coasters, water slides, and live shows. The park provides a day of excitement and nostalgia for amusement park enthusiasts.",
      location: "Bristol, Connecticut",
      link: "https://www.lakecompounce.com/"
    },
    {
      name: "New England Air Museum",
      photo: "/Connecticut/images/New England Air Museum.jpg",
      description: "The New England Air Museum in Windsor Locks is a fascinating aviation museum. It features a vast collection of aircraft, from historic planes to modern jets. Visitors can learn about the history of flight, view aircraft up close, and even sit in the cockpit of some planes. It's an engaging and educational experience for aviation enthusiasts and those interested in the wonders of flight.",
      location: "Windsor Locks, Connecticut",
      link: "https://www.neam.org/"
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