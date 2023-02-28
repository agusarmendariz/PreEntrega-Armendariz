
let productoConDescuento = false;

while(productoConDescuento == false){
    descuentoProducto()
}

function descuentoProducto(){
    let input = parseFloat(prompt("INGRESE EL PRECIO DEL PRODUCTO"));
    
    let producto= {
        precio: input,
        descuento:0, 
    }
    if(producto.precio >=500 && producto.precio <1000){
        producto.descuento = (producto.precio * 0.10).toFixed(2);
        alert('ESTE PRODUCTO TIENE UN DESCUENTO DEL 10%   ($ '+ producto.descuento+')'); 
        totalDesc(producto)
        
    }else if (producto.precio >=1000 && producto.precio <1500){
        producto.descuento = (producto.precio * 0.15).toFixed(2);
        alert('ESTE PRODUCTO TIENE UN DESCUENTO DEL 15%   ($ '+ producto.descuento+')');
        totalDesc(producto)

    }else if (producto.precio >=1500 && producto.precio <=2000){
        producto.descuento = (producto.precio * 0.20).toFixed(2);
        alert('ESTE PRODUCTO TIENE UN DESCUENTO DEL 20%   ($ '+ producto.descuento+')')
        totalDesc(producto)

    }   else {
        alert('NO TIENE DESCUENTO')
    }  
       
}

function totalDesc(producto){
    let resultado = producto.precio - producto.descuento
    return alert('EL TOTAL A PAGAR ES DE: $ '+ resultado), productoConDescuento = true
}






   
   
 










