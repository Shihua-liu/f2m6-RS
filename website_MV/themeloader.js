window.onload = () => {
    var isDarkmode = window.localStorage.getItem("dark");
    console.log(isDarkmode)
    if (isDarkmode != null && isDarkmode == "true") {
        var element = document.getElementsByTagName("HTML")[0];
        element.classList.add("darkmode");
        element.classList.remove("lightmode");
    }
}
