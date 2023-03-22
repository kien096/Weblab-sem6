
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        } else{
            $(this).prev().attr('type', 'password');
        }
    });

});


const form = document.getElementById("form-login");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Check if the username and password are correct
        if (username === "lebakien" && password === "kien1487") {
          // Redirect the user to the home page
          window.location.href = "index.html";
        } else {
          alert("Invalid username or password");
        }
      });

      