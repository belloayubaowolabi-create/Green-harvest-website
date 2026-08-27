/* =================================
   MOBILE NAVIGATION
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon =
            menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    const navItems =
        document.querySelectorAll(".nav-link");

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =================================
   HEADER
================================= */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.add("scrolled");

    }

});


/* =================================
   STAT COUNTERS
================================= */

const counters =
    document.querySelectorAll(
        ".about-stat strong"
    );

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    const statsSection =
        document.querySelector(".about-stats");

    if (!statsSection) return;

    const position =
        statsSection.getBoundingClientRect().top;


    if (position < window.innerHeight - 100) {

        countersStarted = true;


        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.max(
                    1,
                    Math.ceil(target / 100)
                );


            function updateCounter() {

                current += increment;


                if (current >= target) {

                    counter.textContent =
                        target.toLocaleString() + "+";

                    return;

                }


                counter.textContent =
                    current.toLocaleString();


                setTimeout(
                    updateCounter,
                    20
                );

            }


            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);


/* =================================
   BACK TO TOP
================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =================================
   CURRENT YEAR
================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}