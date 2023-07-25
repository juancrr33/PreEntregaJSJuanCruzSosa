document.addEventListener('DOMContentLoaded', () => {
    const listaCarrito = document.getElementById('listaCarrito');
    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
        const carrito = JSON.parse(carritoStorage);
        carrito.forEach(bebida => {
            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `Bebida: ${bebida.nombre}, Código: ${bebida.codigo}, Precio: ${bebida.precioVenta} USD`;
            listaCarrito.appendChild(nuevoItem);
        });
    }
});