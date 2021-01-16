const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');

const inpOne = document.getElementById('amount-one');
const inpTwo = document.getElementById('amount-two');
const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

function calculate(){
  const curr_one = currencyOne.value;
  const curr_two = currencyTwo.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${curr_one}`)
  .then((res) => res.json())
  .then((data)=> {
    console.log(data);
    const rate = data.rates[curr_two]

    rateEl.innerText = `1 ${curr_one} = ${rate} ${curr_two}`;
    inpTwo.value = (inpOne.value * rate).toFixed(2)
  })
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
inpOne.addEventListener('input', calculate)
inpTwo.addEventListener('input', calculate)

swap.addEventListener('click', ()=>{
  [currencyOne.value,currencyTwo.value] = [currencyTwo.value, currencyOne.value]
  calculate()
})
calculate();