function changeColor(){
    let button = document.getElementById("changeColor");
    let block = document.getElementById("block");
    let nameColor = document.getElementById("nameColor");


  button.addEventListener('click', function onClick(){
       const hex = getRandomHex();
           block.style.background  = hex;
           nameColor.textContent = hex;

  });
}
function getRandomHex () {
    return '#' + Math.random().toString(16).slice(-6);
};
changeColor();
