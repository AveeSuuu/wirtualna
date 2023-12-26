document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".top").classList.add("appear");

  const containers = document.querySelectorAll(".panel-option");
  
  containers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("appear");
    }, 100 * index);
  });
  
  const studentBoxItems = document.querySelectorAll(".box-animation");
  
  setTimeout(function () {
    studentBoxItems.forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("appear");
      }, index * 250);
    })
  }, 1000);
  
  const moreOptions = document.querySelectorAll(".option");
  
  moreOptions.forEach(function (option, index) {
    setTimeout(function () {
      option.classList.add("appear");
    }, index * 200);
  });
});
