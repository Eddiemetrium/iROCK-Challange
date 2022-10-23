function touchRock() {
    var userName = prompt('What is your name?','Please Enter Name Here');
    if (userName) {
        alert('It is very nice to meet you... ' + userName + '!');
        document.getElementById('rock').src = 'rock-happy.png';
    }   
};
// touchRock();
var  clickRock = document.getElementById('rock');
function rockClick(){
    clickRock.addEventListener('click', changeRock );
}
function changeRock() {
  clickRock.src = "rock-happy.png";
}
rockClick();