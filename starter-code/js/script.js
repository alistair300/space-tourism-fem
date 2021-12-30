AOS.init();

AOS.init({
  duration: 700,
  mirror: false,
  once: true,
});

// grabbing nav elems from html
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggler');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  header.classList.toggle('active');
});

// grabbing destination elements
const tabLinks = document.querySelectorAll('.destination__tabs--links li');
const destImage = document.getElementById('dest-image');
const destName = document.getElementById('dest-name');
const destDesc = document.getElementById('dest-desc');
const destDistance = document.getElementById('dest-distance');
const destTime = document.getElementById('dest-time');

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    removeClass(tabLinks);
    e.preventDefault();
    e.target.classList.add('active-tab');

    // grab the data-id from the link
    const index = e.target.dataset.index;

    // grab the data from the json file
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        // grab the data from the json file
        const destination = data.destinations[index];

        // display the data
        destImage.src = destination.images.webp;
        destName.innerHTML = destination.name;
        destDesc.innerHTML = destination.description;
        destDistance.innerHTML = destination.distance;
        destTime.innerHTML = destination.travel;
      });
  });
});

// grabbing crew elements
const crewLinks = document.querySelectorAll('.crew__tab-links li');
const crewImage = document.getElementById('crew-image');
const crewName = document.getElementById('crew-name');
const crewBio = document.getElementById('crew-bio');
const crewRole = document.getElementById('crew-role');

crewLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    removeClass(crewLinks);
    e.preventDefault();
    e.target.classList.add('active-tab');

    // grab the data-id from the link
    const index = e.target.dataset.index;

    // grab the data from the json file
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        // grab the data from the json file
        const crew = data.crew[index];

        // display the data
        crewImage.src = crew.images.webp;
        crewName.innerHTML = crew.name;
        crewBio.innerHTML = crew.bio;
        crewRole.innerHTML = crew.role;
      });
  });
});

// grabbing tech elements
const techLinks = document.querySelectorAll('.technology__tabs-links li');
const techImagePortrait = document.getElementById('desktop');
const techImageLandscape = document.getElementById('sr-only');
const techName = document.getElementById('tech-name');
const techDesc = document.getElementById('tech-desc');

techLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    removeClass(techLinks);
    e.preventDefault();
    e.target.classList.add('active-tab');

    // grab the data-id from the link
    const index = e.target.dataset.index;

    // grab the data from the json file
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        // grab the data from the json file
        const technology = data.technology[index];

        // display the data
        techImagePortrait.src = technology.images.portrait;
        techImageLandscape.src = technology.images.landscape;
        techName.innerHTML = technology.name;
        techDesc.innerHTML = technology.description;
      });
  });
});

function removeClass(links) {
  links.forEach((link) => {
    link.classList.remove('active-tab');
  });
}
