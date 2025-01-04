// Navigation
const homePg = document.getElementById("home");
const venuePg = document.getElementById("venue");
const rsvpPg = document.getElementById("rsvp");
const infoPg = document.getElementById("info");
const galleryPg = document.getElementById("gallery");
const galleryBox = document.querySelector(".gallery__box");

const initLoadPage = function () {
  // homePg.style.display = "none";
  venuePg.style.display = "none";
  rsvpPg.style.display = "none";
  infoPg.style.display = "none";
  galleryPg.style.display = "none";
};

document.addEventListener("DOMContentLoaded", initLoadPage);

const navBarBox = document.querySelector(".navbar__box");
const navLinks = document.querySelectorAll(".navbar__link");

const navNames = ["home", "venue", "rsvp", "info", "gallery"];
const icons = {
  home: "extension-puzzle",
  venue: "location",
  rsvp: "calendar-number",
  info: "person-add",
  gallery: "image",
};

const replacePage = function (target) {
  const navNamesFiltered = navNames.filter((nav) => nav !== target);
  const allMarkup = [];

  for (let i = 0; i < navNamesFiltered.length; i++) {
    const curId = navNamesFiltered[i];

    const markup = `
    <a class="navbar-brand navbar__link" href="#" data-location="${curId}">
          <ion-icon name="${
            icons[curId]
          }" class="navbar__link--icon"></ion-icon>
          <span class="navbar__link--txt">
            ${curId.charAt(0).toUpperCase() + curId.slice(1)}
          </span>
        </a>
    `;
    allMarkup.push(markup);

    document.getElementById(curId).style.display = "none";
  }

  document.getElementById(target).style.display = "block";

  navBarBox.innerHTML = "";
  navBarBox.insertAdjacentHTML("beforeend", allMarkup.join(""));
};

navBarBox.addEventListener("click", (e) => {
  e.preventDefault();

  // Find the closest link if clicked inside the link
  const parentLink = e.target.closest(".navbar__link");
  if (!parentLink) return;

  const dataLocation = parentLink.getAttribute("data-location");
  replacePage(dataLocation);
});

window.onload = function () {
  // Hide the spinner
  document.getElementById("loading-spinner").style.display = "none";

  // Show the main content
  document.getElementById("box").style.display = "block";
};

/*
const handlerSelectNavLink = function (handler) {
  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const clickedElement = e.target;
      const parentLink = clickedElement.closest(".navbar__link");
      const dataLocation = parentLink.getAttribute("data-location");

      handler(dataLocation);
    })
  );
};

const initPg = function () {
  handlerSelectNavLink((id) => replacePage(id));
};

initPg();
*/

// Load Gallery
const noOfPicsGallery = 6;
const allMarkup = [];

for (let i = 0; i < noOfPicsGallery; i++) {
  const markup = `
  <div class="gallery__box--figure">
            <img src="images/Gallery/pic ${i + 1}.jpg" alt="Couple Pic" />
          </div>
  `;
  allMarkup.push(markup);
}

galleryBox.innerHTML = "";
galleryBox.insertAdjacentHTML("beforeend", allMarkup.join(""));
