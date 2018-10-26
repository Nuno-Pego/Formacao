
var arr = [];

$(document).ready(function () {


    $("#clk").click(function () {
          
        var objn = {};
        objn.id = `pd${arr.length+1}`;
        objn.nome = $("#inptn").val();
        objn.pedido = [{
            nome: $("#inpt").val(),
            extra: $("#inpte").val()
        }] 
        
        arr.push(objn);

        console.log(arr);

        $("#inpt").val("");
        $("#inptn").val("");
        $("#inptn").focus();
        $("#inpte").val("");
        
        
        //$('#tb1').html(labe(i, arr));

    })

})


