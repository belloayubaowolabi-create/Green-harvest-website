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

}


/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById("contactForm");

const formSuccess =
    document.getElementById("formSuccess");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value;

            const message =
                document.getElementById("message").value.trim();


            let valid = true;


            /* Clear errors */

            document.querySelectorAll(".error")
                .forEach(error => {

                    error.textContent = "";

                });


            /* Name */

            if (name.length < 2) {

                document.getElementById("nameError")
                    .textContent =
                    "Please enter your name.";

                valid = false;

            }


            /* Phone */

            if (phone.length < 7) {

                document.getElementById("phoneError")
                    .textContent =
                    "Please enter a valid phone number.";

                valid = false;

            }


            /* Email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                document.getElementById("emailError")
                    .textContent =
                    "Please enter a valid email.";

                valid = false;

            }


            /* Subject */

            if (!subject) {

                document.getElementById("subjectError")
                    .textContent =
                    "Please select an enquiry type.";

                valid = false;

            }


            /* Message */

            if (message.length < 10) {

                document.getElementById("messageError")
                    .textContent =
                    "Please enter at least 10 characters.";

                valid = false;

            }


            if (!valid) {
                return;
            }


            /* =================================
               CREATE WHATSAPP MESSAGE
            ================================= */

            const whatsappNumber =
                "2348000000000";


            const whatsappMessage =

                `Hello GreenHarvest Agro Enterprise,

My name is ${name}.

Phone: ${phone}

Email: ${email}

Enquiry: ${subject}

Message:
${message}`;


            const whatsappURL =

                `https://wa.me/${whatsappNumber}?text=` +
                encodeURIComponent(whatsappMessage);


            /* Show success */

            formSuccess.classList.add("show");


            /* Open WhatsApp */

            setTimeout(() => {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }, 800);


            /* Reset form */

            contactForm.reset();

        });

}


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