document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CURRENT YEAR
  ========================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* =========================
     WHATSAPP CLICK FEEDBACK
  ========================= */

  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
  );

  whatsappLinks.forEach((link) => {

    link.addEventListener("click", () => {

      link.style.transform = "scale(.97)";

      setTimeout(() => {
        link.style.transform = "";
      }, 180);

    });

  });


  /* =========================
     IMAGE ERROR HANDLING
  ========================= */

  const images = document.querySelectorAll("img");

  images.forEach((image) => {

    image.addEventListener("error", () => {

      image.parentElement.classList.add("image-error");

    });

  });

});
