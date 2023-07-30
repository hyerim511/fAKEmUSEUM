// 100vh

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // console.log(vh);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);



// nav

const btnNav = document.getElementById('btnNav');
const navList = document.getElementById('navList');

btnNav.addEventListener('click', function () {
    navList.classList.toggle('block');
});

// btnNav.addEventListener('mouseover', function () {
//     navList.classList.toggle('none');
// });

window.onclick = function (event) {
    if (!event.target.matches('.btnNav')) {
        var dropdowns = document.getElementsByClassName("navList");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('block')) {
                openDropdown.classList.remove('block');
            }
        }
    }
}



// popup

const second = document.getElementById('second');
const popupSecond = document.getElementById('popupSecond');
const closeSecond = document.getElementById('closeSecond');
const first = document.getElementById('first');
const popupFirst = document.getElementById('popupFirst');
const closeFirst = document.getElementById('closeFirst');
const basement = document.getElementById('basement');
const popupBasement = document.getElementById('popupBasement');
const closeBasement = document.getElementById('closeBasement');
const storage = document.getElementById('storage');
const popupStorage = document.getElementById('popupStorage');
const closeStorage = document.getElementById('closeStorage');
const about = document.getElementById('about');
const popupAbout = document.getElementById('popupAbout');
const closeAbout = document.getElementById('closeAbout');
const popup = document.getElementsByClassName('popup');
const poster = document.getElementById('poster');

let imgSecond = new Array('images/second1.jpg', 'images/second2.jpg', 'images/second3.jpg', 'images/second4.jpg', 'images/second5.jpg', 'images/second6.jpg', 'images/second7.jpg', 'images/second8.jpg', 'images/second9.jpg', 'images/second10.jpg', 'images/second11.jpg', 'images/second12.jpg', 'images/second13.jpg');
let imgFirst = new Array('images/first1.jpg', 'images/first2.jpg', 'images/first3.jpg', 'images/first4.jpg', 'images/first5.jpg', 'images/first6.jpg', 'images/first7.jpg', 'images/first8.jpg', 'images/first9.jpg', 'images/first10.jpg', 'images/first11.jpg', 'images/first12.jpg', 'images/first13.jpg', 'images/first14.jpg', 'images/first15.jpg');
let imgBasement = new Array('images/basement1.jpg', 'images/basement2.jpg', 'images/basement3.jpg', 'images/basement4.jpg', 'images/basement5.jpg', 'images/basement6.jpg', 'images/basement7.jpg', 'images/basement8.jpg', 'images/basement9.jpg', 'images/basement10.jpg', 'images/basement11.jpg', 'images/basement12.jpg');

let startNum = 0;
let secondStyle = popupSecond.style;
let firstStyle = popupFirst.style;
let basementStyle = popupBasement.style;


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function secondRandom() {
    secondStyle.backgroundImage = 'url(' + imgSecond[startNum] + ')';
    if (startNum < 12) {
        startNum++;
    } else {
        startNum = 0;
    };
}

function firstRandom() {
    firstStyle.backgroundImage = 'url(' + imgFirst[startNum] + ')';
    if (startNum < 14) {
        startNum++;
    } else {
        startNum = 0;
    };
}

function basementRandom() {
    basementStyle.backgroundImage = 'url(' + imgBasement[startNum] + ')';
    if (startNum < 11) {
        startNum++;
    } else {
        startNum = 0;
    };
}

function blurX() {
    if (popupSecond.classList.contains('block')) {
        poster.style.filter = 'blur(10px)';
    } else if (popupFirst.classList.contains('block')) {
        poster.style.filter = 'blur(10px)';
    } else if (popupBasement.classList.contains('block')) {
        poster.style.filter = 'blur(10px)';
    } else if (popupStorage.classList.contains('block')) {
        poster.style.filter = 'blur(10px)';
    } else if (popupAbout.classList.contains('block')) {
        poster.style.filter = 'blur(10px)';
    } else {
        poster.style.filter = 'blur(0px)';
    }
}

const popupIn = document.getElementsByClassName('popupIn');
const popupHead = document.getElementsByClassName('popupHead');
const btnMap = document.getElementsByClassName('btnMap');
const blank = document.getElementsByClassName('blank');

// popup mobile touch
Array.from(popupIn).forEach((element, idx) => {
    element.onclick = () => {
        popupHead[idx].classList.toggle('flex');
        btnMap[idx].classList.toggle('block');
    };
});




let interval;


second.addEventListener('click', function () {
    navList.classList.remove('block');
    clearInterval(interval);
    popupSecond.classList.replace('none', 'block');
    popupSecond.style.zIndex = 1000;
    Array.from(popup).forEach((value) => {
        value.style.zIndex -= 1;
    });
    shuffle(imgSecond);
    secondRandom();
    interval = setInterval(secondRandom, 3000);
    if (matchMedia("screen and (min-width: 751px)").matches){
        poster.style.filter = 'blur(10px)';
    }
});

