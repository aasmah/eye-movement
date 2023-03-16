const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

//for loop 
for (var i=0; i<2; i++){
  //value array 0 is i now
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = 'translate(-' + x + ',-' + y + ')';
}
};