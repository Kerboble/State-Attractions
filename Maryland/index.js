const locations = [
    {
      name: "Inner Harbor, Baltimore",
      photo: "/Maryland/images/Inner Harbor Baltimore.jpg",
      description: "Baltimore's Inner Harbor is a bustling waterfront area featuring attractions, restaurants, and shops. Visitors can explore the National Aquarium, tour historic ships, and enjoy waterfront views. It's a lively hub for entertainment and cultural experiences, offering everything from science to history and delicious seafood.",
      location: "Baltimore, Maryland",
      link: "https://baltimore.org/neighborhoods/inner-harbor/"
    },
    {
      name: "Assateague Island",
      photo: "/Maryland/images/Assateague Island.jpg",
      description: "Assateague Island is a serene barrier island off the coast of Maryland and Virginia. It's known for its wild horses, pristine beaches, and salt marshes. Visitors can go beachcombing, birdwatching, and camping. It's a tranquil escape into nature and a haven for those seeking unspoiled coastal beauty.",
      location: "Assateague Island, Maryland",
      link: "https://www.assateagueisland.com/"
    },
    {
      name: "U.S. Naval Academy",
      photo: "/Maryland/images/U.S. Naval Academy.jpg",
      description: "The U.S. Naval Academy in Annapolis is a prestigious institution that trains future Navy and Marine Corps officers. Visitors can tour the historic campus, visit the Naval Academy Museum, and learn about the history of the U.S. Navy. It's a place of education, patriotism, and maritime tradition.",
      location: "Annapolis, Maryland",
      link: "https://www.usna.edu/"
    },
    {
      name: "Chesapeake Bay Maritime Museum",
      photo: "/Maryland/images/Chesapeake Bay Maritime Museum.jpg",
      description: "The Chesapeake Bay Maritime Museum in St. Michaels showcases the maritime heritage of the Chesapeake Bay. Visitors can explore historic boats, lighthouses, and exhibitions. The museum offers boat rides, workshops, and opportunities to learn about the bay's culture. It's a destination for maritime history enthusiasts and those interested in the Chesapeake Bay's ecology.",
      location: "St. Michaels, Maryland",
      link: "https://cbmm.org/"
    },
    {
      name: "Antietam National Battlefield",
      photo: "/Maryland/images/Antietam National Battlefield.jpg",
      description: "Antietam National Battlefield in Sharpsburg preserves the site of the Battle of Antietam, one of the bloodiest battles of the Civil War. Visitors can tour the battlefield, view historic structures, and pay respects at the national cemetery. It's a place of remembrance and historical significance.",
      location: "Sharpsburg, Maryland",
      link: "https://www.nps.gov/anti/index.htm"
    },
    {
      name: "Ocean City Boardwalk",
      photo: "/Maryland/images/Ocean City Boardwalk.jpg",
      description: "The Ocean City Boardwalk is a lively beachfront promenade in Ocean City. It's lined with shops, amusement parks, and eateries. Visitors can stroll along the boardwalk, enjoy thrilling rides, and savor classic boardwalk treats. It's a family-friendly destination and the heart of Ocean City's vibrant beach culture.",
      location: "Ocean City, Maryland",
      link: "https://ococean.com/things-to-do/boardwalk"
    },
    {
      name: "Smithsonian National Air and Space Museum",
      photo: "/Maryland/images/Smithsonian National Air and Space Museum.jpg",
      description: "The Smithsonian National Air and Space Museum's Steven F. Udvar-Hazy Center in Chantilly is an extension of the famous D.C. museum. It houses thousands of aviation and space artifacts, including the Space Shuttle Discovery and the Enola Gay. Visitors can explore the museum's vast collection, enjoy interactive exhibits, and get up close to iconic aircraft. It's a place of aviation and space exploration for enthusiasts of all ages.",
      location: "Chantilly, Virginia (near Maryland)",
      link: "https://airandspace.si.edu/visit/udvar-hazy-center"
    },
    {
      name: "Catoctin Mountain Park",
      photo: "/Maryland/images/Catoctin Mountain Park.jpg",
      description: "Catoctin Mountain Park is a serene national park located in the Catoctin Mountain range. It's known for its scenic beauty, hiking trails, and wildlife. Visitors can explore the park's forests, waterfalls, and the former presidential retreat, Camp David. It's a natural escape and a destination for outdoor activities.",
      location: "Thurmont, Maryland",
      link: "https://www.nps.gov/cato/index.htm"
    },
    {
      name: "National Aquarium",
      photo: "/Maryland/images/National Aquarium.jpg",
      description: "The National Aquarium in Baltimore is a leading aquatic attraction. It features a stunning collection of marine life, including sharks, dolphins, and tropical fish. Visitors can explore immersive exhibits, attend educational programs, and even dive with sharks. It's a marine adventure for sea enthusiasts and families.",
      location: "Baltimore, Maryland",
      link: "https://www.aqua.org/"
    },
    {
      name: "B&O Railroad Museum",
      photo: "/Maryland/images/B&O Railroad Museum.jpg",
      description: "The B&O Railroad Museum in Baltimore is a historic railway museum showcasing the history of American railroading. Visitors can tour historic locomotives, explore the roundhouse, and learn about the development of the railroad industry. It's a place of railroading heritage and a fascinating journey into America's transportation history.",
      location: "Baltimore, Maryland",
      link: "https://www.borail.org/"
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