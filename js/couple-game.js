const questions = [
  {
    q: "ถ้ามีเวลาว่าง 1 วัน อยากไปเที่ยวที่ไหนด้วยกัน",
    c: ["A. ท้องฟ้าจำลอง", "B. สวนสนุก", "C. สวนสัตว์"],
    correct: 1,
  },
  {
    q: "ให้ทายเค้าชอบกินอะไรที่สุด",
    c: ["A. ไอติมมมม", "B. กาแฟฟฟ", "C. ขนมเค้ก"],
    correct: 0,
  },
  {
    q: "เค้าชอบเรียกเธอว่าอะไรมากที่สุด",
    c: ["A. ไออ้วงงง", "B. ไอตัวแสบบบ", "C. ไอเด่กกก"],
    correct: 0,
  },
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 3) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 1) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
