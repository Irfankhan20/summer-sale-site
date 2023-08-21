 //apply coupon code
// Apply discount on total price when coupon code is "SELL200"


function applyCoupon() {
    const couponCodeInput = document.getElementById("coupon-value");
    const totalAmountElement = document.getElementById("total-price");
    const totalPrice = parseFloat(totalAmountElement.innerText);
    console.log(totalPrice);
  
    if (couponCodeInput.value === "SELL200") {
      const discount = totalPrice * 0.2; // 20% discount
      const discountedTotal = totalPrice - discount;
  
      const discountElement = document.getElementById("discount-value");
      const discountedTotalElement = document.getElementById("discounted-total");
  
      discountElement.innerText = discount.toFixed(2) + " TK";
      discountedTotalElement.innerText = discountedTotal.toFixed(2) + " TK";
      const alart= document.getElementById("alart");
      alart.innerHTML=<p class="text-red-400 font-semibold pt-2"></p>; 
    }
    else {
        const alart= document.getElementById("alart");
        alart.innerHTML=<p class="text-red-400 font-semibold pt-2">Enter Correct Cupon Code !</p>; 
    }
    
  }

  document.getElementById('apply-btn').addEventListener('click', applyCoupon);







// document.getElementById('apply-btn').addEventListener('click', function(){
//     const couponInputValue = document.getElementById('coupon-value');
//     const inputValue = couponInputValue.value;
    
    
    
   
//     if(inputValue == 'SELL200'){
//         const newValue = newTotalPrice * 0.2;
//         getTotalCardNameById('discount-value', newValue);
//     }
   
// })

