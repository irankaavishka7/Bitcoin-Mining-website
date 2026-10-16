document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".choose-plan").forEach((button) => {
  button.addEventListener("click", () => {
    const message = document.getElementById("plan-message");
    message.textContent = button.dataset.plan === "Free Preview"
      ? "Free Preview selected. This is a visual demo, not a real mining contract."
      : button.dataset.plan + " is a placeholder. Connect and verify a legitimate mining provider before offering it.";
  });
});

document.getElementById("withdraw-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const wallet = document.getElementById("wallet").value.trim();
  const amount = Number(document.getElementById("amount").value);
  const message = document.getElementById("withdraw-message");
  if (!wallet || !Number.isFinite(amount) || amount <= 0) {
    message.textContent = "Enter a wallet address and an amount greater than zero.";
    return;
  }
  message.textContent = "Demo preview only: no withdrawal was sent and no BTC was transferred. A secure backend and verified payment provider are required.";
});