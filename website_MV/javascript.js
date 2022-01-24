function toggle_darkmode() {
 var element = document.getElementsByTagName("HTML")[0];
 element.classList.toggle("darkmode");
 element.classList.toggle("lightmode");
 var isDarkmode = element.classList.contains("darkmode");
 window.localStorage.setItem("dark", isDarkmode);
}

var sound = document.getElementById("audio")
sound.volume = 0.15;
var x = document.getElementById("audio"); 
x.play(); 



const box = document.querySelector('.box');
box.addEventListener('click', (e)=>{;
  e.target.classList.toggle('pause');
  if (x.paused){
    x.play();
  }
  else{
    x.pause();
  }
})

