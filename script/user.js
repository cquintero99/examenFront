
let user=sessionStorage.getItem("username")
if(user.length>=1){
    $("#contenedor").load('lista.html')
    verData()

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
            </tr>


            `
        }
        document.getElementById('dataBills').innerHTML=body
        

    })
    .catch(err=>{
        console.log(err)
    })
    
}
function login(){

    let username=document.getElementById('username').value

    let pass=document.getElementById('password').value

    
    
    fetch('http://localhost:8080/users/'+username+'/login/'+pass,)
    .then(response=>response.json())
    .then(data=>{
        if(data=true){
            $("#contenedor").load('lista.html')
            sessionStorage.setItem("username",username)
        }else{
            alert("incorrecto")
        }
        

    })
    .catch(err=>{
        console.log(err)
    })
    
}

