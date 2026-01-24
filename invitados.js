document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const invitado = params.get("invitado");
  const cupos = params.get("cupos");

  // Referencias HTML
  const guestName = document.getElementById("guestName");
  const guestCupos = document.getElementById("guestCupos");
  const btnNovia = document.getElementById("btnNovia");
  const btnNovio = document.getElementById("btnNovio");

  // Si no viene invitado o cupos → no hacer nada
  if (!invitado || !cupos) return;

  // Mostrar texto
  guestName.textContent = invitado;
  guestCupos.textContent = `Esta invitación es válida para ${cupos} personas`;

  // Mensaje WhatsApp
  const mensaje = encodeURIComponent(
    `Hola, somos de ${invitado} y confirmamos ${cupos} asistentes para la boda de María y Xavier el 27 de junio de 2026.`
  );

  // Números reales
  const novia = "593989119180";
  const novio = "593997875552";

  // Asignar enlaces
  btnNovia.href = `https://wa.me/${novia}?text=${mensaje}`;
  btnNovio.href = `https://wa.me/${novio}?text=${mensaje}`;

});
