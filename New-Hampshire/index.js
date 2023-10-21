const locations = [
    {
      name: "White Mountains",
      photo: "/New-Hampshire/images/White Mountains.jpg",
      description: "The White Mountains in New Hampshire are a scenic wonderland with rugged peaks, pristine forests, and outdoor recreation. Visitors can hike the Appalachian Trail, go skiing in winter, and explore the beauty of Franconia Notch State Park. It's a destination for nature lovers and adventure seekers.",
      location: "Northern New Hampshire",
      link: "https://www.visitwhitemountains.com/"
    },
    {
      name: "Mount Washington",
      photo: "/New-Hampshire/images/Mount Washington.jpg",
      description: "Mount Washington, part of the Presidential Range, is the highest peak in the Northeastern United States. Visitors can drive the Auto Road, take the Cog Railway, or hike to the summit for breathtaking views. The observatory at the top records some of the world's worst weather. It's an iconic destination for mountain enthusiasts and explorers.",
      location: "Sargent's Purchase, New Hampshire",
      link: "https://www.mountwashington.org/"
    },
    {
      name: "Franconia Notch State Park",
      photo: "/New-Hampshire/images/Franconia Notch State Park.jpg",
      description: "Franconia Notch State Park is a natural treasure in the White Mountains. Visitors can explore the Flume Gorge, ride the aerial tramway to Cannon Mountain, and hike to stunning waterfalls. The park offers outdoor adventures and a chance to connect with the beauty of New Hampshire's wilderness.",
      location: "Franconia, New Hampshire",
      link: "https://www.nhstateparks.org/visit/state-parks/franconia-notch-state-park"
    },
    {
      name: "Lake Winnipesaukee",
      photo: "/New-Hampshire/images/Lake Winnipesaukee.jpg",
      description: "Lake Winnipesaukee is one of New Hampshire's largest and most picturesque lakes. Visitors can enjoy boating, fishing, swimming, and exploring the charming lakeside towns like Wolfeboro and Meredith. It's a recreational paradise and a place for lakeside relaxation.",
      location: "Central New Hampshire",
      link: "https://www.lakewinnipesaukee.net/"
    },
    {
      name: "Portsmouth",
      photo: "/New-Hampshire/images/Portsmouth.jpg",
      description: "Portsmouth is a historic coastal city known for its colonial architecture, vibrant arts scene, and maritime heritage. Visitors can explore Strawbery Banke Museum, stroll through Market Square, and enjoy seafood by the harbor. It's a charming destination for history buffs and those seeking New England's coastal charm.",
      location: "Portsmouth, New Hampshire",
      link: "https://www.goportsmouthnh.com/"
    },
    {
      name: "Diana's Baths",
      photo: "/New-Hampshire/images/Diana's Baths.jpg",
      description: "Diana's Baths is a series of beautiful, natural waterfalls in the White Mountains. Visitors can hike to these cascading falls, swim in the crystal-clear pools, and enjoy the surrounding forest. It's a tranquil and scenic spot for nature lovers and a great place to cool off in the summer.",
      location: "North Conway, New Hampshire",
      link: "https://www.fs.usda.gov/recarea/whitemountain/recarea/?recid=74405"
    },
    {
      name: "Kancamagus Highway",
      photo: "/New-Hampshire/images/Kancamagus Highway.jpg",
      description: "The Kancamagus Highway is a scenic byway through the White Mountains. Visitors can drive this beautiful route, stopping at overlooks, trails, and the Swift River. It's a journey through unspoiled wilderness and a place to experience the beauty of New Hampshire's mountains.",
      location: "White Mountains, New Hampshire",
      link: "https://www.kancamagushighway.com/"
    },
    {
      name: "Mount Monadnock",
      photo: "/New-Hampshire/images/Mount Monadnock.jpg",
      description: "Mount Monadnock is a popular hiking destination in New Hampshire. Visitors can ascend to the summit for panoramic views of the surrounding landscape. It's a place for outdoor enthusiasts and hikers of all levels to enjoy the challenge and beauty of the mountain.",
      location: "Jaffrey, New Hampshire",
      link: "https://www.nhstateparks.org/visit/state-parks/monadnock-state-park"
    },
    {
      name: "Castle in the Clouds",
      photo: "/New-Hampshire/images/Castle in the Clouds.jpg",
      description: "Castle in the Clouds is a historic mansion perched atop the Ossipee Mountains. Visitors can tour the mansion, gardens, and trails while taking in stunning Lake Winnipesaukee views. It's a place to step back in time and experience the grandeur of early 20th-century New Hampshire.",
      location: "Moultonborough, New Hampshire",
      link: "https://www.castleintheclouds.org/"
    },
    {
      name: "Clark's Trading Post",
      photo: "/New-Hampshire/images/Clark's Trading Post.jpg",
      description: "Clark's Trading Post in Lincoln is a family-friendly attraction featuring trained bear shows, a steam train, and the White Mountain Central Railroad. Visitors can enjoy entertaining performances, go on the water raft ride, and explore the old-time trading post. It's a place for amusement and nostalgia.",
      location: "Lincoln, New Hampshire",
      link: "https://www.clarkstradingpost.com/"
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