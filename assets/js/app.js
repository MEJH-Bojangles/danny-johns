/* || SCROLL TO TOP BUTTON */
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

/* || BURGER MENU */
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// close hamburger menu when a link is clicked

// select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);

//sticky nav bar offset
const navBarHeight = document.querySelector("nav").offsetHeight;

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const targetOffsetTop = targetSection.offsetTop - navBarHeight;

            window.scrollTo({
                top: targetOffsetTop,
                left: 0,
                behavior: 'smooth'
            });

            // Close the navigation menu if it's open (small screens)
            ul.classList.remove('show');
        }
    });
});

const darkModeToggle = document.getElementById('darkmode-toggle');
const darkModeLabel = document.querySelector('.darkmode label');

darkModeToggle.addEventListener('change', function () {
  if (this.checked) {
    darkModeLabel.classList.add('active');
    document.body.classList.add('dark-mode');
  } else {
    darkModeLabel.classList.remove('active');
    document.body.classList.remove('dark-mode');
  }
});