
var arr = [];

$(document).ready(function () {


    $("#clk").click(function () {

        var objn = {};
        objn.id = `pd${arr.length + 1}`;
        objn.nome = $("#inptn").val();
        objn.pedido = [{
            nome: $("#inpt").val(),
            extra: $("#inpte").val()
        }]

        arr.push(objn);
        
        $("#inpt").val("");
        $("#inptn").val("");
        $("#inptn").focus();
        $("#inpte").val("");


    })

    $("#clk2").click(function () {

        $('#pf').html(fact(arr));

    })


})

function fact(ary) {

    for (let i = 0; i < ary.length; i++) {

        nm = ary[i]; 
        console.log(nm);
        nmp=nm.pedido;
        console.log(nmp);
        
        

    }

}