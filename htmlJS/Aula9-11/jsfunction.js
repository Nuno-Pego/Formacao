

function novaFactura(cliente, artigo) {
    return new Factura(cliente, artigo);
}

function salvFactura(factura) {
    //data.push(factura);
    console.log('nova',factura);
    
    $.ajax({
        url: "http://192.168.0.122:3000/api/orders",
        type: 'POST',
        contentType: 'aplication/json',
        data: JSON.stringify(factura.name),
        success: function(data){
            console.log("Factura Adicionada", data);          
        },
        error: function (data){
            console.log ("Error ", data);
        }
        
    });
}

// function displayFacturaByID(id) {
//     for (let i = 0; i < data.length; i++) {
//         const factura = orderData()[i];
//         if (factura.id == id) {
//             return factura;
//         }
//     }
//     return "Nao existe!";
// }

// function removeFacturaByID(id) {
//     for (let j = 0; j < data.length; j++) {
//         const factura = orderData()[j];
//         if (factura.id == id) {
//             data.splice(j, 1);
//         }
//     }
//     return "Nao existe!";
// }

// function orderData() {
//     return data.sort();
// }

function tab(factura, ctrl) {

    if (ctrl == false) {
        txt = ` <tr>
        <td> ${factura.name} </td>
        <td> ${factura.artigos[0].menu} </td>
        <td> ${factura.artigos[0].extra} </td>
    </tr>`;
    } else {
        for (let index = 1; index < factura.artigos.length; index++) {
            txt = ` <tr>
        <td></td>
        <td> ${factura.artigos[index].menu} </td>
        <td> ${factura.artigos[index].extra} </td> 
        </tr>`;

        }
    }
    return txt;
}

function getData(){
    $.ajax({
        url: "http://192.168.0.122:3000/api/orders",
        type: 'GET',
        contentType: 'aplication/json',
        success: function(data){
            console.log(data);
            return data;            
        },
        error: function (data){
            console.log ("Error ", data);
        }
    });
}