//for card 1
document.getElementById('first-card').addEventListener('click', function(){
    const newCardValue = getCardValueById('first-card-value');
    const previousTotalPrice = getTotalPriceById('total-price');
    
    const newTotalPrice = newCardValue + previousTotalPrice;
    getTotalPriceValueById('total-price', newTotalPrice);

    //apply button enable
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }

     //purchase button enable
     if(newTotalPrice >= 0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }

    //add to calculation entry
    addToCalculationEntry('1. K. Accessories');
    
   

})
//for card 2
document.getElementById('second-card').addEventListener('click', function(){
    const newCardValue = getCardValueById('second-card-value');
    const previousTotalPrice = getTotalPriceById('total-price');
    
    const newTotalPrice = newCardValue + previousTotalPrice;
    getTotalPriceValueById('total-price', newTotalPrice);

    //apply button enable
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }

     //purchase button enable
     if(newTotalPrice >= 0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }

    //add to calculation entry
    addToCalculationEntry('2. K. Accessories 2');

})
//for card 3
document.getElementById('third-card').addEventListener('click', function(){
    const newCardValue = getCardValueById('third-card-value');
    const previousTotalPrice = getTotalPriceById('total-price');
    
    const newTotalPrice = newCardValue + previousTotalPrice;
    getTotalPriceValueById('total-price', newTotalPrice);

    //apply button enable
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }

     //purchase button enable
     if(newTotalPrice >= 0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }

    //add to calculation entry3
    addToCalculationEntry('3. Home Cooker');

})
//for card 4
document.getElementById('fourth-card').addEventListener('click', function(){
    const newCardValue = getCardValueById('fourth-card-value');
    const previousTotalPrice = getTotalPriceById('total-price');
    
    const newTotalPrice = newCardValue + previousTotalPrice;
    getTotalPriceValueById('total-price', newTotalPrice);

    //apply button enable
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }

     //purchase button enable
     if(newTotalPrice >= 0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }

    //add to calculation entry
    addToCalculationEntry('4. Home Cooker');

})
//for card 5
document.getElementById('fiveth-card').addEventListener('click', function(){
    const newCardValue = getCardValueById('fiveth-card-value');
    const previousTotalPrice = getTotalPriceById('total-price');
    
    const newTotalPrice = newCardValue + previousTotalPrice;
    getTotalPriceValueById('total-price', newTotalPrice);

    //apply button enable
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }

     //purchase button enable
     if(newTotalPrice >= 0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }

    //add to calculation entry
    addToCalculationEntry('5. Full Jersey Set');

})
//for card 6
document.getElementById('sixth-card').addEventListener('click', function(){
    const newCardValue = getCardValueById('sixth-card-value');
    const previousTotalPrice = getTotalPriceById('total-price');
    
    const newTotalPrice = newCardValue + previousTotalPrice;
    getTotalPriceValueById('total-price', newTotalPrice);

    //apply button enable
    if(newTotalPrice >= 200){
        const applyButton = document.getElementById('apply-btn');
        applyButton.removeAttribute('disabled');
    }
     
    //purchase button enable
    if(newTotalPrice >= 0){
        const purchaseButton = document.getElementById('purchase-btn');
        purchaseButton.removeAttribute('disabled');
    }

    //add to calculation entry
    addToCalculationEntry('6. Sports cates');

})