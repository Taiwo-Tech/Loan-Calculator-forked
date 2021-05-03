let form = document.getElementById('form');

form.addEventListener('submit', calculate);

//let calc = document.getElementById('calculate');
//calc.addEventListener('click', calculate);

function giveError (){
    let divErr = document.createElement('div');
    divErr.innerHTML = '<p class="alert alert-dismissible bg-danger tranx p-3 text-white text-center rounded">Please, input valid number(s) and fill out all the fields 😑<span class="close"></span></p>';
    
    let loanCalc = document.getElementById('loanCalc');
    let form = document.getElementById('form');
    
    loanCalc.insertBefore(divErr, form);
    
    setTimeout(function() {
      divErr.style.display = 'none';
    }, 2000);
  }
  

function calculate (e) {
    e.preventDefault();
  
  let loanAmount = document.getElementById('amount').value;
let interest = document.getElementById('interest').value;
let year = document.getElementById('year').value;

  
  
  if (loanAmount === ''|| interest === '' || year === '') {
    giveError();
  } else {
    
    if (loanAmount !== '' && interest !== '' && year !== '') {
     setTimeout(function() {
       document.getElementById('loader').classList.remove('d-none');
       let res = document.getElementById('result');
       res.classList.add('d-none');
     }, 0);
     setTimeout(function() {
       document.getElementById('loader').classList.add('d-none');
       let res = document.getElementById('result');
      //res.style.display = 'block';
      res.classList.remove('d-none');
     }, 2000);
    }
    
    let loan = parseFloat(loanAmount);
    let inte = parseFloat(interest);
    let yer = parseFloat(year);
    
  //console.log(loan , inte, yer);
  
  let int = inte * 0.01;
  
 // console.log(int);
  let ye = yer * 12;
    console.log('ye: ' + ye);
  
  let amt = loan * int;
    console.log(amt);
  let amtFinal = loan + amt;
    console.log(amtFinal);
  let result = amtFinal / ye;
  
  let output = parseFloat(result.toFixed(2))
  console.log(output);
  
  
  let monthly = document.getElementById('monthly');
  
  monthly.value = output;
  
  let totalPayment = document.getElementById('total');
  
  totalPayment.value = amtFinal;
  
   let totalInterest = document.getElementById('totalInterest');
  
   totalInterest.value = amt;
   
   //monthly.disabled = true;
  // totalPayment.disabled = true;
 //  totalInterest.disabled = true;
  
  // loanAmount.innerText ="";
  // interest.value.remove;
  // year.text = '';
  
  let amo = document.getElementById('amount');
  let si = document.getElementById('interest');
  let yr = document.getElementById('year');
  amo.placeholder= amo.value;
  si.placeholder= si.value;
  yr.placeholder= yr.value;
  amo.value= '';
  si.value= '';
  yr.value= '';

  }
  
  
  
  
  
}


document.getElementById('clearResult').addEventListener('click', clearResult);

document.getElementById('reset').addEventListener('click', reset);


function clearResult (e) {
  document.getElementById('monthly').value = '';
  
  document.getElementById('total').value = '';
  
  document.getElementById('totalInterest').value = '';
}

function reset (e){
  e.preventDefault();
  console.log('Window refreshed!');
  window.location.reload();
  
  // console.log('Window refreshed!');
}

