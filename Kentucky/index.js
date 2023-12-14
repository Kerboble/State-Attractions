const locations = [
    {
      name: "The Ark Encounter",
      photo: "/Kentucky/images/The Ark Encounter.jpg",
      description: "The Ark Encounter, located in Williamstown, is a life-sized replica of Noah's Ark, as described in the Bible. It's an educational and immersive experience, featuring exhibits, animals, and gardens. Visitors can explore the massive ark, learn about biblical history, and enjoy a unique and thought-provoking adventure for all ages.",
      location: "Williamstown, Kentucky",
      link: "https://arkencounter.com/"
    },
    {
      name: "Kentucky Horse Park",
      photo: "/Kentucky/images/Kentucky Horse Park.jpg",
      description: "The Kentucky Horse Park in Lexington is a working horse farm and an educational theme park dedicated to the world of horses. Visitors can watch equine presentations, tour the museum, and even meet some of the resident horses. It's a place of equestrian excellence and a must-visit for horse lovers and enthusiasts.",
      location: "Lexington, Kentucky",
      link: "https://www.kyhorsepark.com/"
    },
    {
      name: "Mammoth Cave National Park",
      photo: "/Kentucky/images/Mammoth Cave National Park.jpg",
      description: "Mammoth Cave National Park, in central Kentucky, is home to the world's longest cave system. Visitors can take guided cave tours to explore underground chambers and intricate passageways. Above ground, the park offers hiking trails, rivers, and scenic beauty. It's a natural wonderland and an adventure for spelunkers and nature enthusiasts.",
      location: "Central Kentucky",
      link: "https://www.nps.gov/maca/index.htm"
    },
    {
      name: "Churchill Downs",
      photo: "/Kentucky/images/Churchill Downs.jpg",
      description: "Churchill Downs in Louisville is the legendary racetrack that hosts the Kentucky Derby, the most famous horse race in the United States. Visitors can tour the historic facility, learn about the sport of horse racing, and experience the excitement of the Kentucky Derby Museum. It's a destination for horse racing fans and those seeking a taste of southern tradition.",
      location: "Louisville, Kentucky",
      link: "https://www.churchilldowns.com/"
    },
    {
      name: "Red River Gorge",
      photo: "/Kentucky/images/Red River Gorge.jpg",
      description: "Red River Gorge, located within Daniel Boone National Forest, is a geological wonder of sandstone cliffs, natural bridges, and lush forests. Visitors can go rock climbing, hike the scenic trails, and enjoy a serene wilderness. The gorge is a paradise for outdoor enthusiasts and those looking to connect with nature.",
      location: "Daniel Boone National Forest, Kentucky",
      link: "https://www.fs.usda.gov/dbnf/"
    },
    {
      name: "Louisville Mega Cavern",
      photo: "/Kentucky/images/Louisville Mega Cavern.jpg",
      description: "The Louisville Mega Cavern in Louisville is a subterranean adventure park housed in an enormous former limestone cavern. Visitors can explore underground zip lines, tram tours, obstacle courses, and seasonal events. It's a unique and thrilling experience for adventure seekers and families looking for excitement.",
      location: "Louisville, Kentucky",
      link: "https://louisvillemegacavern.com/"
    },
    {
      name: "Maker's Mark Distillery",
      photo: "/Kentucky/images/Maker's Mark Distillery.jpg",
      description: "Maker's Mark Distillery in Loretto is a famous bourbon distillery known for its handmade, small-batch bourbon. Visitors can take distillery tours, witness the bourbon-making process, and even dip their own bottle in signature red wax. It's a destination for bourbon aficionados and those interested in the art of distillation.",
      location: "Loretto, Kentucky",
      link: "https://www.makersmark.com/"
    },
    {
      name: "Daniel Boone National Forest",
      photo: "/Kentucky/images/Daniel Boone National Forest.jpg",
      description: "Daniel Boone National Forest covers over 700,000 acres of eastern Kentucky and offers a wealth of outdoor activities. Visitors can hike, camp, fish, and explore the diverse landscapes, from lush forests to rugged mountains. The forest is a haven for outdoor adventures and nature lovers.",
      location: "Eastern Kentucky",
      link: "https://www.fs.usda.gov/dbnf/"
    },
    {
      name: "Kentucky Bourbon Trail",
      photo: "/Kentucky/images/Kentucky Bourbon Trail.jpg",
      description: "The Kentucky Bourbon Trail is a renowned collection of distilleries that produce some of the world's finest bourbon. Visitors can take a self-guided tour, visit distilleries, and sample a variety of bourbons. It's a journey into Kentucky's rich bourbon heritage and a delight for whiskey connoisseurs.",
      location: "Various Locations in Kentucky",
      link: "https://kybourbontrail.com/"
    },
    {
      name: "Lost River Cave",
      photo: "/Kentucky/images/Lost River Cave.jpg",
      description: "Lost River Cave in Bowling Green is a unique underground boat tour that explores a cave system and an underground river. Visitors can learn about geology, ecology, and history as they traverse the subterranean world. It's a hidden gem for those looking for adventure and an educational experience.",
      location: "Bowling Green, Kentucky",
      link: "https://lostrivercave.org/"
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

    
  