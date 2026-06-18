document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");
  const subscribeBtn = document.getElementById("subscribeBtn");
  const successDialog = document.getElementById("successDialog");
  const successText = document.getElementById("successText");
  const closeDialog = document.getElementById("closeDialog");
  const formContainer = document.getElementById("formContainer");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
      message.textContent = "Please enter the valid email";
      message.style.height = "28px";
      return;
    }

    message.textContent = "";
    emailInput.style.borderColor = "#000";
    formContainer.style.opacity = "0";

    setTimeout(() => {
      formContainer.style.display = "none";
      successText.textContent = `Your subscription has been placed for your ${email}!`;
      successDialog.showModal();
    }, 0);
  });

  closeDialog.addEventListener("click", () => {
    successDialog.close();
    window.location.reload();
  });
});
