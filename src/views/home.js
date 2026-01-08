import { render, html } from "lit-html";

const main = document.getElementById("root");

export function showHome() {
    render(homeTemp(), main);
}

function homeTemp() {
    return html`
<section>
  <div>

    <div>
      <h1>Подготви се за матурите с увереност</h1>
      <p>
        Всички материали, тестове и съвети на едно място – лесно, подредено и напълно безплатно!
        <br>
        Платформата е създадена специално за ученици като теб – за да ти помогне да учиш ефективно, да упражняваш наученото и да се подготвиш спокойно за най-важните изпити.
        Независимо дали се готвиш за БЕЛ, математика или друг предмет, тук ще намериш всичко необходимо.
      </p>
      <a href="/test"><button>Започни сега</button></a>
    </div>

    <div>
      <img src="https://illustrations.popsy.co/white/studying.svg" alt="Hero Illustration" width="600">
    </div>

  </div>
</section>
    `;
}
