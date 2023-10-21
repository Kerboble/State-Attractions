const locations = [
    {
      name: "Georgia Aquarium",
      photo: "/Georgia/images/Georgia Aquarium.jpg",
      description: "The Georgia Aquarium in Atlanta is one of the world's largest and most spectacular aquariums. It houses a diverse array of marine life, including beluga whales, whale sharks, and penguins. Visitors can explore underwater habitats, watch captivating shows, and even participate in interactive experiences. It's an aquatic adventure for marine enthusiasts and families.",
      location: "Atlanta, Georgia",
      link: "https://www.georgiaaquarium.org/"
    },
    {
      name: "Stone Mountain Park",
      photo: "/Georgia/images/Stone Mountain Park.jpg",
      description: "Stone Mountain Park, located near Atlanta, is known for its massive granite outcropping with a sculpted Confederate Memorial carving. Visitors can hike to the summit, ride the scenic railroad, and enjoy various attractions and outdoor activities. The park offers a blend of history, natural beauty, and family fun, making it a great destination for all ages.",
      location: "Stone Mountain, Georgia",
      link: "https://www.stonemountainpark.com/"
    },
    {
      name: "Savannah Historic District",
      photo: "/Georgia/images/Savannah Historic District.jpg",
      description: "The Savannah Historic District is a charming and picturesque area in Savannah, known for its cobblestone streets, historic homes, and scenic squares. Visitors can take leisurely walks, explore historic sites, and dine at renowned restaurants. The district exudes southern hospitality and is a must-visit for history enthusiasts and lovers of Southern culture.",
      location: "Savannah, Georgia",
      link: "https://www.visitsavannah.com/"
    },
    {
      name: "Martin Luther King Jr. National Historic Site",
      photo: "/Georgia/images/Martin Luther King Jr. National Historic Site.jpg",
      description: "The Martin Luther King Jr. National Historic Site in Atlanta preserves the childhood home and final resting place of the civil rights leader. Visitors can tour the historic sites, including the King Center and Ebenezer Baptist Church, where Dr. King preached. It's a place of reflection and inspiration, offering insight into the life and legacy of Dr. King.",
      location: "Atlanta, Georgia",
      link: "https://www.nps.gov/malu/index.htm"
    },
    {
      name: "Callaway Gardens",
      photo: "/Georgia/images/Callaway Gardens.jpg",
      description: "Callaway Gardens in Pine Mountain is a 2,500-acre resort known for its beautiful gardens, recreational activities, and educational programs. Visitors can explore themed gardens, bike through scenic trails, and enjoy attractions like the Cecil B. Day Butterfly Center. The gardens offer a serene and natural escape for families and nature lovers.",
      location: "Pine Mountain, Georgia",
      link: "https://www.callawaygardens.com/"
    },
    {
      name: "Okefenokee Swamp",
      photo: "/Georgia/images/Okefenokee Swamp.jpg",
      description: "The Okefenokee Swamp in southern Georgia is one of the largest blackwater swamps in North America. It's a unique wilderness with a diverse ecosystem, including alligators, birds, and cypress trees. Visitors can explore the swamp by boat, hike on elevated platforms, and experience the enchanting beauty of this natural wonder. It's a destination for outdoor enthusiasts and wildlife lovers.",
      location: "Folkston, Georgia",
      link: "https://www.fws.gov/refuge/Okefenokee/"
    },
    {
      name: "Chattahoochee National Forest",
      photo: "/Georgia/images/Chattahoochee National Forest.jpg",
      description: "Chattahoochee National Forest covers over 750,000 acres of North Georgia's Appalachian Mountains. It's a haven for outdoor activities, including hiking, camping, and fishing. Visitors can explore scenic mountain landscapes, cascading waterfalls, and abundant wildlife. The forest offers a pristine natural environment and is a playground for outdoor adventurers.",
      location: "North Georgia",
      link: "https://www.fs.usda.gov/conf/"
    },
    {
      name: "Providence Canyon State Park",
      photo: "/Georgia/images/Providence Canyon State Park.jpg",
      description: "Providence Canyon State Park, often called Georgia's Little Grand Canyon, is in Lumpkin. It features dramatic canyons with colorful, stratified soils and a network of hiking trails. Visitors can explore the canyons, take in unique geologic formations, and enjoy a day of outdoor adventure. It's a geological wonder and a great place for hikers and nature enthusiasts.",
      location: "Lumpkin, Georgia",
      link: "https://gastateparks.org/ProvidenceCanyon"
    },
    {
      name: "Jekyll Island",
      photo: "/Georgia/images/Jekyll Island.jpg",
      description: "Jekyll Island is one of Georgia's Golden Isles, known for its pristine beaches, historic district, and natural beauty. Visitors can relax on the sandy shores, explore the Jekyll Island Historic District, and observe wildlife at the Georgia Sea Turtle Center. It's a peaceful and idyllic island destination for beachgoers and history buffs.",
      location: "Jekyll Island, Georgia",
      link: "https://www.jekyllisland.com/"
    },
    {
      name: "Andersonville National Historic Site",
      photo: "/Georgia/images/Andersonville National Historic Site.jpg",
      description: "The Andersonville National Historic Site in Andersonville preserves the site of Camp Sumter, a Confederate prisoner-of-war camp during the Civil War. Visitors can tour the prison site, the National Prisoner of War Museum, and learn about the experiences of prisoners of war. It's a place of remembrance and historical significance.",
      location: "Andersonville, Georgia",
      link: "https://www.nps.gov/ande/index.htm"
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