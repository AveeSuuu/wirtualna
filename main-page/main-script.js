document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".top").classList.add("appear");

  const containers = document.querySelectorAll(".container-box");
  const moreOptions = document.querySelectorAll(".option");
  const studentBoxItems = document.querySelectorAll(".box-animation");

  containers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("appear");
    }, index * 100);
  });

  setTimeout(function(){
    studentBoxItems.forEach(function (item, index){
      setTimeout(function(){
        item.classList.add("appear");
      }, index*250);
    })
  }, 1000);

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