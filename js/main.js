document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.querySelector("#contact-form");
  var status = document.querySelector("#form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Grazie! Il tuo messaggio è stato inviato. Ti risponderemo al più presto.";
      status.style.color = "#2E86C1";
      form.reset();
    });
  }
});
