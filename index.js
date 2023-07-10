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

tienda.push(vinoCattena)
tienda.push(vinoGranEnemigo)
tienda.push(vinoAngelica)
tienda.push(vinoAlamos)
tienda.push(vinoNicolasCattena)
tienda.push(cervezaStellaN)
tienda.push(cervezaStellaR)
tienda.push(cervezaHeinekenR)
tienda.push(cervezaHeinekenL)


let busquedaFilter2 = tienda.filter((bebidasObj) => bebidasObj.ml ==='500')
let busquedaFilter = tienda.filter((bebidasObj) => bebidasObj.categoria ==='Bodega Cattena')
let busquedaFind = tienda.find((bebidaObj) => bebidaObj.nombre === 'Dv Cattena')
let busquedaFind2 = tienda.find((bebidaObj) => bebidaObj.nombre === 'Las Moras')

console.log(busquedaFind);
console.log(busquedaFind2);
console.log(busquedaFilter);
console.log(busquedaFilter2);
console.table(tienda)



