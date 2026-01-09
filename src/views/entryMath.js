import { html, render } from 'lit-html';

const main = document.querySelector('main');

const quizData = [
  {
    "question": "Решете уравнението: x^2 - 5x + 6 = 0",
    "answers": [
      { "text": "А) x1=2, x2=3", "correct": true },
      { "text": "Б) x1=-2, x2=3", "correct": false },
      { "text": "В) x1=2, x2=-3", "correct": false },
      { "text": "Г) x1=-2, x2=-3", "correct": false }
    ]
  },
  {
    "question": "Опростете израза: (2a - 3b)^2",
    "answers": [
      { "text": "А) 4a^2 - 9b^2", "correct": false },
      { "text": "Б) 4a^2 + 9b^2", "correct": false },
      { "text": "В) 4a^2 - 12ab + 9b^2", "correct": true },
      { "text": "Г) 4a^2 + 12ab + 9b^2", "correct": false }
    ]
  },
  {
    "question": "Намерете допустимите стойности на израза: sqrt(x-4)",
    "answers": [
      { "text": "А) x > 4", "correct": false },
      { "text": "Б) x < 4", "correct": false },
      { "text": "В) x >= 4", "correct": true },
      { "text": "Г) x <= 4", "correct": false }
    ]
  },
  {
    "question": "Кое от следните твърдения е вярно за функцията y = -2x + 5?",
    "answers": [
      { "text": "А) Тя е растяща.", "correct": false },
      { "text": "Б) Тя е намаляваща.", "correct": true },
      { "text": "В) Тя е константа.", "correct": false },
      { "text": "Г) Тя е парабола.", "correct": false }
    ]
  },
  {
    "question": "Решете неравенството: 3x - 7 < 8",
    "answers": [
      { "text": "А) x < 5", "correct": true },
      { "text": "Б) x > 5", "correct": false },
      { "text": "В) x < 1/3", "correct": false },
      { "text": "Г) x > 1/3", "correct": false }
    ]
  },
  {
    "question": "Колко на брой са решенията на системата уравнения:\nx + y = 5\nx - y = 1",
    "answers": [
      { "text": "А) Няма решение", "correct": false },
      { "text": "Б) Едно решение", "correct": true },
      { "text": "В) Две решения", "correct": false },
      { "text": "Г) Безброй много решения", "correct": false }
    ]
  },
  {
    "question": "Намерете лицето на правоъгълен триъгълник с катети 6 cm и 8 cm.",
    "answers": [
      { "text": "А) 24 cm^2", "correct": true },
      { "text": "Б) 48 cm^2", "correct": false },
      { "text": "В) 14 cm^2", "correct": false },
      { "text": "Г) 28 cm^2", "correct": false }
    ]
  },
  {
    "question": "Ако триъгълник ABC ~ триъгълник DEF и AB=4 cm, DE=8 cm, то отношението на периметрите на двата триъгълника е:",
    "answers": [
      { "text": "А) 1:1", "correct": false },
      { "text": "Б) 1:2", "correct": true },
      { "text": "В) 2:1", "correct": false },
      { "text": "Г) 1:4", "correct": false }
    ]
  },
  {
    "question": "Намерете дължината на хипотенузата на правоъгълен триъгълник с катети 5 cm и 12 cm.",
    "answers": [
      { "text": "А) 13 cm", "correct": true },
      { "text": "Б) 17 cm", "correct": false },
      { "text": "В) sqrt(119) cm", "correct": false },
      { "text": "Г) sqrt(169) cm", "correct": false }
    ]
  },
  {
    "question": "Кой от следните триъгълници НЕ може да бъде правоъгълен?",
    "answers": [
      { "text": "А) Със страни 3, 4, 5", "correct": false },
      { "text": "Б) Със страни 5, 12, 13", "correct": false },
      { "text": "В) Със страни 6, 8, 10", "correct": false },
      { "text": "Г) Със страни 4, 5, 6", "correct": true }
    ]
  },
  {
    "question": "Решете уравнението: |2x - 1| = 5",
    "answers": [
      { "text": "А) x=3", "correct": false },
      { "text": "Б) x=-2", "correct": false },
      { "text": "В) x1=3, x2=-2", "correct": true },
      { "text": "Г) Няма решение", "correct": false }
    ]
  },
  {
    "question": "Коренът на уравнението x/2 + x/3 = 5 е:",
    "answers": [
      { "text": "А) x=2", "correct": false },
      { "text": "Б) x=3", "correct": false },
      { "text": "В) x=6", "correct": true },
      { "text": "Г) x=10", "correct": false }
    ]
  },
  {
    "question": "Намерете стойността на израза: 27^(1/3)",
    "answers": [
      { "text": "А) 3", "correct": true },
      { "text": "Б) 9", "correct": false },
      { "text": "В) корен кубичен от 27", "correct": false },
      { "text": "Г) 27 * 1/3", "correct": false }
    ]
  },
  {
    "question": "Ако f(x) = x^2 - 3x + 2, намерете f(-1).",
    "answers": [
      { "text": "А) 0", "correct": false },
      { "text": "Б) -2", "correct": false },
      { "text": "В) 6", "correct": true },
      { "text": "Г) 4", "correct": false }
    ]
  },
  {
    "question": "Кой е верният израз за дискриминанта D на квадратното уравнение ax^2 + bx + c = 0?",
    "answers": [
      { "text": "А) b^2 - 4ac", "correct": true },
      { "text": "Б) b^2 + 4ac", "correct": false },
      { "text": "В) 4ac - b^2", "correct": false },
      { "text": "Г) sqrt(b^2 - 4ac)", "correct": false }
    ]
  },
  {
    "question": "Намерете ъгъл алфа в правоъгълен триъгълник, ако sin алфа = 1/2.",
    "answers": [
      { "text": "А) 30 градуса", "correct": true },
      { "text": "Б) 45 градуса", "correct": false },
      { "text": "В) 60 градуса", "correct": false },
      { "text": "Г) 90 градуса", "correct": false }
    ]
  },
  {
    "question": "За кои стойности на x изразът (x-3)(x+2) е отрицателен?",
    "answers": [
      { "text": "А) x принадлежи на интервала (-2, 3)", "correct": true },
      { "text": "Б) x принадлежи на интервала (-безкрайност, -2) обединено (3, +безкрайност)", "correct": false },
      { "text": "В) x < -2", "correct": false },
      { "text": "Г) x > 3", "correct": false }
    ]
  },
  {
    "question": "Намерете разстоянието между точки A(1, 2) и B(4, 6) в декартова координатна система.",
    "answers": [
      { "text": "А) 3", "correct": false },
      { "text": "Б) 4", "correct": false },
      { "text": "В) 5", "correct": true },
      { "text": "Г) sqrt(52)", "correct": false }
    ]
  },
  {
    "question": "Опростете израза: (x^2 - 9) / (x - 3)",
    "answers": [
      { "text": "А) x - 3", "correct": false },
      { "text": "Б) x + 3", "correct": true },
      { "text": "В) x - 9", "correct": false },
      { "text": "Г) x^2 + 3", "correct": false }
    ]
  },
  {
    "question": "Едно число е намалено с 20%, а след това увеличено с 20%. Как се е променило първоначалното число?",
    "answers": [
      { "text": "А) Увеличило се е с 4%", "correct": false },
      { "text": "Б) Намалило се е с 4%", "correct": true },
      { "text": "В) Не се е променило", "correct": false },
      { "text": "Г) Увеличило се е с 0.4%", "correct": false }
    ]
  }
]
function getRandomQuestions(allQuestions, count = 15) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

