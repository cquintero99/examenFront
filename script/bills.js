function saveBills(){
    let valor=document.getElementById('inputValor').value
    let tipo=document.getElementById('selectTipo').value
    let observation=document.getElementById('inputObservacion').value
    let user_id=sessionStorage.getItem('id')
    const fecha =new Date()

    const newBills={
        
        user_id,
        value:valor,
        type:tipo,
        observation,
        date_bill:fecha
    }
    let username=sessionStorage.getItem("username")
    fetch('http://localhost:8080/users/'+username+'/bills',{
        method:'POST',
        body:JSON.stringify(newBills),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(response=>response.json())
    .then(newBills=>{
        console.log("NEW BILLS "+newBills)

        location.reload()
        

    })
    .catch(err=>{
        alert("error al guarda bills")
    })
    console.log(JSON.stringify(newBills))

}