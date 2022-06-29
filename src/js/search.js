//Objeto con imagenes
const imagenes=[
    {
        nombre: '001',
        url: './assets/img/Rectángulo 303.png',
        category:'Items'
    },
    {
        nombre: '002',
        url: './assets/img/rectangulo-1.png',
        category:'Items'
    },
    {
        nombre: '003',
        url: './assets/img/rectangulo-2.png',
        category:'Items'
    },
    {
        nombre: '004',
        url: './assets/img/rectangulo-3.png',
        category:'Boosters'
    },
    {
        nombre: '005',
        url: './assets/img/rectangulo-4.png',
        category:'Boosters'
    },
    {
        nombre: '006',
        url: './assets/img/rectangulo-5.png',
        category:'Armaduras'
    },
    {
        nombre: '007',
        url: './assets/img/rectangulo-6.png',
        category:'Armaduras'
    },
    {
        nombre: '008',
        url: './assets/img/rectangulo-7.png',
        category:'Armas'
    },
    {
        nombre: '009',
        url: './assets/img/rectangulo-8.png',
        category:'Armas'
    },    
    {
        nombre: '010',
        url: './assets/img/rectangulo-9.png',
        category:'Armas'
    },    {
        nombre: '011',
        url: './assets/img/Rectángulo -10.png',
        category:'Cards'
    },    {
        nombre: '012',
        url: './assets/img/Rectángulo -11.png',
        category:'Unidades'
    }
]

//accedemos al input y donde vamos a pintar las cards del filtro
const form = document.querySelector('#search');
const card =document.querySelector('#cards');


//función para el filtro
const filtrar= ()=>{
    card.innerHTML = '';
    const texto= form.value.toString();
    for(let imagen of imagenes){
        let nombre= imagen.nombre;
        if(nombre.indexOf(texto) !== -1){
            card.innerHTML += `              <div class="col-lg-3 mt-4 product-item" category="${imagen.category}">
            <div class="card h-100">
              <img src="${imagen.url}" alt="">
              <div class="card-body">
                <p class="card-text">${imagen.nombre}</p>
              </div>
            </div>
          </div>`
        }
    }
    //alerta de si no ecnontramos lo que busca el filtro
    if(card.innerHTML===''){
        card.innerHTML += `<div class="alert">
        <i class="bi bi-emoji-frown"></i> Lo sentimos, no contamos con el producto que buscas.
      </div>`
    }
}

form.addEventListener('keyup', filtrar);
