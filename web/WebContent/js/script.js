$(document).ready(function(){
	
	$("#valor").mask('R$ 000.000,00');
	$("#data").mask('99/99/9999');
	    
     $("#carousel-example-generic").carousel({
         interval : 3000,
         pause: false
     });
     
     $("#carousel-example-generic1").carousel({
         interval : 3000,
         pause: false
     });
     
     $("#carousel-example-generic2").carousel({
         interval : 3000,
         pause: false
     });
     
     $(".dropdown-toggle").dropdown('toggle');
     
     (function($) {
    	  AddTableRow = function() {

    	    var newRow = $("<tr>");
    	    var cols = "";

    	    var usu = $("#usu").val();
    	    var valor = $("#valor").val();
    	    var dt = $("#data").val();
    	    cols += '<td>'+ usu +'</td>';
    	    cols += '<td>'+ valor +'</td>';
    	    cols += '<td>'+ dt +'</td>';
    	    cols += '<td>';
    	    cols += '<button onclick="RemoveTableRow(this)" class="btn btn btn-primary" type="button">Excluir</button>';
    	    cols += '</td>';

    	    if(usu !== "" || valor !=="" || dt !== ""){
    	    	newRow.append(cols);
        	    $("#tabelaLance").append(newRow);
        	    
        	    $('#table1 tr:last-child ').find('th:last-child').html(valor);
    	    }
    	    
    	    limpar();

    	    return false;
    	  };
    	})(jQuery);
     
     (function($) {
    	  RemoveTableRow = function(handler) {
    	    var tr = $(handler).closest('tr');

    	    tr.fadeOut(400, function(){ 
    	      tr.remove(); 
    	    }); 

    	    return false;
    	  };
    	})(jQuery);
     
     limpar = function(){
    	$("#usu").val("");
 	    $("#valor").val("");
 	    $("#data").val("");
     }
     
});
