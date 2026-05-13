class AutoElementti extends HTMLElement {
  static get observedAttributes() {
    return ["data-url"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._autot = [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-url" && oldValue !== newValue) {
      this.lataaAutot(newValue);
    }
  }

  async lataaAutot(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("JSON lataus epäonnistui");
      this._autot = await res.json();
      this.render();
    } catch (err) {
      console.error("Autojen latausvirhe:", err);
    }
  }

  lisaaKoriin(numero) {
    const auto = this._autot.find((a) => a.numero === numero);
    if (auto) {
      window.dispatchEvent(
        new CustomEvent("lisaa-koriin", {
          detail: auto,
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./autokomponentti/auto.css">
      <h2>Autot</h2>
      <div class="grid">
        ${this._autot
          .map(
            (a) => `
          <div class="card">
            <h3>${a.merkki}</h3>
            <p>Malli: ${a.malli}</p>
            <p>Huippunopeus: ${a.huippunopeus} km/h</p>
            <p>Hinta: <b>${a.hinta} €</b></p>
            <button class="add-btn" data-id="${a.numero}">Lisää koriin</button>
          </div>
        `,
          )
          .join("")}
      </div>
    `;

    this.shadowRoot.querySelectorAll(".add-btn").forEach((btn) => {
      btn.onclick = () => this.lisaaKoriin(Number(btn.dataset.id));
    });
  }

  connectedCallback() {
    if (this.hasAttribute("data-url")) {
      this.lataaAutot(this.getAttribute("data-url"));
    }
  }
}

customElements.define("auto-elementti", AutoElementti);
