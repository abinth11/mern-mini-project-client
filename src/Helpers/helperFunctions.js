export function formatMoneyINR(amount) {
    amount = Math.round(amount * 100) / 100;
    const parts = amount.toFixed(2).toString().split(".");
    let integerPart = parts[0];
    const decimalPart = parts[1];
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "₹" + integerPart + "." + decimalPart;
  }
  