
//el pop up
Swal.fire({
    title: 'Bienvenidos a nuestra galeria',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#000 url(./logo/Kramer.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })



const botonCarrito= document.querySelector('#botonCarrito')
let sidebar = document.querySelector('.sidebar') 
const caja = document.querySelector(".caja")

botonCarrito.addEventListener("click",e=>{
    sidebar.classList.toggle("active")
    caja.classList.toggle("invisible")
    })

let productos = [
    {
        id:1,
        nombre: "El muro de los lamentos  ",
        precio: 9000,
        autor :"Cinara",
        stock :1,
        imagen :"./pinturas/El muro de los lamentos.jpg",
    },
    {
        id:2,
        nombre: "Africa  ",
        precio: 9000,
        autor :"Cinara",
        stock :1,
        imagen :"./pinturas/Africa.jpg",
    },
    {
        id:3,
        nombre: "El cobijo  ",
        precio: 9000,
        autor :"Cinara",
        stock :1,
        imagen :"./pinturas/El cobijo.jpg",
    },
    {
        id:4,
        nombre: "Obelisco  ",
        precio: 9000,
        autor :"Cinara",
        stock :1,
        imagen :"./pinturas/obelisco.jpg",
    },
]

let carrito =[]
caja.innerHTML=""


function mostrarPinturas(){
   /* caja.innerHTML=""
productos.forEach((e)=>{
    const {imagen,nombre, autor,precio,stock, id } = e
    console.log(imagen)

    caja.innerHTML += `<div class="card carta" style="width: 18rem;">
    <img src="${imagen}" class="card-img-top medidasCard" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Autor : ${autor}</p>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">${stock}</p>
     <button class="btn btn-danger boton" id ="agregar${id}">Agregar Carrito</button>
    </div>
  </div>`
})*/
//con el map y la desestructuracion despliego las cards sin cargarlas todas cada vez
    const cardMap = productos.map(element=>{
        const {imagen, id,nombre, autor, precio, stock}= element
        //coloco un if para evitar que sigan cargando el carrito si es cero el stock
        if(stock >= 1){
        return `<div class="card carta" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top medidasCard" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Autor : ${autor}</p>
          <p class="card-text">Precio: ${precio}</p>
          <p class="card-text">${stock}</p>
         <button class="btn btn-danger boton" id ="agregar${id}">Agregar Carrito</button>
        </div>
      </div>`}
      else{
        return `<div class="card carta" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top medidasCard" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">Autor : ${autor}</p>
          <p class="card-text">Precio: ${precio}</p>
          <p class="card-text">${stock}</p>
         <button disabled = "true" class="btn btn-danger boton" id ="agregar${id}">Agregar Carrito</button>
        </div>
      </div>`
      }
    })
    caja.innerHTML= cardMap.join("")//con el join la separcion es nada
escucharBotonAgregar()
    
}
//activo el boton de agregar al carrito
function escucharBotonAgregar(){
    productos.forEach((pintura, index)=>
    document.querySelector(`#agregar${pintura.id}`).addEventListener('click',()=>{
       enviarAlCarrito(pintura)
    })
    )
}
// esta funcion envia el elemento al carrito de compra
function enviarAlCarrito(pintura){
 // (carrito.some(element=>element.id=== pintura.id))? pintura.cantidad++ : (carrito.cantidad =1,carrito.pusch(pintura))
    const existe = carrito.some(e =>e.id==pintura.id)
    productos.map((e)=>{
        if(e.id=== pintura.id){
            e.stock--
            return e
        }
})
   
    //creo un objeto nuevo para no afectar el inventario
    const pinturaAlCarrito = {...pintura,cantidad:1}
    delete pinturaAlCarrito.stock //saco el stock que en el carrito no intereza
//controlo si el elemento ya esta en en el carrito, si esta solo sumo a cantidad
    if(existe){
        carrito.map((e=> {
           if(e.id=== pintura.id){
            e.cantidad++
            return e
           } 
        }))
       
        
    }else{
        carrito.push(pinturaAlCarrito)
    }
    //para que no sobreescriba a lo ya desplegado
    mostrarPinturas()
    pinturaEnCarrito()
}
//funcion para enviar al carrito lo que puse en el array carrito de compra
function pinturaEnCarrito(){
    sidebar.innerHTML =""
    carrito.forEach((e)=>{
        sidebar.innerHTML+=`<div class="card carta" style="width: 18rem position:absolute;">
        <img src="${e.imagen}" class="card-img-top medidasCard" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.nombre}</h5>
          <p class="card-text">Autor : ${e.autor}</p>
          <p class="card-text">Precio: ${e.precio}</p>
          <p class="card-text">Cantidad: ${e.cantidad}</p>
         <button class="btn btn-danger boton" id ="agregar${e.id}">Eliminar</button>
        </div>
      </div>`
    })
}    
    


   
mostrarPinturas()