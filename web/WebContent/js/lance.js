$(document).ready(function(){
	
	$("#valor").mask('#.##0,00', {reverse: true});
	$("#data").mask('99/99/9999', {clearIfNotMatch: true});


$('#botao1').click(function(){
         $('.imageRow a:first').click();
    })
     
});
