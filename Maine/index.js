const locations = [
    {
      name: "Acadia National Park",
      photo: "/Maine/images/Acadia National Park.jpg",
      description: "Acadia National Park is a scenic paradise located on Mount Desert Island. It offers stunning landscapes, including Cadillac Mountain, pristine lakes, and rugged coastline. Visitors can hike the network of trails, go wildlife-watching, and explore the picturesque Jordan Pond. It's a natural gem and a haven for outdoor enthusiasts and nature lovers.",
      location: "Mount Desert Island, Maine",
      link: "https://www.nps.gov/acad/index.htm"
    },
    {
      name: "Portland Head Light",
      photo: "/Maine/images/Portland Head Light.jpg",
      description: "Portland Head Light, situated in Cape Elizabeth, is one of the most iconic lighthouses in the United States. It overlooks the stunning cliffs and rocky shores of the Atlantic Ocean. Visitors can tour the lighthouse and museum, enjoy scenic views, and capture the beauty of the Maine coast. It's a historic landmark and a must-visit for lighthouse enthusiasts.",
      location: "Cape Elizabeth, Maine",
      link: "https://portlandheadlight.com/"
    },
    {
      name: "Kennebunkport",
      photo: "/Maine/images/Kennebunkport.jpg",
      description: "Kennebunkport is a charming coastal town known for its New England architecture, art galleries, and sandy beaches. Visitors can explore the town's historic district, go shopping in Dock Square, and dine on fresh seafood. It's a quintessential seaside destination and a delightful place to relax by the ocean.",
      location: "Kennebunkport, Maine",
      link: "https://www.visitkennebunkport.com/"
    },
    {
      name: "Bar Harbor",
      photo: "/Maine/images/Bar Harbor.jpg",
      description: "Bar Harbor, on Mount Desert Island, is a popular gateway to Acadia National Park. It's a vibrant town with a picturesque waterfront, shops, and seafood restaurants. Visitors can embark on boat tours, go whale watching, and enjoy the town's lively atmosphere. It's a bustling coastal destination and a hub for outdoor and cultural activities.",
      location: "Mount Desert Island, Maine",
      link: "https://www.visitbarharbor.com/"
    },
    {
      name: "Marginal Way",
      photo: "/Maine/images/Marginal Way.jpg",
      description: "Marginal Way in Ogunquit is a stunning oceanside footpath along the rocky cliffs of the southern Maine coast. Visitors can stroll the scenic one-mile trail, taking in panoramic views of the Atlantic Ocean and the rugged shoreline. It's a tranquil and breathtaking spot for leisurely walks and enjoying the natural beauty of Maine.",
      location: "Ogunquit, Maine",
      link: "https://www.ogunquit.org/things-to-do/marginal-way"
    },
    {
      name: "Baxter State Park",
      photo: "/Maine/images/Baxter State Park.jpg",
      description: "Baxter State Park, located in northern Maine, is a wilderness haven with pristine lakes, forests, and the imposing Mount Katahdin. Visitors can hike the challenging trails, go camping, and explore the untamed wilderness. It's a destination for serious hikers, outdoor adventurers, and those seeking a remote and wild escape.",
      location: "Northern Maine",
      link: "https://baxterstatepark.org/"
    },
    {
      name: "Old Port, Portland",
      photo: "/Maine/images/Old Port, Portland.jpg",
      description: "Old Port is the historic heart of Portland, known for its cobblestone streets, 19th-century warehouses, and vibrant waterfront. Visitors can explore unique shops, dine at acclaimed restaurants, and enjoy the lively arts and culture scene. It's a place to savor the essence of Portland and experience its coastal charm.",
      location: "Portland, Maine",
      link: "https://www.visitportland.com/neighborhoods/old-port/"
    },
    {
      name: "Maine Maritime Museum",
      photo: "/Maine/images/Maine Maritime Museum.jpg",
      description: "The Maine Maritime Museum in Bath is dedicated to the maritime heritage of Maine. It features exhibits on shipbuilding, lobstering, and the sea. Visitors can tour historic ships, explore the working boatyard, and learn about Maine's seafaring history. It's a place of education and maritime exploration for all ages.",
      location: "Bath, Maine",
      link: "https://www.mainemaritimemuseum.org/"
    },
    {
      name: "Fort Williams Park",
      photo: "/Maine/images/Fort Williams Park.jpg",
      description: "Fort Williams Park in Cape Elizabeth is home to the historic Portland Head Light and the ruins of Fort Williams. Visitors can enjoy scenic picnics, walk along the shoreline, and explore the fort's remnants. The park offers breathtaking coastal views and a glimpse into Maine's military history.",
      location: "Cape Elizabeth, Maine",
      link: "https://fortwilliams.org/"
    },
    {
      name: "L.L.Bean Flagship Store",
      photo: "/Maine/images/L.L.Bean Flagship Store.jpg",
      description: "The L.L.Bean Flagship Store in Freeport is a legendary outdoor retail destination. It's open 24/7, 365 days a year and offers a vast selection of outdoor gear, clothing, and equipment. Visitors can shop for quality products, explore the store's indoor trout pond, and experience the culture of outdoor adventure. It's a shopper's paradise for outdoor enthusiasts.",
      location: "Freeport, Maine",
      link: "https://www.llbean.com/"
    }
  ];


  
  locationHTML = ''

  //looping through each location and adding their properties to HTML template literals to display them on the DOM.
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
    });
     

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