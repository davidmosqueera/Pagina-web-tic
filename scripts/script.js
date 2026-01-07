// ============================================
// 1. CAMPO DE TEXTO INTERACTIVO (Requisito JS)
// ============================================
const nameInput = document.getElementById('nameInput');
const outputName = document.getElementById('outputName');

// Actualizar el texto mientras el usuario escribe
nameInput.addEventListener('input', function() {
  const value = nameInput.value.trim();
  
  if (value === '') {
    outputName.textContent = 'visitante';
  } else {
    outputName.textContent = value;
  }
});


// ============================================
// 2. INTERCAMBIO DE IMÁGENES (Requisito JS)
// ============================================
let imagenActual = 1; function cambiarImagen() {   const img = document.getElementById("imagen");   imagenActual = imagenActual === 1 ? 2 : 1;   img.src = `images/img${imagenActual}.jpg`; }


// ============================================
// 3. OBJETO EN MOVIMIENTO (Requisito JS)
// ============================================
const movingBox = document.getElementById('movingBox');

// Variables de posición y velocidad
let xPosition = 0;
let yPosition = 50;
let xSpeed = 4;
let ySpeed = 3;

// Función que mueve el elemento
function animate() {
  // Actualizar posición
  xPosition += xSpeed;
  yPosition += ySpeed;
  
  // Obtener dimensiones de la ventana
  const maxX = window.innerWidth - 40;
  const maxY = window.innerHeight - 40;
  
  // Rebotar en los bordes horizontales
  if (xPosition >= maxX || xPosition <= 0) {
    xSpeed = -xSpeed;
  }
  
  // Rebotar en los bordes verticales
  if (yPosition >= maxY || yPosition <= 0) {
    ySpeed = -ySpeed;
  }
  
  // Aplicar nueva posición
  movingBox.style.left = xPosition + 'px';
  movingBox.style.top = yPosition + 'px';
  
  // Continuar la animación
  requestAnimationFrame(animate);
}

// Iniciar animación al cargar la página
window.addEventListener('load', function() {
  animate();
});

// Ajustar posición si se redimensiona la ventana
window.addEventListener('resize', function() {
  if (xPosition > window.innerWidth - 40) {
    xPosition = window.innerWidth - 40;
  }
  if (yPosition > window.innerHeight - 40) {
    yPosition = window.innerHeight - 40;
  }
});


// ============================================
// Mensaje en consola
// ============================================
console.log('✅ JavaScript cargado correctamente');
console.log('📱 Proyecto: Mundo Digital');
