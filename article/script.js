function rediriger() {
    // Obtenez la valeur sélectionnée dans le menu déroulant
    var selectedOption = document.getElementById("menuDeroulant").value;

    // Redirigez vers la page sélectionnée ou appelez ajouterVille
    if (selectedOption === "ajouterville") {
        ajouterVille();
    } else if (selectedOption) {
        window.location.href = selectedOption;
    }
}

var annee = new Date().getFullYear();
var copy = document.getElementById("copy");
copy.textContent = `Copyright © 2023 - ${annee} NaviBus. All rights reserved.`;