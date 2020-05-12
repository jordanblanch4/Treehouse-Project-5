//Notes style display none
//mapping/looping
//search bar
//utilizing 2 functions on data set
//HTML
const pageBody = document.querySelector('body');
const galleryContainer = document.getElementById('gallery');
let randomUsers = [];

//fetches data and parses it
fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => {
        generateCard(data.results);
        return storeUsers(data.results)})
    .then((data) => {cardClick(data)})
    
    
//Search Markup
const searchBar = document.querySelector('.search-container');
searchBar.innerHTML += `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;


function storeUsers(userObjects) {
    for(let i =0; i<userObjects.length; i++ ) {
        randomUsers.push(userObjects[i])
    }
    return randomUsers;
}


//gallery markup
function generateCard(userObjects) {
    let users = ''
    for(let i =0; i<userObjects.length; i++) {
    users+=
    `<div class="card">
    <div class="card-img-container"> 
        <img class="card-img" src="${userObjects[i].picture.large}" alt="profile picture"></img>
        </div>
        <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${userObjects[i].name.first} ${userObjects[i].name.last}</h3>
                        <p class="card-text">${userObjects[i].email}</p>
                        <p class="card-text cap">${userObjects[i].location.city}</p>
                    </div>
                    </div>`;
    }
    gallery.innerHTML = users;
   
};

function modalDisplay(usersModal) {
    let modalContent = ``;
    const newDiv = document.createElement('div');
    newDiv.className = 'modal-container';
    const month = usersModal.dob.date.slice(5, 7);
    const day = usersModal.dob.date.slice(8,10);
    const year = usersModal.dob.date.slice(0, 4);
    modalContent +=
    `<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${usersModal.picture.large}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${usersModal.name.first} ${usersModal.name.last}</h3>
        <p class="modal-text">${usersModal.email}</p>
        <p class="modal-text cap">${usersModal.location.city}</p>
        <hr>
        <p class="modal-text">${usersModal.phone}</p>
        <p class="modal-text">${usersModal.location.street.number} ${usersModal.location.street.name}, ${usersModal.location.city}, ${usersModal.location.state} ${usersModal.location.postcode}</p>
        <p class="modal-text">Birthday: ${month}/${day}/${year}</p>
    </div>
    </div>`;
    newDiv.innerHTML = modalContent;
    pageBody.appendChild(newDiv);
    closeModal();
    
  
}



//open modal
function cardClick(userObjects) {
    const card = document.querySelectorAll('.card');
    for(let i=0; i< card.length; i++ ) {
        card[i].addEventListener('click', () => {
            modalDisplay(userObjects[i]);
        });
    }
    
}

function closeModal() {
const modalContainer = document.querySelector('.modal-container');
modalContainer.addEventListener('click', (event) => {
    if(event.target.innerText === 'X') {
        modalContainer.parentNode.removeChild(modalContainer);

    }
})
}
