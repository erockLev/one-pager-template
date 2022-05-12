'use strict'

const section1 = document.querySelector('.section1');
let curSection;
let newSection;

const navBar = document.querySelector('.nav');

const dskTpContainer = document.querySelector('.dsk-tp-container');

const html2 = 
`<div class="section section2" data-html = "2">
<main class="main main2">
    <p>Hey Look!  You're on Page 2!</p>
</main>   
</div>`;

const html3 =
`<div class="section section3" data-html = "3">
<main class="main main3">
    <p>Hey Look!  You're on Page 3!</p>
</main>   
</div>`;

const html4 =
`<div class="section section4" data-html = "4">
<main class="main main4">
    <p>Hey Look!  You're on Page 4!</p>
</main>   
</div>`;

let html;

// Helper Functions
const fromBottom = newSec => {
    setTimeout(function(){
    newSec.classList.add('fromBottom');
    newSec.classList.add('translate2');
    }, 875)
};

const fromBottomFast = newSec => {
    newSec.classList.add('fromBottom');
    newSec.classList.add('translate2');
}

const removeSection = curSec => {
    setTimeout(function(){
    curSec.remove();
    }, 990);
};

const reverseSection = curSec => {
    curSection = document.querySelector(`.section${curSec}`);
    curSection.classList.add('revTranslate');
    curSection.classList.remove('translate2');
    curSection.style.position = 'relative';
}
// First Page Initializer
const init = function(curSec) {
    
    // decide which html
    const curSecNum = Number(curSec);
    if(curSecNum === 2) { 
        html = html2;
    } else if(curSecNum === 3) {
        html = html3;
    } else if(curSecNum === 4) {
        html = html4;
    }
   
    // create first section
    dskTpContainer.insertAdjacentHTML('beforeend', html);
    curSection = document.querySelector(`.section${curSecNum}`);
    // from bottom helper function
    fromBottomFast(curSection);
}
// Change Page
const changeSection = function(curSec = '', newSec) {
    // decide which html
    const newSecNum = Number(newSec);
    if(newSecNum === 2) { 
        html = html2;
    } else if(newSecNum === 3) {
        html = html3;
    } else if(newSecNum === 4) {
        html = html4;
    }
    // Reverse Current
    reverseSection(curSec);
     // Remove Current
    removeSection(curSection);
    
     // Create New
     dskTpContainer.insertAdjacentHTML('beforeend', html);
     newSection = document.querySelector(`.section${newSec}`);
     curSection = newSection;
     // Translate New
     fromBottom(newSection);
}

navBar.addEventListener('click', function(e){
    e.preventDefault();
    let clicked = e.target;
   
    if(!clicked.dataset.curPage) return;
   
    if(clicked.dataset.curPage === 'home') {
       let curSec = curSection.dataset.html;
       reverseSection(curSec);
       removeSection(curSection);
        return
    };
   
    if(!section1.nextElementSibling) {
        let curSec = clicked.dataset.curPage;
        init(curSec);
    } else {
        let curSec = curSection.dataset.html;
        let nextSec = clicked.dataset.curPage;
         if(clicked.dataset.curPage === curSection.dataset.html) return;
       
        changeSection(curSec, nextSec);
    }
});

