
$(document).ready(function () {
    getProducts();
})

 
function getProducts() {
    $.ajax({
        url: "https://mcupacademy.herokuapp.com/api/Products",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {            
            console.log(data);
        },
        error: function (data) {
            console.log("Error ", data);
        }
    });
}