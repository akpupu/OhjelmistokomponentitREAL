class Ostoskori extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._kori = new Map();

    window.addEventListener("lisaa-koriin", (e) => {
      this.lisaa(e.detail);
    });
  }

  lisaa(auto) {
    if (this._kori.has(auto.numero)) {
      this._kori.get(auto.numero).maara++;
    } else {
      this._kori.set(auto.numero, { ...auto, maara: 1 });
    }
    this.render();
  }

  poista(numero) {
    const item = this._kori.get(numero);
    if (item.maara > 1) {
      item.maara--;
    } else {
      this._kori.delete(numero);
    }
    this.render();
  }

  laskeSumma() {
    let summa = 0;
    this._kori.forEach((i) => (summa += i.hinta * i.maara));
    return summa;
  }

  render() {
    const tuotteet = [...this._kori.values()];
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./ostoskori/ostoskori.css">
      <div class="cart">
        <h2>Ostoskori</h2>
        ${tuotteet.length === 0 ? '<p class="empty">Kori on tyhjä</p>' : ""}
        ${tuotteet
          .map(
            (i) => `
          <div class="cart-item">
            <span>${i.merkki} ${i.malli} (x${i.maara})</span>
            <button class="remove-btn" data-id="${i.numero}">-</button>
          </div>
        `,
          )
          .join("")}
        <div class="total">
          <b>Yhteensä: ${this.laskeSumma()} €</b>
        </div>
      </div>
    `;

    this.shadowRoot.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.onclick = () => this.poista(Number(btn.dataset.id));
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("auto-ostoskori", Ostoskori);
