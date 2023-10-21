const locations = [
    {
      name: "Colonial Williamsburg",
      photo: "/Virginia/images/Colonial Williamsburg.jpg",
      description: "Colonial Williamsburg is a living history museum in Williamsburg, where visitors can step back in time to the 18th century. It offers historic reenactments, preserved buildings, and interactive experiences. It's a place for history enthusiasts and immersive learning.",
      location: "Williamsburg, Virginia",
      link: "https://www.colonialwilliamsburg.org/"
    },
    {
      name: "Mount Vernon",
      photo: "/Virginia/images/Mount Vernon.jpg",
      description: "Mount Vernon, George Washington's historic estate, is a must-visit in Alexandria. Visitors can tour the mansion, gardens, and learn about the life and legacy of the first U.S. president. It's a place of historical significance and presidential history.",
      location: "Alexandria, Virginia",
      link: "https://www.mountvernon.org/"
    },
    {
      name: "Shenandoah National Park",
      photo: "/Virginia/images/Shenandoah National Park.jpg",
      description: "Shenandoah National Park offers stunning natural beauty in the Blue Ridge Mountains. Visitors can explore scenic drives, hike the Appalachian Trail, and enjoy wildlife viewing. It's a place for outdoor adventures and mountain landscapes.",
      location: "Virginia",
      link: "https://www.nps.gov/shen/index.htm"
    },
    {
      name: "Monticello",
      photo: "/Virginia/images/Monticello.jpg",
      description: "Monticello is the historic plantation of Thomas Jefferson, the author of the Declaration of Independence. Visitors can tour the neoclassical mansion, gardens, and exhibits dedicated to Jefferson's life and achievements. It's a place of architectural beauty and presidential history.",
      location: "Charlottesville, Virginia",
      link: "https://www.monticello.org/"
    },
    {
      name: "Arlington National Cemetery",
      photo: "/Virginia/images/Arlington National Cemetery.jpg",
      description: "Arlington National Cemetery in Arlington is a place of honor and remembrance. Visitors can pay their respects at the final resting place of American heroes, including the Tomb of the Unknown Soldier. It's a place of solemnity and national pride.",
      location: "Arlington, Virginia",
      link: "https://www.arlingtoncemetery.mil/"
    },
    {
      name: "Luray Caverns",
      photo: "/Virginia/images/Luray Caverns.jpg",
      description: "Luray Caverns in Luray is a spectacular underground world of caverns and formations. Visitors can take guided tours to explore this subterranean wonder, including the Great Stalacpipe Organ. It's a place for geology enthusiasts and underground adventures.",
      location: "Luray, Virginia",
      link: "https://luraycaverns.com/"
    },
    {
      name: "Virginia Beach",
      photo: "/Virginia/images/Virginia Beach.jpg",
      description: "Virginia Beach is a popular coastal destination known for its beautiful beaches, water sports, and vibrant boardwalk. Visitors can relax by the ocean, go surfing, and explore the diverse entertainment options. It's a place for beach lovers and seaside fun.",
      location: "Virginia Beach, Virginia",
      link: "https://www.visitvirginiabeach.com/"
    },
    {
      name: "Jamestown Settlement",
      photo: "/Virginia/images/Jamestown Settlement.jpg",
      description: "Jamestown Settlement in Jamestown is a historical museum showcasing the early 17th-century English colonial history in Virginia. Visitors can explore exhibits, replica ships, and a Powhatan Indian village. It's a place for history buffs and a glimpse into colonial life.",
      location: "Jamestown, Virginia",
      link: "https://www.historyisfun.org/jamestown-settlement"
    },
    {
      name: "Chrysler Museum of Art",
      photo: "/Virginia/images/Chrysler Museum of Art.jpg",
      description: "The Chrysler Museum of Art in Norfolk features an impressive collection of European and American art. Visitors can explore paintings, sculptures, and decorative arts from various periods. It's a place for art enthusiasts and cultural appreciation.",
      location: "Norfolk, Virginia",
      link: "https://chrysler.org/"
    },
    {
      name: "Natural Bridge State Park",
      photo: "/Virginia/images/Natural Bridge State Park.jpg",
      description: "Natural Bridge State Park in Natural Bridge is home to the stunning Natural Bridge, a natural limestone arch. Visitors can hike to the bridge, explore underground caverns, and appreciate the unique geological formation. It's a place for nature lovers and geological wonders.",
      location: "Natural Bridge, Virginia",
      link: "https://www.dcr.virginia.gov/state-parks/natural-bridge"
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