const locations = [
    {
      name: "The Breakers",
      photo: "/Rhode-Island/images/The Breakers.jpg",
      description: "The Breakers is a magnificent mansion in Newport, built as a summer cottage for the Vanderbilt family. Visitors can tour the opulent Gilded Age mansion, admire its architecture, and stroll through the formal gardens. It's a place of grandeur, history, and architectural splendor.",
      location: "Newport, Rhode Island",
      link: "https://www.newportmansions.org/explore/the-breakers"
    },
    {
      name: "Roger Williams Park Zoo",
      photo: "/Rhode-Island/images/Roger Williams Park Zoo.jpg",
      description: "Roger Williams Park Zoo in Providence is a family-friendly attraction featuring a wide variety of animals. Visitors can see elephants, giraffes, and red pandas, and explore the park's educational exhibits. It's a place for wildlife encounters and conservation awareness.",
      location: "Providence, Rhode Island",
      link: "https://www.rwpzoo.org/"
    },
    {
      name: "WaterFire Providence",
      photo: "/Rhode-Island/images/WaterFire Providence.jpg",
      description: "WaterFire Providence is a unique art installation and event that lights up the rivers of downtown Providence with bonfires on the water. Visitors can enjoy the magical atmosphere, music, and food during WaterFire events. It's a place for cultural experiences and enchanting evenings.",
      location: "Providence, Rhode Island",
      link: "https://waterfire.org/"
    },
    {
      name: "Newport Cliff Walk",
      photo: "/Rhode-Island/images/Newport Cliff Walk.jpg",
      description: "The Newport Cliff Walk is a scenic 3.5-mile public walkway along the coast of Newport. Visitors can enjoy breathtaking ocean views and pass by historic mansions. It's a place for outdoor enthusiasts and a glimpse into the Gilded Age of Newport.",
      location: "Newport, Rhode Island",
      link: "https://www.cliffwalk.com/"
    },
    {
      name: "Providence Performing Arts Center",
      photo: "/Rhode-Island/images/Providence Performing Arts Center.jpg",
      description: "The Providence Performing Arts Center is a historic theater in downtown Providence. Visitors can attend Broadway shows, concerts, and other live performances in an ornate and elegant setting. It's a place for theatergoers and a dose of culture and entertainment.",
      location: "Providence, Rhode Island",
      link: "https://www.ppacri.org/"
    },
    {
      name: "Beavertail State Park",
      photo: "/Rhode-Island/images/Beavertail State Park.jpg",
      description: "Beavertail State Park in Jamestown offers stunning coastal views and outdoor recreation. Visitors can explore the rocky shoreline, go hiking, and enjoy picnicking. It's a place of natural beauty and a prime spot for watching sunsets.",
      location: "Jamestown, Rhode Island",
      link: "https://www.riparks.com/Locations/LocationBeavertail.html"
    },
    {
      name: "Mystic Aquarium",
      photo: "/Rhode-Island/images/Mystic Aquarium.jpg",
      description: "Mystic Aquarium in Mystic, Connecticut, is a popular attraction near the Rhode Island border. Visitors can see a wide variety of marine animals, including beluga whales, sea lions, and penguins. It's a place for family outings and aquatic discoveries.",
      location: "Mystic, Connecticut (Near Rhode Island)",
      link: "https://www.mysticaquarium.org/"
    },
    {
      name: "Blackstone River Bikeway",
      photo: "/Rhode-Island/images/Blackstone River Bikeway.jpg",
      description: "The Blackstone River Bikeway is a scenic 18.2-mile bike path running from Worcester, Massachusetts, to Providence, Rhode Island. Visitors can cycle through picturesque landscapes, parks, and historical sites. It's a place for cyclists and outdoor adventures.",
      location: "Worcester, Massachusetts, to Providence, Rhode Island",
      link: "https://www.blackstoneheritagecorridor.org/discover-bhc/recreation/bikeway/"
    },
    {
      name: "Touro Synagogue",
      photo: "/Rhode-Island/images/Touro Synagogue.jpg",
      description: "Touro Synagogue in Newport is one of the oldest synagogues in the United States. Visitors can tour the historic synagogue and learn about its significance in American religious freedom. It's a place of historical importance and cultural heritage.",
      location: "Newport, Rhode Island",
      link: "https://tourosynagogue.org/"
    },
    {
      name: "Rail Explorers",
      photo: "/Rhode-Island/images/Rail Explorers.jpg",
      description: "Rail Explorers in Portsmouth offers a unique adventure on pedal-powered rail bikes. Visitors can ride the rails and enjoy scenic views along historic rail lines. It's a place for outdoor fun and a memorable rail journey.",
      location: "Portsmouth, Rhode Island",
      link: "https://railexplorers.net/"
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