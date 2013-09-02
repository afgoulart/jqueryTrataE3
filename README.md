jqueryTrataE3
=============

Um plugin para tratamento de Endereços Eletronicos Escondidos.

## Requesitos Minimos ##

```
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="jquery.trataE3.js"></script>
```

Para executar o script faça:

```
$('.elemento').trataE3({
	link: true,
	arroba: '*',
	ponto: ':'
});
```

E o email que estava assim:

```
login*dominio:com:br
```

Fica:

```
login@dominio.com.br
```

## Options ##
<table>
<tr>
<th>Opção</th>
<th>Tipo</th>
<th>Descrição</th>
</tr>
<tr>
<td>Link</td>
<td>Boolean</td>
<td>Defaul ( TRUE ); Se True cria uma tag a com href 'mailto:', se False escreve somente o texto.</td>
</tr>
<tr>
<td>Arroba</td>
<td>String or (CHAR)</td>
<td>Default ( * ); String ou caracter usado para substituir o '@'.</td>
</tr>
<tr>
<td>Ponto</td>
<td>String or (CHAR)</td>
<td>Default ( : ); String ou caracter usado para substituir o '.' (ponto) .</td>
</tr>
</table>
