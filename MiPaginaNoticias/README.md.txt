Explicación completa: HTML + CSS
1. Declaración inicial del documento
HTML:
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mi Página de Noticias</title>
CSS relacionado:
No aplica aquí directamente.
✅ Integración:
<!DOCTYPE html> indica que es un documento HTML5.
<html lang="es"> → idioma de la página en español.
<meta charset="UTF-8"> → permite usar acentos y caracteres especiales.
<meta name="viewport"...> → adapta la página a móviles.
<title> → título que aparece en la pestaña del navegador.

2. Fuentes y enlace al CSS
HTML:
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
CSS relacionado:
body {
  font-family: 'Poppins', system-ui, sans-serif

✅ Integración:
Se importa la fuente Poppins desde Google Fonts.
Se enlaza el archivo externo styles.css que contiene todos los estilos.
En el CSS, font-family: 'Poppins' aplica la fuente a todo el texto de la página.
3. Encabezado
HTML:
<header class="site-header">
  <div class="container">
    <h1>Mi Página de Noticias</h1>
  </div>
</header>
CSS:
.site-header {
  background: var(--header);
  color: white;
  padding: 28px 0;
  text-align:center;
}
.site-header h1 {
  margin:0;
  font-weight:600;
  font-size:1.6rem;
}
✅ Integración:
class="site-header" conecta con .site-header → fondo oscuro (var(--header)), texto blanco, centrado y padding vertical.
.site-header h1 estiliza el título → elimina márgenes, lo pone en negrita y aumenta tamaño.
class="container" limita el ancho y centra el contenido (lo vemos más abajo en CSS).

4. Navegación
HTML:
<nav class="site-nav">
  <div class="container">
    <ul class="nav-list">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Noticias</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </div>
</nav>
CSS:
.site-nav {
  background: var(--nav);
}
.nav-list {
  display:flex;
  justify-content:center;
  gap:24px;
  list-style:none;
  margin:0;
  padding:10px 0;
}
.nav-list a {
  color:white;
  text-decoration:none;
  font-weight:600;
  font-size:0.95rem;
  transition: color .18s ease;
}
.nav-list a:hover {
  color: var(--accent);
}
✅ Integración:
class="site-nav" → aplica fondo azul oscuro (var(--nav)).
class="nav-list" convierte la lista <ul> en fila horizontal con flex y espacio (gap).
Los enlaces <a> → se vuelven blancos, sin subrayado, en negrita y con efecto hover en color dorado.
5. Introducción
HTML:
<main class="container main-content">
  <section class="intro">
    <h2>Bienvenido</h2>
    <p>En esta página encontrarás las últimas noticias de tecnología, deportes y entretenimiento.</p>
  </section>
CSS:
.main-content {
  padding: 28px 0;
}
.intro h2 {
  margin-top:0;
  font-size:1.25rem;
  color: #0b1220;
}
.intro p {
 margin-bottom:18px;
  color:#374151;
}
✅ Integración:
class="main-content" → agrega espacio alrededor del contenido principal.
.intro h2 → título más grande, color oscuro y sin margen superior.
.intro p → texto con color grisáceo y espacio abajo para separar.
6. Tabla de noticias
HTML:
<section class="tabla-noticias">
  <h2>Noticias recientes</h2>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Fecha</th>
          <th>Fuente</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nuevo avance en inteligencia artificial</td>
          <td>05/09/2025</td>
          <td>TechNews</td>
        </tr>
        ...
      </tbody>
    </table>
  </div>
</section>
CSS:
.table-wrapper {
  overflow-x:auto;
  border-radius:8px;
}
table {
  width:100%;
  border-collapse:collapse;
  background:white;
  min-width:600px;
}
table th, table td {
  padding:12px 14px;
  border: 1px solid #e6e9ef;
  text-align:left;
  vertical-align:middle;
}
table th {
  background: var(--header);
  color: white;
  font-weight:600;
}
table tbody tr:nth-child(even) {
  background:#fbfdff;
}
table tbody tr:hover {
  background:#eef6ff;
}

✅ Integración:
class="table-wrapper" → permite scroll horizontal en móviles y bordes redondeados.
<table> → ocupa todo el ancho, con fondo blanco.
<th> → fondo oscuro, texto blanco.
<td> → bordes grises, padding.
Filas pares (nth-child(even)) → fondo gris claro alterno.
Hover sobre fila → fondo azul muy claro.
7. Tarjetas
HTML:
<section class="cards-section">
  <h2>Destacados</h2>
  <div class="cards-grid">
    <article class="card">
      <img src="..." alt="Noticia 1">
      <div class="card-body">
        <h3>La inteligencia artificial cambia la forma en que trabajamos</h3>
        <p>Resumen breve...</p>
      </div>
    </article>
    ...
  </div>
</section>
CSS:
.cards-grid {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap:20px;
  margin-top:18px;
}
.card {
  background:white;
  border-radius:12px;
  overflow:hidden;
  box-shadow: 0 8px 24px var(--card-shadow);
  transition: transform .18s ease, box-shadow .18s ease;
  display:flex;
  flex-direction:column;
}
.card img {
  width:100%;
  height:180px;
  object-fit:cover;
  display:block;
  border-bottom: 4px solid var(--nav);
}
.card-body {
  padding:14px;
}
.card h3 {
  margin:0 0 8px;
  font-size:1.05rem;
  color:var(--header);
}
.card p {
  margin:0;
  color:#475569;
  font-size:.95rem;
}
.card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 14px 40px rgba(15,23,42,0.12);
}

