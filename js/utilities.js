

//function for get all card value
function getCardValueById(cardValueId){
    const cardValueElement = document.getElementById(cardValueId);
    const cardValueString = cardValueElement.innerText;
    const cardValue = parseFloat(cardValueString);
    return cardValue;
    
}

//function for total price get
function getTotalPriceById(totalPriceId){
    const totalPriceElement = document.getElementById(totalPriceId);
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);
   
    return totalPrice;
}

//function for set new total price
function getTotalPriceValueById(totalPriceId, newValue){
    const textElement = document.getElementById(totalPriceId);
    textElement.innerText = newValue;
}

//function for get all card name
function getCardNameById(cardNameId){
    const cardNameElement = document.getElementById(cardNameId);
    const cardName = cardNameElement.innerText;
    return cardName;
}

//function for total card name
function getTotalCardNameById(totalCardNameId){
    const totalPriceElement = document.getElementById(totalCardNameId);
    const totalCardName = totalPriceElement.innerText;
    return totalCardName;
}

//function for set new card name in total
function getTotalCardNameById(totalCardNameId, newValue){
    const textElement = document.getElementById(totalCardNameId);
    textElement.innerText = newValue;
}

//add to calculation entry
function addToCalculationEntry(cardName){
    
    const calculationEntry = document.getElementById('all-card-name');
    const p = document.createElement('p');
    p.innerHTML = cardName;
    calculationEntry.appendChild(p);
    console.log(calculationEntry);
}

