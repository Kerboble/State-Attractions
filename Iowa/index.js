locations = [
    {
        name: "Field of Dreams Movie Site",
        location: "Dyersville",
        photo: "/Iowa/images/Field of Dreams Movie Site.jpg",
        description: "Visit the Field of Dreams Movie Site in Dyersville, a baseball diamond surrounded by cornfields. Relive the iconic movie's magic and even play catch on the field.",
        link: "https://www.fieldofdreamsmoviesite.com/"
    },
    {
        name: "Amana Colonies",
        location: "Amana",
        photo: "/Iowa/images/Amana Colonies.jpg",
        description: "Explore the historic Amana Colonies in Amana. Experience communal living history, shop for handmade goods, and savor traditional German cuisine in charming villages.",
        link: "https://www.amanacolonies.com/"
    },
    {
        name: "Effigy Mounds National Monument",
        location: "Harpers Ferry",
        photo: "/Iowa/images/Effigy Mounds National Monument.jpg",
        description: "Discover the ancient Effigy Mounds National Monument in Harpers Ferry. Hike the trails to view Native American effigy mounds and enjoy scenic views of the Mississippi River.",
        link: "https://www.nps.gov/efmo/index.htm"
    },
    {
        name: "John Wayne Birthplace & Museum",
        location: "Winterset",
        photo: "/Iowa/images/John Wayne Birthplace & Museum.jpg",
        description: "Pay homage to The Duke at the John Wayne Birthplace & Museum in Winterset. Explore exhibits, memorabilia, and the birthplace of the legendary actor, John Wayne.",
        link: "https://johnwaynebirthplace.com/"
    },
    {
        name: "Iowa State Fair",
        location: "Des Moines",
        photo: "/Iowa/images/Iowa State Fair.jpg",
        description: "Enjoy the annual Iowa State Fair in Des Moines, an event filled with livestock shows, food, entertainment, and a variety of attractions for all ages.",
        link: "https://www.iowastatefair.org/"
    },
    {
        name: "Grotto of the Redemption",
        location: "West Bend",
        photo: "/Iowa/images/Grotto of the Redemption.jpg",
        description: "Visit the Grotto of the Redemption in West Bend, a remarkable collection of mineral and rock formations in a series of religious grottos and shrines.",
        link: "https://www.westbendiowa.com/grotto/"
    },
    {
        name: "Herbert Hoover National Historic Site",
        location: "West Branch",
        photo: "/Iowa/images/Herbert Hoover National Historic Site.jpg",
        description: "Explore the Herbert Hoover National Historic Site in West Branch, the birthplace and childhood home of the 31st President of the United States, Herbert Hoover.",
        link: "https://www.nps.gov/heho/index.htm"
    },
    {
        name: "Iowa's Great Lakes",
        location: "Okoboji",
        photo: "/Iowa/images/Iowa's Great Lakes.jpg",
        description: "Relax at Iowa's Great Lakes in Okoboji, a chain of glacial lakes known for water recreation, resorts, and charming lakeside communities.",
        link: "https://vacationokoboji.com/"
    },
    {
        name: "Pikes Peak State Park",
        location: "McGregor",
        photo: "/Iowa/images/Pikes Peak State Park.jpg",
        description: "Experience the beauty of Pikes Peak State Park in McGregor. Hike to overlooks with stunning views of the Mississippi River and explore unique rock formations.",
        link: "https://www.iowadnr.gov/Places-to-Go/State-Parks/Iowa-State-Parks/ParkDetails/ParkID/610157"
    },
    {
        name: "National Mississippi River Museum & Aquarium",
        location: "Dubuque",
        photo: "/Iowa/images/National Mississippi River Museum & Aquarium.jpg",
        description: "Visit the National Mississippi River Museum & Aquarium in Dubuque. Explore the history, ecology, and wildlife of the Mississippi River in engaging exhibits and habitats.",
        link: "https://www.rivermuseum.com/"
    },
]



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