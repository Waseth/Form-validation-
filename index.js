var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Enter first and last name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #FFD43B;"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Enter phone No.";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Enter a 10-digit phone number";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #FFD43B;"></i>';
    return true;

}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = 'Enter Email'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #FFD43B;"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #FFD43B;"></i>';
    return true;
}

function validateForm(){
    if(!validateEmail() || !validateMessage() || !validateName() || !validatePhone()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){
            submitError.style.display = 'none';
        },2000)
        return false;
    }

    submitError.style.display = 'block';
    submitError.innerHTML = 'Submitted Succesfully';
    setTimeout(()=>{
        submitError.style.display = 'none';
    },2000);

    return true;

}