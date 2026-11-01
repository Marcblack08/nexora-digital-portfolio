// Reemplaza el valor vacío por el número comercial internacional, solo dígitos.
// Ejemplo Perú: 51999111222. No publiques hasta configurar y probar el enlace.
(() => {
  const phone = '';
  const message = 'Hola Nexora Digital, quiero consultar sobre un proyecto.';
  const link = document.getElementById('whatsappLink');
  if (!link || !phone) return;
  link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
})();