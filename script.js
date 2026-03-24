const cars = [
  { maker: 'טויוטה', model: 'קורולה', year: 2023, price: 120000 },
  { maker: 'הונדה', model: 'סיוויק', year: 2022, price: 135000 },
  { maker: 'סובארו', model: 'אימפרזה', year: 2021, price: 160000 }
];

const carTableBody = document.getElementById('carTableBody');
const addCarForm = document.getElementById('addCarForm');

function renderCars() {
  carTableBody.innerHTML = '';
  cars.forEach(car => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${car.maker}</td>
      <td>${car.model}</td>
      <td>${car.year}</td>
      <td>${car.price.toLocaleString()} ₪</td>
    `;
    carTableBody.appendChild(row);
  });
}

addCarForm.addEventListener('submit', event => {
  event.preventDefault();
  const maker = document.getElementById('maker').value.trim();
  const model = document.getElementById('model').value.trim();
  const year = parseInt(document.getElementById('year').value, 10);
  const price = parseInt(document.getElementById('price').value, 10);

  if (!maker || !model || Number.isNaN(year) || Number.isNaN(price)) return;

  cars.push({ maker, model, year, price });
  renderCars();
  addCarForm.reset();
});

renderCars();