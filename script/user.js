
function verData(){
    let username=document.getElementById('inputUsername').value
    fetch('http://localhost:8080/users/'+username+'/bills')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)

    })
    .catch(err=>{
        alert("Error buscar Datos")
    })
}