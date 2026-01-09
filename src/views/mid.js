import { render, html } from "lit-html";

const main = document.getElementById("root");
export function showMid() {
    render(midTemp(), main);
}

function midTemp() {
    return html`
<section>
  <div>
    <h1>Избери предмет</h1>
    <a href="/test" class="subject-button-link"><button>Български език - входно ниво</button></a>
    <a href="/testMath" class="subject-button-link"><button>Математика - входно ниво</button></a>
    <a href="/entryTestEN" class="subject-button-link"><button>Английски език - входно ниво B1</button></a>
    <a href="/bel" class="subject-button-link"><button>Български език</button></a>
    <a href="/math" class="subject-button-link"><button>Математика</button></a>
  </div>
</section>
    `;
}