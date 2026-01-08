import { html, render } from 'lit-html';
import '../styles/entry-test.css'


function getRoot() {
  return document.querySelector('#root');
}

const quizData = [
  {
    question: "Кое от изброените е сложно съставно изречение?",
    answers: [
      { text: "A) Утрото беше слънчево и топло.", correct: false },
      { text: "Б) Когато пристигнах, вече беше започнало.", correct: true },
      { text: "В) Птиците пееха весело.", correct: false },
      { text: "Г) Той говори тихо, но уверено.", correct: false }
    ]
  },
  {
    question: "Кое от следните е граматически вярно изречение?",
    answers: [
      { text: "A) Той ще дойдеше, ако можеше.", correct: false },
      { text: "Б) Ако беше казал, щях да знам.", correct: true },
      { text: "В) Аз идвам вчера.", correct: false },
      { text: "Г) Тя да е видяла го.", correct: false }
    ]
  },
  {
    question: "В кое от изреченията има деепричастие?",
    answers: [
      { text: "A) Като се усмихваше, тя влезе в стаята.", correct: true },
      { text: "Б) Тя беше много щастлива.", correct: false },
      { text: "В) Те играят футбол.", correct: false },
      { text: "Г) Вчера ходих на пазар.", correct: false }
    ]
  },
  {
    question: "Коя дума е антоним на 'мрачен'?",
    answers: [
      { text: "A) Скучен", correct: false },
      { text: "Б) Светъл", correct: true },
      { text: "В) Тъмен", correct: false },
      { text: "Г) Тих", correct: false }
    ]
  },
  {
    question: "Кой литературен род включва разкази, романи и повести?",
    answers: [
      { text: "A) Лирика", correct: false },
      { text: "Б) Епос", correct: true },
      { text: "В) Драма", correct: false },
      { text: "Г) Публицистика", correct: false }
    ]
  },
  {
    question: "Какъв вид художествен похват е 'Гората шепнеше тайни'?",
    answers: [
      { text: "A) Метонимия", correct: false },
      { text: "Б) Епитет", correct: false },
      { text: "В) Олицетворение", correct: true },
      { text: "Г) Сравнение", correct: false }
    ]
  },
  {
    question: "Кой е авторът на стихотворението „Опълченците на Шипка“?",
    answers: [
      { text: "A) Христо Ботев", correct: false },
      { text: "Б) Иван Вазов", correct: true },
      { text: "В) Пейо Яворов", correct: false },
      { text: "Г) Алеко Константинов", correct: false }
    ]
  },
  {
    question: "Коя дума е написана неправилно?",
    answers: [
      { text: "A) Изведнъж", correct: false },
      { text: "Б) Прекрасно", correct: false },
      { text: "В) Въспитание", correct: true },
      { text: "Г) Надежда", correct: false }
    ]
  },
  {
    question: "В кой ред всички думи са синоними?",
    answers: [
      { text: "A) Говоря, мълча, шепна", correct: false },
      { text: "Б) Весел, тъжен, спокоен", correct: false },
      { text: "В) Красив, хубав, прелестен", correct: true },
      { text: "Г) Бърз, бавен, сръчен", correct: false }
    ]
  },
  {
    question: "Коя част на речта е думата 'навън' в изречението: 'Излязох навън.'?",
    answers: [
      { text: "A) Съюз", correct: false },
      { text: "Б) Наречие", correct: true },
      { text: "В) Предлог", correct: false },
      { text: "Г) Местоимение", correct: false }
    ]
  },
  {
    question: "Какво е пряко допълнение в изречението: 'Тя написа писмо.'?",
    answers: [
      { text: "A) Тя", correct: false },
      { text: "Б) Написа", correct: false },
      { text: "В) Писмо", correct: true },
      { text: "Г) Изречението няма пряко допълнение", correct: false }
    ]
  },
  {
    question: "Кое изречение съдържа сравнителна степен на прилагателно?",
    answers: [
      { text: "A) Този дом е най-голям.", correct: false },
      { text: "Б) Тя е по-висока от брат си.", correct: true },
      { text: "В) Той е висок.", correct: false },
      { text: "Г) Тя беше много умна.", correct: false }
    ]
  },
  {
    question: "Кое от следните думи е сложна дума?",
    answers: [
      { text: "A) Книга", correct: false },
      { text: "Б) Непрекъснато", correct: true },
      { text: "В) Море", correct: false },
      { text: "Г) Луна", correct: false }
    ]
  },
  {
    question: "Коя от следните думи е наречие?",
    answers: [
      { text: "A) Бързо", correct: true },
      { text: "Б) Син", correct: false },
      { text: "В) Човек", correct: false },
      { text: "Г) Книга", correct: false }
    ]
  },
  {
    question: "Какво е стилово средство в израза: 'Тя плаче с очи, пълни със сълзи.'?",
    answers: [
      { text: "A) Олицетворение", correct: false },
      { text: "Б) Метафора", correct: true },
      { text: "В) Епитет", correct: false },
      { text: "Г) Сравнение", correct: false }
    ]
  },
  {
    question: "Кое изречение е простото изречение?",
    answers: [
      { text: "A) Вчера той прочете книга.", correct: true },
      { text: "Б) Когато пристигна, тя вече беше тръгнала.", correct: false },
      { text: "В) Ако ме извикаш, ще дойда.", correct: false },
      { text: "Г) Тя пее и танцува.", correct: false }
    ]
  },
  {
    question: "Коя дума е синоним на 'щастлив'?",
    answers: [
      { text: "A) Весел", correct: true },
      { text: "Б) Тъжен", correct: false },
      { text: "В) Грозен", correct: false },
      { text: "Г) Спокоен", correct: false }
    ]
  },
  {
    question: "Коя от следните думи е правилно написана?",
    answers: [
      { text: "A) Приятелство", correct: true },
      { text: "Б) Прияетлство", correct: false },
      { text: "В) Приятелствo", correct: false },
      { text: "Г) Приателство", correct: false }
    ]
  },
  {
    question: "Кое от изреченията съдържа подлог?",
    answers: [
      { text: "A) Слънцето грее ярко.", correct: true },
      { text: "Б) Тича бързо.", correct: false },
      { text: "В) Слушам музика.", correct: false },
      { text: "Г) Чакам те.", correct: false }
    ]
  },
  {
    question: "Коя част на речта е думата 'бързо' в изречението: 'Той тича бързо.'?",
    answers: [
      { text: "A) Съществително", correct: false },
      { text: "Б) Прилагателно", correct: false },
      { text: "В) Наречие", correct: true },
      { text: "Г) Глагол", correct: false }
    ]
  }
];

