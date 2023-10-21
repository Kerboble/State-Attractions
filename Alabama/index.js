const locations = [
    {
      name: "U.S. Space & Rocket Center",
      photo: "/Alabama/images/U.S. Space & Rocket Center.jpg",
      description: "The U.S. Space & Rocket Center in Huntsville is one of the world's largest space museums. It showcases the history of U.S. space exploration, featuring rockets, spacecraft, and interactive exhibits. Visitors can experience astronaut training simulations and even see a full-scale replica of the Saturn V rocket that took astronauts to the moon. It's an awe-inspiring journey through the cosmos, a place where history and future collide under one roof, making it a must-visit for space enthusiasts and curious minds.",
      location: "Huntsville, Alabama",
      link: "https://www.rocketcenter.com/"
    },
    {
      name: "Gulf Shores and Orange Beach",
      photo: "/Alabama/images/Gulf Shores and Orange Beach.jpg",
      description: "Gulf Shores and Orange Beach are popular Gulf Coast beach destinations. The area offers stunning white sandy beaches, warm waters, and a range of water activities. Whether you're into swimming, sunbathing, fishing, or water sports like kayaking and paddleboarding, these coastal cities have it all. Don't forget to explore the Bon Secour National Wildlife Refuge for nature lovers. With miles of pristine shoreline and plenty of family-friendly attractions, it's a paradise for beachgoers and outdoor enthusiasts.",
      location: "Gulf Shores and Orange Beach, Alabama",
      link: "https://www.gulfshores.com/"
    },
    {
      name: "Battleship USS Alabama",
      photo: "/Alabama/images/Battleship USS Alabama.jpg",
      description: "The Battleship USS Alabama is a floating museum in Mobile Bay. Visitors can explore the historic World War II battleship and its aircraft pavilion, featuring vintage planes. It's a fascinating journey through military history and a unique experience for history enthusiasts. You can walk the decks, tour the inner workings of the ship, and even sleep in the officers' quarters, making it an immersive experience for those curious about naval history.",
      location: "Mobile, Alabama",
      link: "http://www.ussalabama.com/"
    },
    {
      name: "Little River Canyon National Preserve",
      photo: "/Alabama/images/Little River Canyon National Preserve.jpg",
      description: "Little River Canyon National Preserve in northeast Alabama is a rugged and beautiful area featuring canyons, cliffs, and waterfalls. It offers hiking, picnicking, and scenic drives. The Little River flows through the canyon, making it a popular spot for outdoor enthusiasts and nature photographers. The preserve is a natural wonder, and the dramatic landscape provides ample opportunities for adventure and appreciation of the great outdoors.",
      location: "Fort Payne, Alabama",
      link: "https://www.nps.gov/liri/index.htm"
    },
    {
      name: "Noccalula Falls Park",
      photo: "/Alabama/images/Noccalula Falls Park.jpg",
      description: "Noccalula Falls Park in Gadsden is home to a stunning 90-foot waterfall and a beautiful botanical garden. Visitors can hike the trails, view the falls, and explore the petting zoo. The park offers a peaceful and scenic experience for families and nature lovers. It's a serene escape into the heart of nature, complete with a picturesque waterfall and lovely botanical displays.",
      location: "Gadsden, Alabama",
      link: "https://www.cityofgadsden.com/"
    },
    {
      name: "Montgomery Civil Rights Trail",
      photo: "/Alabama/images/Montgomery Civil Rights Trail.jpg",
      description: "The Montgomery Civil Rights Trail in the capital city of Alabama showcases significant sites from the Civil Rights Movement. It includes the Rosa Parks Museum, the National Memorial for Peace and Justice, and the Dexter Parsonage Museum. Visitors can explore the history of the struggle for civil rights in the United States. It's a powerful and educational journey through a pivotal period in American history.",
      location: "Montgomery, Alabama",
      link: "https://www.mcrtrails.org/"
    },
    {
      name: "Oak Mountain State Park",
      photo: "/Alabama/images/Oak Mountain State Park.jpg",
      description: "Oak Mountain State Park in Pelham is Alabama's largest state park. It offers hiking, mountain biking, fishing, golfing, and a beach for swimming. With over 9,000 acres of natural beauty, it's a haven for outdoor activities and family outings. The park features a range of recreational options, from hiking and biking to golf and water-based fun, making it an ideal destination for active individuals and families.",
      location: "Pelham, Alabama",
      link: "https://www.alapark.com/parks/oak-mountain-state-park"
    },
    {
      name: "Ave Maria Grotto",
      photo: "/Alabama/images/Ave Maria Grotto.jpg",
      description: "Ave Maria Grotto in Cullman is a remarkable display of miniature religious buildings. It's a peaceful and contemplative place featuring reproductions of famous religious shrines and structures from around the world. The grotto is a hidden gem of artistic and spiritual significance. Visitors can explore intricate miniature replicas of iconic religious sites, offering a unique and contemplative experience.",
      location: "Cullman, Alabama",
      link: "https://www.avemariagrotto.com/"
    },
    {
      name: "Cheaha State Park",
      photo: "/Alabama/images/Cheaha State Park.jpg",
      description: "Cheaha State Park in the Talladega National Forest is home to Alabama's highest point, Mount Cheaha. Visitors can enjoy hiking, picnicking, and camping in a scenic mountain setting. The park offers breathtaking vistas, making it a great destination for nature enthusiasts and photographers. With sweeping views and a range of outdoor activities, it's an ideal spot for hikers and nature photographers looking to capture the beauty of Alabama's wilderness.",
      location: "Delta, Alabama",
      link: "https://www.alapark.com/parks/cheaha-state-park"
    },
    {
      name: "Rattlesnake Saloon",
      photo: "/Alabama/images/Rattlesnake Saloon.jpg",
      description: "Rattlesnake Saloon in Tuscumbia is a unique dining experience. It's a restaurant built inside a cave and accessed by a natural bridge. Guests can enjoy a meal in a rustic, Western-style setting while surrounded by the cave's natural beauty. The saloon offers a one-of-a-kind atmosphere and live music. It's an extraordinary dining experience for those seeking a combination of delicious cuisine and a memorable setting.",
      location: "Tuscumbia, Alabama",
      link: "http://rattlesnakesaloon.net/"
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