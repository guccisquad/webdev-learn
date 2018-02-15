function validateRegistration(){
  var userEmail = document.getElementById('email');
  var userPassword = document.getElementById('password');
  var userPasswordAgain = document.getElementById('passwordAgain');
  var userCheckBox = document.getElementById('rules');
  var checkMailErrors = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail.value));

  if (userEmail.value == "" || userEmail.value == " " || userEmail.value.length < 6){
    alert('Неправильно введен Email');
  } else if (userPassword.value == "" || userPassword.value == " " || userPassword.value.length < 6){
      alert('Неправильно введен пароль');
  } else if (userPasswordAgain.value == "" || userPasswordAgain.value == " " || userPasswordAgain.value != userPassword.value){
     alert('Пороли не совпадают');
  } else if (!userCheckBox.checked){
      alert('Согласитесь с правилами');
  } else {
    alert('Регистрация завершена');
  }
  return true;
}

function registration(event) {
  event.preventDefault();

  var validateStatus = validateRegistration();
  if (!validateStatus) {
      alert(validateStatus);
     return;
  }
}

window.onload = function() {
  document.getElementById('registration').addEventListener('submit', registration);
}
