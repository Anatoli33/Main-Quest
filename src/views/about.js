import { html,render } from "lit-html";

const main = document.getElementById("root");

export function showAbout() {
    render(aboutTemp(), main);
}

function aboutTemp() {
    return html`
    <style>
body {
    background-color:#e6f0ff;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}

.profile-layout {
    display: flex;
    gap: 40px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.profile-left {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.profile-left img {
    max-width: 150px;
    height: auto;
    border-radius: 30%;
    margin-bottom: 20px;
    margin-left: 34px;
}

.profile-left p {
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
}


.profile-right {
    flex: 2 1 400px;
    min-width: 300px;
}

.profile-right h2 {
    font-size: 24px;
    color: #003366;
    border-bottom: 2px solid #3a6fe1;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

.profile-right h3 {
    font-size: 20px;
    color: #0088ff;
    margin-bottom: 10px;
}

.profile-right p {
    color: #555;
    line-height: 1.8;
    margin-bottom: 15px;
    text-align: justify;
}

@media (max-width: 768px) {
    .profile-layout {
        flex-direction: column;
        align-items: center;
    }

    .profile-left,
    .profile-right {
        flex: none;
        width: 100%;
        text-align: center;
    }

    .profile-right p {
        text-align: left;
    }
</style>

<div class="container">
  <div class="profile-layout">
    <div class="profile-left">
      <h2>Анатоли Хаджиев</h2>
      <img src="/images/prof.jpg" alt="Профилна снимка на Анатоли Хаджиев" />
      <p>
        <strong><i class="fa-solid fa-envelope"></i> Имейл:</strong>
        <a href="mailto:hadjiev1215@gmail.com">mainquest34@gmail.com</a>
      </p>
      <p>
        <strong><i class="fa-solid fa-phone"></i> Телефон:</strong>
        <a href="tel:+359884527264">+359 88 452 7264</a>
      </p>

      <div class="social-links">
        <a href="https://www.facebook.com/anatoli.hadjiev/" target="_blank" rel="noopener" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/anatolihadjiev3/" target="_blank" rel="noopener" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/anatoli-hadzhiev/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/anatoli" target="_blank" rel="noopener" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>

    <div class="profile-right">
      <h2>За мен</h2>
      <h3>Анатоли Хаджиев</h3>
      <p>Занимавам се с програмиране от 8 клас – тогава се запали страстта ми, и оттогава не съм спирал да кодирам и да се развивам. С всеки изминал ден се стремя да напредвам все повече и повече. Това е моят първи по-мащабен проект.</p>
      <p>Млад и амбициозен специалист с желание за развитие и усъвършенстване. Притежавам отлични комуникационни умения и опит в работа с хора и екипи, като съм участвал в успешно реализиране на разнообразни проекти. Силно дисциплиниран, подреден и внимателен в работата си. Отличавам се с бързина и прецизност, като съм любезен и готов за предизвикателства. Винаги съм мотивиран да уча и да подобрявам уменията си, за да допринасям за успеха на екипа и организацията.</p>
    </div>
  </div>
</div>

    `;
}
