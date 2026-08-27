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
   GALLERY FILTER
===================================== */

const filters =
    document.querySelectorAll(".gallery-filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filters.forEach(filterButton => {

    filterButton.addEventListener("click", () => {

        filters.forEach(button => {

            button.classList.remove("active");

        });


        filterButton.classList.add("active");


        const selectedCategory =
            filterButton.getAttribute("data-filter");


        galleryItems.forEach(item => {

            const itemCategory =
                item.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {

                item.classList.remove("hide");

                item.classList.add("show");

            } else {

                item.classList.remove("show");

                item.classList.add("hide");

            }

        });

    });

});


/* =====================================
   LIGHTBOX
===================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


let currentIndex = 0;


/* Get visible gallery items */

function getVisibleItems() {

    return Array.from(galleryItems)
        .filter(item =>
            !item.classList.contains("hide")
        );

}


/* Open image */

function openLightbox(index) {

    const visibleItems =
        getVisibleItems();


    if (!visibleItems.length) {
        return;
    }


    currentIndex = index;


    const item =
        visibleItems[currentIndex];


    const image =
        item.getAttribute("data-image");

    const title =
        item.getAttribute("data-title");

    const category =
        item.getAttribute("data-category");


    lightboxImage.src = image;

    lightboxImage.alt = title;

    lightboxTitle.textContent = title;

    lightboxCategory.textContent =
        category.replace("-", " ");


    lightbox.classList.add("active");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";

}


/* =====================================
   OPEN IMAGE BUTTONS
===================================== */

galleryItems.forEach(item => {

    const viewButton =
        item.querySelector(".view-image");


    viewButton.addEventListener("click", event => {

        event.stopPropagation();


        const visibleItems =
            getVisibleItems();


        const index =
            visibleItems.indexOf(item);


        openLightbox(index);

    });


    item.addEventListener("click", () => {

        const visibleItems =
            getVisibleItems();


        const index =
            visibleItems.indexOf(item);


        openLightbox(index);

    });

});


/* =====================================
   CLOSE LIGHTBOX
===================================== */

function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* =====================================
   NEXT IMAGE
===================================== */

function showNextImage() {

    const visibleItems =
        getVisibleItems();


    if (!visibleItems.length) {
        return;
    }


    currentIndex =
        (currentIndex + 1) %
        visibleItems.length;


    openLightbox(currentIndex);

}


lightboxNext.addEventListener(
    "click",
    showNextImage
);


/* =====================================
   PREVIOUS IMAGE
===================================== */

function showPreviousImage() {

    const visibleItems =
        getVisibleItems();


    if (!visibleItems.length) {
        return;
    }


    currentIndex =
        (currentIndex - 1 +
        visibleItems.length) %
        visibleItems.length;


    openLightbox(currentIndex);

}


lightboxPrev.addEventListener(
    "click",
    showPreviousImage
);


/* =====================================
   KEYBOARD CONTROLS
===================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains("active")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            showNextImage();

        }


        if (event.key === "ArrowLeft") {

            showPreviousImage();

        }

    }
);


/* =====================================
   CLICK OUTSIDE IMAGE
===================================== */

lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


/* =====================================
   BACK TO TOP
===================================== */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


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


/* =====================================
   CURRENT YEAR
===================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}