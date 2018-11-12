
$("#showtable1").hide();
$("#showtable2").hide();

var ctrl;

$(document).ready(function () {

    $("#ClkAll").click(function () {
        $("#tbProduct tbody").remove();
        $("#tbShelves tbody").remove();
        $("#showtable1").attr("class","col-sm-5 col-md-5");
        $("#showtable2").attr("class","col-sm-5 col-md-5");  
        ctrl = false;
        getProducts();
        getShelves();

    })

    $("#ClkProducts").click(function () {
        $("#tbProduct tbody").remove();
        $("#tbShelves tbody").remove();
        $("#showtable2").hide();
        $("#showtable1").attr("class","col-sm-10 col-md-10");        
        ctrl = true;
        getProducts();

    })

    $("#ClkShelfs").click(function () {
        $("#tbProduct tbody").remove();
        $("#tbShelves tbody").remove();
        $("#showtable1").hide();
        $("#showtable1").hide();
        $("#showtable2").attr("class","col-sm-10 col-md-10"); 
        ctrl = true;
        getShelves();

    })
})


function getProducts() {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Products",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
            $("#showtable1").show();
            createTableProduct(data);
        },
        error: function (data) {
            console.log("Error ", data);
        }
    });
}


function getShelves() {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Shelves",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {
            console.log(data);
            $("#showtable2").show();
            createTableShelves(data);
        },
        error: function (data) {
            console.log("Error ", data);
        }
    });
}


function createTableProduct(data) {

    for (let j = 0; j < data.length; j++) {
        const element = data[j];

        var txt1 = `<tbody>
            <tr>
            <td>${element.discountValue}</td>
            <td>${element.id}</td>
            <td>${element.iva}</td>
            <td>${element.pvp}</td>`;
        if (ctrl == true) {
            var txt2 = `<td><a title="Edit" data-original-title="Edit" href="#"><i class="fas fa-edit"></i></a> <a
                title="Delete" data-original-title="Delete" href="#"><i class="fas fa-trash-alt"></i></a></td></tr></tbody>`;
        }else{
            var txt2=`</tr></tbody>`;
        }
        $("#tbProduct").append(txt1 + txt2);
    }
}

function createTableShelves(data) {

    for (let j = 0; j < data.length; j++) {
        const element = data[j];

        var txt1 = `<tbody>
            <tr>
            <td>${element.capacity}</td>
            <td>${element.id}</td>
            <td>${element.productId}</td>
            <td>${element.rentPrice}</td>`;

        if (ctrl == true) {
            var txt2 = `<td><a title="Edit" data-original-title="Edit" href="#"><i class="fas fa-edit"></i></a> <a
                    title="Delete" data-original-title="Delete" href="#"><i class="fas fa-trash-alt"></i></a></td></tr></tbody>`;
        }else{
            var txt2=`</tr></tbody>`;
        }
        $("#tbShelves").append(txt1 + txt2);
    }
}

