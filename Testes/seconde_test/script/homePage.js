let btn = document.querySelector('#menuBut');
let homeButton = document.querySelector('#testMenu');

function home(){
    homeButton.classList.toggle('testMenu1');
}
function removeClass(){
    homeButton.classList.remove('testMenu1');
}
////////////////////////////////////////////////////////
let allProducts = document.querySelectorAll('.toCart');

allProducts.forEach((product) => {
    let btnPlus = product.querySelector('.btnPlus');
    let btnMinus = product.querySelector('.btnMinus');
    let quantDisplay = product.querySelector('.productQuant');
    let count = 0;

    btnPlus.addEventListener('click', () => {
        count++;
        quantDisplay.innerHTML = count;
    });

    btnMinus.addEventListener('click', () => {
        if (count > 0) {
            count--;
            quantDisplay.innerHTML = count;
        }
    });
});

////////////////////////////////////////////////////////
let btnAddToCart = document.querySelector('.addToCart');

btnAddToCart.addEventListener('click', () => {

})
////////////////////////////////////////////////////////
