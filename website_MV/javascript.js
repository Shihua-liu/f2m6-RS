function toggle_darkmode() {
 var element = document.getElementsByTagName("HTML")[0];
 element.classList.toggle("darkmode");
 element.classList.toggle("lightmode");
 var isDarkmode = element.classList.contains("darkmode");
 window.localStorage.setItem("dark", isDarkmode);
}

