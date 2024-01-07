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

function ajouterVille() {
    // Affichez une boîte de dialogue (pop-up) pour permettre à l'utilisateur d'ajouter sa ville
    var nouvelleVille = prompt("Veuillez entrer le nom de votre ville");

    // Vous pouvez traiter la nouvelle ville ici (par exemple, l'ajouter à une liste, enregistrer dans une base de données, etc.)
    if (nouvelleVille) {
        sendEmail(nouvelleVille); // Appeler la fonction sendEmail avec le paramètre nouvelleVille
    }
}

function sendEmail(nouvelleVille) {
    // Envoyez l'e-mail ici
    Email.send({
        SecureToken: "60815a7c-b89d-4300-9dfa-857850db0504",
        To: 'contact.papillonlut@gmail.com',
        From: 'contact.papillonlut@gmail.com',
        Subject: "[DiviControl] Nouvelle Ville",
        Body: "Un utilisateur suggère : " + nouvelleVille
    }).then(
        alert("Nouvelle ville suggérer : " + nouvelleVille)
    );
}

var annee = new Date().getFullYear();
var copy = document.getElementById("copy");
copy.textContent = `Copyright © 2023 - ${annee} NaviBus. All rights reserved.`;

document.addEventListener('DOMContentLoaded', function () {
    var boutonQuitter = document.getElementById('quitterSite');
  
    boutonQuitter.addEventListener('click', function () {
      var confirmation = window.confirm("Êtes-vous sûr de vouloir quitter le site ?");
      if (confirmation) {
        window.alert("Merci de votre visite !");
        window.location.href = "https://google.com";
      }
    });
  });
  