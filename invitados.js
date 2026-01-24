// ===== CONFIGURACIÓN =====

// URL pública de Google Sheets (publicada como JSON)
const SHEET_URL = "https://opensheet.elk.sh/ID_DE_TU_SHEET/Hoja1";

// Números de WhatsApp
const WHATSAPP_NOVIA = "593989119180";
const WHATSAPP_NOVIO = "593997875552";

// =========================

// Obtener ID del invitado desde la URL
const params = new URLSearchParams(window.location.search);
const invitadoID = params.get("id");

// Si no hay ID, no hacemos nada
if (invitadoID) {
  fetch(SHEET_URL)
    .then(res => res.json())
    .then(data => {
      const invitado = data.find(i => i.id === invitadoID);

      if (!invitado) return;

      const nombre = invitado.nombre;
      const cupos = invitado.cupos;

      // Mostrar en la web
      document.getElementById("guestName").innerText =
        nombre;

      document.getElementById("guestCupos").innerText =
        `Esta invitación es válida para ${cupos} personas`;

      // Mensaje WhatsApp
      const mensaje = encodeURIComponent(
        `Hola, somos de ${nombre} y confirmamos ${cupos} asistentes para la boda de María y Xavier el 27 de junio de 2026.`
      );

      // Botones
      document.getElementById("btnNovia").href =
        `https://wa.me/${WHATSAPP_NOVIA}?text=${mensaje}`;

      document.getElementById("btnNovio").href =
        `https://wa.me/${WHATSAPP_NOVIO}?text=${mensaje}`;
    });
}