✅ Integración:
class="cards-grid" → organiza tarjetas en cuadrícula adaptable con espacio entre ellas.
class="card" → define cada tarjeta: fondo blanco, esquinas redondeadas, sombra y efecto hover que levanta la tarjeta.
.card img → imagen ocupa todo el ancho, con altura fija y borde inferior azul.
.card-body → espacio interno para el texto.
.card h3 → título en negrita y color oscuro.
.card p → resumen en gris.
8. Pie de página
HTML:
<footer class="site-footer">
  <div class="container footer-content">
    <p>&copy; 2025 Mi Página de Noticias | Síguenos en
      <a href="#" aria-label="Facebook">Facebook</a>,
      <a href="#" aria-label="Twitter">Twitter</a>
    </p>
  </div>
</footer>



CSS:
.site-footer {
  background: var(--header);
  color: white;
  padding: 18px 0;
  margin-top:32px;
}
.footer-content p {
  margin:0;
  text-align:center;
  font-size:0.95rem;
}
.footer-content a {
  color: var(--accent);
  text-decoration:none;
  margin-left:6px;
}
.footer-content a:hover {
  text-decoration:underline;
}
✅ Integración:
class="site-footer" → fondo oscuro, texto blanco, padding y margen superior para separarlo.
.footer-content p → texto centrado y tamaño pequeño.
Enlaces (a) → color dorado y sin subrayado, con subrayado al pasar el mouse.
9. Variables CSS y generales
CSS al inicio:
:root {
  --bg: #f4f6fa;
  --text: #1f2937;
  --header: #0f172a;    
  --nav: #1e40af;      
  --accent: #f59e0b;   
  --card-shadow: rgba(15,23,42,0.08);
  --container-width: 1100px;
}
* { box-sizing:border-box }
body {
  margin:0;
  font-family: 'Poppins', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height:1.5;
}
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 16px;
}

✅ Integración:
:root → define variables de color y tamaño que se reutilizan en todo el CSS.
body → fuente global, colores de texto/fondo y elimina márgenes por defecto.
.container → limita el ancho máximo de los contenidos y los centra.
🔟 Media Queries (Responsive)
CSS:
@media (max-width:600px){
  .site-header h1 { font-size:1.25rem; }
  .nav-list { gap:12px; padding:8px 0; font-size:.95rem; }
  table { min-width:520px; }
  .card img { height:150px; }
}
✅ Integración:
Ajusta el diseño en pantallas pequeñas (<600px):
El título se hace más chico.
El menú se compacta.
La tabla fuerza scroll con ancho mínimo.
Las imágenes de las tarjetas son más bajas.
🎯 Conclusión
👉 Cada parte del HTML usa class="" para conectarse con su CSS correspondiente.
👉 El HTML arma la estructura de la página.
👉 El CSS controla la apariencia visual (colores, tamaños, alineación, efectos).
👉 Las variables CSS (--bg, --header, etc.) hacen que los colores sean fáciles de reutilizar y cambiar.
