
// ---about page javascript---

  function goHome() {
    window.location.href = "index.html";
}
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});


// ---Contact Page Javascript---

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual submission

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }

      alert("Your message has been sent successfully!");
      form.reset(); // Clear the form
  });
});

