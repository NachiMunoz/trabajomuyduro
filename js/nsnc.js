const ruta = "./home.html";

console.log(window);
if (confirm("¿Eres mayor de edad?")) {
  window.location.href = ruta;
}
