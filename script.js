
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      const previous = button.textContent;
      button.textContent = 'Copié';
      setTimeout(() => button.textContent = previous, 1500);
    } catch { window.prompt('Copiez cette information :', value); }
  });
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Language menu uses Google's automatic translation service for the selected language.
// "Other languages" opens the translation service's language chooser where available.
const languageSelect = document.getElementById('language-select');
if (languageSelect) languageSelect.addEventListener('change', () => {
  const value = languageSelect.value;
  if (value === 'other') {
    const code = window.prompt('Saisissez le code de la langue souhaitée (ex. : nl pour néerlandais, ru pour russe, ja pour japonais).');
    if (!code) { languageSelect.value = 'fr'; return; }
    const normalized = code.trim();
    const translateSelect = document.querySelector('#google_translate_element select');
    if (translateSelect) {
      translateSelect.value = normalized;
      translateSelect.dispatchEvent(new Event('change'));
    } else {
      alert('Le service de traduction se charge. Réessayez dans quelques secondes.');
    }
    return;
  }
  const apply = () => {
    const translateSelect = document.querySelector('#google_translate_element select');
    if (translateSelect) {
      translateSelect.value = value;
      translateSelect.dispatchEvent(new Event('change'));
    } else {
      setTimeout(apply, 500);
    }
  };
  apply();
});

// Donation preparation: the donor performs the actual transfer in their own wallet/bank app.
const modal = document.getElementById('donation-modal');
const openModal = document.getElementById('open-donation');
const closeModal = document.getElementById('close-donation');
const methodSelect = document.getElementById('donation-method');
const instructions = document.getElementById('modal-instructions');
const instructionText = {
  'Flooz': '<strong>Flooz</strong><br>Envoyez votre contribution au <strong>+228 99 82 07 42</strong> depuis votre compte Flooz. Conservez le reçu, puis transmettez les détails via WhatsApp.',
  'Mixx by Yas': '<strong>Mixx by Yas</strong><br>Envoyez votre contribution au <strong>+228 90 99 96 90</strong> depuis votre compte Mixx by Yas. Conservez le reçu, puis transmettez les détails via WhatsApp.',
  'Virement Ecobank': '<strong>Ecobank Togo — titulaire : AYIVON Kanyi</strong><br>Banque : TG055 · Agence : 01705 · Compte : 141529484001 · SWIFT : ECOCTGTG. L’IBAN n’est pas publié. Confirmez les coordonnées avant le virement.',
  'Carte bancaire': '<strong>Carte bancaire non encore activée.</strong><br>Un compte marchand et un prestataire de paiement doivent être validés avant de pouvoir accepter les cartes. Contactez la mission pour être informé de l’ouverture de ce moyen.',
  'Cryptomonnaie': '<strong>Cryptomonnaie non encore activée.</strong><br>L’adresse officielle du portefeuille et le réseau doivent être confirmés par MSE. N’envoyez aucune cryptomonnaie vers une adresse reçue d’une source non vérifiée.'
};
function refreshInstructions(){ if(methodSelect && instructions) instructions.innerHTML = instructionText[methodSelect.value] || ''; }
if (openModal && modal) openModal.addEventListener('click', () => { modal.hidden = false; refreshInstructions(); });
if (closeModal && modal) closeModal.addEventListener('click', () => modal.hidden = true);
if (modal) modal.addEventListener('click', e => { if(e.target === modal) modal.hidden = true; });
if (methodSelect) methodSelect.addEventListener('change', refreshInstructions);
const donationForm = document.getElementById('donation-form');
if (donationForm) donationForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(donationForm);
  const donor = data.get('donor') || 'Donateur';
  const amount = data.get('amount') + ' ' + data.get('currency');
  const project = data.get('project');
  const method = data.get('method');
  const message = `Bonjour MSE, je souhaite soutenir la mission.\\nNom : ${donor}\\nMontant envisagé : ${amount}\\nProjet : ${project}\\nMoyen choisi : ${method}. Merci de me confirmer les étapes et de m'indiquer comment transmettre la preuve de paiement.`;
  window.open('https://wa.me/22890999690?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
