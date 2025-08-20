const btn = document.querySelector(".btn-toggle");
const dl_icon=document.querySelector("#dl_icon")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const currentTheme = localStorage.getItem("theme");
const currentTheme = "dark";
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  dl_icon.classList.toggle("bxs-sun");
  
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  dl_icon.classList.toggle("bxs-moon");

}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});


btn.addEventListener("click", function(){
  if(dl_icon.classList.contains("bxs-moon")){
  dl_icon.classList.remove("bxs-moon");
  dl_icon.classList.add("bxs-sun");
  }

  else{
    dl_icon.classList.remove("bxs-sun");
    dl_icon.classList.add("bxs-moon");
  }
})
