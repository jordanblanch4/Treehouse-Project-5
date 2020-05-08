//Notes style display none
//mapping
//search bar
//utilizing 2 functions on data set


//fetches data and parses it
fetch('https://randomuser.me/api/?results=12&inc=name,picture,email,location')
    .then(response => response.json())
    .then(data => generateCard(data.results))
    .then(data => generateModal(data))
    
    
    
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
    <div class="card-img-container"> 
        <img class="card-img" src="${item.picture.large}" alt="profile picture"></img>
        </div>
        <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                        <p class="card-text">${item.email}</p>
                        <p class="card-text cap">${item.location.city}</p>
                    </div>
                </div>`
        ).join('');
    gallery.innerHTML += users;
    return data
};
//FIXME::  Birthday
function generateModal(data) {
    const modalDiv = document.getElementById('modali');
    const users1 = data.map(item =>
        `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${item.picture.large}" alt="profile picture">
                <h3 id="named" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
                <p class="modal-text">${item.email}</p>
                <p class="modal-text cap">${item.location.city}</p>
                <hr>
                <p class="modal-text">${item.phone}</p>
                <p class="modal-text">${item.location.street.number}</p>
                <p class="modal-text">Birthday: birthday</p>
            </div>
        </div>`
    ).join('');
    modalDiv.innerHTML = users1;
    modalDiv.style.display = "none";
    };

//open/close Modal
const modalDiv = document.getElementById('modali');
modalDiv.style.display = 'block';
let modalContain = document.getElementsByClassName('modal-info-container');
const openModal = document.getElementById('gallery');
gallery.addEventListener('click', (event) => {
    let modalContain = document.getElementsByClassName('modal-container');
    if(event.target.id === "name") {
       let named = document.getElementById('named').textContent;
        for(let i=0; i<modalContain.length; i++) {
        
        if(event.target.textContent === named);{
            console.log(named);
        }
    }
}
}
);
//fix overlay
//close modal on x button
modalDiv.addEventListener('click', (event) => {
    if(event.target.tagName = 'button')
    modalDiv.style.display = "none";
})