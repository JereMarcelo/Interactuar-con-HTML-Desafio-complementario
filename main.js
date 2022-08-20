function seleccionCompra(productosEnVenta){
        productosEnVenta = prompt(`Contamos con  productos de entrenamiento:
        1) Productos disponibles.
    
        0) Salir`);
    }

const productos = [
                  { id: 1,  nombre: "Mancuernas", precio: 7500},
                  {  id: 2,  nombre: "Barras", precio: 70 },
                  {  id: 3,  nombre: "Cintas elasticas"  , precio: 2000},
                  {  id: 4,  nombre: "Zapatillas Nike" , precio: 15000},
                ];

function mostrarProductosEnElDom() {
    let html = '';
    for ( let i = 0; i <productos.length; i++) {
        html =
         html + 
         `
         <div>
         <h3> ${productos[i].nombre} </h3>
         <p>Precio: $ ${productos[i].precio}</p>
         <p>Id: ${productos[i].id}</p>
         `;

    }
 setTimeout (()=>{
    document.getElementById('contenedor-productos').innerHTML = html
 },3000);
} 

seleccionCompra();
mostrarProductosEnElDom();
