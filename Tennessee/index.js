const locations = [
    {
      name: "Graceland",
      photo: "/Tennessee/images/Graceland.jpg",
      description: "Graceland in Memphis is the former home of Elvis Presley, the King of Rock 'n' Roll. Visitors can tour the mansion, Elvis's car collection, and his final resting place. It's a place of music history, nostalgia, and Elvis's legacy.",
      location: "Memphis, Tennessee",
      link: "https://www.graceland.com/"
    },
    {
      name: "Great Smoky Mountains National Park",
      photo: "/Tennessee/images/Great Smoky Mountains National Park.jpg",
      description: "Great Smoky Mountains National Park, straddling the Tennessee and North Carolina border, is a natural wonderland. Visitors can explore lush forests, hike to waterfalls, and observe diverse wildlife. It's a haven for outdoor enthusiasts and a UNESCO World Heritage Site.",
      location: "Tennessee and North Carolina",
      link: "https://www.nps.gov/grsm/index.htm"
    },
    {
      name: "Dollywood",
      photo: "/Tennessee/images/Dollywood.jpg",
      description: "Dollywood in Pigeon Forge is a theme park and entertainment complex created by Dolly Parton. Visitors can enjoy thrilling rides, live shows, and experience the charm of the Smoky Mountains. It's a place for family fun and country music vibes.",
      location: "Pigeon Forge, Tennessee",
      link: "https://www.dollywood.com/"
    },
    {
      name: "Country Music Hall of Fame and Museum",
      photo: "/Tennessee/images/Country Music Hall of Fame and Museum.jpg",
      description: "The Country Music Hall of Fame and Museum in Nashville celebrates the history of country music. Visitors can explore exhibits featuring legendary artists, iconic instruments, and the evolution of the genre. It's a place of music history and interactive displays.",
      location: "Nashville, Tennessee",
      link: "https://countrymusichalloffame.org/"
    },
    {
      name: "Ruby Falls",
      photo: "/Tennessee/images/Ruby Falls.jpg",
      description: "Ruby Falls in Chattanooga is an underground waterfall located within Lookout Mountain. Visitors can take guided tours through caves to reach the stunning 145-foot waterfall. It's a place of natural beauty, geology, and underground wonders.",
      location: "Chattanooga, Tennessee",
      link: "https://www.rubyfalls.com/"
    },
    {
      name: "Sun Studio",
      photo: "/Tennessee/images/Sun Studio.jpg",
      description: "Sun Studio in Memphis is often referred to as the Birthplace of Rock 'n' Roll. Visitors can take guided tours to learn about the studio's history and its famous recordings by Elvis Presley and other legends. It's a place of musical heritage and rock history.",
      location: "Memphis, Tennessee",
      link: "https://www.sunstudio.com/"
    },
    {
        name: "Grand Ole Opry",
        photo: "/Tennessee/images/Grand Ole Opry.jpg",
        description: "The Grand Ole Opry in Nashville is a legendary country music venue. Visitors can attend live performances featuring top country artists, experience the rich history of the Opry, and enjoy the authentic country music atmosphere. It's a place for country music enthusiasts and a true Nashville experience.",
        location: "Nashville, Tennessee",
        link: "https://www.opry.com/"
      },
    {
      name: "The Parthenon",
      photo: "/Tennessee/images/The Parthenon.jpg",
      description: "The Parthenon in Nashville is a full-scale replica of the ancient Parthenon in Athens, Greece. Visitors can admire the impressive architecture, view art exhibits, and see the iconic statue of Athena Parthenos. It's a place of art, culture, and classical beauty.",
      location: "Nashville, Tennessee",
      link: "https://www.nashville.gov/Parks-and-Recreation/Parthenon.aspx"
    },
    {
      name: "Jack Daniel's Distillery",
      photo: "/Tennessee/images/Jack Daniel's Distillery.jpg",
      description: "Jack Daniel's Distillery in Lynchburg is the home of the famous Jack Daniel's Tennessee Whiskey. Visitors can take guided tours to learn about the whiskey-making process and the history of the brand. It's a place for whiskey enthusiasts and a taste of Tennessee's heritage.",
      location: "Lynchburg, Tennessee",
      link: "https://www.jackdaniels.com/en-us/visit-us"
    },
    {
      name: "Lookout Mountain Incline Railway",
      photo: "/Tennessee/images/Lookout Mountain Incline Railway.jpg",
      description: "The Lookout Mountain Incline Railway in Chattanooga is one of the steepest passenger railways in the world. Visitors can ride the railway to the top of Lookout Mountain for panoramic views. It's a place for scenic beauty and a unique railway experience.",
      location: "Chattanooga, Tennessee",
      link: "https://www.ridetheincline.com/"
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
  