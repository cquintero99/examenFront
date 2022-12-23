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

    console.log(JSON.stringify(newBills))

}