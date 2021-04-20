let catalogue = [];

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((data) => {
    catalogue = data;
    console.log(catalogue);
  })
  .catch((err) => console.log(err));

window.onload = function () {
  loadBooks();
};

function loadBooks() {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((books) => displayBooks(books))
    .catch((error) => console.log(error));
}

function displayBooks(books) {
  books.forEach((book) => {
    let bookShelf = document.querySelector("#books .row");

    let card = `<div id="${book.asin}"class="book col-6-md-4">
        <div class="card m-2" style="width: 18rem;">
        <a href="productPage.html?bookAsin=${book.asin}" onclick="goToProductpage(${book.asin})">
                <img src="${book.img}" height=300 class="card-img-top" alt="...">
                <div class="card-body">
                <h5 >${book.title}</h5>
                <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a  onclick="addToCart(event)" class="btn btn-primary">£${book.price} - Add to cart</a>
                <a  onclick="removeCard(event)" class="btn btn-danger">Skip</a>
                    </div>
                    </div>
                    </div>`;

    bookShelf.innerHTML += card;
  });
}

const addToCart = (event) => {
  let card = event.target.closest(".book");
  card.style.backgroundColor = "green";

  const bookAsin = card.id

  const book = catalogue.find(book => book.asin === bookAsin)

  const cartCard = `<div id="${book.asin}"class="book col-6-md-4">
  <div class="card m-2" style="width: 18rem;">
  <a href="#" onclick="goToProductpage(${book.asin})">
          <img src="${book.img}" height=300 class="card-img-top" alt="...">
          <div class="card-body">
          <h5 >${book.title}</h5>
          <p class="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  class="btn btn-primary">£${book.price}</a>
          <a  onclick="removeCard(event)" class="btn btn-danger">Remove from cart</a>
              </div>
              </div>
              </div>`

  
  let shoppingList = document.getElementById("shoppingList");

  shoppingList.innerHTML += cartCard;
};

const removeCard = (event) => {
  let card = event.target.closest(".book").classList.add("d-none")
};

const removeFromCart = (event) => {};

const searchFor = () => {
  let searchQuery = document
    .querySelector("input[type=text]")
    .value.toLowerCase();
  const books = document.querySelector("#books .row");
  console.log(books);
  const filteredBook = catalogue.filter(
    (book) => book.title.toLowerCase().indexOf(searchQuery) !== -1
  );
  console.log(filteredBook);

  books.innerHTML = filteredBook
    .map(
      (book) => `<div class="col-md-4">
    <div class="card m-2" style="width: 18rem;">
            <img src="${book.img}" height=300 class="card-img-top" alt="...">
            <div class="card-body">
            <h5 >${book.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" onclick="addToCart(event)" class="btn btn-primary">£${book.price} - Add to cart</a>
            <a href="#" onclick="removeCard(event)" class="btn btn-danger">Skip</a>
                </div>
                </div>
                </div>`
    )
    .join("");
};

let cleanButton = document.querySelector("#cleanCart")
console.log(cleanButton);
function cleanCart() {

  let shoppingList = document.getElementById("shoppingList");
  shoppingList.innerHTML = ""
  
    
  }

cleanButton.addEventListener("click", cleanCart)



