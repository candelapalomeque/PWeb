function calcular() {
    var bodegones = parseInt(document.getElementById('bodegones').value);
    var edad = parseInt(document.getElementById('edad').value);
    var fanatico = parseInt(document.getElementById('fanatico').value);
  
    var frases = [
      "ESTÁS AL HORRRRNO CON FRITAS HERMANO",
      "REZA MALENA, REZALE A EL GOLOOOSOOOO",
      "POR LO MENOS COMISTE RICO",
      "PEOR ES MORIR MAÑANA Y NO CONOCERNOS"
    ];
  
    var randomIndex = Math.floor(Math.random() * frases.length);
    var fraseAleatoria = frases[randomIndex];
  
    var resultado = `${fraseAleatoria}`;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  