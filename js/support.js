/* =========================================
   GREENHARVEST PAGE-AWARE CUSTOMER SUPPORT
========================================= */

const supportButton =
    document.getElementById("supportButton");

const supportChat =
    document.getElementById("supportChat");

const supportClose =
    document.getElementById("supportClose");

const supportForm =
    document.getElementById("supportForm");

const supportInput =
    document.getElementById("supportInput");

const supportMessages =
    document.getElementById("supportMessages");

const notification =
    document.querySelector(".support-notification");


/* =========================================
   DETECT CURRENT PAGE
========================================= */

const currentPage =
    document.body.dataset.page || "home";


/* =========================================
   PAGE-SPECIFIC WELCOME MESSAGES
========================================= */

const pageMessages = {

    home: `
        <p>
            Hello! 👋 Welcome to
            <strong>GreenHarvest Agro Enterprise.</strong>
        </p>

        <p>
            I'm your virtual support assistant.
            How can I help you today?
        </p>
    `,


    about: `
        <p>
            Welcome to
            <strong>GreenHarvest Agro Enterprise!</strong> 🌱
        </p>

        <p>
            Would you like to learn more about our
            company, our mission, or what we do?
        </p>
    `,


    services: `
        <p>
            Welcome to our
            <strong>Services</strong> page! 🚜
        </p>

        <p>
            I can help you learn about our agricultural
            services and find the right solution for
            your farming or agribusiness needs.
        </p>
    `,


    products: `
        <p>
            Welcome to our
            <strong>Products</strong> page! 🌾
        </p>

        <p>
            Looking for a particular agricultural
            product? I can help you with products,
            availability, prices and bulk orders.
        </p>
    `,


    gallery: `
        <p>
            Welcome to the
            <strong>GreenHarvest Gallery!</strong> 📸
        </p>

        <p>
            Take a look around and see some of our
            agricultural activities and projects.
            Let me know if you have any questions.
        </p>
    `,


    contact: `
        <p>
            Welcome to our
            <strong>Contact page!</strong> 📞
        </p>

        <p>
            Need to speak with our team? I can help
            you find our contact information or
            connect you with customer support.
        </p>
    `

};


/* =========================================
   PAGE-SPECIFIC QUICK QUESTIONS
========================================= */

const pageQuestions = {

    home: [
        ["🌾 Our Products", "products"],
        ["🚜 Our Services", "services"],
        ["💰 Product Prices", "prices"],
        ["📦 Bulk Orders", "bulk"],
        ["📞 Contact Us", "contact"]
    ],


    about: [
        ["🌱 About GreenHarvest", "about"],
        ["🚜 Our Services", "services"],
        ["🌾 Our Products", "products"],
        ["📞 Contact Us", "contact"]
    ],


    services: [
        ["🚜 Farming Services", "farming services"],
        ["🐔 Livestock Services", "livestock services"],
        ["🌱 Agricultural Consultancy", "agricultural consultancy"],
        ["💰 Service Prices", "service prices"],
        ["📞 Contact Us", "contact"]
    ],


    products: [
        ["🌾 Available Products", "products"],
        ["💰 Product Prices", "prices"],
        ["📦 Bulk Orders", "bulk orders"],
        ["🚚 Delivery", "delivery"],
        ["📞 Contact Us", "contact"]
    ],


    gallery: [
        ["🌾 Our Products", "products"],
        ["🚜 Our Services", "services"],
        ["🏢 About Us", "about"],
        ["📞 Contact Us", "contact"]
    ],


    contact: [
        ["📞 Contact Information", "contact"],
        ["💬 WhatsApp Support", "whatsapp"],
        ["📦 Bulk Orders", "bulk orders"],
        ["🌾 Our Products", "products"]
    ]

};


/* =========================================
   SET PAGE MESSAGE
========================================= */

function initializeSupport() {

    const welcomeMessage =
        pageMessages[currentPage] ||
        pageMessages.home;


    const botMessage =
        supportMessages.querySelector(
            ".message-content"
        );


    if (botMessage) {

        botMessage.innerHTML =
            welcomeMessage;

    }


    const quickQuestions =
        document.querySelector(
            ".quick-questions"
        );


    if (!quickQuestions) {
        return;
    }


    const questions =
        pageQuestions[currentPage] ||
        pageQuestions.home;


    quickQuestions.innerHTML = "";


    questions.forEach(question => {

        const button =
            document.createElement("button");


        button.textContent =
            question[0];


        button.dataset.question =
            question[1];


        quickQuestions.appendChild(
            button
        );

    });


    attachQuickQuestionEvents();

}


/* =========================================
   OPEN CHAT
========================================= */

supportButton.addEventListener(
    "click",
    () => {

        supportChat.classList.toggle(
            "active"
        );


        if (
            supportChat.classList.contains(
                "active"
            )
        ) {

            notification.style.display =
                "none";


            setTimeout(() => {

                supportInput.focus();

            }, 300);

        }

    }
);


/* =========================================
   CLOSE CHAT
========================================= */

supportClose.addEventListener(
    "click",
    () => {

        supportChat.classList.remove(
            "active"
        );

    }
);


/* =========================================
   ADD USER MESSAGE
========================================= */

