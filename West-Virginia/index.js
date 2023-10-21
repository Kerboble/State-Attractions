const locations = [
    {
      name: "New River Gorge National Park and Preserve",
      photo: "/West-Virginia/images/New River Gorge National Park and Preserve.jpg",
      description: "New River Gorge National Park and Preserve is a haven for outdoor enthusiasts. Visitors can go whitewater rafting on the New River, hike through scenic trails, and admire the iconic New River Gorge Bridge. It's a place for adventure and natural beauty.",
      location: "Glen Jean, West Virginia",
      link: "https://www.nps.gov/neri/index.htm"
    },
    {
      name: "Seneca Rocks",
      photo: "/West-Virginia/images/Seneca Rocks.jpg",
      description: "Seneca Rocks is a striking rock formation in the Monongahela National Forest. Visitors can go rock climbing, hike to the summit, and enjoy panoramic views of the Potomac Highlands. It's a place for rock climbers and outdoor explorers.",
      location: "Seneca Rocks, West Virginia",
      link: "https://www.fs.usda.gov/recarea/mnf/recarea/?recid=12366"
    },
    {
      name: "Harpers Ferry National Historical Park",
      photo: "/West-Virginia/images/Harpers Ferry National Historical Park.jpg",
      description: "Harpers Ferry National Historical Park is a place of history and natural beauty. Visitors can explore the historic town, visit museums, and hike along the confluence of the Potomac and Shenandoah Rivers. It's a place for history buffs and scenic landscapes.",
      location: "Harpers Ferry, West Virginia",
      link: "https://www.nps.gov/hafe/index.htm"
    },
    {
      name: "Cass Scenic Railroad State Park",
      photo: "/West-Virginia/images/Cass Scenic Railroad State Park.jpg",
      description: "Cass Scenic Railroad State Park offers a unique steam-powered train experience. Visitors can ride the historic locomotives through the scenic mountains, explore the company town of Cass, and learn about the logging history. It's a place for train enthusiasts and nostalgia.",
      location: "Cass, West Virginia",
      link: "https://wvstateparks.com/park/cass-scenic-railroad-state-park/"
    },
    {
      name: "Blackwater Falls State Park",
      photo: "/West-Virginia/images/Blackwater Falls State Park.jpg",
      description: "Blackwater Falls State Park is known for its stunning waterfall and natural beauty. Visitors can hike to the falls, explore the park's trails, and enjoy year-round outdoor activities. It's a place for nature lovers and waterfalls.",
      location: "Davis, West Virginia",
      link: "https://wvstateparks.com/park/blackwater-falls-state-park/"
    },
    {
      name: "The Greenbrier",
      photo: "/West-Virginia/images/The Greenbrier.jpg",
      description: "The Greenbrier in White Sulphur Springs is a luxurious resort and historic landmark. Visitors can enjoy upscale accommodations, world-class golf, and explore the resort's rich history. It's a place for relaxation and elegance.",
      location: "White Sulphur Springs, West Virginia",
      link: "https://www.greenbrier.com/"
    },
    {
      name: "Babcock State Park",
      photo: "/West-Virginia/images/Babcock State Park.jpg",
      description: "Babcock State Park is known for its iconic Glade Creek Grist Mill and scenic beauty. Visitors can photograph the mill, hike through the park's trails, and enjoy fishing and paddle boating. It's a place for photographers and outdoor enthusiasts.",
      location: "Clifftop, West Virginia",
      link: "https://wvstateparks.com/park/babcock-state-park/"
    },
    {
      name: "Cathedral State Park",
      photo: "/West-Virginia/images/Cathedral State Park.jpg",
      description: "Cathedral State Park is a place of ancient hemlock trees and natural tranquility. Visitors can walk among the towering trees, have picnics, and enjoy the peaceful forest environment. It's a place for nature lovers and quiet reflection.",
      location: "Aurora, West Virginia",
      link: "https://wvstateparks.com/park/cathedral-state-park/"
    },
    {
      name: "West Virginia State Capitol",
      photo: "/West-Virginia/images/West Virginia State Capitol.jpg",
      description: "The West Virginia State Capitol in Charleston is an architectural marvel. Visitors can tour the Capitol, explore its history, and see the stunning dome. It's a place for history enthusiasts and government exploration.",
      location: "Charleston, West Virginia",
      link: "https://www.wvlegislature.gov/committees/house/main.cfm"
    },
    {
      name: "Trans-Allegheny Lunatic Asylum",
      photo: "/West-Virginia/images/Trans-Allegheny Lunatic Asylum.jpg",
      description: "The Trans-Allegheny Lunatic Asylum in Weston is a historic mental health facility. Visitors can take guided tours to learn about its history, architecture, and the treatment of mental illness. It's a place for those interested in medical history and the paranormal.",
      location: "Weston, West Virginia",
      link: "https://trans-alleghenylunaticasylum.com/"
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