const locations = [
    {
      name: "Indianapolis Motor Speedway",
      photo: "/Indiana/images/Indianapolis Motor Speedway.jpg",
      description: "The Indianapolis Motor Speedway is the world-renowned racing facility that hosts the iconic Indianapolis 500, one of the most prestigious auto races. Visitors can tour the speedway, visit the Hall of Fame Museum, and even take a lap around the track. It's a thrilling experience for racing enthusiasts and fans of automotive history.",
      location: "Indianapolis, Indiana",
      link: "https://www.indianapolismotorspeedway.com/"
    },
    {
      name: "Children's Museum of Indianapolis",
      photo: "/Indiana/images/Children's Museum of Indianapolis.jpg",
      description: "The Children's Museum of Indianapolis is the largest children's museum in the world. It offers interactive exhibits, a planetarium, and educational programs for kids of all ages. Visitors can explore dinosaur displays, space exploration, and immersive experiences. It's a place of learning and play for families and young adventurers.",
      location: "Indianapolis, Indiana",
      link: "https://www.childrensmuseum.org/"
    },
    {
      name: "Indiana Dunes National Park",
      photo: "/Indiana/images/Indiana Dunes National Park.jpg",
      description: "Indiana Dunes National Park, along the shores of Lake Michigan, is a haven of sand dunes, forests, and beautiful beaches. Visitors can hike the dunes, swim in the lake, and explore diverse ecosystems. The park is a natural escape and offers opportunities for outdoor activities and birdwatching.",
      location: "Northwest Indiana",
      link: "https://www.nps.gov/indu/index.htm"
    },
    {
      name: "Conner Prairie Interactive History Park",
      photo: "/Indiana/images/Conner Prairie Interactive History Park.jpg",
      description: "Conner Prairie Interactive History Park in Fishers is an outdoor living history museum. It features interactive exhibits, historic buildings, and costumed interpreters who bring the 19th century to life. Visitors can engage in hands-on activities, ride a balloon voyage, and explore Indiana's history. It's a place of education and immersive experiences for all ages.",
      location: "Fishers, Indiana",
      link: "https://www.connerprairie.org/"
    },
    {
      name: "Eiteljorg Museum of American Indians and Western Art",
      photo: "/Indiana/images/Eiteljorg Museum of American Indians and Western Art.jpg",
      description: "The Eiteljorg Museum of American Indians and Western Art in Indianapolis is dedicated to Native American and Western art, history, and culture. Visitors can view a diverse collection of art, artifacts, and contemporary works. The museum offers a unique perspective on the American West and is a destination for art and cultural enthusiasts.",
      location: "Indianapolis, Indiana",
      link: "https://eiteljorg.org/"
    },
    {
      name: "Holiday World & Splashin' Safari",
      photo: "/Indiana/images/Holiday World & Splashin' Safari.jpg",
      description: "Holiday World & Splashin' Safari in Santa Claus is a family-friendly theme park and water park. It features thrilling rides, water attractions, and a welcoming atmosphere. Visitors can enjoy roller coasters, lazy rivers, and live entertainment. It's a destination for summertime fun and creating lasting memories with loved ones.",
      location: "Santa Claus, Indiana",
      link: "https://www.holidayworld.com/"
    },
    {
      name: "French Lick Resort",
      photo: "/Indiana/images/French Lick Resort.jpg",
      description: "French Lick Resort in French Lick is a historic resort with a rich legacy. It offers elegant accommodations, world-class golf courses, and a luxurious spa. Visitors can unwind in a grand setting, explore the nearby Hoosier National Forest, and try their luck at the casino. It's a destination for relaxation and old-world charm.",
      location: "French Lick, Indiana",
      link: "https://www.frenchlick.com/"
    },
    {
      name: "Marengo Cave",
      photo: "/Indiana/images/Marengo Cave.jpg",
      description: "Marengo Cave in Marengo is a natural wonder known for its beautiful underground formations. Visitors can take guided cave tours, explore stunning stalactites and stalagmites, and learn about the geology of caves. It's an underground adventure and a cool escape from the summer heat for nature enthusiasts.",
      location: "Marengo, Indiana",
      link: "https://marengocave.com/"
    },
    {
      name: "Turkey Run State Park",
      photo: "/Indiana/images/Turkey Run State Park.jpg",
      description: "Turkey Run State Park in Marshall is a picturesque park along Sugar Creek, known for its rugged sandstone canyons and hiking trails. Visitors can hike the trails, explore the unique formations, and enjoy outdoor activities such as canoeing and camping. It's a natural playground and a peaceful retreat for outdoor lovers.",
      location: "Marshall, Indiana",
      link: "https://www.in.gov/dnr/parklake/2964.htm"
    },
    {
      name: "Indianapolis Zoo",
      photo: "/Indiana/images/Indianapolis Zoo.jpg",
      description: "The Indianapolis Zoo is a beloved attraction featuring a wide variety of animals from around the world. Visitors can see lions, elephants, and marine life, and explore the zoo's gardens. It offers interactive exhibits, educational programs, and a chance to connect with wildlife. It's a place of adventure and conservation for families and animal enthusiasts.",
      location: "Indianapolis, Indiana",
      link: "https://www.indianapoliszoo.com/"
    }
  ];
  
  locationHTML = ''

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
     

    //scrolling effect

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