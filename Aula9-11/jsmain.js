
var ctrl = false;
var factura;
//var data = [];

$(document).ready(function () {

    var data = getData();

    $("#sh").hide();
    $("#pg2").hide();


    $("#clk1").click(function () {

        var cliente = $(inptc).val();
        var menu = $(inptm).val();
        var extra = $(inpte).val();

        if (cliente == "" || menu == "") {

        } else {

            $("#sh").show();
            $("#sh").show();
            $("#inptm").val("");
            $("#inpte").val("");
            $("#inptc").prop("disabled", true);

            if (ctrl == false) {
                factura = novaFactura(cliente, new Artigo(menu, extra));
                console.log(factura);
            } else {
                factura.addMenu(new Artigo(menu, extra));
            }

            $('#tb1').append(tab(factura, ctrl));
            ctrl = true;


            $('#f1').submit(function (e) {
                e.preventDefault();
            })

        }

    })

    $("#clk2").click(function () {

        var cliente = $(inptc).val();
        var menu = $(inptm).val();
        var extra = $(inpte).val();

        $("#inptm").val("");
        $("#inpte").val("");
        $("#inptc").prop("disabled", false);
        $("#inptc").val("");
        $("#tb1 tr").remove();
        $("#sh").hide();
        //$("#inptc").prop(autofocus);

        if (ctrl == false) {
            factura = novaFactura(cliente, new Artigo(menu, extra));
            console.log(factura);
        } else {
            factura.addMenu(new Artigo(menu, extra));
        }       

        salvFactura(factura);

    })

    $("#clkp").click(function () {
        $("#pg2").show();
        $("#pg1").hide();
        $("#sh2").hide();
    })

    //$('select').on('change', function (e) { })
})

