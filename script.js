let balance = 1000;

const amountInput = document.getElementById("amount");
const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");

function showBalance() {
  balanceDisplay.textContent = `$${balance.toFixed(2)}`;
}

function readAmount() {
  const amount = Number(amountInput.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    message.textContent = "Enter an amount greater than $0.00.";
    return null;
  }
  return amount;
}

function clearAmount() {
  amountInput.value = "";
  amountInput.focus();
}

document.getElementById("withdraw").addEventListener("click", () => {
  const amount = readAmount();
  if (amount === null) return;
  if (amount > balance) {
    message.textContent = "Withdrawal declined: insufficient balance.";
    return;
  }
  balance -= amount;
  showBalance();
  message.textContent = `Withdrawal successful: $${amount.toFixed(2)}.`;
  clearAmount();
});

document.getElementById("deposit").addEventListener("click", () => {
  const amount = readAmount();
  if (amount === null) return;
  balance += amount;
  showBalance();
  message.textContent = `Deposit successful: $${amount.toFixed(2)}.`;
  clearAmount();
});

document.getElementById("check-balance").addEventListener("click", () => {
  showBalance();
  message.textContent = "Your current balance is displayed above.";
});