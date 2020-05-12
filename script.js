
//Global variables
const pageBody = document.querySelector('body');
const galleryContainer = document.getElementById('gallery');
let randomEmployees = [];

//fetches data and parset it then plugs it in to out function
fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data => {
        generateCard(data.results);
        return storeEmployees(data.results)})
    .then((data) => {cardClick(data)})
    
    
//Search Markup created search box doenst have functionality will add later for fun
const searchBar = document.querySelector('.search-container');
searchBar.innerHTML += `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;

//stores the employees in an array allowing us to use them for creating markup and adjusting said markup on clicks
function storeEmployees(userObjects) {
    for(let i =0; i<userObjects.length; i++ ) {
        randomEmployees.push(userObjects[i])
    }
    return randomEmployees;
}


//creates the gallery markup with employee cards takes in user object
function generateCard(userObjects) {
    let employees = ''
    for(let i =0; i<userObjects.length; i++) {
    employees+=
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
    gallery.innerHTML = employees;
   
};

//created modal view function used later with click event
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
    
    //calls close modal now that the modal is open bc called on card click
    closeModal();
    
  
}



//open modal on card click
function cardClick(userObjects) {
    const card = document.querySelectorAll('.card');
    for(let i=0; i< card.length; i++ ) {
        card[i].addEventListener('click', () => {
            modalDisplay(userObjects[i]);
        });
    }
    
}

//closes modal when x button is clicked inside modal card
function closeModal() {
const modalContainer = document.querySelector('.modal-container');
modalContainer.addEventListener('click', (event) => {
    if(event.target.innerText === 'X') {
        modalContainer.parentNode.removeChild(modalContainer);

    }
})
}
