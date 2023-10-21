const locations = [
    {
      name: "Walt Disney World",
      photo: "/Florida/images/Walt Disney World.jpg",
      description: "Walt Disney World in Orlando is the most magical place on Earth. It's a massive entertainment complex featuring four theme parks: Magic Kingdom, Epcot, Disney's Hollywood Studios, and Disney's Animal Kingdom. Visitors can immerse themselves in a world of fantasy, meet beloved Disney characters, and enjoy thrilling rides and shows. It's a dream destination for families and Disney fans.",
      location: "Orlando, Florida",
      link: "https://disneyworld.disney.go.com/"
    },
    {
      name: "The Florida Keys",
      photo: "/Florida/images/The Florida Keys.jpg",
      description: "The Florida Keys are a paradise of islands, beaches, and clear blue waters. It's a popular destination for snorkeling, scuba diving, and enjoying the laid-back island life. Visitors can explore Key West, the southernmost point of the continental U.S., or relax on the sandy shores of Key Largo. It's an ideal escape for water sports and tropical relaxation.",
      location: "Florida Keys, Florida",
      link: "https://fla-keys.com/"
    },
    {
      name: "Universal Orlando Resort",
      photo: "/Florida/images/Universal Orlando Resort.jpg",
      description: "Universal Orlando Resort in Orlando is a world-class entertainment destination. It includes Universal Studios Florida, Universal's Islands of Adventure, and Universal's Volcano Bay water park. Visitors can experience the magic of movies and enjoy thrilling rides, shows, and dining. It's a fantastic place for movie buffs and adventure seekers.",
      location: "Orlando, Florida",
      link: "https://www.universalorlando.com/"
    },
    {
      name: "Everglades National Park",
      photo: "/Florida/images/Everglades National Park.jpg",
      description: "Everglades National Park is a unique and vital ecosystem in southern Florida. It's known for its vast sawgrass prairies, wildlife, and waterways. Visitors can take airboat tours to spot alligators and birds, hike through mangrove forests, and learn about this natural wonder. It's an adventure for nature enthusiasts and those curious about this remarkable environment.",
      location: "Southern Florida",
      link: "https://www.nps.gov/ever/index.htm"
    },
    {
      name: "Miami Beach",
      photo: "/Florida/images/Miami Beach.jpg",
      description: "Miami Beach is a world-famous coastal city known for its beautiful beaches, vibrant art deco architecture, and lively nightlife. Visitors can soak up the sun, stroll along Ocean Drive, and enjoy the bustling scene of South Beach. It's a hotspot for beachgoers, fashionistas, and those seeking a mix of culture and fun.",
      location: "Miami Beach, Florida",
      link: "https://www.miamibeachfl.gov/"
    },
    {
      name: "Kennedy Space Center Visitor Complex",
      photo: "/Florida/images/Kennedy Space Center Visitor Complex.jpg",
      description: "The Kennedy Space Center Visitor Complex on Merritt Island is where history and the future of space exploration meet. Visitors can learn about NASA's missions, view space shuttles and rockets, and even meet astronauts. The complex offers an educational and awe-inspiring experience for space enthusiasts and those curious about the cosmos.",
      location: "Merritt Island, Florida",
      link: "https://www.kennedyspacecenter.com/"
    },
    {
      name: "Tampa Bay Area",
      photo: "/Florida/images/Tampa Bay Area.jpg",
      description: "The Tampa Bay Area on Florida's Gulf Coast is a diverse and vibrant region with a mix of culture, nature, and entertainment. Visitors can explore the historic streets of Ybor City, enjoy the white sandy beaches of Clearwater, and visit cultural institutions like The Dali Museum. It's a destination for urban exploration and coastal relaxation.",
      location: "Tampa Bay, Florida",
      link: "https://www.visittampabay.com/"
    },
    {
      name: "St. Augustine Historic District",
      photo: "/Florida/images/St. Augustine Historic District.jpg",
      description: "The St. Augustine Historic District is the oldest city in the United States, founded by the Spanish in 1565. It's known for its historic architecture, charming streets, and the Castillo de San Marcos, a 17th-century fortress. Visitors can step back in time, tour historic sites, and enjoy the ambiance of this ancient city. It's a destination for history buffs and explorers.",
      location: "St. Augustine, Florida",
      link: "https://www.floridashistoriccoast.com/"
    },
    {
      name: "Naples",
      photo: "/Florida/images/Naples.jpg",
      description: "Naples is a luxurious and sophisticated coastal town on the Gulf of Mexico. It's famous for its upscale shopping, dining, and pristine beaches. Visitors can indulge in the finer things in life, go shelling on the beach, and explore the beautiful Naples Botanical Garden. It's a destination for those seeking relaxation and a touch of elegance.",
      location: "Naples, Florida",
      link: "https://www.paradisecoast.com/"
    },
    {
      name: "Walt Disney World Resort",
      photo: "/Florida/images/Walt Disney World Resort.jpg",
      description: "The Walt Disney World Resort in Orlando is a sprawling entertainment complex featuring four theme parks: Magic Kingdom, Epcot, Disney's Hollywood Studios, and Disney's Animal Kingdom. Visitors can immerse themselves in a world of fantasy, meet beloved Disney characters, and enjoy thrilling rides and shows. It's a dream destination for families and Disney fans.",
      location: "Orlando, Florida",
      link: "https://disneyworld.disney.go.com/"
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