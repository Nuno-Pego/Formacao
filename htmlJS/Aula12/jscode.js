
$(document).ready(function () {

    $.ajax({
        url: "http://192.168.0.122:3000/health",
        type: 'GET',
        //contentType: 'application/json',
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log("Error",data);
        }
    });

})