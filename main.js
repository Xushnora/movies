let elList = document.querySelector('#listCard');
let elModalDesc = document.querySelector('.modalDesc');
let elModalBody = document.querySelector('.modal-body');
let elModalName = document.querySelector('.modal-header');


for(let i = 30; i <= 53; i++) {
    let li = document.createElement('li');
    li.style.position = 'relative';
    li.style.width = '270';
    li.innerHTML = `
        <img src="${movies[i].youtubePoster}" alt="movie" width="270" height="370">
        <div class="addBtn">
            <button class="heart__btn" onclick ="addHeart('${movies[i].imdbId}')">
                <i class='bx bxs-heart'></i>
            </button>
        </div>
        <span class="currient">USA, 2016-Current</span>
        <h3 class="card__title">${movies[i].title}</h3>
        <div class="star__box d-flex">
            <div>
                <button onclick ="addModal('${movies[i].imdbId}')" class="ModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./imgs/imd.png" alt="imd"></button>
                <span>${movies[i].imdbRating}</span>
            </div>
            <div>
                <i class='bx bxs-star'></i>
                <span>${movies[i].runtime}%</span> 
            </div>
        </div>
        <div class="movie-category">${movies[i].categories}
        </div>
    `
    elList.appendChild(li);
}

let addHeartBtn = document.querySelectorAll('.heart__btn');

addHeartBtn.forEach(addHeartBtn => addHeartBtn.addEventListener('click', (e) => {
    e.target.style.color = 'red';
    console.log(e.target);
}));


function addHeart (e) {
    let newHeartArr = [];
    for (let i = 30; i <= 53; i++) {
        if (movies[i].imdbId == `'${e}'`) {
            let b = movies[i];
            newHeartArr = b.title;
        }
    }
    console.log(newHeartArr);
}



function addModal(e) {
    for(let i = 30; i <= 53; i++) {
        if (movies[i].imdbId == e) {
            let a = movies[i];
            elModalName.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">${a.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
            elModalBody.innerHTML = `
            <div class="d-flex">
                <div>
                    <img class = "poster-img" src="${a.youtubePoster}" alt="poster">
                </div>
                <div class="modalDesc">${a.summary}</div>
            </div>`
        }
    }
}











