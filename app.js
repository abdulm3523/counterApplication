/**
 * DATE: 24-08-2024
 * Counter Application
 * AUTHOR: ABDUL MALIK
 */

window.onload = ()=>{
    main()
}


// DOM REFERANCE
const displayValue = document.getElementById('display__number')
const incrementalInput = document.getElementById('increment_input')
const decrementalInput = document.getElementById('decrement_input')
const incrementalBtn = document.getElementById('increment__btn')
const decrementalBtn = document.getElementById('deccrement__btn')

function main(){
    // INCREMENTAL CLICK EVENT
    incrementalBtn.addEventListener('click',incrementBtnHendaler)
    
    // DECREMENENTAL CLICK EVENT
    decrementalBtn.addEventListener('click', decrementBtnHendaler)

    // INCREMENTAL INPUT EVENT

    incrementalInput.addEventListener('change',incrementInputFiledHandelar)

    // DECREMENENTAL INPUT EVENT
    decrementalInput.addEventListener('change',decrementInputFiledHandelar)

}

// EVENT HENDALER

// decrement event hendaler
function decrementInputFiledHandelar(e){
    let currentValue = parseInt(displayValue.innerHTML)
        let inputValue = parseInt(e.target.value)
        let updateValue = parseInt(currentValue - inputValue)
        displayValue.innerHTML = updateValue
        if(inputValue == ''){
            displayValue.innerHTML = 0
        }else if(currentValue <= 0){
            displayValue.innerHTML = 0
        }
}
// increment event hendaler
function incrementInputFiledHandelar(e){
    let currentValue = parseInt(displayValue.innerHTML)
    let inputValue = parseInt(e.target.value)
    let updateValue = parseInt(currentValue + inputValue)
    displayValue.innerHTML = updateValue
    if(inputValue == ''){
        displayValue.innerHTML = 0
    }
}

// Increment btn hendaler
function incrementBtnHendaler(){
    let currentValue = parseInt(displayValue.innerHTML)
        let increment = currentValue + 1
        displayValue.innerHTML = increment++
}

// decrement btn hendaler
function decrementBtnHendaler(){
    let currentValue = parseInt(displayValue.innerHTML)
    if(!currentValue == 0){
        let decrement = currentValue - 1
        displayValue.innerHTML = decrement--
    }
}