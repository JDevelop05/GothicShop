// Obtener el ID del producto desde la URL
const params = new URLSearchParams(window.location.search);
const idProducto = params.get('id');

// Cargar productos
fetch('../data/productos.json')
  .then(res => res.json())
  .then(productos => {
    const producto = productos.find(p => p.id === idProducto);

    const detalle = document.getElementById('producto-detalle');

    if (!producto) {
      detalle.innerHTML = '<p>Producto no encontrado</p>';
      return;
    }

    detalle.innerHTML = `
    <a href="productos.html" class="btn-volver">
      <i class="fas fa-arrow-left"></i>Volver
    </a>
    <div class="grid-contenido">
      <div class="imagen">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="contenido">
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion || "Descripción no disponible."}</p>
        <p><strong>Material:</strong> ${producto.material}</p>
        <p class="precio"><strong>Precio:</strong> ${producto.precio}</p>
        <a href="https://wa.me/573126093837?text=Hola,%20me%20interesa%20comprar%20${encodeURIComponent(producto.nombre)}" target="_blank">
          <button><i class="fas fa-shopping-cart"></i> Comprar por WhatsApp</button>
        </a>
      </div>
    </div>
  `;  
  
  })
  .catch(err => console.error("Error al cargar producto:", err));
