/*
	jQuery TrataE3 Plugin

	Autor: André Filipe Goulart
	Data: 09/04/2013
	Version: 1.0

	Plugin para tratamento de Endereços Eletrônicos Escondidos

	$('.elemento').trataE3();

*/

$.fn.trataE3 = function(opt){
	var defaults = {
		link: true,
		arroba: '*',
		ponto: ':'
	};
	
	var settings = $.extend({}, defaults, opt);

	return this.each(function(){
		var $this = $(this);

		// Recebe os valores do configurações do "DATA"
		var link = $this.data('tratae3-link') || settings.link;
		var arroba = $this.data('tratae3-arroba') || settings.arroba;
		var ponto = $this.data('tratae3-ponto') || settings.ponto;
 		
		// Armazena o conteudo inicial
		var valConteudo = $this.html();
		
		// Executa o "REPLACE" para substituir os elementos do passado
		var email = valConteudo.replace(new RegExp('\\'+arroba,'gi'), '@').replace(new RegExp('\\'+ponto,'gi'), '.');
		
		// Monta o novo conteudo
		var $tagA = (link) ? $('<a href="mailto:' + email + '">' + email + '</a>') : email;
		
		// Limpa o conteudo e inclui o novo "UM LINK" ou "UM TEXTO"
		$this.html('').append($tagA);
	});
};
