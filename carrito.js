document.addEventListener('DOMContentLoaded', () => {
    const carritoStorage = localStorage.getItem('productosEnCarrito');
    const productosEnCarrito = JSON.parse(carritoStorage) || [];
    if (productosEnCarrito) {
        productosEnCarrito.forEach(element => {
            console.log(element);
        });
    }
});