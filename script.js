/////////////////////for X transition///////////////////
const pressX =  document.getElementById('removeStuff');
pressX.addEventListener('click',function(){
updateXbtn('transaction-area')

});
const pressX2 =  document.getElementById('removeStuff2');
pressX2.addEventListener('click',function(){
updateXbtn('transaction-area2');

});
function updateXbtn(id) {
   const pressXelement = document.getElementById(id);
   pressXelement.style.display = 'none';
}

//////////////////// FOR (+)///////////////////
 const addBtn = document.getElementById('plusBtn');
 addBtn.addEventListener('click',function(){

updatePlusBtn('textNumber');
increaseAmount('productNum1', n = 1219);
calculateTotal();
});  

const addBtn2 = document.getElementById('plusBtn2');
addBtn2.addEventListener('click',function(){

updatePlusBtn('textNumber2');
increaseAmount('productNum2', n = 59);
calculateTotal();
});

/////////////////// FOR (-)///////////////////
const lessBtn = document.getElementById('minusBtn');
lessBtn.addEventListener('click',function(){
   updateMinusBtn('textNumber');
   decreaseAmount('productNum1', n = 1219);
   calculateTotal();
});

const lessBtn2 = document.getElementById('minusBtn2');
lessBtn2.addEventListener('click',function(){
   updateMinusBtn('textNumber2');
   decreaseAmount('productNum2', n = 59);
   calculateTotal();
});
/////////////////////functions all///////////////////
function updatePlusBtn(id) {
   const textElement = document.getElementById(id);
   const textElementNumber = parseFloat(textElement.value);
   const finalNumber = textElementNumber + 1;
   textElement.value = finalNumber;
};

function updateMinusBtn(id){
   const minusElement = document.getElementById(id);
   const minusElementNumber = parseFloat(minusElement.value);
   let finalMinusNumber;
   if (minusElementNumber > 1) {
        finalMinusNumber = minusElementNumber - 1;
    } else {
        finalMinusNumber = minusElementNumber; // Keep the value unchanged if it's already 1 or less
    }
   minusElement.value = finalMinusNumber;
};

function increaseAmount(id, n) {
   const plusAmount = document.getElementById(id).innerText;
   const plusNumber = parseFloat(plusAmount);
   const plusNumberCount = plusNumber + n;
   document.getElementById(id).innerText = plusNumberCount;
   return plusNumberCount;
};

function decreaseAmount(id, n) {
   const minusAmount = document.getElementById(id).innerText;
   const minusNumber = parseFloat(minusAmount);
   let minusNumberCount;
   if (minusAmount >= n+1) {
      minusNumberCount = minusNumber - n;
   } else {
      minusNumberCount = minusNumber;
   }
   document.getElementById(id).innerText = minusNumberCount;
   return minusNumberCount;
};

function calculateTotal() {
   const phonePrice = parseFloat(document.getElementById('productNum1').innerText);
   const casePrice = parseFloat(document.getElementById('productNum2').innerText);
 
   const subTotal = phonePrice + casePrice;
   const tax = subTotal * 0.05;
   const totalPrice = subTotal + tax;

   document.getElementById('sub-total').innerText = subTotal.toLocaleString(); // Format with commas
   document.getElementById('tax-amount').innerText = tax.toLocaleString(); // Format with commas
   document.getElementById('total-price').innerText = totalPrice.toLocaleString(); // Format with commas
}