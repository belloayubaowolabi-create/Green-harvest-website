/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon =
            menuBtn.querySelector("i");


        if (
            navLinks.classList.contains("active")
        ) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon =
                    menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

}


/* =====================================
   PRODUCT FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");

const noProducts =
    document.getElementById("noProducts");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* Remove active state */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /* Add active state */

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        let visibleProducts = 0;


        productCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hide");

                card.classList.add("show");

                visibleProducts++;

            } else {

                card.classList.remove("show");

                card.classList.add("hide");

            }

        });


        /* No products message */

        if (visibleProducts === 0) {

            noProducts.classList.add("show");

        } else {

            noProducts.classList.remove("show");

        }

    });

});


/* =====================================
   FAVOURITE BUTTON
===================================== */

const heartButtons =
    document.querySelectorAll(".product-heart");


heartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon =
            button.querySelector("i");


        if (icon.classList.contains(
            "fa-regular"
        )) {

            icon.classList.remove(
                "fa-regular"
            );

            icon.classList.add(
                "fa-solid"
            );

        } else {

            icon.classList.remove(
                "fa-solid"
            );

            icon.classList.add(
                "fa-regular"
            );

        }

    });

});


/* =====================================
   BACK TO TOP
===================================== */

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


    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================
   CURRENT YEAR
===================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}