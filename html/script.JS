const btn = document.getElementById("startBtn");
const mensaje = document.getElementById("mensaje");



btn.addEventListener("click", () => {
  // Fondo colorido
  document.body.style.background = "linear-gradient(135deg, #ff3399, #0e0b03ff, #e01a9eff)";
  btn.style.display = "none"; 
  mensaje.classList.remove("hidden"); 

  // 🎉 Lanzar confeti
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });

  // 🎈 Crear globos
  for (let i = 0; i < 10; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // posición random en X
    balloon.style.left = Math.random() * 100 + "vw";

    // duración distinta para cada globo
    balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

    // color random
    const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(balloon);

    // eliminar después de subir
    setTimeout(() => {
      balloon.remove();
    }, 10000);
  }
});

