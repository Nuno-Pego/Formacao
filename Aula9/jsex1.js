

$(document).ready(function () {

    $("#clka").click(function () {



    })
   

    $("#clk1").click(function () {



    })

    $("#clk2").click(function () {



    })

})

function novaFactura(cliente,artigo,extra){
    return new Factura(cliente,artigo,extra);
}

function salvFactura(factura){
    data.push(factura);
}

function displayFacturaByID(id){
    for (let i = 0; i < data.length; i++) {
        const factura = orderData()[i];
        if (factura.id == id){
            return factura;
        }   
    }
    return "Nao existe!"; 
}

function removeFacturaByID(id){
    for (let j = 0; j < data.length; j++) {
        const factura = orderData()[j];
        if (factura.id == id) {
            data.splice(j,1);
        }
    }
    return "Nao existe!";
}

function orderData(){
    return data.sort();
}