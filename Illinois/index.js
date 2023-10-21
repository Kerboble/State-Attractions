const locations = [
    {
      name: "Art Institute of Chicago",
      photo: "/Illinois/images/Art Institute of Chicago.jpg",
      description: "The Art Institute of Chicago is one of the oldest and largest art museums in the United States. It houses a vast collection of art, including iconic works like Grant Wood's 'American Gothic' and Vincent van Gogh's 'The Bedroom.' Visitors can explore diverse galleries, attend special exhibitions, and immerse themselves in the world of art and culture. It's a must-visit for art enthusiasts and history buffs.",
      location: "Chicago, Illinois",
      link: "https://www.artic.edu/"
    },
    {
      name: "Millennium Park",
      photo: "/Illinois/images/Millennium Park.jpg",
      description: "Millennium Park in downtown Chicago is an iconic urban park known for its public art and unique architecture. Visitors can marvel at the reflective Cloud Gate sculpture, also known as 'The Bean,' enjoy outdoor concerts, and relax in the serene Lurie Garden. The park is a hub of cultural events and a fantastic destination for art and music lovers.",
      location: "Chicago, Illinois",
      link: "https://www.chicago.gov/city/en/depts/dca/supp_info/millennium_park.html"
    },
    {
      name: "The Field Museum",
      photo: "/Illinois/images/The Field Museum.jpg",
      description: "The Field Museum in Chicago is a renowned natural history museum. It features an extensive collection of artifacts, including Sue, the world's largest T. rex, and ancient Egyptian mummies. Visitors can explore exhibitions on anthropology, geology, and paleontology. It's a journey through the wonders of the natural world and a captivating experience for science enthusiasts and curious minds.",
      location: "Chicago, Illinois",
      link: "https://www.fieldmuseum.org/"
    },
    {
      name: "Navy Pier",
      photo: "/Illinois/images/Navy Pier.jpg",
      description: "Navy Pier in Chicago is a historic and iconic pier along Lake Michigan's shoreline. It offers a wide range of entertainment and cultural attractions, including the Centennial Wheel, IMAX theater, and the Chicago Children's Museum. Visitors can enjoy panoramic lake views, dine at waterfront restaurants, and participate in various events. It's a lively and family-friendly destination for fun and leisure.",
      location: "Chicago, Illinois",
      link: "https://navypier.org/"
    },
    {
      name: "Shedd Aquarium",
      photo: "/Illinois/images/Shedd Aquarium.jpg",
      description: "The Shedd Aquarium in Chicago is one of the largest indoor aquariums in the world. It's home to a diverse aquatic ecosystem, including dolphins, penguins, and a variety of fish species. Visitors can explore interactive exhibits, watch aquatic presentations, and even engage in animal encounters. The aquarium is a marine wonderland and a fantastic place for underwater enthusiasts.",
      location: "Chicago, Illinois",
      link: "https://www.sheddaquarium.org/"
    },
    {
      name: "Lincoln Park Zoo",
      photo: "/Illinois/images/Lincoln Park Zoo.jpg",
      description: "The Lincoln Park Zoo in Chicago is one of the nation's oldest zoos, featuring a wide range of animals from around the world. Visitors can observe lions, giraffes, and primates, all in a lush and naturalistic setting. The zoo offers educational programs, seasonal events, and is a perfect place for a family day out and wildlife enthusiasts.",
      location: "Chicago, Illinois",
      link: "https://www.lpzoo.org/"
    },
    {
      name: "Willis Tower Skydeck",
      photo: "/Illinois/images/Willis Tower Skydeck.jpg",
      description: "The Willis Tower Skydeck in Chicago provides breathtaking views of the city skyline from the 103rd floor of this iconic skyscraper. Visitors can step out onto 'The Ledge,' a glass-bottomed platform, and feel like they're walking on air. It's an unforgettable experience for thrill-seekers and anyone looking to see Chicago from new heights.",
      location: "Chicago, Illinois",
      link: "https://theskydeck.com/"
    },
    {
      name: "Cahokia Mounds State Historic Site",
      photo: "/Illinois/images/Cahokia Mounds State Historic Site.jpg",
      description: "Cahokia Mounds State Historic Site in Collinsville is home to the largest pre-Columbian earthwork complex in North America. It was once the center of a thriving Native American civilization. Visitors can explore ancient mounds, walk the interpretive trails, and learn about the history of this remarkable site. It's a destination for history buffs and those interested in Native American culture.",
      location: "Collinsville, Illinois",
      link: "https://cahokiamounds.org/"
    },
    {
      name: "Starved Rock State Park",
      photo: "/Illinois/images/Starved Rock State Park.jpg",
      description: "Starved Rock State Park in Oglesby is known for its scenic canyons, waterfalls, and forested bluffs along the Illinois River. Visitors can hike the park's many trails, enjoy birdwatching, and explore canyons with names like Wildcat, LaSalle, and St. Louis. It's a natural wonderland and a great destination for outdoor enthusiasts and nature lovers.",
      location: "Oglesby, Illinois",
      link: "https://www.starvedrockstatepark.org/"
    },
    {
      name: "Anderson Japanese Gardens",
      photo: "/Illinois/images/Anderson Japanese Gardens.jpg",
      description: "Anderson Japanese Gardens in Rockford is a serene and authentic Japanese garden in the heart of Illinois. It offers a peaceful escape with meticulously designed landscapes, koi-filled ponds, and winding pathways. Visitors can find tranquility, enjoy seasonal beauty, and experience the art of Japanese gardening. It's a hidden gem for those seeking serenity and cultural appreciation.",
      location: "Rockford, Illinois",
      link: "https://andersongardens.org/"
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