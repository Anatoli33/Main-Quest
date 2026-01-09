import { html, render } from 'lit-html';

const main = document.querySelector('main');

const quizData = [
  {
    "question": "Choose the correct sentence:",
    "answers": [
      { "text": "A) She don't like coffee.", "correct": false },
      { "text": "B) She doesn't like coffee.", "correct": true },
      { "text": "C) She not like coffee.", "correct": false },
      { "text": "D) She no like coffee.", "correct": false }
    ]
  },
  {
    "question": "I have lived in this city ______ five years.",
    "answers": [
      { "text": "A) since", "correct": false },
      { "text": "B) for", "correct": true },
      { "text": "C) during", "correct": false },
      { "text": "D) from", "correct": false }
    ]
  },
  {
    "question": "If I ______ more time, I would travel more.",
    "answers": [
      { "text": "A) have", "correct": false },
      { "text": "B) had", "correct": true },
      { "text": "C) will have", "correct": false },
      { "text": "D) would have", "correct": false }
    ]
  },
  {
    "question": "What's the meaning of 'prohibit'?",
    "answers": [
      { "text": "A) Allow", "correct": false },
      { "text": "B) Encourage", "correct": false },
      { "text": "C) Forbid", "correct": true },
      { "text": "D) Permit", "correct": false }
    ]
  },
  {
    "question": "Complete the sentence: 'She is interested ______ learning new languages.'",
    "answers": [
      { "text": "A) on", "correct": false },
      { "text": "B) in", "correct": true },
      { "text": "C) at", "correct": false },
      { "text": "D) about", "correct": false }
    ]
  },
  {
    "question": "What's the past participle of 'break'?",
    "answers": [
      { "text": "A) broke", "correct": false },
      { "text": "B) breaking", "correct": false },
      { "text": "C) broken", "correct": true },
      { "text": "D) breaken", "correct": false }
    ]
  },
  {
    "question": "Find the synonym for 'ancient':",
    "answers": [
      { "text": "A) Modern", "correct": false },
      { "text": "B) Old", "correct": true },
      { "text": "C) New", "correct": false },
      { "text": "D) Recent", "correct": false }
    ]
  },
  {
    "question": "If it ______ tomorrow, we will stay at home.",
    "answers": [
      { "text": "A) rains", "correct": true },
      { "text": "B) will rain", "correct": false },
      { "text": "C) rained", "correct": false },
      { "text": "D) is raining", "correct": false }
    ]
  },
  {
    "question": "Choose the correct spelling:",
    "answers": [
      { "text": "A) recieved", "correct": false },
      { "text": "B) receive", "correct": true },
      { "text": "C) recieve", "correct": false },
      { "text": "D) receeve", "correct": false }
    ]
  },
  {
    "question": "She told him ______ for the party.",
    "answers": [
      { "text": "A) to wait", "correct": true },
      { "text": "B) wait", "correct": false },
      { "text": "C) waiting", "correct": false },
      { "text": "D) waits", "correct": false }
    ]
  },
  {
    "question": "What does 'fascinating' mean?",
    "answers": [
      { "text": "A) Boring", "correct": false },
      { "text": "B) Uninteresting", "correct": false },
      { "text": "C) Very interesting", "correct": true },
      { "text": "D) Annoying", "correct": false }
    ]
  },
  {
    "question": "They ______ playing football when it started to rain.",
    "answers": [
      { "text": "A) are", "correct": false },
      { "text": "B) were", "correct": true },
      { "text": "C) have been", "correct": false },
      { "text": "D) had been", "correct": false }
    ]
  },
  {
    "question": "She is good ______ playing the piano.",
    "answers": [
      { "text": "A) in", "correct": false },
      { "text": "B) at", "correct": true },
      { "text": "C) with", "correct": false }
    ]
  },
  {
    "question": "I wish I ______ fly.",
    "answers": [
      { "text": "A) can", "correct": false },
      { "text": "B) could", "correct": true },
      { "text": "C) will", "correct": false },
      { "text": "D) would", "correct": false }
    ]
  },
  {
    "question": "They live in a beautiful house ______ the river.",
    "answers": [
      { "text": "A) on", "correct": false },
      { "text": "B) by", "correct": true },
      { "text": "C) at", "correct": false },
      { "text": "D) in", "correct": false }
    ]
  },
  {
    "question": "He didn't ______ to school yesterday.",
    "answers": [
      { "text": "A) went", "correct": false },
      { "text": "B) goes", "correct": false },
      { "text": "C) go", "correct": true },
      { "text": "D) gone", "correct": false }
    ]
  },
  {
    "question": "The book was ______ by a famous author.",
    "answers": [
      { "text": "A) wrote", "correct": false },
      { "text": "B) written", "correct": true },
      { "text": "C) writing", "correct": false },
      { "text": "D) writes", "correct": false }
    ]
  },
  {
    "question": "She asked me if I ______ help her.",
    "answers": [
      { "text": "A) can", "correct": false },
      { "text": "B) could", "correct": true },
      { "text": "C) will", "correct": false },
      { "text": "D) would", "correct": false }
    ]
  },
  {
    "question": "What's the opposite of 'optimistic'?",
    "answers": [
      { "text": "A) Positive", "correct": false },
      { "text": "B) Enthusiastic", "correct": false },
      { "text": "C) Pessimistic", "correct": true },
      { "text": "D) Hopeful", "correct": false }
    ]
  },
  {
    "question": "I look forward to ______ you soon.",
    "answers": [
      { "text": "A) see", "correct": false },
      { "text": "B) seeing", "correct": true },
      { "text": "C) saw", "correct": false },
      { "text": "D) seen", "correct": false }
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
  if (correctCount >= 13) return { text: 'Excellent! (6)', className: 'grade-excellent' };
  if (correctCount >= 10) return { text: 'Very Good! (5)', className: 'grade-very-good' };
  if (correctCount >= 8) return { text: 'Good! (4)', className: 'grade-good' };
  if (correctCount >= 5) return { text: 'Average. (3)', className: 'grade-average' };
  return { text: 'Needs more practice! (2)', className: 'grade-poor' };
}

function renderAllQuestions() {
  const correctCount = selectedAnswers.filter(a => a && a.correct).length;
  const result = getResultTextAndClass(correctCount);

  render(html`
    <style>
      .btn {
        display: block;
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ccc;
        background: #90caf9; /* Light blue */
        cursor: pointer;
        border-radius: 8px;
        text-align: left;
      }
      .btn.selected {
        background-color: #1e88e5; /* Medium blue */
        border-color: #42a5f5; /* Darker blue */
      }
      .btn.correct {
        background-color: #c8e6c9; /* Light green */
        border-color: #2e7d32; /* Dark green */
        color: #2e7d32;
      }
      .btn.incorrect {
        background-color: #ffcdd2; /* Light red */
        border-color: #c62828; /* Dark red */
        color: #c62828;
      }
      .submit-btn {
        margin-top: 20px;
        padding: 10px;
        background: #1e88e5; /* Blue */
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
      }
      .submit-btn:hover {
        background: #1565c0; /* Darker blue on hover */
      }
      .results {
        margin-top: 20px;
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
      }
      .grade-text {
        margin-top: 10px;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
      }
      /* Grade specific colors - based on CEFR levels */
      .grade-excellent {
        color: #1b5e20; /* Very dark green - C1/C2 */
      }
      .grade-very-good {
        color: #388e3c; /* Dark green - B2 */
      }
      .grade-good {
        color: #fbc02d; /* Amber - B1 */
      }
      .grade-average {
        color: #ef6c00; /* Orange - A2 */
      }
      .grade-poor {
        color: #d32f2f; /* Red - A1 */
      }
      .app {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      h2 {
        text-align: center;
        color: #3f51b5;
        margin-bottom: 30px;
      }
      h3 {
        color: #5c6bc0;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      ul.options {
        padding-left: 0;
      }
    </style>

    <div class="app">
      <h2>English Placement Test (B1 Level)</h2>
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
          <button class="submit-btn" @click=${submitQuiz} type="button">Submit Quiz</button>
        ` : html`
          <div class="results">
            <p>Correct answers: ${correctCount} / ${selectedQuizQuestions.length}</p>
            <p class="grade-text ${result.className}">${result.text}</p>
            <button class="submit-btn" @click=${startEntryTestEN} type="button">Start New Test</button>
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

export function startEntryTestEN() {
  selectedQuizQuestions = getRandomQuestions(quizData, 15);
  selectedAnswers = Array(selectedQuizQuestions.length).fill(null);
  quizSubmitted = false;
  renderAllQuestions();
}

// Initial call to start the test when the script loads
startEntryTestEN();