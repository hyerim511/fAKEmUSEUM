# FRAMEWORK from fAKE mUSEUM

fAKE mUSEUM is a project related to virtual exhibition spaces and images surrounding exhibitions. It deals with large-scale exhibition images that are sometimes distributed through online media, which can be even more prominent than the actual artworks or exhibits. Should we only perceive these exhibition images, which are created and displayed as exhibitions open and close, as secondary elements that are indirectly conveyed through online media such as SNS?

In order to explore the identity and significance of exhibition images that are no longer confined to artworks and exhibitions, as well as their relationship with "exhibitions," fAKE mUSEUM constructs and unveils a virtual exhibition space called 'fAKE mUSEUM,' where visitors can create or delete internal and external elements.

[fAKE mUSEUM(Kang Jiyun, Lim Nare)](http://www.fakemuseum.kr/) <br />
Graphic Degign by [PAPER COMPANY](www.behance.net/papercompany/)


## Requirements

- The main image should appear slowly initially
- Each floor should have slide images displayed randomly
- Each floor should have another pop-up for information
- Sound on and off functionality on the main page
- In the mobile viewport, the screen should be fixed in landscape orientation
- In the mobile viewport, the pop-up head should be hidden and appear with touch


## Design

### Design from Graphic design
They already have the main graphic design, so I only need to add functional UI elements, such as a navigation menu, sound button, and pop-ups. All designs follow their bold, black line, and squered design style.

### Layered Pop-up
There are 2 depth of pop-ups, and I'd like to differentiate them in terms of depth and space. I added a blured background for the 1st depth, as it has a different space from the main page, and a dark background for the 2nd depth, which provides information about the 1st depth. 


## Functionalities
All development work is done with Vanilla JavaScript.

### Pop-up
When clicking on each floor, the pop-up works as follows:

- Hide navigation
```
navList.classList.remove('block')
``` 

- Clear interval to prevent overlapping of slide images
```
clearInterval(interval)
```

- Show the pop-up
```
popupFirst.classList.replace('none', 'block')
```

- Bring this pop-up to the front
```
popupFirst.style.zIndex = 1000
```

- Move other pop-ups backward
```
Array.from(popup).forEach((value) => {value.style.zIndex -= 1;})
```

- Create a random array of images for the pop-up
```
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
```

- Add images to the background of the pop-up element
```
function firstRandom() {
    firstStyle.backgroundImage = 'url(' + imgFirst[startNum] + ')';
    if (startNum < 14) {
        startNum++;
    } else {
        startNum = 0;
    };
}
```

- Set an inteval to switch images in the pop-up every 3 seconds
```
interval = setInterval(firstRandom, 3000);
```

- Add blur effect to the main background image
```
if (matchMedia("screen and (min-width: 751px)").matches){
    poster.style.filter = 'blur(10px)';
}
```

- If clicking on another pop-up, bring it to the front
```
Array.from(popup).forEach((el, index) => {
    el.onclick = () => {
        popup[index].style.zIndex = 2000;
        Array.from(popup).forEach((value) => {
            value.style.zIndex -= 10;
        });
    };
});
```

### Landscape oriental in Mobile viewport
I couldn't find any solution to fix the landscape orientation in web environment, so I force the root to rotate by 90 degrees when it's portrait orientation. 

```
@media(orientation: portrait) {
    html {
        transform: rotate(-90deg);
        transform-origin: top left;
        position: absolute;
        top: 100%;
        left: 0;
        width: calc(var(--vh, 1vh) * 100);
        height: 100vw;
    }
}
```


## Timelines

- Oct 28 - Nov 6, 2022 : Development
- Jul 30, 2023 : Added README and created repository
