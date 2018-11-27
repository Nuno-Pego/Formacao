$(document).ready(function () {
    
    
  
    $( "#target" ).click(function() {
        
        $('h1').css('color','red');
        $('.conteudo').html('<img src="https://i.gifer.com/PL7r.gif" alt="">');

      });

    $('#btn1').click(function(){

        $('h1').css('color','green');
        $('.conteudo').html(getTable());
    } ) 

})


function getTable(){

    return `<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>`
}