import { render, html } from "lit-html";

const main = document.getElementById("root"); 

export function showContact() {
  render(contactTemp(), main);
}

function contactTemp() {
  return html`
    <h1>Свържете се с нас</h1>
    <p>Ако имате въпроси или предложения, моля свържете се с нас чрез формата по-долу:</p>

    <form>
      <div>
        <label for="name">Име:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Имейл:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="subject">Тема:</label>
        <input type="text" id="subject" name="subject">
      </div>
      <div>
        <label for="message">Съобщение:</label>
        <textarea id="message" name="message" rows="2" required></textarea>
      </div>
      <button type="submit">Изпрати</button>
    </form>

    <h2>Други начини за контакт:</h2>
    <ul>
      <li>Имейл: <a href="mailto:mainquest34@gmail.com">mainquest34@gmail.com</a></li>
    </ul>
  `;
}