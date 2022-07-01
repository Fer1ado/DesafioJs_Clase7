


let a;
function mostrarOcultar () {
    if(a===1){
        document.getElementById("formCargaProd").style.display="none"
        return a=0
    }
    else{
        document.getElementById("formCargaProd").style.display="inline"
        return a=1
    }
}



function cargarProducto(){
    let nombreProd = document.getElementById("form_name").value
    let precioProd = document.getElementById("form_price").value
    let stockProd = document.querySelector("#form_stock").value
    let imgProducto = "../ASSETS/FOTOS_CATALOGO/placeholder.png"
    let descriProd = document.getElementById("form_description").value
    piezasEnstock.push(new PiezasOfrecidas(crearID(), nombreProd, stockProd, precioProd,descriProd,imgProducto))
    let str = JSON.stringify(piezasEnstock)
            localStorage.setItem("stockDisponible", str)
            Swal.fire({
                title: "Producto Agregado!",
                icon: 'success',
                confirmButtonText: 'Continuar'
                })
}


registroEstable ()

function registroEstable (){
    let ejecutaUnaVez = localStorage.getItem("chequeo");
        if (ejecutaUnaVez!=="true"){
            localStorage.removeItem("chequeo")
            localStorage.setItem("chequeo", true)
            GeneradorAutomatico()
            let str = JSON.stringify(piezasEnstock)
            localStorage.setItem("stockDisponible", str)
        }
        else{
            console.log("OK")
        }
    
    let registro = JSON.parse(localStorage.getItem("stockDisponible"))
    registro.forEach(item => {piezasEnstock.push(item)
    }); 
}



let b;
function mostrarOcultar2 () {
    if(b===1){
        document.getElementById("prodAdmin").style.display="none"
        return b=0
    }
    else{
        document.getElementById("prodAdmin").style.display="inline"
        return b=1
    }
}

borrarItems()
function borrarItems(){
    let poblarTabla = JSON.parse(localStorage.getItem("stockDisponible"))
    poblarTabla?.forEach(item =>{
        let tr = document.createElement("tr")
            tr.innerHTML = `<tr>
                            <th scope="row">${item.id}</th>
                            <td>${item.nombre}</td>
                            <td>${item.stock} Un</td>
                            <td>$${item.importe}</td>
                            <td id="eliminar${item.id}"><a class="btn btn-warning" ><i class="fa-solid fa-trash-can"</i></a></td>
                            </tr>`
        listarProd.appendChild(tr)
    
    let eliminar = document.getElementById(`eliminar${item.id}`)
        eliminar.addEventListener("click", ()=>{
        eliminar.parentElement.remove()
        let index = poblarTabla.findIndex((i) => i.id === item.id)
        poblarTabla.splice(index,1)
        let str = JSON.stringify(poblarTabla)
        localStorage.setItem("stockDisponible",str)
            
            Toastify({
                text: "Item eliminado!",
                duration: 3000,
                gravity: "bottom", 
                position: "right",
                style: {
                background: "radial-gradient(circle, rgba(255,183,16,0.34294269465598737) 0%, rgba(255,183,16,0.9143712660845589) 100%)",
                },
                }).showToast();

        })

    })
}


let c;
function mostrarOcultar3 () {
    if(c===1){
        document.getElementById("prodList").style.display="none"
        return c=0
    }
    else{
        document.getElementById("prodList").style.display="inline"
        return c=1
    }
}



function buscarProducto (){
    let nom = document.getElementById("busquedaIngresada").value
    let piezasEnstock = JSON.parse(localStorage.getItem("stockDisponible"))
    let resultado = piezasEnstock.filter(p => p.nombre.includes(nom.toUpperCase()))
        listarBusqueda.innerHTML=""
        resultado?.forEach(item =>{
            let tr = document.createElement("tr")
                tr.innerHTML = `<tr>
                                <th scope="row">${item.id}</th>
                                <td>${item.nombre}</td>
                                <td>${item.stock} Un</td>
                                <td>$${item.importe}</td>
                                </tr>`
        listarBusqueda.appendChild(tr)          
        })
    
}



// INICIO CODIGO AL QUE LE FALTA IMPLEMENTACION HTML //


// function listarVentas() {
//     console.table(ventasRealizdas);
// }


// FIN CODIGO AL QUE LE FALTA IMPLEMENTACION HTML //