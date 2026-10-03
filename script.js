let totalExpense = 0;

function addExpense() {

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    totalExpense += amount;

    document.getElementById("total").textContent =
        "₹" + totalExpense;

    const list = document.getElementById("expenseList");

    const item = document.createElement("li");

    item.innerHTML =
        `<span>${name} - ${category}</span>
         <span>₹${amount}</span>`;

    list.appendChild(item);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}