document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var status = document.getElementById("form-status");
  if (status && window.location.search.indexOf("inviato=1") !== -1) {
    status.textContent = "Grazie! La tua richiesta è stata inviata, ti risponderemo al più presto.";
  }

});
