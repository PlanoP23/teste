var texto = document.querySelector(".texto")
var mensagem = document.querySelector(".mensagem");

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"



function botaocriptografar (){
	const textoCriptografar = criptogragar(texto.value);
	mensagem.value = textoCriptografar;
	texto.value = "";
}


function criptogragar(stringCriptografada){
	var letra = ["e","i","a","o","u"];
	var letraCriptografada = ["enter","imes","ai","ober","ufat"];
	stringCriptografada = stringCriptografada.toLowerCase();
	
	for( i=0; i < letra.length; i++){
		if(stringCriptografada.includes(letra [i])){
			stringCriptografada = stringCriptografada.replaceAll(letra[i],letraCriptografada [i]);
		}
	}
	return stringCriptografada;
}

function botaodescriptografar (){
	const textoDescriptografar = descriptogragar(texto.value);
	mensagem.value = textoDescriptografar;
	texto.value = "";
}

function descriptogragar(stringDescriptografada){
	var letra = ["e","i","a","o","u"];
	var letraCriptografada = ["enter","imes","ai","ober","ufat"];
	stringDescriptografada = stringDescriptografada.toLowerCase();
	
	for( i=0; i < letraCriptografada.length; i++){
		if(stringDescriptografada.includes(letra [i])){
			stringDescriptografada = stringDescriptografada.replaceAll(letraCriptografada[i],letra [i]);
		}
	}
	return stringDescriptografada;
}


function copiarTexto(){
	navigator.clipboard.writeText(document.querySelector(".mensagem").value);
	mensagem.value = "";
	alert("Texto copiado para a área de transferência!");
}
	
