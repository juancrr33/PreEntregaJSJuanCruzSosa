let producto = prompt('Ingrese el producto que desee')

let producto1 = 15000
let producto2 = 20000
let producto3 = 17000



switch (producto) {
    case 'producto1':
        console.log('Stock Disponible de producto1')
        alert('El Producto esta Disponible')
        alert('Su compra con envio y impuestos incluidos tendra el valor de $'+ ( producto1 * 1.21)   )
        break;

    case 'producto2':
        console.log('Stock Disponible de producto2')
        alert('El Producto esta Disponible')
        alert('Su compra con envio y impuestos incluidos tendra el valor de $' + ( producto2 * 1.21) )
        break;

    case 'producto3':
        console.log('Stock Disponible de producto3')
        alert('El Producto esta Disponible')
        alert('Su compra con envio y impuestos incluidos tendra el valor de $' + ( producto3 * 1.21)  )
        break;

    default:
        console.log('No tenemos stock Disponible por el momento')
        alert('No tenemos stock disponible')

        break;
}



