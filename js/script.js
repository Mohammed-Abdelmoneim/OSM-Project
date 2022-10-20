///////////////////////////////////////////////////////////
/* Make mobile navigation work */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////
/* smooth scrolling animation */
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: "500px",
        behavior: "smooth",
      });

    // Scroll to other links
    // if href NOT equal # only and at the same time starts with #, DO :
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
/* Sticky navigation */
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
