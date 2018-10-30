

function novaFactura(cliente, artigo) {
    return new Factura(cliente, artigo);
}

function salvFactura(factura) {
    data.push(factura);
}

function displayFacturaByID(id) {
    for (let i = 0; i < data.length; i++) {
        const factura = orderData()[i];
        if (factura.id == id) {
            return factura;
        }
    }
    return "Nao existe!";
}

function removeFacturaByID(id) {
    for (let j = 0; j < data.length; j++) {
        const factura = orderData()[j];
        if (factura.id == id) {
            data.splice(j, 1);
        }
    }
    return "Nao existe!";
}

function orderData() {
    return data.sort();
}

function tab(factura, ctrl) {

    if (ctrl == false) {
        txt = ` <tr>
        <td> ${factura.cliente} </td>
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