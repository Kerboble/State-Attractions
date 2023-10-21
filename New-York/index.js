const locations = [
    {
      name: "Statue of Liberty",
      photo: "/New-York/images/Statue of Liberty.jpg",
      description: "The Statue of Liberty is an iconic symbol of freedom and democracy in the United States. Visitors can take a ferry to Liberty Island, explore the pedestal and crown, and learn about the statue's history. It offers breathtaking views of the New York Harbor and the city skyline. It's a must-visit landmark for both history and stunning views.",
      location: "New York Harbor, New York",
      link: "https://www.nps.gov/stli/index.htm"
    },
    {
      name: "Central Park",
      photo: "/New-York/images/Central Park.jpg",
      description: "Central Park is a vast urban oasis in the heart of Manhattan. Visitors can stroll through the scenic landscapes, enjoy boating on the lakes, visit the Central Park Zoo, and discover numerous sculptures and attractions. It's a place of relaxation, outdoor activities, and cultural exploration.",
      location: "New York City, New York",
      link: "https://www.centralparknyc.org/"
    },
    {
      name: "Times Square",
      photo: "/New-York/images/Times Square.jpg",
      description: "Times Square is a world-famous commercial and entertainment hub in New York City. Visitors can experience the dazzling lights, Broadway theaters, and a lively atmosphere. It's a place for shopping, dining, and taking in the excitement of the city that never sleeps.",
      location: "New York City, New York",
      link: "https://www.timessquarenyc.org/"
    },
    {
      name: "Empire State Building",
      photo: "/New-York/images/Empire State Building.jpg",
      description: "The Empire State Building is an iconic skyscraper with an observatory offering panoramic views of New York City. Visitors can take the elevator to the 86th or 102nd floor and enjoy breathtaking vistas. It's a symbol of the city's skyline and a place for awe-inspiring views.",
      location: "New York City, New York",
      link: "https://www.esbnyc.com/"
    },
    {
      name: "The Metropolitan Museum of Art",
      photo: "/New-York/images/The Metropolitan Museum of Art.jpg",
      description: "The Metropolitan Museum of Art, known as The Met, is one of the world's largest and most prestigious art museums. Visitors can explore a vast collection of art from various cultures and time periods, including European paintings, ancient artifacts, and decorative arts. It's a place for art connoisseurs and cultural enrichment.",
      location: "New York City, New York",
      link: "https://www.metmuseum.org/"
    },
    {
      name: "Broadway",
      photo: "/New-York/images/Broadway.jpg",
      description: "Broadway is the epicenter of live theater in the United States. Visitors can attend world-class musicals, plays, and performances at historic theaters like the Broadway Theatre and the Winter Garden Theatre. It's a place for theater enthusiasts and a chance to experience the magic of live performances.",
      location: "New York City, New York",
      link: "https://www.broadway.com/"
    },
    {
      name: "Brooklyn Bridge",
      photo: "/New-York/images/Brooklyn Bridge.jpg",
      description: "The Brooklyn Bridge is an architectural marvel and a historic suspension bridge connecting Manhattan and Brooklyn. Visitors can walk or bike across the bridge, taking in stunning views of the skyline and the East River. It's a symbol of the city's engineering and a place for a memorable stroll.",
      location: "New York City, New York",
      link: "https://www.nycgo.com/attractions/brooklyn-bridge/"
    },
    {
      name: "Museum of Modern Art (MoMA)",
      photo: "/New-York/images/Museum of Modern Art (MoMA).jpg",
      description: "The Museum of Modern Art (MoMA) is a renowned institution dedicated to modern and contemporary art. Visitors can view a vast collection of paintings, sculptures, and other forms of artistic expression. It's a place for art appreciation and exploring the cutting-edge of the art world.",
      location: "New York City, New York",
      link: "https://www.moma.org/"
    },
    {
      name: "Niagara Falls",
      photo: "/New-York/images/Niagara Falls.jpg",
      description: "Niagara Falls, located on the border of New York and Canada, is one of the world's most famous natural wonders. Visitors can witness the breathtaking falls, take boat tours, and explore the surrounding park. It's a place of natural beauty, adventure, and awe-inspiring views.",
      location: "Niagara Falls, New York",
      link: "https://www.niagarafallsstatepark.com/"
    },
    {
      name: "The Bronx Zoo",
      photo: "/New-York/images/The Bronx Zoo.jpg",
      description: "The Bronx Zoo is one of the largest metropolitan zoos in the world. Visitors can see a diverse array of animals, including lions, tigers, and gorillas, in naturalistic habitats. It's a place for family outings, wildlife education, and conservation awareness.",
      location: "Bronx, New York",
      link: "https://bronxzoo.com/"
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