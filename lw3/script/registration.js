function registration(){
  var userEmail = document.getElementById('email');
  var userPassword = document.getElementById('password');
  var userPasswordAgain = document.getElementById('passwordAgain');
  var userCheckBox = document.getElementById('rules');    
  var checkMailErrors = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));

validate = function(){ 
  if (userEmail.value == "" || userEmail.value == " " || userEmail.value.length < 6){
    alert('error');
  }
  if (userPassword.value == "" || userPassword.value == " " || userPassword.value.length < 6){
    alert('error');
  }
   if (userPasswordAgain.value == "" || userPasswordAgain.value == " " || userPasswordAgain.value != userPassword.value){
    alert('error');
  }
    if (!userCheckBox.checked){
      alert('er');
    }
}

validate();

}

window.onload = function() {
  document.getElementById('registration').addEventListener('submit', registration);
}