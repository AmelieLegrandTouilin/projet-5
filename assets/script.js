const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	]
	
let index =0;
const image=document.getElementById('img-banner');
const rightArrow = document.querySelector('.arrow_right');
const leftArrow = document.querySelector('.arrow_left');
const banner = document.getElementById("banner");
const tagLine = document.getElementById("tagLine");
const imagesSources = ["slide2.jpg", "slide3.jpg", "slide4.jpg"].map(image => `./assets/images/slideshow/${image}`);
let dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {

  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot); 
	console.log("dot-créé");

}
dots.children[0].classList.add ('dot_selected');

rightArrow.addEventListener("click",() => {
	console.log (slides[index].image);
	console.log (tagLine);
	index++;
	if (index >slides.length -1) {
		index=0
	};
	image.src='./assets/images/slideshow/'+slides[index].image;
	tagLine.innerHTML=slides[index].tagLine;
	dots.children[index].classList.add ('dot_selected');
	dots.children[index-1].classList.remove ('dot_selected');
});


leftArrow.addEventListener("click",() => {
	console.log (slides[index].image);
	console.log (tagLine);
	index--;
    if (index<0) {
		index=slides.length -1;
	}
	image.src='./assets/images/slideshow/'+slides[index].image;
	tagLine.innerHTML=slides[index].tagLine;

	for (let i = 0; i < dots.children.length; i++) {
        if (i === index) {
            dots.children[i].classList.add('dot_selected');
        } else {
            dots.children[i].classList.remove('dot_selected');
        }
    }
});
 



  


