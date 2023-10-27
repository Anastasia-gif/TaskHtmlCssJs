let input2  = document.getElementById("lab-name");
input2.oninvalid = function(event) {
    event.target.setCustomValidity('Поле принимает только буквы');
};