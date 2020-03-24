/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container')

//Component
function Carousel() {

const carousel = document.createElement('div')
const leftBtn = document.createElement('div')
const imgShow = document.createElement('img')
const rightBtn = document.createElement('div')

carousel.classList.add('carousel');
leftBtn.classList.add('left-button');
rightBtn.classList.add('right-button');

leftBtn.textContent = '<';
rightBtn.textContent = '>';

carousel.append(leftBtn, imgShow, rightBtn);

//Event Listeners 
let clicks = 0;
leftBtn.addEventListener('click', () => {
  clicks > -1 && clicks < 3 ? clicks++ : clicks = 0;
  imgShow.src = imgSelector(clicks);
})

rightBtn.addEventListener('click', () => {
  clicks === 0 ? clicks = 3 : clicks--;
  imgShow.src = imgSelector(clicks);
})

//Display the image 
imgShow.src = imgSelector(clicks);
imgShow.style.display = 'inline-block';



return carousel;
}

//Iterate through images
function imgSelector(clicks){
  let imgSrcs = ["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"]
  return imgSrcs[clicks];
}


carouselContainer.append(Carousel());

