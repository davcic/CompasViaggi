document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var status = document.getElementById("form-status");
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };

      var nomeCognome = get("nome-cognome");
      var email = get("email");

      if (!nomeCognome || !email) {
        if (status) {
          status.textContent = "Compila nome e cognome e email prima di inviare.";
        }
        return;
      }

      var body = [
        "Nome e cognome: " + nomeCognome,
        "Telefono: " + get("telefono"),
        "Email: " + email,
        "Dove vuoi andare: " + get("destinazione"),
        "Periodo indicativo: " + get("periodo"),
        "Numero di persone: " + get("persone"),
        "Messaggio: " + get("messaggio")
      ].join("\n");

      var subject = "Nuova richiesta dal sito CompasViaggi";
      var mailtoUrl =
        "mailto:agenzia@compasviaggi.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailtoUrl;

      if (status) {
        status.textContent = "Si sta aprendo il tuo programma di posta per inviare la richiesta.";
      }
    });
  }

});
