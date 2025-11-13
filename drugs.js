let drugsListEl = document.getElementById('drugsList');
let searchEl = document.getElementById('search');
let cartEl = document.getElementById('cart');
let cart = [];

fetch('data/drugs.json')
.then(res => res.json())
.then(data => { window.drugsData = data; displayDrugs(data); });

function displayDrugs(drugs) {
  drugsListEl.innerHTML = '';
  drugs.forEach(drug => {
    let div = document.createElement('div');
    div.className = 'drug-item';
    div.innerHTML = `<h4>${drug.name_ar} (${drug.name_en})</h4>
    <p>💊 المادة الفعالة: ${drug.active}</p>
    <p>📏 الجرعة: ${drug.dosage}</p>
    <button onclick="addToCart('${drug.name_ar}')">شراء</button>`;
    drugsListEl.appendChild(div);
  });
}

function addToCart(name) {
  cart.push(name);
  cartEl.innerHTML = cart.join('<br>');
}

searchEl?.addEventListener('input', () => {
  let term = searchEl.value.toLowerCase();
  let filtered = window.drugsData.filter(d => d.name_ar.includes(term) || d.name_en.toLowerCase().includes(term));
  displayDrugs(filtered);
});