const locations = [
    {
      name: "Liberty State Park",
      photo: "/New-Jersey/images/Liberty State Park.jpg",
      description: "Liberty State Park in Jersey City offers stunning views of the Statue of Liberty, Ellis Island, and the Manhattan skyline. Visitors can enjoy picnicking, walking, and cycling. The park is home to Liberty Science Center and Liberty Science High School. It's a place of natural beauty and cultural attractions.",
      location: "Jersey City, New Jersey",
      link: "https://www.nj.gov/dep/parksandforests/parks/liberty.html"
    },
    {
      name: "Atlantic City Boardwalk",
      photo: "/New-Jersey/images/Atlantic City Boardwalk.jpg",
      description: "The Atlantic City Boardwalk is an iconic seaside promenade known for its casinos, entertainment, and amusements. Visitors can enjoy strolling along the boardwalk, trying their luck at casinos, and taking in the ocean views. It's a place for gaming, nightlife, and classic beachfront fun.",
      location: "Atlantic City, New Jersey",
      link: "https://www.atlanticcitynj.com/"
    },
    {
      name: "Cape May",
      photo: "/New-Jersey/images/Cape May.jpg",
      description: "Cape May is a charming Victorian-era town at the southern tip of New Jersey. Visitors can explore well-preserved historic buildings, enjoy the sandy beaches, and go birdwatching at Cape May Point. It's a place of quaint architecture, natural beauty, and relaxation.",
      location: "Cape May, New Jersey",
      link: "https://capemay.com/"
    },
    {
      name: "Six Flags Great Adventure",
      photo: "/New-Jersey/images/Six Flags Great Adventure.jpg",
      description: "Six Flags Great Adventure in Jackson is a massive amusement park and safari. Visitors can enjoy thrilling rides, see exotic animals on safari tours, and attend live entertainment. It's a destination for family fun, roller coasters, and animal encounters.",
      location: "Jackson, New Jersey",
      link: "https://www.sixflags.com/greatadventure"
    },
    {
      name: "Princeton University",
      photo: "/New-Jersey/images/Princeton University.jpg",
      description: "Princeton University in Princeton is one of the Ivy League institutions and a prestigious center of learning. Visitors can take guided campus tours, visit the Princeton University Art Museum, and explore Nassau Street. It's a place of academic excellence, history, and culture.",
      location: "Princeton, New Jersey",
      link: "https://www.princeton.edu/"
    },
    {
      name: "Battleship New Jersey Museum and Memorial",
      photo: "/New-Jersey/images/Battleship New Jersey Museum and Memorial.jpg",
      description: "The Battleship New Jersey Museum and Memorial in Camden offers a unique opportunity to tour the historic USS New Jersey battleship. Visitors can explore the ship's decks, view exhibits, and learn about its military history. It's a place for naval enthusiasts and those interested in America's military past.",
      location: "Camden, New Jersey",
      link: "https://www.battleshipnewjersey.org/"
    },
    {
      name: "Island Beach State Park",
      photo: "/New-Jersey/images/Island Beach State Park.jpg",
      description: "Island Beach State Park is a natural haven along the Jersey Shore. Visitors can relax on pristine beaches, swim in the Atlantic Ocean, and explore diverse ecosystems. The park is known for its birdwatching opportunities and hiking trails. It's a place of coastal beauty and outdoor recreation.",
      location: "Seaside Park, New Jersey",
      link: "https://www.state.nj.us/dep/parksandforests/parks/island.html"
    },
    {
      name: "Grounds For Sculpture",
      photo: "/New-Jersey/images/Grounds For Sculpture.jpg",
      description: "Grounds For Sculpture in Hamilton is a unique art center featuring outdoor sculptures in beautifully landscaped gardens. Visitors can explore the artistic installations, enjoy events and performances, and dine at the Rat's Restaurant. It's a place for art lovers, nature enthusiasts, and creative inspiration.",
      location: "Hamilton, New Jersey",
      link: "https://www.groundsforsculpture.org/"
    },
    {
      name: "Thomas Edison National Historical Park",
      photo: "/New-Jersey/images/Thomas Edison National Historical Park.jpg",
      description: "Thomas Edison National Historical Park in West Orange preserves the laboratory and home of the renowned inventor Thomas Edison. Visitors can tour the historic site, see Edison's inventions, and learn about his life and work. It's a place of innovation and scientific history.",
      location: "West Orange, New Jersey",
      link: "https://www.nps.gov/edis/index.htm"
    },
    {
      name: "The Adventure Aquarium",
      photo: "/New-Jersey/images/The Adventure Aquarium.jpg",
      description: "The Adventure Aquarium in Camden is a popular family attraction featuring marine life exhibits. Visitors can explore underwater tunnels, see sharks, and interact with penguins. The aquarium offers educational programs and hands-on experiences. It's a place for aquatic adventures and learning.",
      location: "Camden, New Jersey",
      link: "https://www.adventureaquarium.com/"
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
    attractionElements.forEach((el) => observer.observe(el))