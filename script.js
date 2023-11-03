function mostrarValorSeguro() {
    let valorSeguro = document.getElementById("tipoSeguro").value;
   
    if (valorSeguro == "Basico") {
      document.getElementById("valorSeguro").innerHTML = "$500";
    } else if (valorSeguro == "Intermedio") {
      document.getElementById("valorSeguro").innerHTML = "$1000";
    } else if (valorSeguro == "Premium") {
      document.getElementById("valorSeguro").innerHTML = "$1500";
    }
  }