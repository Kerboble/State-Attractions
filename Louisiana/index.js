const locations = [
    {
      name: "French Quarter",
      photo: "/Louisiana/images/French Quarter.jpg",
      description: "The French Quarter in New Orleans is a historic district known for its vibrant nightlife, music scene, and iconic architecture. Visitors can explore Bourbon Street, enjoy live jazz music, savor Creole and Cajun cuisine, and experience the lively atmosphere of this cultural hub.",
      location: "New Orleans, Louisiana",
      link: "https://www.neworleans.com/plan/neighborhoods/french-quarter/"
    },
    {
      name: "Oak Alley Plantation",
      photo: "/Louisiana/images/Oak Alley Plantation.jpg",
      description: "Oak Alley Plantation, located near the Mississippi River, is a historic plantation with a stunning alley of live oak trees. Visitors can tour the antebellum mansion, stroll the picturesque grounds, and learn about the history of the plantation and its role in the South's past.",
      location: "Vacherie, Louisiana",
      link: "https://www.oakalleyplantation.org/"
    },
    {
      name: "Mardi Gras World",
      photo: "/Louisiana/images/Mardi Gras World.jpg",
      description: "Mardi Gras World in New Orleans offers an immersive experience into the world of Mardi Gras. Visitors can see elaborate floats being created, learn about the history of Mardi Gras traditions, and even try on costumes. It's a colorful and festive journey into one of Louisiana's most famous celebrations.",
      location: "New Orleans, Louisiana",
      link: "https://www.mardigrasworld.com/"
    },
    {
      name: "Audubon Park",
      photo: "/Louisiana/images/Audubon Park.jpg",
      description: "Audubon Park, located in Uptown New Orleans, is a picturesque green space with lagoons, oak trees, and walking paths. Visitors can enjoy picnics, visit the Audubon Zoo, play golf, and relax amidst the natural beauty of this urban oasis.",
      location: "New Orleans, Louisiana",
      link: "https://audubonnatureinstitute.org/audubon-park"
    },
    {
      name: "Honey Island Swamp",
      photo: "/Louisiana/images/Honey Island Swamp.jpg",
      description: "The Honey Island Swamp, near Slidell, is a wildlife-rich area known for its cypress trees and abundant birdlife. Visitors can take guided swamp tours, spot alligators, and learn about the unique ecosystem of Louisiana's swamps.",
      location: "Slidell, Louisiana",
      link: "https://www.honeyislandswamp.com/"
    },
    {
      name: "R.W. Norton Art Gallery",
      photo: "/Louisiana/images/R.W. Norton Art Gallery.jpg",
      description: "The R.W. Norton Art Gallery in Shreveport features an extensive collection of American and European art. Visitors can explore beautiful gardens, view sculptures, and admire paintings from different periods in this cultural institution.",
      location: "Shreveport, Louisiana",
      link: "https://www.rwnaf.org/"
    },
    {
      name: "St. Louis Cathedral",
      photo: "/Louisiana/images/St. Louis Cathedral.jpg",
      description: "St. Louis Cathedral, located in Jackson Square in New Orleans, is a historic landmark and a symbol of the city. Visitors can admire the cathedral's stunning architecture, attend Mass, and explore the peaceful surroundings of the square.",
      location: "New Orleans, Louisiana",
      link: "https://www.stlouiscathedral.org/"
    },
    {
      name: "Jean Lafitte National Historical Park and Preserve",
      photo: "/Louisiana/images/Jean Lafitte National Historical Park and Preserve.jpg",
      description: "Jean Lafitte National Historical Park and Preserve encompasses sites that highlight Louisiana's cultural and natural heritage. Visitors can explore swamps, learn about Cajun culture, and discover the history of the area's French, Spanish, and Creole influences.",
      location: "New Orleans, Louisiana",
      link: "https://www.nps.gov/jela/index.htm"
    },
    {
      name: "Baton Rouge Capitol Building",
      photo: "/Louisiana/images/Baton Rouge Capitol Building.jpg",
      description: "The Baton Rouge Capitol Building is an architectural marvel and the tallest state capitol in the United States. Visitors can take guided tours to learn about the history, art, and politics of Louisiana while enjoying panoramic views from the observation deck.",
      location: "Baton Rouge, Louisiana",
      link: "https://www.visitbatonrouge.com/listing/louisiana-state-capitol/2202/"
    },
    {
      name: "National WWII Museum",
      photo: "/Louisiana/images/National WWII Museum.jpg",
      description: "The National WWII Museum in New Orleans is dedicated to the history and impact of World War II. Visitors can explore interactive exhibits, view artifacts, and learn about the stories of individuals who lived during this pivotal time in history.",
      location: "New Orleans, Louisiana",
      link: "https://www.nationalww2museum.org/"
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
     

    //scrolling effect  -- https://www.youtube.com/watch?v=T33NN_pPeNI 

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