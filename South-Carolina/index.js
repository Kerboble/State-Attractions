const locations = [
    {
      name: "Charleston Historic District",
      photo: "/South-Carolina/images/Charleston Historic District.jpg",
      description: "The Charleston Historic District is a charming and historic area in downtown Charleston. Visitors can explore cobblestone streets, admire colorful antebellum architecture, and visit landmarks like the Battery and Waterfront Park. It's a place of Southern charm, history, and culture.",
      location: "Charleston, South Carolina",
      link: "https://www.charlestoncvb.com/"
    },
    {
      name: "Myrtle Beach",
      photo: "/South-Carolina/images/Myrtle Beach.jpg",
      description: "Myrtle Beach is a popular coastal destination known for its beautiful beaches, golf courses, and vibrant boardwalk. Visitors can relax by the ocean, enjoy water sports, and explore the Myrtle Beach SkyWheel. It's a place for beach lovers and family fun.",
      location: "Myrtle Beach, South Carolina",
      link: "https://www.visitmyrtlebeach.com/"
    },
    {
      name: "Hilton Head Island",
      photo: "/South-Carolina/images/Hilton Head Island.jpg",
      description: "Hilton Head Island is a resort town on the South Carolina coast. Visitors can experience pristine beaches, play golf on world-class courses, and explore nature preserves. It's a place for relaxation, outdoor activities, and island vibes.",
      location: "Hilton Head Island, South Carolina",
      link: "https://www.hiltonheadisland.org/"
    },
    {
      name: "Fort Sumter National Monument",
      photo: "/South-Carolina/images/Fort Sumter National Monument.jpg",
      description: "Fort Sumter National Monument in Charleston Harbor is a historic site where the American Civil War began. Visitors can take a ferry to the fort, explore its museum, and learn about the events of 1861. It's a place of historical significance and patriotism.",
      location: "Charleston, South Carolina",
      link: "https://www.nps.gov/fosu/index.htm"
    },
    {
      name: "Brookgreen Gardens",
      photo: "/South-Carolina/images/Brookgreen Gardens.jpg",
      description: "Brookgreen Gardens in Murrells Inlet is a stunning sculpture garden and wildlife preserve. Visitors can admire a vast collection of American figurative sculptures, explore beautiful gardens, and see native animals. It's a place for art, nature, and tranquility.",
      location: "Murrells Inlet, South Carolina",
      link: "https://www.brookgreen.org/"
    },
    {
      name: "Congaree National Park",
      photo: "/South-Carolina/images/Congaree National Park.jpg",
      description: "Congaree National Park is a designated wilderness area known for its ancient hardwood forest and swamp. Visitors can hike on boardwalk trails, paddle through the floodplain, and experience unique ecosystems. It's a place for outdoor adventures and natural wonders.",
      location: "Hopkins, South Carolina",
      link: "https://www.nps.gov/cong/index.htm"
    },
    {
      name: "South Carolina Plantations",
      photo: "/South-Carolina/images/South Carolina Plantations.jpg",
      description: "South Carolina is home to many historic plantations, such as Boone Hall, Magnolia Plantation, and Middleton Place. Visitors can tour the plantations, stroll through lush gardens, and learn about the antebellum era. It's a place for history, beauty, and Southern heritage.",
      location: "Various locations in South Carolina",
      link: "Links vary by plantation"
    },
    {
      name: "Patriots Point Naval & Maritime Museum",
      photo: "/South-Carolina/images/Patriots Point Naval & Maritime Museum.jpg",
      description: "Patriots Point Naval & Maritime Museum in Mount Pleasant features historic naval ships, including the USS Yorktown aircraft carrier. Visitors can explore the vessels, learn about naval history, and visit the Vietnam Experience Exhibit. It's a place for military history and maritime exploration.",
      location: "Mount Pleasant, South Carolina",
      link: "https://www.patriotspoint.org/"
    },
    {
      name: "Caesars Head State Park",
      photo: "/South-Carolina/images/Caesars Head State Park.jpg",
      description: "Caesars Head State Park in the Blue Ridge Mountains offers breathtaking views and outdoor activities. Visitors can hike to Caesars Head overlook, go birdwatching, and experience the natural beauty of the Upstate. It's a place for hikers, nature enthusiasts, and mountain vistas.",
      location: "Cleveland, South Carolina",
      link: "https://southcarolinaparks.com/caesars-head"
    },
    {
      name: "South Carolina State Museum",
      photo: "/South-Carolina/images/South Carolina State Museum.jpg",
      description: "The South Carolina State Museum in Columbia is the state's largest museum, featuring exhibits on art, science, and history. Visitors can explore diverse galleries, including the observatory, planetarium, and cultural artifacts. It's a place for learning, culture, and exploration.",
      location: "Columbia, South Carolina",
      link: "https://scmuseum.org/"
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