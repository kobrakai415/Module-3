//   <!--
//   PICTURE ALBUM EXERCISE

//   Starting from the current "base" bootstrap layout, implement the following exercise:

//   1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query

let loadImagesBtn = document.querySelector(
    "body > main > section > div > p:nth-child(3) > a.btn.btn-primary.my-2"
);

const loadImages = () => {
    fetch("http://www.splashbase.co/api/v1/images/latest")
        .then((response) => response.json())
        .then((payload) => {
            console.log(payload);
            const cards = document.querySelectorAll(".card");

            cards.forEach((card, index) => {
                const svg = card.querySelector("svg");
                const source = payload.images[index].url;

                if (!svg) {
                    const img = card.querySelector("img");
                    img.src = source;
                } else {
                    svg.outerHTML = `<img class="firstImage" height="150" src="${source}"  alt="">`;
                }
            });
        })
        .catch((error) => console.log(error));
};

loadImagesBtn.addEventListener("click", loadImages);

//   2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query

let loadSecondaryBtn = document.querySelector(
    "body > main > section > div > p:nth-child(3) > a.btn.btn-secondary.my-2"
);

const loadSecondary = () => {
    fetch("http://www.splashbase.co/api/v1/images/search?query=laptop")
        .then((response) => response.json())
        .then((payload) => {
            console.log(payload);
            console.log(payload.images);

            let svgs = document.querySelectorAll(".card img");

            console.log(svgs);

            for (i = 0; i < svgs.length; i++) {
                svgs[
                    i
                ].outerHTML = `<img height="150" src="${payload.images[i].url}"  alt="">`;
            }
        });
};

loadSecondaryBtn.addEventListener("click", loadSecondary);

//   3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view

let viewButtons = document.querySelectorAll(".card button:first-of-type");

viewButtons.forEach((button) => {
    button.setAttribute("data-toggle", "modal" )
    button.setAttribute("data-target", "#exampleModal" )

    button.addEventListener(
        "click",
        (openModal = (event) => {
            let source = event.target.closest(".card").children[0].src;
            console.log(source);
            let modal = document.querySelector(".modal-body");
            console.log(modal);
            let image = ` <img src="${source}" style="width:100%; object-fit:cover;"/>`;
            modal.innerHTML = image;
        })
    );
});

//   4) The Edit button should be replace with a "Hide" button.
//   5) When the hide button is pressed, the whole picture card disappears.

const cards = document.querySelectorAll(".card")
let edit = document.querySelectorAll(".card button:last-of-type");

edit.forEach((button, index) => {
    button.innerText = "Hide";

    button.addEventListener("click", () => {
        cards[index].classList.add("d-none");
    });
});

//   6) Replace the "9 mins" string in the card template with the ID of the Image

let nineMins = document.querySelectorAll(".card small");

nineMins.forEach((element) => { });

//   [EXTRA]
//   7) Add in the "jumbotron" a search field. If there is a value there and the user press "Load Seconday Image" the API call should use the specified query as query
//   8) After every button is pressed, display in an alert for 5 seconds the result of the operation (es.: 20 images loaded)
//   9) Handle API error gracefully using alert components with the message inside
//   10) Add at the bottom of the page a carousel with "forest" images loaded by another API call

//   [EVEN MORE EXTRA]
//   11) Use the map method to create from your splashbase response object an array containing just the url strings
//   12) Use filter to modify the "forest" api call to receive only images from a source different than "unsplash"
//   13) Use the reduce method on the results array to sum up all the id numbers in a single one

//   [HINT]
//   You can replace the images src for making your pictures appear on button click or you can use template literals to re-create all the cards from scratch.
//   Use arrow functions to make some practice with them

//   API Docs: http://www.splashbase.co/api
// -->
