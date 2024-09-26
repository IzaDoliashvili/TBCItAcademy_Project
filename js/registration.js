document.addEventListener("DOMContentLoaded", function () {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  document.getElementById("loginButton").addEventListener("click", function () {
    const authFormContainer = document.getElementById(
      "authorization-form-container"
    );
    const regFormContainer = document.getElementById(
      "registration-form-container"
    );
    const overlay = document.getElementById("overlay");

    overlay.style.display = "block";
    authFormContainer.style.display = "block";
    regFormContainer.style.display = "none";
  });

  document.getElementById("regTab").addEventListener("click", function () {
    const authFormContainer = document.getElementById(
      "authorization-form-container"
    );
    const regFormContainer = document.getElementById(
      "registration-form-container"
    );

    authFormContainer.style.display = "none";
    regFormContainer.style.display = "block";
  });

  document.getElementById("authTab").addEventListener("click", function () {
    const authFormContainer = document.getElementById(
      "authorization-form-container"
    );
    const regFormContainer = document.getElementById(
      "registration-form-container"
    );

    authFormContainer.style.display = "block";
    regFormContainer.style.display = "none";
  });

  document.querySelectorAll(".cancel-icon").forEach(function (closeIcon) {
    closeIcon.addEventListener("click", function () {
      const overlay = document.getElementById("overlay");
      const authFormContainer = document.getElementById(
        "authorization-form-container"
      );
      const regFormContainer = document.getElementById(
        "registration-form-container"
      );

      overlay.style.display = "none";
      authFormContainer.style.display = "none";
      regFormContainer.style.display = "none";
    });
  });

  document
    .getElementById("registration-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      let isValid = true;

      document.getElementById("email-error").textContent = "";
      document.getElementById("password-error").textContent = "";
      document.getElementById("confirm-password-error").textContent = "";

      if (!validateEmail(email)) {
        document.getElementById("email-error").textContent =
          "გთხოვთ შეიყვანოთ სწორი მეილი.";
        isValid = false;
      }

      if (!validatePassword(password)) {
        document.getElementById("password-error").textContent =
          "პაროლი არ აკმაყოფილებს მოთხოვნებს.";
        isValid = false;
      }

      if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent =
          "პაროლები არ ემთხვევა.";
        isValid = false;
      }

      if (isEmailUsed(email)) {
        document.getElementById("email-error").textContent =
          "მეილი უკვე გამოყენებულია.";
        isValid = false;
      }

      if (isValid) {
        registerUser(email, password);
        alert("რეგისტრაცია წარმატებით დასრულდა!");
        document.getElementById("registration-form").reset();
        // Switch to authorization form after registration
        document.getElementById("authTab").click();
      }
    });

  document
    .getElementById("authorization-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const authEmail = document.getElementById("email-username").value;
      const authPassword = document.getElementById("password").value;
      const authorizedUser = users.find(
        (user) => user.email === authEmail && user.password === authPassword
      );

      if (authorizedUser) {
        // alert('შედეგი დადებითია!');
        document.getElementById("loginButton").textContent = "ჩემი პროფილი";

        // Close forms and overlay after successful login
        const overlay = document.getElementById("overlay");
        const authFormContainer = document.getElementById(
          "authorization-form-container"
        );
        const regFormContainer = document.getElementById(
          "registration-form-container"
        );

        overlay.style.display = "none";
        authFormContainer.style.display = "none";
        regFormContainer.style.display = "none";
      } else {
        document.getElementById("authMess").textContent =
          "მეილი ან პაროლი არ ემთხვევა, გთხოვთ შეიყვანეთ ხელახლა";
      }
    });

  function validateEmail(email) {
    email = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePassword(password) {
    password = password.trim();
    const passwordPattern = /^(?=.*[A-Z])(?=.*[^a-zA-Z]).{8,}$/;
    return passwordPattern.test(password);
  }

  function isEmailUsed(email) {
    return users.some((user) => user.email === email);
  }

  function registerUser(email, password) {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
  }
});
