const locations = [
    {
      name: "Elvis Presley's Birthplace",
      photo: "/Mississippi/images/Elvis Presley's Birthplace.jpg",
      description: "Elvis Presley's Birthplace in Tupelo is a historic site dedicated to the legendary King of Rock 'n' Roll. Visitors can tour the small home where Elvis was born, explore the museum filled with memorabilia, and enjoy the chapel and park. It's a pilgrimage for Elvis fans and a journey into his early life.",
      location: "Tupelo, Mississippi",
      link: "https://www.elvispresleybirthplace.com/"
    },
    {
      name: "Vicksburg National Military Park",
      photo: "/Mississippi/images/Vicksburg National Military Park.jpg",
      description: "Vicksburg National Military Park preserves the site of the pivotal Siege of Vicksburg during the American Civil War. Visitors can explore historic battlefields, monuments, and the USS Cairo Museum. It's a place of historical significance and a reminder of the Civil War era.",
      location: "Vicksburg, Mississippi",
      link: "https://www.nps.gov/vick/index.htm"
    },
    {
      name: "Natchez Trace Parkway",
      photo: "/Mississippi/images/Natchez Trace Parkway.jpg",
      description: "Natchez Trace Parkway is a scenic road that winds through Mississippi, connecting Natchez to Nashville. Visitors can drive or bike along this historic route, stopping at picturesque overlooks, trails, and sites of Native American and pioneer history. It's a journey through natural beauty and cultural heritage.",
      location: "Natchez to Nashville",
      link: "https://www.nps.gov/natr/index.htm"
    },
    {
      name: "Gulf Islands National Seashore",
      photo: "/Mississippi/images/Gulf Islands National Seashore.jpg",
      description: "Gulf Islands National Seashore encompasses the barrier islands along the Gulf Coast, including Mississippi's Ship Island. Visitors can relax on sandy beaches, explore historic forts, and engage in watersports. It's a place of coastal beauty and outdoor recreation.",
      location: "Gulf Coast, Mississippi",
      link: "https://www.nps.gov/guis/index.htm"
    },
    {
      name: "Biloxi Beach",
      photo: "/Mississippi/images/Biloxi Beach.jpg",
      description: "Biloxi Beach is a popular destination along the Mississippi Gulf Coast. Visitors can enjoy the sandy shores, swim in the Gulf of Mexico, and explore the vibrant casino resorts and restaurants. It's a place for beach lovers, relaxation, and entertainment.",
      location: "Biloxi, Mississippi",
      link: "https://www.gulfcoast.org/"
    },
    {
      name: "Mississippi Civil Rights Museum",
      photo: "/Mississippi/images/Mississippi Civil Rights Museum.jpg",
      description: "The Mississippi Civil Rights Museum in Jackson is dedicated to the history of the Civil Rights Movement in the state. Visitors can explore interactive exhibits, view artifacts, and learn about the struggle for civil rights. It's a place of reflection and education on a pivotal period in American history.",
      location: "Jackson, Mississippi",
      link: "https://www.mscivilrightsmuseum.com/"
    },
    {
      name: "Grand Village of the Natchez Indians",
      photo: "/Mississippi/images/Grand Village of the Natchez Indians.jpg",
      description: "The Grand Village of the Natchez Indians in Natchez is a historic site preserving the culture of the Natchez tribe. Visitors can explore a reconstructed ceremonial mound, a temple, and a museum. It's a place to learn about Native American history and traditions.",
      location: "Natchez, Mississippi",
      link: "https://www.nps.gov/natc/index.htm"
    },
    {
      name: "Tupelo National Battlefield",
      photo: "/Mississippi/images/Tupelo National Battlefield.jpg",
      description: "Tupelo National Battlefield commemorates the Battle of Tupelo during the Civil War. Visitors can tour the battlefield, view historic markers, and learn about the conflict. It's a site of historical significance and a place to reflect on this chapter in American history.",
      location: "Tupelo, Mississippi",
      link: "https://www.nps.gov/tupe/index.htm"
    },
    {
      name: "Mississippi Museum of Natural Science",
      photo: "/Mississippi/images/Mississippi Museum of Natural Science.jpeg",
      description: "The Mississippi Museum of Natural Science in Jackson showcases the state's diverse natural history. Visitors can explore interactive exhibits, view wildlife displays, and learn about Mississippi's ecosystems. It's a place for science enthusiasts and nature lovers.",
      location: "Jackson, Mississippi",
      link: "http://www.mdwfp.com/museum.aspx"
    },
    {
      name: "Natchez Pilgrimage Tours",
      photo: "/Mississippi/images/Natchez Pilgrimage Tours.jpg",
      description: "Natchez Pilgrimage Tours in Natchez offers a unique opportunity to tour historic antebellum homes and plantations. Visitors can step back in time, explore beautifully preserved mansions, and learn about the Old South. It's a cultural experience and a glimpse into Mississippi's past.",
      location: "Natchez, Mississippi",
      link: "https://natchezpilgrimage.com/"
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