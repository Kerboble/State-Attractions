const locations = [
    {
      name: "Rock and Roll Hall of Fame",
      photo: "/Ohio/images/Rock and Roll Hall of Fame.jpg",
      description: "The Rock and Roll Hall of Fame in Cleveland celebrates the history of rock and roll music. Visitors can explore exhibits featuring legendary artists, iconic instruments, and the evolution of the genre. It's a place of music history, interactive displays, and memorable performances.",
      location: "Cleveland, Ohio",
      link: "https://www.rockhall.com/"
    },
    {
      name: "Cedar Point",
      photo: "/Ohio/images/Cedar Point.jpg",
      description: "Cedar Point in Sandusky is one of the top amusement parks in the world, known for its thrilling roller coasters and family-friendly attractions. Visitors can enjoy adrenaline-pumping rides, water parks, and live entertainment. It's a destination for thrill-seekers and family fun.",
      location: "Sandusky, Ohio",
      link: "https://www.cedarpoint.com/"
    },
    {
      name: "Hocking Hills State Park",
      photo: "/Ohio/images/Hocking Hills State Park.jpg",
      description: "Hocking Hills State Park is a natural wonderland in southeastern Ohio, featuring stunning rock formations, waterfalls, and hiking trails. Visitors can explore Ash Cave, Old Man's Cave, and Cedar Falls. It's a place of outdoor adventure, scenic beauty, and tranquility.",
      location: "Logan, Ohio",
      link: "https://www.hockinghills.com/"
    },
    {
      name: "Pro Football Hall of Fame",
      photo: "/Ohio/images/Pro Football Hall of Fame.jpg",
      description: "The Pro Football Hall of Fame in Canton honors the legends of American football. Visitors can view exhibits dedicated to NFL history, explore the Hall of Fame gallery, and learn about iconic players and coaches. It's a place for football enthusiasts and sports history buffs.",
      location: "Canton, Ohio",
      link: "https://www.profootballhof.com/"
    },
    {
      name: "Columbus Zoo and Aquarium",
      photo: "/Ohio/images/Columbus Zoo and Aquarium.jpg",
      description: "The Columbus Zoo and Aquarium is one of the country's most renowned zoos. Visitors can see a wide variety of animals, including polar bears, manatees, and gorillas, and explore educational exhibits. It's a place for family outings, wildlife conservation, and animal encounters.",
      location: "Powell, Ohio",
      link: "https://www.columbuszoo.org/"
    },
    {
      name: "Amish Country",
      photo: "/Ohio/images/Amish Country.jpg",
      description: "Ohio's Amish Country, centered in Holmes County, offers a glimpse into the traditional Amish way of life. Visitors can explore Amish farms, enjoy homemade goods, and experience the simplicity and craftsmanship of the community. It's a place for cultural immersion and handmade products.",
      location: "Holmes County, Ohio",
      link: "https://www.visitamishcountry.com/"
    },
    {
      name: "The Cincinnati Zoo and Botanical Garden",
      photo: "/Ohio/images/The Cincinnati Zoo and Botanical Garden.jpg",
      description: "The Cincinnati Zoo and Botanical Garden is one of the oldest zoos in the United States. Visitors can see a wide range of animals, explore lush gardens, and participate in educational programs. It's a place for family fun, botanical beauty, and wildlife conservation.",
      location: "Cincinnati, Ohio",
      link: "https://cincinnatizoo.org/"
    },
    {
      name: "The Cleveland Museum of Art",
      photo: "/Ohio/images/The Cleveland Museum of Art.jpg",
      description: "The Cleveland Museum of Art is renowned for its extensive and diverse art collection. Visitors can admire works from various time periods and cultures, including European and Asian art. It's a place for art lovers and cultural exploration.",
      location: "Cleveland, Ohio",
      link: "https://www.clevelandart.org/"
    },
    {
      name: "Kings Island",
      photo: "/Ohio/images/Kings Island.jpg",
      description: "Kings Island in Mason is a popular amusement park with a variety of rides and attractions for all ages. Visitors can enjoy roller coasters, water parks, and live entertainment. It's a destination for family outings and thrilling adventures.",
      location: "Mason, Ohio",
      link: "https://www.visitkingsisland.com/"
    },
    {
      name: "The National Underground Railroad Freedom Center",
      photo: "/Ohio/images/The National Underground Railroad Freedom Center.jpg",
      description: "The National Underground Railroad Freedom Center in Cincinnati explores the history of the Underground Railroad and the struggle for freedom. Visitors can engage with interactive exhibits and learn about the stories of freedom seekers. It's a place of historical significance and social justice education.",
      location: "Cincinnati, Ohio",
      link: "https://freedomcenter.org/"
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