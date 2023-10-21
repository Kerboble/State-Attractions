const locations = [
    {
      name: "Wisconsin Dells",
      photo: "/Wisconsin/images/Wisconsin Dells.jpg",
      description: "Wisconsin Dells is a popular tourist destination known for its waterparks and scenic beauty. Visitors can enjoy water slides, boat tours of the dells, and explore the unique rock formations. It's a place for family fun and natural wonders.",
      location: "Wisconsin Dells, Wisconsin",
      link: "https://www.wisdells.com/"
    },
    {
      name: "Milwaukee Art Museum",
      photo: "/Wisconsin/images/Milwaukee Art Museum.jpg",
      description: "The Milwaukee Art Museum is a cultural gem featuring a diverse collection of art. Visitors can admire the iconic Quadracci Pavilion, view paintings, sculptures, and attend special exhibitions. It's a place for art enthusiasts and architectural marvels.",
      location: "Milwaukee, Wisconsin",
      link: "https://mam.org/"
    },
    {
      name: "Door County",
      photo: "/Wisconsin/images/Door County.jpg",
      description: "Door County is a picturesque peninsula with stunning shoreline and charming towns. Visitors can explore lighthouses, go cherry picking, and enjoy outdoor activities. It's a place for nature lovers and coastal beauty.",
      location: "Door County, Wisconsin",
      link: "https://www.doorcounty.com/"
    },
    {
      name: "Wisconsin State Capitol",
      photo: "/Wisconsin/images/Wisconsin State Capitol.jpg",
      description: "The Wisconsin State Capitol in Madison is an architectural masterpiece. Visitors can take tours to learn about its history, climb to the dome, and explore the stunning interior. It's a place for history buffs and government exploration.",
      location: "Madison, Wisconsin",
      link: "https://www.wisconsin.gov/Pages/about.aspx"
    },
    {
      name: "Lambeau Field",
      photo: "/Wisconsin/images/Lambeau Field.jpeg",
      description: "Lambeau Field is the iconic home of the Green Bay Packers. Visitors can attend football games, tour the stadium, and learn about the team's rich history. It's a place for sports enthusiasts and football tradition.",
      location: "Green Bay, Wisconsin",
      link: "https://www.packers.com/lambeau-field/"
    },
    {
      name: "Devil's Lake State Park",
      photo: "/Wisconsin/images/Devil's Lake State Park.jpg",
      description: "Devil's Lake State Park is a natural playground offering hiking, swimming, and rock climbing. Visitors can enjoy the clear lake, explore the quartzite bluffs, and go birdwatching. It's a place for outdoor adventures and scenic beauty.",
      location: "Baraboo, Wisconsin",
      link: "https://dnr.wisconsin.gov/topic/parks/devilslake"
    },
    {
      name: "Harley-Davidson Museum",
      photo: "/Wisconsin/images/Harley-Davidson Museum.jpg",
      description: "The Harley-Davidson Museum in Milwaukee celebrates the iconic motorcycle brand. Visitors can see vintage bikes, learn about Harley-Davidson's history, and explore motorcycle culture. It's a place for motorcycle enthusiasts and American heritage.",
      location: "Milwaukee, Wisconsin",
      link: "https://www.harley-davidson.com/us/en/museum.html"
    },
    {
      name: "Taliesin",
      photo: "/Wisconsin/images/Taliesin.jpg",
      description: "Taliesin is the former home and studio of renowned architect Frank Lloyd Wright. Visitors can take guided tours to see Wright's architectural masterpiece, learn about his life, and explore the beautiful estate. It's a place for architecture lovers and design inspiration.",
      location: "Spring Green, Wisconsin",
      link: "https://taliesinpreservation.org/"
    },
    {
      name: "Cave of the Mounds",
      photo: "/Wisconsin/images/Cave of the Mounds.jpg",
      description: "Cave of the Mounds in Blue Mounds is a natural wonder featuring crystal formations and underground passages. Visitors can take guided tours to explore this subterranean world. It's a place for geology enthusiasts and underground adventures.",
      location: "Blue Mounds, Wisconsin",
      link: "https://www.caveofthemounds.com/"
    },
    {
      name: "EAA AirVenture Oshkosh",
      photo: "/Wisconsin/images/EAA AirVenture Oshkosh.jpg",
      description: "EAA AirVenture Oshkosh is the world's largest aviation event. Visitors can witness airshows, admire aircraft, and explore aviation history. It's a place for aviation enthusiasts and aeronautical excitement.",
      location: "Oshkosh, Wisconsin",
      link: "https://www.eaa.org/airventure"
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