let questions = [
  {q:'هل تعاني من كحة؟', symptom:'كحة'},
  {q:'هل لديك صداع؟', symptom:'صداع'},
  {q:'هل هناك طفح جلدي؟', symptom:'طفح جلدي'},
  {q:'هل تعاني من حساسية الأنف؟', symptom:'حساسية أنف'},
  {q:'هل هناك تقيؤ؟', symptom:'تقيؤ'},
  {q:'هل تعاني من سخونية؟', symptom:'سخونية'}
];

let currentQ = 0;
let answersEl = document.getElementById('answers');
let questionEl = document.getElementById('question');
let botResultsEl = document.getElementById('botResults');
let selectedSymptoms = [];

fetch('data/drugs.json')
.then(res => res.json())
.then(data => { window.drugsData = data; showQuestion(); });

function showQuestion() {
  if(currentQ >= questions.length) { showResults(); return; }
  let q = questions[currentQ];
  questionEl.textContent = q.q;
  answersEl.innerHTML = '';
  ['نعم','لا'].forEach(ans => {
    let btn = document.createElement('button');
    btn.textContent = ans;
    btn.onclick = () => { if(ans==='نعم') selectedSymptoms.push(q.symptom); currentQ++; showQuestion(); };
    answersEl.appendChild(btn);
  });
}

function showResults() {
  botResultsEl.innerHTML = '<h3>الأدوية المناسبة:</h3>';
  let results = window.drugsData.filter(d => selectedSymptoms.some(s => d.symptoms.includes(s)));
  results.forEach(d => {
    botResultsEl.innerHTML += `<p>${d.name_ar} (${d.name_en}) - ${d.dosage}</p>`;
  });
}