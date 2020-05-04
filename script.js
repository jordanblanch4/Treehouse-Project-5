
//fetches data and parses it
fetch('https://randomuser.me/api/?results=12&inc=name,picture,email,location')
    .then(response => response.json())
    .then(data => gene(data.results)) //FIXEME: do something besides log data


//Search Markup
const searchBar = document.querySelector('.search-container');
searchBar.innerHTML += `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;

//gallery markup
function generateCard(data) {
const gallery = document.getElementById('gallery');

let html = `<div class ="card">
<div class="card-img-container">
<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
</div>
<div class="card-info-container">
<h3 id="name" class="card-name cap">last first</h3>
<p class="card-text">email</p>
<p class="card-text cap">city, state</p>
</div>
</div>`


html += `<div class="modal-container" hidden = true>
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>`;
gallery.innerHTML += html;
}

//Global variables for the event listeners
const modalDisplay = document.querySelector('.modal-container');
const card = document.querySelectorAll('.card')
const modal = document.querySelector('.modal');
const closeButton = document.getElementById('modal-close-btn');

//FIXME
// //open modal on card click
// card.addEventListener('click', (e) => {
//     modal.classList.remove('hidden') //FIXME not class list
//modal.style.display = 'block';
// })



//close modal on button click

closeButton.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

