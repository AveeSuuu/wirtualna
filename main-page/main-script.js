document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".top").classList.add("appear");

  const containers = document.querySelectorAll(".container-box");
  const moreOptions = document.querySelectorAll(".option");

  containers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("appear");
    }, index * 100);
  });

  moreOptions.forEach(function (option, index){
    setTimeout(function (){
      option.classList.add("appear");
    }, index * 200);
  });
});

//TODO na następny dzień
//1. dokończyć divy w oknie z danymi studenta
//2. dodać im animacje pojawiania
//3. dodać nowe komponenty z figmy
//4. fajrant