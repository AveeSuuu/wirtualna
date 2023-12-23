document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".top").classList.add("appear");

  const containers = document.querySelectorAll(".container-box");

  containers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("appear");
    }, index * 200);
  });
});