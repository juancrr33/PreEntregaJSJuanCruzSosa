document.addEventListener('DOMContentLoaded', () => {
    const carritoStorage = localStorage.getItem('productosEnCarrito');
    const productosEnCarrito = JSON.parse(carritoStorage) || [];
    if (productosEnCarrito) {
        for (const producto of productosEnCarrito) {
            let compra = document.createElement('div');
            compra.classList.add('col-md-4');
            compra.innerHTML = `
            <div class="card">
            <div class="card-header">
            ${producto.nombre}
        </div>
            <div class="card-body">
                <h5 class="card-title">${producto.categoria}</h5>
                <p class="card-text">Codigo: ${producto.codigo}</p>
                <p class="card-text">Precio: $${producto.precioVenta}</p>
            </div>
        </div>
                `;
            const divProducts = document.getElementById('listaCarrito');
            divProducts.appendChild(compra);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const carritoStorage = localStorage.getItem('productosEnCarrito');
    const productosEnCarrito = JSON.parse(carritoStorage) || [];

    const listaCarrito = document.getElementById('listaCarrito');
    const vaciarCarritoButton = document.getElementById('vaciarCarrito');
    const finalizarCompraButton = document.getElementById('finalizarCompra');

    if (productosEnCarrito) {
        productosEnCarrito.forEach(producto => {

        });
    }
    vaciarCarritoButton.addEventListener('click', () => {
        localStorage.removeItem('productosEnCarrito');
        listaCarrito.innerHTML = '';
        Swal.fire({
            title: 'El carrito ha sido vaciado',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    });

    finalizarCompraButton.addEventListener('click', () => {
        localStorage.removeItem('productosEnCarrito');
        listaCarrito.innerHTML = '';
        Swal.fire({
            title: 'Muchas gracias por su compra',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    });
});
