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
    let btnPlus = product.querySelector('input.btnPlus, input.btnPlus2, input.btnPlus3');
    let btnMinus = product.querySelector('input.btnMinus, input.btnMinus2, input.btnMinus3');
    let quantDisplay = product.querySelector('.productQuant, .productQuant2, .productQuant3');
    let btnAdd = product.querySelector('button.addToCart, button.addToCart2, button.addToCart3');

    let count = 0;

    if (btnPlus && quantDisplay) {
        btnPlus.addEventListener('click', () => {
            count++;
            quantDisplay.innerHTML = count;
        });
    }

    if (btnMinus && quantDisplay) {
        btnMinus.addEventListener('click', () => {
            if (count > 0) {
                count--;
                quantDisplay.innerHTML = count;
            }
        });
    }


});


////////////////////////////////////////////////////////
let allProd = document.querySelectorAll('.toCart');
let txtCart11 = document.querySelector('.txtCart'); 
let txtCart12 = document.querySelector('.txtCart2'); 
let txtCart13 = document.querySelector('.txtCart3'); 

allProd.forEach((product) => {
    let btnAddToCart = product.querySelector('.addToCart');
    let btnAddToCart2 = product.querySelector('.addToCart2');
    let btnAddToCart3 = product.querySelector('.addToCart3');

    let quantDisplay_ = product.querySelector('.productQuant');
    let quantDisplay_2 = product.querySelector('.productQuant2');
    let quantDisplay_3 = product.querySelector('.productQuant3');

    if (btnAddToCart && quantDisplay_) {
        btnAddToCart.addEventListener('click', () => {
            let quantidade = quantDisplay_.innerHTML;
            txtCart11.innerHTML = 'Camisetas: ' + quantidade;
        });
    }

    if (btnAddToCart2 && quantDisplay_2) {
        btnAddToCart2.addEventListener('click', () => {
            let quantidade = quantDisplay_2.innerHTML;
            txtCart12.innerHTML = 'Regatas: ' + quantidade;
            if (txtCart11.innerHTML.includes('Seu carrinho está vazio')) {
                txtCart11.innerHTML = '';
            }
        });
    }

    if (btnAddToCart3 && quantDisplay_3) {
        btnAddToCart3.addEventListener('click', () => {
            let quantidade = quantDisplay_3.innerHTML;
            txtCart13.innerHTML = 'Calças: ' + quantidade;
            if (txtCart11.innerHTML.includes('Seu carrinho está vazio')) {
                txtCart11.innerHTML = '';
            }
        });
    }

});


////////////////////////////////////////////////////////
let btnCart = document.querySelector('#cartMenu');
let cartButton = document.querySelector('#menuCart');

function cart(){
    cartButton.classList.toggle('menuCart1');
}
function removeClassCart(){
    cartButton.classList.remove('menuCart1');
}