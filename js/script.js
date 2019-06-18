const modalButtons = document.querySelectorAll(".shadow button");
const closeButtons = document.querySelectorAll("button.close");
const images = document.querySelectorAll(".card-image img");


const imgArr = [
   "01.JPG",
   "02.JPG",
   "03.JPG",
   "04.JPG",
   "05.JPG",
   "06.JPG",
   "07.JPG",
   "08.JPG",
   "09.JPG",
   "10.JPG",
   "100.JPG",
   "101.JPG",
   "102.JPG",
   "103.JPG",
   "104.JPG",
   "105.JPG",
   "106.JPG",
   "107.JPG",
   "108.JPG",
   "109.JPG",
   "11.JPG",
   "110.JPG",
   "111.JPG",
   "12.JPG",
   "13.JPG",
   "14.JPG",
   "15.JPG",
   "16.JPG",
   "17.JPG",
   "18.JPG",
   "19.JPG",
   "20.JPG",
   "21.JPG",
   "22.JPG",
   "23.JPG",
   "24.JPG",
   "25.JPG",
   "26.JPG",
   "27.JPG",
   "28.JPG",
   "29.JPG",
   "30.JPG",
   "31.JPG",
   "32.JPG",
   "33.JPG",
   "34.JPG",
   "35.JPG",
   "36.JPG",
   "37.JPG",
   "38.JPG",
   "39.JPG",
   "40.JPG",
   "41.JPG",
   "42.JPG",
   "43.JPG",
   "44.JPG",
   "45.JPG",
   "46.JPG",
   "47.JPG",
   "48.JPG",
   "49.JPG",
   "50.JPG",
   "51.JPG",
   "52.JPG",
   "53.JPG",
   "54.JPG",
   "55.JPG",
   "56.JPG",
   "57.JPG",
   "58.JPG",
   "59.JPG",
   "60.JPG",
   "61.JPG",
   "62.JPG",
   "63.JPG",
   "64.JPG",
   "65.JPG",
   "66.JPG",
   "67.JPG",
   "68.JPG",
   "69.JPG",
   "70.JPG",
   "71.JPG",
   "72.JPG",
   "73.JPG",
   "74.JPG",
   "75.JPG",
   "76.JPG",
   "77.JPG",
   "78.JPG",
   "79.JPG",
   "80.JPG",
   "81.JPG",
   "82.JPG",
   "83.JPG",
   "84.JPG",
   "85.JPG",
   "86.JPG",
   "87.JPG",
   "88.JPG",
   "89.JPG",
   "90.JPG",
   "91.JPG",
   "92.JPG",
   "93.JPG",
   "94.JPG",
   "95.JPG",
   "96.JPG",
   "97.JPG",
   "98.JPG"
];


images.forEach(img => { 
   randomNum = Math.floor(Math.random() * imgArr.length);
   img.src = `img/${imgArr[randomNum]}` 
});

function randomImages() {
   const randomArr = [];
   // random numbers
   outer:
   for (let i = 0; i < 4; ) {
      const randomNum = Math.floor(Math.random() * images.length);
      if (randomArr.length == 0) {
         randomArr.push(randomNum);
         i++;
         continue;
      }
      for (let j = 0; j < randomArr.length; j++) {
         if (randomArr[j] == randomNum) {
            continue outer;
         }
      }
      randomArr.push(randomNum);
      i++;
   }
   // random images using randomArr randomness
   for (let i = 0; i < randomArr.length; i++) {
      let randomImg = Math.floor(Math.random() * imgArr.length);
      if (randomImg < 10) {
         randomImg = "0" + randomImg;
      }
      images[randomArr[i]].src = `img/${randomImg}.jpg`
   }
}

setInterval(randomImages, 3000);


modalButtons.forEach(button => button.addEventListener("click", function () {
   this.parentElement.parentElement.classList.add("modal");
}));

closeButtons.forEach(button => button.addEventListener("click", function () {
   this.parentElement.classList.remove("modal");
}));

document.addEventListener("keydown", function(e) {
   if (e.key == "Escape") {
      modalButtons.forEach(button => {
         if (button.parentElement.parentElement.classList.contains("modal")) {
            button.parentElement.parentElement.classList.remove("modal");
         }
      })
   }
})