function getRandomQuestions(allQuestions, count = 15) {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

let selectedQuizQuestions = [];
let selectedAnswers = [];
let quizSubmitted = false;

function getResultTextAndClass(correctCount) {
  if (correctCount >= 13) return { text: 'Отлично!', className: 'grade-excellent' };
  if (correctCount >= 10) return { text: 'Много добър (5)', className: 'grade-very-good' };
  if (correctCount >= 8) return { text: 'Добър (4)', className: 'grade-good' };
  if (correctCount >= 5) return { text: 'Среден (3)', className: 'grade-average' };
  return { text: 'Нужно е повече подготовка!', className: 'grade-poor' };
}

function renderAllQuestions() {
  const root = getRoot();
  if (!root) return;

  const correctCount = selectedAnswers.filter(a => a && a.correct).length;
  const result = getResultTextAndClass(correctCount);

  render(html`
    <div class="app">
      <h2>Тест по български език</h2>

      ${selectedQuizQuestions.map((q, i) => html`
        <div class="question-block">
          <h3>${i + 1}. ${q.question}</h3>

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
        </div>
      `)}

      ${!quizSubmitted
        ? html`<button class="submit-btn" @click=${submitQuiz}>Предай</button>`
        : html`
            <div class="results">
              <p>Верни отговори: ${correctCount} / ${selectedQuizQuestions.length}</p>
              <p class="grade-text ${result.className}">${result.text}</p>
              <button @click=${startEntryTest}>Нов тест</button>
            </div>
          `}
    </div>
  `, root);
}

function handleAnswerSelect(index, answer) {
  if (quizSubmitted) return;
  selectedAnswers[index] = answer;
  renderAllQuestions();
}

function submitQuiz() {
  quizSubmitted = true;
  renderAllQuestions();
}

export function startEntryTest() {
  selectedQuizQuestions = getRandomQuestions(quizData, 15);
  selectedAnswers = Array(selectedQuizQuestions.length).fill(null);
  quizSubmitted = false;
  renderAllQuestions();
}
