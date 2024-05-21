// Doms
const inputAmount = document.getElementById("input-amount");
const vatPercentage = document.getElementById("vat-percentage");
const serviceCharge = document.getElementById("service-charge");
const totalAmount = document.getElementById("total-amount");
const btnCalculate = document.getElementById("btn-calculate");
const btnClear = document.getElementById("btn-clear");

function vatCalculate() {
    let total;
    const iA = Number(inputAmount.value);
    const vP = Number(vatPercentage.value);
    const cC = Number(serviceCharge.value);
    if(iA == false) {
        alert('Please Enter Correct Amount');
        return totalAmount.textContent = '';
    } else if (iA < 0) {
        alert('Please Enter Postive Number');
        return totalAmount.textContent = '';
    }
    total = iA + (vP * iA)/100 + (cC * iA)/100;
    totalAmount.textContent = `Total amount = ${total}`;
}

btnCalculate.onclick = vatCalculate;

btnClear.onclick = function () {
    totalAmount.textContent = ''
    inputAmount.value = ''
    vatPercentage.value = 15;
    serviceCharge.value = 10;
}
