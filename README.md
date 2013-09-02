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
