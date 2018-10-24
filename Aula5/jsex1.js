function click1() {

    var tx =document.getElementById("ip1").value;

     var j =0;
    for (let i = 0; i < tx.length; i++) {
        
       if (tx[i]==" ") {
        
        j++;
                
       }
        
    }
    document.getElementById("r1").innerHTML = j;

}
