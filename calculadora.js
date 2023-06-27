function calcular() {
    var bodegones = parseInt(document.getElementById("bodegones").value);
    var edad = parseInt(document.getElementById("edad").value);
  
    var añosRestantes = 80 - edad - (2 * bodegones);
  
    var frases = [
      "ESTÁS AL HORRRRNO CON FRITAS HERMANO",
      "REZA MALENA, REZALE A EL GOLOOOSOOOO",
      "POR LO MENOS COMISTE RICO",
      "PEOR ES MORIR MAÑANA Y NO CONOCERNOS"
    ];
  
    var indiceAleatorio = Math.floor(Math.random() * frases.length);
    var fraseAleatoria = frases[indiceAleatorio];
  
    var resultado = "Años de vida restantes: " + añosRestantes + "<br>" + fraseAleatoria;
    document.getElementById("resultado").innerHTML = resultado;
  }
  