function addUserMessage(message) {

    const messageElement =
        document.createElement("div");


    messageElement.className =
        "user-message";


    messageElement.innerHTML = `
        <p>${escapeHTML(message)}</p>
    `;


    supportMessages.appendChild(
        messageElement
    );


    scrollChat();

}


/* =========================================
   ADD BOT MESSAGE
========================================= */

function addBotMessage(message) {

    const messageElement =
        document.createElement("div");


    messageElement.className =
        "bot-message";


    messageElement.innerHTML = `

        <div class="bot-avatar">

            <i class="fa-solid fa-leaf"></i>

        </div>

        <div class="message-content">

            <p>${message}</p>

        </div>

    `;


    supportMessages.appendChild(
        messageElement
    );


    scrollChat();

}


/* =========================================
   TYPING INDICATOR
========================================= */

function showTyping() {

    const typing =
        document.createElement("div");


    typing.className =
        "bot-message typing-message";


    typing.innerHTML = `

        <div class="bot-avatar">

            <i class="fa-solid fa-leaf"></i>

        </div>

        <div class="message-content">

            <div class="typing">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>

    `;


    supportMessages.appendChild(
        typing
    );


    scrollChat();


    return typing;

}


/* =========================================
   AUTOMATED RESPONSES
========================================= */

function getResponse(question) {

    const text =
        question.toLowerCase();


    /* PRODUCTS */

    if (
        text.includes("product") ||
        text.includes("available") ||
        text.includes("sell")
    ) {

        return `
            🌾 We offer a range of agricultural
            products including crops, livestock and
            other farm products.

            <br><br>

            Visit our
            <a href="products.html">
                Products page
            </a>
            to learn more.
        `;

    }


    /* SERVICES */

    if (
        text.includes("service") ||
        text.includes("farming")
    ) {

        return `
            🚜 GreenHarvest provides agricultural
            services designed to support farmers,
            businesses and agricultural projects.

            <br><br>

            Visit our
            <a href="services.html">
                Services page
            </a>
            to learn more.
        `;

    }


    /* PRICES */

    if (
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("how much")
    ) {

        return `
            💰 Our prices can vary depending on the
            product, quantity and current market
            conditions.

            <br><br>

            Tell us which product or service you're
            interested in and the quantity you need.
        `;

    }


    /* BULK ORDERS */

    if (
        text.includes("bulk") ||
        text.includes("wholesale") ||
        text.includes("large order")
    ) {

        return `
            📦 Yes, we welcome bulk and wholesale
            orders.

            <br><br>

            Please tell us the product and quantity
            you're interested in and our team can
            assist you with a quotation.
        `;

    }


    /* DELIVERY */

    if (
        text.includes("delivery") ||
        text.includes("deliver") ||
        text.includes("shipping")
    ) {

        return `
            🚚 Delivery arrangements are available
            depending on your location and order size.

            <br><br>

            Tell us your location and the product
            you need.
        `;

    }


    /* ABOUT */

    if (
        text.includes("about") ||
        text.includes("company") ||
        text.includes("mission")
    ) {

        return `
            🌱 GreenHarvest Agro Enterprise is focused
            on agriculture, farming and agribusiness
            solutions.

            <br><br>

            You can learn more about us on our
            <a href="about.html">
                About page
            </a>.
        `;

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("whatsapp") ||
        text.includes("human")
    ) {

        return `
            📞 You can contact our team directly.

            <br><br>

            You can also send us a WhatsApp message
            for faster assistance.

            <br><br>

            <a
                href="https://wa.me/2348000000000"
                target="_blank">

                💬 Chat with us on WhatsApp
            </a>
        `;

    }


    /* GREETING */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            Hello! 👋

            <br><br>

            Welcome to GreenHarvest Agro Enterprise.
            How can I assist you today?
        `;

    }


    /* DEFAULT */

    return `
        Thanks for your question! 😊

        <br><br>

        I don't have enough information to answer
        that specific question yet.

        <br><br>

        You can contact our team directly through
        WhatsApp for assistance.

        <br><br>

        <a
            href="https://wa.me/2348000000000"
            target="_blank">

            💬 Talk to GreenHarvest
        </a>
    `;

}


/* =========================================
   PROCESS QUESTION
========================================= */

function processQuestion(question) {

    if (!question.trim()) {
        return;
    }


    addUserMessage(question);


    const typing =
        showTyping();


    setTimeout(() => {

        typing.remove();


        const response =
            getResponse(question);


        addBotMessage(response);

    }, 800);

}


/* =========================================
   FORM
========================================= */

supportForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const question =
            supportInput.value.trim();


        if (!question) {
            return;
        }


        supportInput.value = "";


        processQuestion(question);

    }
);


/* =========================================
   QUICK QUESTIONS
========================================= */

function attachQuickQuestionEvents() {

    document
        .querySelectorAll(
            ".quick-questions button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    processQuestion(
                        button.dataset.question
                    );

                }
            );

        });

}


/* =========================================
   SCROLL CHAT
========================================= */

function scrollChat() {

    supportMessages.scrollTop =
        supportMessages.scrollHeight;

}


/* =========================================
   SECURITY
========================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================================
   START SUPPORT
========================================= */

initializeSupport();