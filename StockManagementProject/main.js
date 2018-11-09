
$(document).ready(function () {
    getProducts();
})


function getProducts() {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Products",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data)
            createTable(data);
        },
        error: function (data) {
            console.log("Error ", data);
        }
    });
}


function createTable(data) {

    createHeader(data);

    for (let j = 0; j < data.length; j++) {
        const element = data[j];

        txt = `<tr>
            <td>${element.discountValue}</td>
            <td>${element.id}</td>
            <td>${element.iva}</td>
            <td>${element.pvp}</td>
            <td><a title="Edit" data-original-title="Edit" href="#"><i class="fas fa-edit"></i></a> <a
            title="Delete" data-original-title="Delete" href="#"><i class="fas fa-trash-alt"></i></a></td>`;

        $("tbody").append(txt);
    }
}

function createHeader(data) {

    var keys = Object.keys(data[0]);

    for (let j = 0; j < data.length; j++) {
        const element = keys[j];

        txt = `<tr>
            <th>Discont</td>
            <th>IVA</td>
            <th>PVP</td>
            <th>ID</td>`;
    }
    $("thead").append(txt);
}