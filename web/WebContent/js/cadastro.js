$(document).ready(function(){
	
	$("#cpf").mask('999.999.999-99', {clearIfNotMatch: true});
	$("#rg").mask('99.999.999-9', {clearIfNotMatch: true});
	$("#data").mask('99/99/9999', {clearIfNotMatch: true});
	$("#tel").mask('(99) 9999-9999', {clearIfNotMatch: true});
	$("#cep").mask('99999-999', {clearIfNotMatch: true});
     
});
