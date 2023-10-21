const locations = [
    {
      name: "Freedom Trail",
      photo: "/Massachusetts/images/Freedom Trail.jpg",
      description: "The Freedom Trail in Boston is a 2.5-mile-long path that leads you to 16 historically significant sites. Visitors can explore landmarks like the Massachusetts State House, Paul Revere's House, and the Old North Church. It's a journey through American history and a must-do for history buffs and those interested in the American Revolution.",
      location: "Boston, Massachusetts",
      link: "https://www.thefreedomtrail.org/"
    },
    {
      name: "Fenway Park",
      photo: "/Massachusetts/images/Fenway Park.jpg",
      description: "Fenway Park is the legendary home of the Boston Red Sox and one of the oldest baseball stadiums in the country. Visitors can attend a game, tour the stadium, and soak in the rich baseball history. It's a hallowed ground for sports enthusiasts and anyone who appreciates the national pastime.",
      location: "Boston, Massachusetts",
      link: "https://www.mlb.com/redsox/ballpark"
    },
    {
      name: "Cape Cod",
      photo: "/Massachusetts/images/Cape Cod.jpg",
      description: "Cape Cod is a picturesque peninsula known for its sandy beaches, charming villages, and maritime heritage. Visitors can relax on the Cape's beautiful shores, explore historic towns like Provincetown and Hyannis, and savor fresh seafood. It's a quintessential New England destination for beachgoers and those seeking coastal charm.",
      location: "Cape Cod, Massachusetts",
      link: "https://www.capecodchamber.org/"
    },
    {
      name: "Salem Witch Trials Memorial",
      photo: "/Massachusetts/images/Salem Witch Trials Memorial.jpg",
      description: "The Salem Witch Trials Memorial in Salem commemorates the victims of the infamous witch trials of 1692. Visitors can pay their respects, learn about the history, and explore the nearby Witch Dungeon Museum. It's a place of remembrance and historical reflection.",
      location: "Salem, Massachusetts",
      link: "https://www.salem.org/"
    },
    {
      name: "Harvard University",
      photo: "/Massachusetts/images/Harvard University.jpg",
      description: "Harvard University, located in Cambridge, is one of the world's most prestigious Ivy League institutions. Visitors can take campus tours, visit the Harvard Art Museums, and explore the historic Harvard Yard. It's a place of learning, culture, and academic excellence.",
      location: "Cambridge, Massachusetts",
      link: "https://www.harvard.edu/"
    },
    {
      name: "Plimoth Plantation",
      photo: "/Massachusetts/images/Plimoth Plantation.jpg",
      description: "Plimoth Plantation in Plymouth is a living history museum that re-creates the 17th-century Plymouth Colony. Visitors can interact with costumed interpreters, explore a Wampanoag Homesite, and learn about early American history. It's a place to step back in time and experience the colonial past.",
      location: "Plymouth, Massachusetts",
      link: "https://www.plimoth.org/"
    },
    {
      name: "Mount Greylock",
      photo: "/Massachusetts/images/Mount Greylock.jpg",
      description: "Mount Greylock is the highest peak in Massachusetts and part of the Berkshire Mountains. Visitors can hike to the summit, enjoy panoramic views, and visit the Bascom Lodge. It's a scenic escape into nature and a great destination for outdoor enthusiasts.",
      location: "Berkshire Mountains, Massachusetts",
      link: "https://www.mass.gov/locations/mount-greylock-state-reservation"
    },
    {
      name: "Old Sturbridge Village",
      photo: "/Massachusetts/images/Old Sturbridge Village.jpg",
      description: "Old Sturbridge Village is an open-air living history museum in Sturbridge. It re-creates a New England village from the 1830s with historic buildings, costumed interpreters, and period demonstrations. Visitors can experience early American life, crafts, and agriculture. It's a place for historical immersion and family-friendly exploration.",
      location: "Sturbridge, Massachusetts",
      link: "https://www.osv.org/"
    },
    {
      name: "Isabella Stewart Gardner Museum",
      photo: "/Massachusetts/images/Isabella Stewart Gardner Museum.jpg",
      description: "The Isabella Stewart Gardner Museum in Boston is a unique art museum housed in a Venetian-style palace. Visitors can view a diverse art collection, including masterpieces by Vermeer, Rembrandt, and Sargent. The museum's beautiful courtyard and historic architecture are as impressive as the art within. It's a cultural gem and a place for art appreciation.",
      location: "Boston, Massachusetts",
      link: "https://www.gardnermuseum.org/"
    },
    {
      name: "The Eric Carle Museum of Picture Book Art",
      photo: "/Massachusetts/images/The Eric Carle Museum of Picture Book Art.jpg",
      description: "The Eric Carle Museum of Picture Book Art in Amherst is a delightful museum dedicated to children's literature and illustration. Visitors can explore galleries filled with picture book art, participate in creative activities, and learn about the works of famous authors and illustrators. It's a charming and educational destination for families and art enthusiasts.",
      location: "Amherst, Massachusetts",
      link: "https://www.carlemuseum.org/"
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