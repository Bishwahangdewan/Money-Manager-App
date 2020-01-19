//get the initial value
var enterMoney = document.getElementById('enter_money');

//get the error text
var error = document.getElementById("error");

//get the Manage money section div
var manageSection = document.getElementById('manage_div');
var money;

//get reset reset_button
resetButton = document.getElementById("reset_button");


//get the entire result div
var showDiv = document.getElementById('show_div')

//get evaluate button
var evaluate = document.getElementById("evaluate");

//get manage input fields
var necessity = document.getElementById("necessity");
var accessories = document.getElementById("accessories");
var emergency = document.getElementById("emergency");
var savings = document.getElementById("savings");

//get output fields
var showNecessity =  document.getElementById("show_necessity");
var showAccessories =  document.getElementById("show_accessories");
var showEmergency =  document.getElementById("show_emergency");
var showSavings =  document.getElementById("show_savings");

//loader
var loader = document.getElementById("loader");

//get manage input field error
var error_manage = document.getElementById("error_manage");


//after the money is entered save it in a variable and show manage cards
enterMoney.addEventListener('keyup',showManageMoney);

//add an event listener on evaluate
evaluate.addEventListener('click',showLoader);

//add an event to reset resetButton
resetButton.addEventListener('click',reload);

//function to reload the page when reset button is pressed
function reload(){
  location.reload();
}

//function to validate the initial money and display the manage div
function showManageMoney(e){
  if(e.keyCode == 13){
      money = e.target.value;

      //validate the input
      if(isNaN(money) || money == 0){
        //display error
        error.classList.remove("hidden");
      }else{
        //move ahead
          error.classList.add("hidden");
          manageSection.classList.remove("hidden");
      }
   }
}

//show loader
function showLoader(){
  loader.classList.remove("hidden");

  setTimeout(validateManage , 1000);
}

//validatte and calculate and manage money
function validateManage(){
  //hide loader
   loader.classList.add("hidden");

  //validate input fields
  if(necessity.value == "" || accessories.value == "" || emergency.value == "" || savings.value == "" ){
    error_manage.innerHTML = "Value for the input is not given . Please provide the value for all inputs.";
  }
  else{
    error_manage.innerHTML = "";

    //check whether the percentage s exceeding 100
    var necessity_percentage = parseInt(necessity.value);
    var accessories_percentage = parseInt(accessories.value);
    var emergency_percentage = parseInt(emergency.value);
    var savings_percentage = parseInt(savings.value);

    let total = necessity_percentage + accessories_percentage + emergency_percentage + savings_percentage;

      if(total > 100){
        //show percentage exceeded error
        error_manage.innerHTML = "The total percentage is exceeding 100 . Please make sure that it does not exceed 100";
      }
      else{
        //evaluate the result
        error_manage.innerHTML = "";
        calculate(necessity_percentage , accessories_percentage , emergency_percentage , savings_percentage)
      }
  }
}

//calculate the percentage and evaluate the result
function calculate(necessity , accessories ,emergency , savings){
    var necessity_money = (necessity/100)*money;
    var accessories_money = (accessories/100)*money;
    var emergency_money = (emergency/100)*money;
    var savings_money = (savings/100)*money;

    showNecessity.innerHTML = `$ ${necessity_money}`;
    showAccessories.innerHTML = `$ ${accessories_money}`;
    showEmergency.innerHTML = `$ ${emergency_money}`;
    showSavings.innerHTML = `$ ${savings_money}`;

    showDiv.classList.remove('hidden');
    resetButton.classList.remove('hidden');
}
