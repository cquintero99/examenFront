
let user=sessionStorage.getItem("username")
if(user.length>=1){
    $("#contenedor").load('lista.html')
    verData()
    document.getElementById('salir').innerHTML=`
    <button class="btn btn-danger" type="submit" onclick="salirCuenta()">Cerrar Sesion</button>`

}
function salirCuenta(){
    sessionStorage.setItem("username","")
    sessionStorage.setItem("id","")
    
    setTimeout(recargar,50)
}
function recargar(){
    location.reload()
}
function verData(){
    let username=sessionStorage.getItem('username')
    
    fetch('http://localhost:8080/users/'+username+'/bills',)
    .then(response=>response.json())
    .then(data=>{
        let body=``
        
        for(let i=0; i<data.length;i++){
            body+=
            `
            <tr>
            <td>${data[i].id}</td>
            <td>${data[i].date_bill}</td>
            <td>${data[i].user_id}</td>
            <td>${data[i].value}</td>
            <td>${data[i].type}</td>
            <td>${data[i].observation}</td>
            <td><button class="btn btn-danger" type="submit" onclick="deleteBills(${data[i].id})">Eliminar</button></td>
            </tr>


            `
        }
        document.getElementById('dataBills').innerHTML=body
        

    })
    .catch(err=>{
        console.log(err)
    })
    
}
function cargarLista(){
    $("#contenedor").load('lista.html')

}
function login(){

    let username=document.getElementById('username').value

    let pass=document.getElementById('password').value

    
    
    fetch('http://localhost:8080/users/'+username+'/login/'+pass,)
    .then(response=>response.json())
    .then(data=>{
        if(data==true){
            sessionStorage.setItem("username",username)
            
            fetch('http://localhost:8080/users/'+username+'/usuario')
            .then(res=>res.json())
            .then(dataUser=>{
                sessionStorage.setItem("id",dataUser.id)
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    text: username,
                    timer: 1500,
                    footer: '<p class="fw-bolder" >King Shoes CO</p>'
                  })
            })
            setTimeout(cargarLista,1500)
            .catch(err=>{
                alert("error buscar usuario")
            })
            
        }else if(data==false){
            sessionStorage.setItem("username","")  
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos LOL!',
            timer:1000,
            footer: '<a href="">Why do I have this issue?</a>'
        })
        }
        

    })
    .catch(err=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos LOL!',
            timer:1000,
            footer: '<a href="">Why do I have this issue?</a>'
        })
    })
    
}

