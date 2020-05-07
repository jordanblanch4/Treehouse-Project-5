
//FIXME:Image sizes
//fetches data and parses it
fetch('https://randomuser.me/api/?results=12&inc=name,picture,email,location')
    .then(response => response.json())
    .then(data => generateCard(data.results))


//Search Markup
const searchBar = document.querySelector('.search-container');
searchBar.innerHTML += `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;

//gallery markup
function generateCard(data) {
const gallery = document.getElementById('gallery');
const users = data.map(item => 
    `<div class="card">
    <div class="card-img-container">; 
        <img class="card-img" src="${item.picture.large}" alt="profile picture"></img>
        </div>
        <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                        <p class="card-text">${item.email}</p>
                        <p class="card-text cap">${item.location.city}</p>
                    </div>
                </div>
<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${item.picture.medium}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
        <p class="modal-text">${item.email}</p>
        <p class="modal-text cap">${item.name.first}</p>
        <hr>
        <p class="modal-text">(555) 555-5555</p>
        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        <p class="modal-text">Birthday: 10/21/2015</p>
    </div>
</div>`
)
gallery.innerHTML += users;
};





//Global variables for the event listeners
const modalDisplay = document.querySelector('.modal-container');
const card = document.querySelectorAll('.card')
const modal = document.querySelector('.modal');
const closeButton = document.getElementById('modal-close-btn');

// FIXME
// open modal on card click
// card.addEventListener('click', (e) => {
// /modal.classList.remove('hidden') //FIXME not class list
// //modal.style.display = 'block';
// // })



//close modal on button click

// closeButton.addEventListener('click', (e) => {
//     modal.style.display = 'none';
// });

