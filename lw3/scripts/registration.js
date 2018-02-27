$(document).ready(function() {
  $('#registration').submit(function(event) {
    event.preventDefault();
    var userEmail = $("#email").val();
    var userPass = $("#password").val();
    var userPassRepeat = $("#passwordAgain").val();
    var userAgreement = $("#rules").prop("checked");
    var checkMail = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));
  
    if ((userEmail != "") || (userPass != "") || (userPassRepeat != "")) {
      if ((userEmail.length < 5) || (!checkMail)) {
        alert("Email введен неправильно.");
      } else {
        if (userPass.length < 6) {
          alert("Пароль введен неправильно!");
        } else {
          if (userPass != userPassRepeat) {
            alert("Пароли не совпадают!");
          } else {
            if (!userAgreement){
              alert("Согласитесь с правилами!");
            } else {
              alert("Вы успешно зарегистрировались!");
            }
          }
        }
      }
    } else {
      alert("Вы заполнили не все поля!");
    }
  });
});

