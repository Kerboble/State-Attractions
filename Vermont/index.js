const locations = [
    {
      name: "Ben & Jerry's Factory",
      photo: "/Vermont/images/Ben & Jerry's Factory.jpg",
      description: "The Ben & Jerry's Factory in Waterbury offers guided tours showcasing the ice cream-making process. Visitors can learn about the company's history, taste unique flavors, and enjoy sweet treats. It's a place for ice cream lovers and a scoop of fun.",
      location: "Waterbury, Vermont",
      link: "https://www.benjerry.com/factory"
    },
    {
      name: "Shelburne Museum",
      photo: "/Vermont/images/Shelburne Museum.jpg",
      description: "Shelburne Museum in Shelburne is a unique museum featuring diverse collections of art, Americana, and historic buildings. Visitors can explore exhibits, gardens, and the historic steamboat Ticonderoga. It's a place for art enthusiasts and cultural discoveries.",
      location: "Shelburne, Vermont",
      link: "https://shelburnemuseum.org/"
    },
    {
      name: "Stowe Mountain Resort",
      photo: "/Vermont/images/Stowe Mountain Resort.jpg",
      description: "Stowe Mountain Resort in Stowe is a popular destination for outdoor activities year-round. Visitors can enjoy skiing and snowboarding in winter, and hiking and mountain biking in summer. It's a place for adventure seekers and scenic mountain views.",
      location: "Stowe, Vermont",
      link: "https://www.stowe.com/"
    },
    {
      name: "Church Street Marketplace",
      photo: "/Vermont/images/Church Street Marketplace.jpg",
      description: "Church Street Marketplace in Burlington is a vibrant and pedestrian-friendly shopping and dining district. Visitors can explore local boutiques, enjoy street performances, and savor diverse cuisines. It's a place for shopping, entertainment, and community vibes.",
      location: "Burlington, Vermont",
      link: "https://www.churchstmarketplace.com/"
    },
    {
      name: "Quechee Gorge",
      photo: "/Vermont/images/Quechee Gorge.jpg",
      description: "Quechee Gorge is often referred to as the Little Grand Canyon of Vermont. Visitors can admire the breathtaking gorge, go hiking, and have picnics with scenic views. It's a place for nature lovers and a glimpse into geological wonders.",
      location: "Quechee, Vermont",
      link: "https://vtstateparks.com/quechee.html"
    },
    {
      name: "Montshire Museum of Science",
      photo: "/Vermont/images/Montshire Museum of Science.jpg",
      description: "The Montshire Museum of Science in Norwich is an interactive science museum for all ages. Visitors can explore hands-on exhibits, outdoor trails, and learn about natural phenomena. It's a place for science enthusiasts and curious minds.",
      location: "Norwich, Vermont",
      link: "https://www.montshire.org/"
    },
    {
      name: "Magic Hat Brewing Company",
      photo: "/Vermont/images/Magic Hat Brewing Company.jpg",
      description: "Magic Hat Brewing Company in South Burlington is a renowned craft brewery. Visitors can take brewery tours, taste a variety of craft beers, and experience the artistic and quirky brewery culture. It's a place for beer aficionados and creative vibes.",
      location: "South Burlington, Vermont",
      link: "https://www.magichat.net/"
    },
    {
      name: "Hildene, The Lincoln Family Home",
      photo: "/Vermont/images/Hildene, The Lincoln Family Home.jpg",
      description: "Hildene, The Lincoln Family Home in Manchester is the former home of Abraham Lincoln's son, Robert Todd Lincoln. Visitors can tour the historic mansion, explore beautiful gardens, and learn about the Lincoln family's legacy. It's a place for history buffs and a glimpse into presidential heritage.",
      location: "Manchester, Vermont",
      link: "https://hildene.org/"
    },
    {
      name: "Vermont Teddy Bear Company",
      photo: "/Vermont/images/Vermont Teddy Bear Company.jpg",
      description: "The Vermont Teddy Bear Company in Shelburne is a popular teddy bear factory and store. Visitors can take behind-the-scenes tours, create their own custom bears, and shop for unique teddy bear gifts. It's a place for teddy bear enthusiasts and a cuddly experience.",
      location: "Shelburne, Vermont",
      link: "https://www.vermontteddybear.com/"
    },
    {
      name: "Lake Champlain",
      photo: "/Vermont/images/Lake Champlain.jpg",
      description: "Lake Champlain is a stunning freshwater lake that spans Vermont, New York, and Quebec. Visitors can enjoy boating, fishing, and explore the scenic shoreline. It's a place for outdoor recreation and beautiful lake views.",
      location: "Various locations in Vermont",
      link: "Links vary by location"
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