closeSecond.addEventListener('click', function () {
    popupSecond.classList.replace('block', 'none');
    clearInterval(interval);
    popupSecond.removeAttribute('style');
    if (matchMedia("screen and (min-width: 751px)").matches){
        blurX();
    }
});


first.addEventListener('click', function () {
    navList.classList.remove('block');
    clearInterval(interval);
    popupFirst.classList.replace('none', 'block');
    popupFirst.style.zIndex = 1000;
    Array.from(popup).forEach((value) => {
        value.style.zIndex -= 1;
    });
    shuffle(imgFirst);
    firstRandom();
    interval = setInterval(firstRandom, 3000);
    if (matchMedia("screen and (min-width: 751px)").matches){
        poster.style.filter = 'blur(10px)';
    }
});

closeFirst.addEventListener('click', function () {
    popupFirst.classList.replace('block', 'none');
    clearInterval(interval);
    popupFirst.removeAttribute('style');
    if (matchMedia("screen and (min-width: 751px)").matches){
        blurX();
    }
});

basement.addEventListener('click', function () {
    navList.classList.remove('block');
    clearInterval(interval);
    popupBasement.classList.replace('none', 'block');
    popupBasement.style.zIndex = 1000;
    Array.from(popup).forEach((value) => {
        value.style.zIndex -= 1;
    });
    shuffle(imgBasement);
    basementRandom();
    interval = setInterval(basementRandom, 3000);
    if (matchMedia("screen and (min-width: 751px)").matches){
        poster.style.filter = 'blur(10px)';
    }
});

closeBasement.addEventListener('click', function () {
    popupBasement.classList.replace('block', 'none');
    clearInterval(interval);
    popupBasement.removeAttribute('style');
    if (matchMedia("screen and (min-width: 751px)").matches){
        blurX();
    }
});

storage.addEventListener('click', function () {
    navList.classList.remove('block');
    clearInterval(interval);
    popupStorage.classList.replace('none', 'block');
    popupStorage.style.zIndex = 1000;
    Array.from(popup).forEach((value) => {
        value.style.zIndex -= 1;
    });
    if (matchMedia("screen and (min-width: 751px)").matches){
        poster.style.filter = 'blur(10px)';
    }
});

closeStorage.addEventListener('click', function () {
    popupStorage.classList.replace('block', 'none');
    popupStorage.removeAttribute('style');
    if (matchMedia("screen and (min-width: 751px)").matches){
        blurX();
    }
});

about.addEventListener('click', function () {
    navList.classList.remove('block');
    clearInterval(interval);
    popupAbout.classList.replace('none', 'block');
    popupAbout.style.zIndex = 1000;
    Array.from(popup).forEach((value) => {
        value.style.zIndex -= 1;
    });
    if (matchMedia("screen and (min-width: 751px)").matches){
        poster.style.filter = 'blur(10px)';
    }
});

closeAbout.addEventListener('click', function () {
    popupAbout.classList.replace('block', 'none');
    popupAbout.removeAttribute('style');
    if (matchMedia("screen and (min-width: 751px)").matches){
        blurX();
    }
});


Array.from(popup).forEach((el, index) => {
    el.onclick = () => {
        popup[index].style.zIndex = 2000;
        Array.from(popup).forEach((value) => {
            value.style.zIndex -= 10;
        });
    };
});


// // map

const btnMapSecond = document.getElementById('btnMapSecond');
const btnMapFirst = document.getElementById('btnMapFirst');
const btnMapBasement = document.getElementById('btnMapBasement');
const popupMap = document.getElementById('popupMap');
const map = document.getElementById('map');

btnMapSecond.addEventListener('click', function () {
    popupMap.style.display = 'flex';
    map.style.backgroundImage = "url('images/handoutSecond.jpg')";
});

btnMapFirst.addEventListener('click', function () {
    popupMap.style.display = 'flex';
    map.style.backgroundImage = "url('images/handoutFirst.jpg')";
});

btnMapBasement.addEventListener('click', function () {
    popupMap.style.display = 'flex';
    map.style.backgroundImage = "url('images/handoutBasement.jpg')";
});

popupMap.addEventListener('click', function () {
    popupMap.style.display = 'none';
});



// sound

const btnPlay = document.getElementById('btnPlay');
const btnMute = document.getElementById('btnMute');
const sound = document.getElementById('sound');

btnPlay.addEventListener('click', function () {
    sound.play();
    btnPlay.classList.add('none');
    btnMute.classList.remove('none');
});

btnMute.addEventListener('click', function () {
    sound.pause();
    btnMute.classList.add('none');
    btnPlay.classList.remove('none');
});