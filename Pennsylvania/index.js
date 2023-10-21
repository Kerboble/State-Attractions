const locations = [
    {
      name: "Independence National Historical Park",
      photo: "/Pennsylvania/images/Independence National Historical Park.jpg",
      description: "Independence National Historical Park in Philadelphia is a significant site in American history. Visitors can explore Independence Hall, the Liberty Bell Center, and other historic buildings. It's a place to learn about the birth of the United States and the principles of freedom.",
      location: "Philadelphia, Pennsylvania",
      link: "https://www.nps.gov/inde/index.htm"
    },
    {
      name: "Gettysburg National Military Park",
      photo: "/Pennsylvania/images/Gettysburg National Military Park.jpg",
      description: "Gettysburg National Military Park commemorates the pivotal Battle of Gettysburg during the American Civil War. Visitors can tour the battlefield, see monuments, and learn about this historic conflict. It's a place of historical significance and reflection.",
      location: "Gettysburg, Pennsylvania",
      link: "https://www.nps.gov/gett/index.htm"
    },
    {
      name: "Hersheypark",
      photo: "/Pennsylvania/images/Hersheypark.jpg",
      description: "Hersheypark in Hershey is a popular amusement park and entertainment complex. Visitors can enjoy a wide range of rides, water attractions, and live shows. It's a destination for family fun and sweet adventures.",
      location: "Hershey, Pennsylvania",
      link: "https://www.hersheypark.com/"
    },
    {
      name: "Ricketts Glen State Park",
      photo: "/Pennsylvania/images/Ricketts Glen State Park.jpg",
      description: "Ricketts Glen State Park in Benton is known for its old-growth forests and stunning waterfalls. Visitors can hike the Falls Trail, which passes by 21 waterfalls. It's a place for outdoor enthusiasts and nature lovers.",
      location: "Benton, Pennsylvania",
      link: "https://www.dcnr.pa.gov/StateParks/FindAPark/RickettsGlenStatePark/Pages/default.aspx"
    },
    {
      name: "Eastern State Penitentiary",
      photo: "/Pennsylvania/images/Eastern State Penitentiary.jpg",
      description: "Eastern State Penitentiary in Philadelphia is a historic prison turned museum. Visitors can take guided tours to learn about its innovative design and infamous inmates. It's a place of curiosity, history, and the eerie world of incarceration.",
      location: "Philadelphia, Pennsylvania",
      link: "https://www.easternstate.org/"
    },
    {
      name: "The Andy Warhol Museum",
      photo: "/Pennsylvania/images/The Andy Warhol Museum.jpg",
      description: "The Andy Warhol Museum in Pittsburgh is the largest museum dedicated to a single artist in the United States. Visitors can explore the life and art of pop culture icon Andy Warhol. It's a place for art enthusiasts and a unique look into the world of pop art.",
      location: "Pittsburgh, Pennsylvania",
      link: "https://www.warhol.org/"
    },
    {
      name: "Kennywood",
      photo: "/Pennsylvania/images/Kennywood.jpg",
      description: "Kennywood in West Mifflin is an historic amusement park known for its classic rides and modern attractions. Visitors can enjoy roller coasters, family rides, and delicious theme park food. It's a destination for nostalgic fun and thrilling experiences.",
      location: "West Mifflin, Pennsylvania",
      link: "https://www.kennywood.com/"
    },
    {
      name: "Longwood Gardens",
      photo: "/Pennsylvania/images/Longwood Gardens.jpg",
      description: "Longwood Gardens in Kennett Square is a horticultural paradise featuring lush gardens, conservatories, and seasonal displays. Visitors can stroll through acres of botanical beauty and attend special events. It's a place for nature lovers and a feast for the senses.",
      location: "Kennett Square, Pennsylvania",
      link: "https://longwoodgardens.org/"
    },
    {
      name: "Carnegie Museums of Pittsburgh",
      photo: "/Pennsylvania/images/Carnegie Museums of Pittsburgh.jpg",
      description: "The Carnegie Museums in Pittsburgh include a network of four distinct museums. Visitors can explore the Carnegie Museum of Art, the Carnegie Museum of Natural History, the Carnegie Science Center, and the Andy Warhol Museum. It's a place for diverse cultural experiences and educational opportunities.",
      location: "Pittsburgh, Pennsylvania",
      link: "https://carnegiemuseums.org/"
    },
    {
      name: "Presque Isle State Park",
      photo: "/Pennsylvania/images/Presque Isle State Park.jpg",
      description: "Presque Isle State Park in Erie is a peninsula on Lake Erie known for its sandy beaches and outdoor activities. Visitors can swim, boat, hike, and enjoy birdwatching. It's a place of natural beauty and a coastal escape.",
      location: "Erie, Pennsylvania",
      link: "https://www.dcnr.pa.gov/StateParks/FindAPark/PresqueIsleStatePark/Pages/default.aspx"
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