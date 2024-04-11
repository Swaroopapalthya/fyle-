const form = document.getElementById('income-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const grossIncome = parseFloat(document.getElementById('gross-income').value);
  const extraIncome = parseFloat(document.getElementById('extra-income').value);
  const ageGroup = document.getElementById('age-group').value;
  const deductions = parseFloat(document.getElementById('deductions').value);

  let netIncome = grossIncome + extraIncome - deductions;
  let tax = 0;

  if (ageGroup === '<40') {
    tax = 0.3 * (netIncome - 800000);
  } else if (ageGroup === '>=40 & < 60') {
    tax = 0.4 * (netIncome - 800000);
  } else if (ageGroup === '>=60') {
    tax = 0.1 * (netIncome - 800000);
  }

  netIncome -= tax;
  window.location.href = 'result.html?result=' + encodeURIComponent(netIncome.toFixed(2));
  console.log('Calculated net income:', netIncome.toFixed(2));
});



