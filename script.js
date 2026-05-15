function showMessage() {
  const box = document.getElementById("messageBox");

  if (!box) return;

  box.innerHTML = `
    <div class="status-item">
      <strong>Website bereit</strong>
      Deine GitHub Page ist aktiv. Jetzt können wir Schritt für Schritt Seiten, Design und später Funktionen einbauen.
    </div>
  `;
}
