"use strict"

const btn = document.querySelectorAll('.btn');
const navbar = document.querySelector('.navbar');
const randomColor = document.querySelector('.random');





for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(){
    const color = this.getAttribute('data-color');
    navbar.style.background = color;
  })
  
}


randomColor.addEventListener('click', () => { 
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  navbar.style.background = `rgb(${r},${g},${b})`;
  randomColor.style.background = `rgb(${r},${g},${b})`;
})

