
$(document).ready(function () {
  var services = ["design", "development", "project-management"];
  $.each(services , function(index, service) { 
    $(document).on("click", ".subservices ."+service+".card-img-top", function () {
        $(".subservices ."+service+".card-body").show();
        $(".subservices ."+service+".card-img-top").hide();
      });
      $(document).on("click", ".subservices ."+service+".card-body", function () {
        $(".subservices ."+service+".card-img-top").show();
        $(".subservices ."+service+".card-body").hide();
      });
  });

  
});
function contactsubmit(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if(!validateEmail(email)||email == "" || email == null){
        alert("Please enter a valid email")
    }else if(name == null || name == ""){
        alert("Please enter your name")
    }else if(message == null || message == ""){
        alert("Please enter your message")
    }else{
        alert("Hi " + name + "  we have received your message. Thank you for contacting us.")
    }
}
