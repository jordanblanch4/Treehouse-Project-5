
//FIXME:Image sizes
//fetches data and parses it
fetch('https://randomuser.me/api/?results=12&inc=name,picture,email,location')
    .then(response => response.json())
    .then(data => generateCard(data.results) && generateModal(data.results))
    
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
};
