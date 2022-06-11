






let pintura= document.getElementById('caja')
fetch('pinturas1.json')
.then(response =>response.json())
.then (pinturas =>{
    pinturas.forEach((pintura)=>{
      let {id,nombre,autor,precio,stock,imagen}= pintura
      if(stock===0){
        caja.innerHTML += `
        <div class="divcard">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body position">
          <img style="width = 18 rem"; src = "${imagen}">
            <h5>${nombre}</h5>
            <p> Autor :${autor}</p>
            <p> Precio :${precio}</p>
            <p> Stock :En reserva</p></div>
            
          </div>
        </div>
      </div>`
      }else{
      caja.innerHTML += `
  <div class="divcard">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body position">
    <img style="width = 18 rem"; src = "${imagen}">
      <h5>${nombre}</h5>
      <p> Autor :${autor}</p>
      <p> Precio :${precio}</p>
      <p> Stock :${stock}</p></div>
      <a href="./cesar${id}.html" class="btn btn-primary " id="boton${id}">ver pintura</a>
    </div>
  </div>
</div>`}
 
        
    })})      
  