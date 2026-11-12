// Cambiar esta dirección por un endpoint HTTPS de Icecast cuando esté listo.
const STREAM_HTTPS_URL = '';
const audio = document.getElementById('audio');
const button = document.getElementById('play');
const status = document.getElementById('status');
document.getElementById('year').textContent = new Date().getFullYear();
button.addEventListener('click', async () => {
  if (!STREAM_HTTPS_URL) { status.textContent = 'Pendiente: configurar streaming HTTPS'; return; }
  if (!audio.paused) { audio.pause(); return; }
  if (!audio.src) audio.src = STREAM_HTTPS_URL;
  status.textContent = 'Conectando...';
  try { await audio.play(); } catch { status.textContent = 'No se pudo iniciar el audio'; }
});
audio.addEventListener('playing', () => {button.textContent = '❚❚ Pausar';status.textContent = 'Reproduciendo en vivo';});
audio.addEventListener('pause', () => {button.textContent = '▶ Reproducir';status.textContent = 'Pausado';});
audio.addEventListener('error', () => {status.textContent = 'Error de conexión con el streaming';});
