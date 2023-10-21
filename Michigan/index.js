const locations = [
    {
      name: "Mackinac Island",
      photo: "/Michigan/images/Mackinac Island.jpeg",
      description: "Mackinac Island is a charming, car-free island in Lake Huron. Visitors can explore historic architecture, ride bicycles or horse-drawn carriages, and enjoy fudge from local shops. The island offers natural beauty with hiking trails, stunning views, and the iconic Mackinac Bridge. It's a unique and nostalgic destination that takes you back in time.",
      location: "Mackinac Island, Michigan",
      link: "https://www.mackinacisland.org/"
    },
    {
      name: "The Henry Ford",
      photo: "/Michigan/images/The Henry Ford.jpeg",
      description: "The Henry Ford is a vast museum complex in Dearborn dedicated to American innovation and history. Visitors can explore artifacts, vehicles, and exhibits related to industry, transportation, and culture. It includes Greenfield Village, showcasing historic homes and buildings. It's a place to celebrate American ingenuity and creativity.",
      location: "Dearborn, Michigan",
      link: "https://www.thehenryford.org/"
    },
    {
      name: "Pictured Rocks National Lakeshore",
      photo: "/Michigan/images/Pictured Rocks National Lakeshore.jpg",
      description: "Pictured Rocks National Lakeshore along Lake Superior is known for its striking sandstone cliffs, waterfalls, and clear waters. Visitors can hike along colorful rock formations, take boat tours, and camp in the wilderness. It's a natural wonderland and a paradise for outdoor enthusiasts and photographers.",
      location: "Upper Peninsula, Michigan",
      link: "https://www.nps.gov/piro/index.htm"
    },
    {
      name: "Sleeping Bear Dunes National Lakeshore",
      photo: "/Michigan/images/Sleeping Bear Dunes National Lakeshore.jpg",
      description: "Sleeping Bear Dunes National Lakeshore is a pristine area along Lake Michigan's eastern coastline. Visitors can climb massive sand dunes, explore forests, and enjoy the beaches. The park offers spectacular views of the lake and Manitou Islands. It's a place of natural beauty and outdoor adventure.",
      location: "Northwest Lower Peninsula, Michigan",
      link: "https://www.nps.gov/slbe/index.htm"
    },
    {
      name: "The Great Lakes",
      photo: "/Michigan/images/The Great Lakes.jpg",
      description: "Michigan is surrounded by four of the five Great Lakes: Superior, Michigan, Huron, and Erie. Visitors can enjoy sandy beaches, boating, fishing, and watersports. Each lake offers unique experiences, from the rugged shores of Lake Superior to the cultural attractions of Lake Erie. It's a place of freshwater fun and exploration.",
      location: "Various locations in Michigan",
      link: "https://www.michigan.org/great-lakes"
    },
    {
      name: "Detroit Institute of Arts",
      photo: "/Michigan/images/Detroit Institute of Arts.jpg",
      description: "The Detroit Institute of Arts in Detroit is one of the top art museums in the United States. Visitors can view an extensive collection of art, including works by Diego Rivera, Vincent van Gogh, and many others. The museum offers cultural experiences and is a hub for art enthusiasts and history buffs.",
      location: "Detroit, Michigan",
      link: "https://www.dia.org/"
    },
    {
      name: "Tahquamenon Falls State Park",
      photo: "/Michigan/images/Tahquamenon Falls State Park.jpg",
      description: "Tahquamenon Falls State Park in the Upper Peninsula is known for its beautiful waterfalls and wilderness. Visitors can hike the trails, view the Upper and Lower Falls, and enjoy the serenity of the forest. It's a natural oasis and a tranquil escape for nature lovers.",
      location: "Upper Peninsula, Michigan",
      link: "https://www.michigan.gov/dnr/0,4570,7-350-79133_79205_83986_86701---,00.html"
    },
    {
      name: "Frankenmuth",
      photo: "/Michigan/images/Frankenmuth.jpg",
      description: "Frankenmuth is a charming Bavarian-style town in Michigan. Visitors can explore its unique architecture, visit Bronner's Christmas Wonderland, and savor German cuisine. The town hosts cultural festivals and offers shopping for traditional goods. It's a place of whimsical charm and a taste of Europe in the heart of Michigan.",
      location: "Frankenmuth, Michigan",
      link: "https://www.frankenmuth.org/"
    },
    {
      name: "Keweenaw Peninsula",
      photo: "/Michigan/images/Keweenaw Peninsula.jpg",
      description: "The Keweenaw Peninsula in the Upper Peninsula is a remote and rugged region known for its copper mining history. Visitors can explore historic sites, hike to remote lighthouses, and enjoy outdoor activities such as snowmobiling and cross-country skiing in the winter. It's a place of exploration and natural beauty.",
      location: "Upper Peninsula, Michigan",
      link: "https://www.keweenaw.info/"
    },
    {
      name: "Lake Michigan Circle Tour",
      photo: "/Michigan/images/Lake Michigan Circle Tour.jpg",
      description: "The Lake Michigan Circle Tour is a scenic road trip around Lake Michigan's shoreline, passing through Michigan, Wisconsin, Illinois, and Indiana. Visitors can enjoy stunning lake views, charming towns, and outdoor adventures. It's a journey of exploration, with opportunities for beachcombing, hiking, and cultural experiences.",
      location: "Circumnavigates Lake Michigan",
      link: "https://www.michigan.org/great-lakes/lake-michigan"
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
  