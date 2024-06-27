document.addEventListener('DOMContentLoaded',function(){
let popupBox=document.getElementById('popup');
const closeButton = document.querySelector('.popup__close');

let bookButtons=document.querySelectorAll('.card__book');
console.log(bookButtons)


const closePopup=()=>{
    popupBox.style.opacity=0;
    popupBox.style.visibility='hidden';
    // window.location.hash='card_section'
    console.log('hii')
}
const openPopup=()=>{
    console.log('byy');
    popupBox.style.opacity=1;
    popupBox.style.visibility='visible';
    
}
closeButton.addEventListener('click',closePopup)
popupBox.addEventListener('click',closePopup)
for (let i = 0; i < bookButtons.length; i++) {
    console.log('click');
    bookButtons[i].addEventListener('click',openPopup)  
}
document.getElementById('popup__content').addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('stop');
})
});

