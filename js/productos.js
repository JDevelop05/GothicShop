// Cargar productos
fetch('../data/productos.json')
  .then(res => res.json())
  .then(productos => {
    const container = document.getElementById('productos-container');
    productos.forEach((producto, index) => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      // Agrega la animación con retraso para que aparezcan uno a uno
      card.style.animation = `fadeInUp 0.6s ease ${index * 0.2}s forwards`;

      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="detalle-img">
        <p>${producto.nombre}</p>
        <p><strong>Precio: ${producto.precio}</strong></p>
        <a href="producto.html?id=${producto.id}">
          <button><i class="fas fa-eye"></i> Ver Producto</button>
        </a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error al cargar productos:", err));
