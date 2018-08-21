$(document).ready( function(){
	
	let numeroRespuestasPositivas = 0;
	let numeroRespuestasNegativas = 0;
	
	function terminar(){
		if( numeroRespuestasPositivas <= 3 ) {
			
			$("#botonFinalizar").hide('slow');	
			$( '#formulario' ).hide('slow');
			$( '#resultados' ).show('slow'); 
			$( '#rojo' ).hide(); 
			$( '#verde' ).show('slow');
			$( '#amarillo' ).hide();
			
		} else if ( numeroRespuestasPositivas > 3 || numeroRespuestasPositivas <= 5 ) {
			$("#botonFinalizar").hide('slow');	
			$( '#formulario' ).hide('slow');
			$( '#resultados' ).show('slow'); 
			$( '#rojo' ).hide(); 
			$( '#verde' ).hide();
			$( '#amarillo' ).show('slow');
		} else if ( numeroRespuestasPositivas > 6 ) {
			$("#botonFinalizar").hide('slow');	
			$( '#formulario' ).hide('slow');
			$( '#resultados' ).show('slow'); 
			$( '#rojo' ).hide(); 
			$( '#verde' ).show('slow');
			$( '#amarillo' ).hide();
		}
	}
	
	function validar(){
		if( (numeroRespuestasNegativas + numeroRespuestasPositivas ) >= 10 ){
			$("#botonFinalizar").show('slow');	
		} else {
			$("#botonFinalizar").hide('slow');	
		}
	}
	
	function respuestaPostiva(){
		
		if( (numeroRespuestasNegativas + numeroRespuestasPositivas ) >= 10 ) {
			numeroRespuestasNegativas--;
		}
		
		numeroRespuestasPositivas++;
		validar();
		console.log(  "preguntas positivas: " + numeroRespuestasPositivas );
		console.log( "preguntas negativas: "+ numeroRespuestasNegativas);
		

	}
	
	function respuestaNegativa(){
		
		if( (numeroRespuestasNegativas + numeroRespuestasPositivas ) >= 10 ) {
			numeroRespuestasPositivas--;
		}
		
		numeroRespuestasNegativas++;
		
		validar();
		console.log(  "preguntas positivas: " + numeroRespuestasPositivas );
		console.log( "preguntas negativas: "+ numeroRespuestasNegativas);
		
		
	}
	
	$( '#formulario' ).hide();
	$( '#resultados' ).hide(); 
	$( '#rojo' ).hide(); 
	$( '#verde' ).hide();
	$( '#amarillo' ).hide();
	$( '#rojo' ).hide(); 
	$('#botonFinalizar').hide();
	
	$( "#botonIniciar" ).click(function() {
		$("#botonIniciar").hide("slow");
		$("#formulario").show("slow");
//		$("#botonFinalizar").show('slow');
	});

	$("#inlineRadio1Pregunta1").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta1").click(respuestaNegativa); 
	$("#inlineRadio1Pregunta2").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta2").click(respuestaNegativa); 
	$("#inlineRadio1Pregunta3").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta3").click(respuestaNegativa);
	$("#inlineRadio1Pregunta4").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta4").click(respuestaNegativa);
	$("#inlineRadio1Pregunta5").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta5").click(respuestaNegativa);
	$("#inlineRadio1Pregunta6").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta6").click(respuestaNegativa);
	$("#inlineRadio1Pregunta7").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta7").click(respuestaNegativa);
	$("#inlineRadio1Pregunta8").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta8").click(respuestaNegativa);
	$("#inlineRadio1Pregunta9").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta9").click(respuestaNegativa);
	$("#inlineRadio1Pregunta10").click(respuestaPostiva); 
	$("#inlineRadio2Pregunta10").click(respuestaNegativa);
	$("#botonFinalizar").click(terminar);
});