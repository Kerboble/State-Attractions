const locations = [
    {
      name: "Hot Springs National Park",
      photo: "/Arkansas/images/Hot Springs National Park.jpg",
      description: "Hot Springs National Park is renowned for its thermal hot springs, historic bathhouses, and the picturesque Ouachita Mountains. A haven for relaxation, it offers visitors the chance to unwind in soothing thermal waters while surrounded by scenic beauty. The historic bathhouses, including the Fordyce Bathhouse Visitor Center, offer insights into the park's rich history. The park's extensive network of trails provides opportunities for hiking and exploration. Hot Springs National Park also hosts cultural events and music festivals, making it an ideal destination for nature lovers and culture enthusiasts alike. Whether you seek tranquility in the thermal waters or an adventure in the wilderness, this park has something for everyone.",
      location: "Hot Springs, Arkansas",
      link: "https://www.nps.gov/hosp/index.htm"
    },
    {
      name: "Crater of Diamonds State Park",
      photo: "/Arkansas/images/Crater of Diamonds State Park.jpg",
      description: "Crater of Diamonds State Park in Murfreesboro, Arkansas, is the world's only diamond-producing site open to the public. It's a unique attraction that invites visitors to search for diamonds, amethyst, garnet, jasper, and other gemstones. The park's famous 'finders, keepers' policy allows visitors to keep whatever gemstones they discover, making it an exciting and educational experience for all ages. In addition to diamond hunting, the park offers camping, picnicking, and a water park to cool off during the summer months. The visitor center provides valuable information about diamond prospecting and displays notable discoveries, adding an educational aspect to the adventure. Whether you strike it rich or simply enjoy the thrill of the hunt, Crater of Diamonds State Park offers a memorable and unique experience for geology enthusiasts and families looking for a one-of-a-kind adventure.",
      location: "Murfreesboro, Arkansas",
      link: "https://www.arkansasstateparks.com/parks/crater-diamonds-state-park"
    },
    {
      name: "Buffalo National River",
      photo: "/Arkansas/images/Buffalo National River.jpg",
      description: "Buffalo National River in northern Arkansas is known for its breathtaking scenery, pristine waters, and abundant outdoor activities. The river offers excellent opportunities for canoeing, kayaking, fishing, and hiking, with trails catering to all levels of hikers. The towering limestone bluffs and lush forests provide an idyllic backdrop for nature enthusiasts. The river's upper and lower districts offer diverse experiences, from challenging rapids to peaceful float trips. Whether you're a novice or experienced outdoor enthusiast, the Buffalo National River has something for everyone. It's a place to reconnect with nature, explore secluded wilderness, and enjoy the rugged beauty of the Ozarks. Campgrounds and visitor centers provide essential amenities and information to make your visit enjoyable and memorable.",
      location: "Northern Arkansas",
      link: "https://www.nps.gov/buff/index.htm"
    },
    {
      name: "Thorncrown Chapel",
      photo: "/Arkansas/images/Thorncrown Chapel.jpg",
      description: "Thorncrown Chapel in Eureka Springs, Arkansas, is a unique architectural marvel. This stunning glass chapel, nestled in the Ozark Mountains, provides a serene and contemplative space for visitors. Designed by architect Fay Jones, it's a modern masterpiece. The chapel's 425 windows allow natural light to filter in, creating a tranquil atmosphere and making it seem like you're sitting in the forest itself. Surrounded by woods and offering breathtaking views, Thorncrown Chapel is an enchanting place for meditation and spiritual reflection. It's open to the public for both weddings and quiet visits, making it a destination for architecture enthusiasts, nature lovers, and those seeking a peaceful and extraordinary experience.",
      location: "Eureka Springs, Arkansas",
      link: "https://www.thorncrown.com/"
    },
    {
      name: "Crystal Bridges Museum of American Art",
      photo: "/Arkansas/images/Crystal Bridges Museum of American Art.jpg",
      description: "Crystal Bridges Museum of American Art, located in Bentonville, Arkansas, is a world-class art museum that offers an exceptional collection of American art spanning centuries. Set within a beautiful natural landscape, the museum showcases a diverse range of artwork, including American masterpieces, contemporary art, and more. The unique architecture of the museum building integrates with the surrounding natural environment, creating an immersive experience. Visitors can explore the museum's permanent collection and temporary exhibitions that highlight American artistic achievements. Crystal Bridges is a cultural and artistic hub, offering educational programs, art classes, and nature trails. It's a place where art and nature intersect, providing inspiration for art lovers, families, and anyone interested in American culture and creativity.",
      location: "Bentonville, Arkansas",
      link: "https://crystalbridges.org/"
    },
    {
      name: "Mount Magazine State Park",
      photo: "/Arkansas/images/Mount Magazine State Park.jpg",
      description: "Mount Magazine State Park in Paris, Arkansas, is home to the highest point in the state. It offers stunning panoramic views, hiking trails, and a tranquil escape into the natural beauty of Arkansas. The park's diverse landscapes provide opportunities for outdoor activities, from rock climbing and hang gliding to hiking and birdwatching. There are campsites and cabins available for those who want to extend their stay and immerse themselves in the park's natural wonders. Whether you're an adventure seeker or simply seeking a peaceful retreat, Mount Magazine State Park has something to offer every nature enthusiast, with its unique mix of natural beauty and outdoor adventure.",
      location: "Paris, Arkansas",
      link: "https://www.arkansasstateparks.com/parks/mount-magazine-state-park"
    },
    {
      name: "Garvan Woodland Gardens",
      photo: "/Arkansas/images/Garvan Woodland Gardens.jpg",
      description: "Garvan Woodland Gardens in Hot Springs, Arkansas, is a breathtaking botanical garden set along the shores of Lake Hamilton. The gardens offer a peaceful escape into a world of colorful flowers, unique architectural features, and natural beauty. With over 4.5 miles of trails, visitors can explore various themed gardens, including the stunning Anthony Chapel, the tranquil Japanese garden, and the vibrant Evans Children's Adventure Garden. The gardens host seasonal events and educational programs, making it an ideal destination for families and nature lovers. Whether you're interested in horticulture, architecture, or simply enjoying the beauty of nature, Garvan Woodland Gardens provides a serene and enriching experience.",
      location: "Hot Springs, Arkansas",
      link: "https://www.garvangardens.org/"
    },
    {
      name: "Little Rock Central High School National Historic Site",
      photo: "/Arkansas/images/Little Rock Central High School National Historic Site.jpg",
      description: "Little Rock Central High School National Historic Site in Little Rock, Arkansas, commemorates the Civil Rights Movement and the events surrounding the desegregation of Little Rock Central High School. This historic site provides insights into the struggle for equality, the resilience of the Little Rock Nine, and the role the school played in the civil rights movement. The visitor center offers informative exhibits and guided tours, allowing visitors to gain a deeper understanding of this pivotal moment in American history. It's a place of historical significance, education, and reflection, ideal for anyone interested in the civil rights movement and its impact on American society.",
      location: "Little Rock, Arkansas",
      link: "https://www.nps.gov/chsc/index.htm"
    },
    {
      name: "Ozark Folk Center State Park",
      photo: "/Arkansas/images/Ozark Folk Center State Park.jpg",
      description: "Ozark Folk Center State Park in Mountain View, Arkansas, is an immersive living history museum that allows visitors to experience the rich heritage of the Ozarks. This cultural attraction offers a unique opportunity to explore traditional Ozark crafts, music, and rural life. Demonstrations by artisans, live music performances, and workshops bring the culture and history of the Ozarks to life. Visitors can engage with skilled craftsmen and musicians, gaining insights into the region's traditions and craftsmanship. The park features a large craft village, a music theater, and beautiful gardens, making it a destination for those interested in history, music, and the cultural heritage of the Ozarks. It's an educational and entertaining experience for all ages.",
      location: "Mountain View, Arkansas",
      link: "https://www.arkansasstateparks.com/parks/ozark-folk-center-state-park"
    },
    {
      name: "Devil's Den State Park",
      photo: "/Arkansas/images/Devil's Den State Park.jpg",
      description: "Devil's Den State Park in West Fork, Arkansas, offers visitors a chance to explore the scenic beauty of the Ozark Mountains, complete with caves, rugged rock formations, and lush woodlands. The park boasts a range of outdoor activities, from hiking and horseback riding to camping and picnicking. Miles of hiking trails cater to various skill levels, making it an ideal destination for both novice and experienced hikers. The park's distinctive features include the picturesque Devil's Den cave, the Devil's Icebox cave, and the Yellow Rock Overlook, which offers breathtaking vistas of the surrounding landscape. It's a place to connect with nature, appreciate the unique geology of the region, and enjoy the serenity of the great outdoors. Devil's Den State Park is a haven for outdoor enthusiasts and those looking for a natural escape.",
      location: "West Fork, Arkansas",
      link: "https://www.arkansasstateparks.com/parks/devils-den-state-park"
    }
  ];
  



let locationHTML = '';

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