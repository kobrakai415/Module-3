let catalogue = [];

fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => {
        catalogue = data
        console.log(catalogue);
    })



window.onload = function () {
    loadBooks()
};

function loadBooks() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((response) => response.json())
        .then(books => displayBooks(books))
        .catch((error) => console.log(error));
}

function displayBooks(books) {
    books.forEach((book) => {
        let bookShelf = document.querySelector("#books .row");

        let card = `<div class="col-md-4">
        <div class="card m-2" style="width: 18rem;">
                <img src="${book.img}" height=300 class="card-img-top" alt="...">
                <div class="card-body">
                <h5 >${book.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" onclick="addToCart(event)" class="btn btn-primary">£${book.price} - Add to cart</a>
                <a href="#" onclick="removeCard(event)" class="btn btn-danger">Skip</a>
                    </div>
                    </div>
                    </div>`;

        bookShelf.innerHTML += card;



    })
}

const removeCard = (event) => {
    let card = event.target.closest(".col-md-4").remove()


}



const addToCart = (event) => {
    let card = event.target.closest(".col-md-4").innerHTML


    let shoppingList = document.getElementById("shoppingList")


    shoppingList.innerHTML += card
}

const searchFor = () => {
    let searchQuery = document.querySelector("input[type=text]").value
    let books = document.querySelectorAll(".col-md-4")
    let titles = document.querySelectorAll("h5")
    const filteredBook= catalogue.filter(book => {
      
        book.title.indexOf(searchQuery) !== -1
        
    })

console.log(filteredBook);
}

