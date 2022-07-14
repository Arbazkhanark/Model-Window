'use strict'

const model=document.querySelector('.model');
const overlay=document.querySelector('.overlay');
const close_btn=document.querySelector('.close-model');
const open_btn=document.querySelectorAll('.show_btn');

  console.log(open_btn);


//We make function to open the window sheet in the page...  
const openModel= function(){
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
};


//We make function to close the window sheet in the page... 
const closeModel=function(){
model.classList.add('hidden');
overlay.classList.add('hidden');
}

 
  
for(let  i=0; i< open_btn.length ; i++){

    console.log('Button Clicked')
    open_btn[i].addEventListener('click', openModel);

    
    console.log('hiiiii');
};


//We call function here in both of these lines..
close_btn.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

