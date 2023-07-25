const tienda = []
function Bebidas(nombre, codigo, categoria, precioVenta, marca, ml) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.categoria = categoria;
    this.precioVenta = precioVenta;
    this.marca = marca;
    this.ml = ml;

}

let vinoCattena = new Bebidas('Dv Cattena', '0001', 'vinos', 6500, 'Bodega Cattena', '750')
let vinoGranEnemigo = new Bebidas('Gran Enemigo', '0002', 'vinos', 4500, 'Bodega Cattena', '750')
let vinoAngelica = new Bebidas('Angelica', '0003', 'vinos', 10000, 'Bodega Cattena', '750')
let vinoNicolasCattena = new Bebidas('Nicolas Cattena', '0004', 'vinos', 8500, 'Bodega Cattena', '750')
let vinoAlamos = new Bebidas('Alamos', '0005', 'vinos', 3500, 'Bodega Cattena', '750')
let cervezaStellaR = new Bebidas('Stella rubia x6', '0006', 'cerveza', 3000, 'Stella Bebidas', '500')
let cervezaStellaN = new Bebidas('Stella Negra x6', '0007', 'cerveza', 3000, 'Stella Bebidas', '500')
let cervezaHeinekenR = new Bebidas('Heineken Rubia x6', '0008', 'cerveza', 3300, 'Heineken Bebidas', '500')
let cervezaHeinekenL = new Bebidas('Heineken Lager x6', '0009', 'cerveza', 3300, 'Heineken Bebidas', '500')

tienda.push(vinoCattena, vinoGranEnemigo, vinoAngelica, vinoAlamos, vinoNicolasCattena, cervezaHeinekenL, cervezaHeinekenR, cervezaStellaN, cervezaStellaR)


let busquedaFilter2 = tienda.filter((bebidasObj) => bebidasObj.ml === '500')
let busquedaFilter = tienda.filter((bebidasObj) => bebidasObj.categoria === 'Bodega Cattena')
let busquedaFind = tienda.find((bebidaObj) => bebidaObj.nombre === 'Dv Cattena')
let busquedaFind2 = tienda.find((bebidaObj) => bebidaObj.nombre === 'Las Moras')

const sectionProducts = document.querySelector('#sectionProducts');
const divProducts = document.createElement('div');
sectionProducts.appendChild(divProducts);
divProducts.classList.add('products');


for (const bebida of tienda) {
    let articulo = document.createElement('div');
    articulo.classList.add('col-md-4');
    articulo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${bebida.nombre}</h3>
                <h5 class="card-subtitle mb-2 text-muted">Categoria: ${bebida.categoria}</h5>
                <p class="card-text">Codigo: ${bebida.codigo}</p>
                <h4 class="card-title">Precio: $${bebida.precioVenta}</h4>
                <input class="${bebida.codigo}" type="button" value="Detalle">
            </div>
        </div>
    `;
    divProducts.appendChild(articulo);
}