let selectedQuizQuestions = [];
let selectedAnswers = [];
let quizSubmitted = false;

function getResultTextAndClass(correctCount) {
  if (correctCount >= 13) return { text: 'Отличен! (6)', className: 'grade-excellent' };
  if (correctCount >= 10) return { text: 'Много добър! (5)', className: 'grade-very-good' };
  if (correctCount >= 8) return { text: 'Добър! (4)', className: 'grade-good' };
  if (correctCount >= 5) return { text: 'Среден. (3)', className: 'grade-average' };
  return { text: 'Нужна е повече подготвка!', className: 'grade-poor' };
}

function renderAllQuestions() {
  const correctCount = selectedAnswers.filter(a => a && a.correct).length;
  const result = getResultTextAndClass(correctCount);

  render(html`

    <div class="app">
      <h2>Входно ниво - Математика</h2>
      <form class="quiz-form" @submit=${e => e.preventDefault()}>
        ${selectedQuizQuestions.map((q, i) => html`
          <div class="question-block">
            <h3>${i + 1}. ${q.question}</h3>
            <ul class="options">
              ${q.answers.map(answer => {
                const isSelected = selectedAnswers[i] === answer;
                const isCorrect = quizSubmitted && answer.correct;
                const isIncorrect = quizSubmitted && isSelected && !answer.correct;

                return html`
                  <button
                    type="button"
                    class="btn
                      ${isCorrect ? 'correct' : ''}
                      ${isIncorrect ? 'incorrect' : ''}
                      ${isSelected && !quizSubmitted ? 'selected' : ''}"
                    ?disabled=${quizSubmitted}
                    @click=${() => handleAnswerSelect(i, answer)}
                  >
                    ${answer.text}
                  </button>
                `;
              })}
            </ul>
          </div>
        `)}

        ${!quizSubmitted ? html`
          <button class="submit-btn" @click=${submitQuiz} type="button">Предай</button>
        ` : html`
          <div class="results">
            <p>Верни отговори: ${correctCount} / ${selectedQuizQuestions.length}</p>
            <p class="grade-text ${result.className}">${result.text}</p>
            <button class="submit-btn" @click=${startEntryTestMath} type="button">Нов тест</button>
          </div>
        `}
      </form>
    </div>
  `, main);
}

function handleAnswerSelect(questionIndex, answer) {
  if (!quizSubmitted) {
    selectedAnswers[questionIndex] = answer;
    renderAllQuestions();
  }
}

function submitQuiz() {
  quizSubmitted = true;
  renderAllQuestions();
}

export function startEntryTestMath() {
  selectedQuizQuestions = getRandomQuestions(quizData, 15);
  selectedAnswers = Array(selectedQuizQuestions.length).fill(null);
  quizSubmitted = false;
  renderAllQuestions();
}

// Initial call to start the test when the script loads
startEntryTestMath();