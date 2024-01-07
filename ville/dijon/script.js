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

// Initialisation de la carte
var maCarte = L.map('maCarte')

// Ajout d'une couche de tuiles (par exemple, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(maCarte);

// Données picto
var picto_divia = {
  "T1": "https://media.divia.fr/uploads/reseau/liaisons/picto_1.jpg",
  "T2": "https://media.divia.fr/uploads/reseau/liaisons/picto_2.jpg",
  "L3": "https://media.divia.fr/uploads/reseau/liaisons/picto_3.jpg",
  "L4": "https://media.divia.fr/uploads/reseau/liaisons/picto_4.jpg",
  "L5": "https://media.divia.fr/uploads/reseau/liaisons/picto_5.jpg",
  "L6": "https://media.divia.fr/uploads/reseau/liaisons/picto_6.jpg",
  "L7": "https://media.divia.fr/uploads/reseau/liaisons/picto_7.jpg",
  "Corol": "https://media.divia.fr/uploads/reseau/liaisons/picto_8.jpg",
  "B10": "https://media.divia.fr/uploads/reseau/liaisons/picto_9.jpg",
  "L8": "https://media.divia.fr/uploads/reseau/liaisons/picto_10.jpg",
  "B12": "https://media.divia.fr/uploads/reseau/liaisons/picto_11.jpg",
  "B13": "https://media.divia.fr/uploads/reseau/liaisons/picto_12.jpg",
  "B14": "https://media.divia.fr/uploads/reseau/liaisons/picto_13.jpg",
  "B15": "https://media.divia.fr/uploads/reseau/liaisons/picto_14.jpg",
  "B16": "https://media.divia.fr/uploads/reseau/liaisons/picto_15.jpg",
  "L9": "https://media.divia.fr/uploads/reseau/liaisons/picto_16.jpg",
  "B18": "https://media.divia.fr/uploads/reseau/liaisons/picto_17.jpg",
  "B19": "https://media.divia.fr/uploads/reseau/liaisons/picto_18.jpg"
};

// Données des arrêts organisées par ligne
var divia = {
    T1: [
      { coordonnees: [47.32332, 5.02841], nom: "Dijon Gare" },
      { coordonnees: [47.32349, 5.03008], nom: "Foch Gare" },
      { coordonnees: [47.32375, 5.03416], nom: "Darcy" },
      { coordonnees: [47.32532, 5.03896], nom: "Godrans Les Halles" },
      { coordonnees: [47.32648, 5.04578], nom: "République" },
      { coordonnees: [47.32859, 5.05212], nom: "Auditorium" },
      { coordonnees: [47.32886, 5.05874], nom: "Poincaré" },
      { coordonnees: [47.32887, 5.06434], nom: "Grésilles Trimolet" },
      { coordonnees: [47.32257, 5.06530], nom: "Parc des sports" },
      { coordonnees: [47.32013, 5.06756], nom: "CHU Hôpitaux" },
      { coordonnees: [47.31534, 5.06713], nom: "Erasme" },
      { coordonnees: [47.31162, 5.07304], nom: "Université" },
      { coordonnees: [47.31487, 5.07677], nom: "Mazen Sully" },
      { coordonnees: [47.31500, 5.08198], nom: "Piscine Olympique" },
      { coordonnees: [47.31359, 5.09454], nom: "Cap Vert" },
      { coordonnees: [47.31239, 5.10363], nom: "Grand Marché" },
      { coordonnees: [47.31387, 5.10999], nom: "Quetigny C. La Parenthèse" }
    ],
    T2: [
      { coordonnees: [47.29446, 5.00642], nom: "Chenôve Centre" },
      { coordonnees: [47.29970, 5.01041], nom: "Le Mail" },
      { coordonnees: [47.30186, 5.01509], nom: "Valendons" },
      { coordonnees: [47.30093, 5.02095], nom: "Carraz" },
      { coordonnees: [47.30534, 5.02344], nom: "Bourroches" },
      { coordonnees: [47.31058, 5.02640], nom: "Jaurès" },
      { coordonnees: [47.31461, 5.02868], nom: "1er Mai" },
      { coordonnees: [47.31738, 5.03136], nom: "Monge Cité de la Gastronomie" },
      { coordonnees: [47.32348, 5.03018], nom: "Foch Gare" },
      { coordonnees: [47.32372, 5.03403], nom: "Darcy" },
      { coordonnees: [47.32530, 5.03882], nom: "Godrans Les Halles" },
      { coordonnees: [47.32682, 5.04418], nom: "République" },
      { coordonnees: [47.33303, 5.04395], nom: "Drapeau" },
      { coordonnees: [47.33911, 5.04454], nom: "Junot" },
      { coordonnees: [47.34650, 5.04526], nom: "Nation" },
      { coordonnees: [47.35324, 5.04587], nom: "Europe Simone Veil" },
      { coordonnees: [47.35538, 5.05227], nom: "Toison D'Or" },
      { coordonnees: [47.35656, 5.05660], nom: "Zenith" },
      { coordonnees: [47.36130, 5.05102], nom: "Pôle Santé" },
      { coordonnees: [47.36532, 5.04944], nom: "Giroud" },
      { coordonnees: [47.36549, 5.04672], nom: "Dijon Valmy" }
    ],
    L3: [
      { coordonnees: [47.32294, 4.99801], nom: "Fontaine d'Ouche" },
      { coordonnees: [47.32259, 5.00116], nom: "Piscine" },
      { coordonnees: [47.32110, 4.99954], nom: "Belin" },
      { coordonnees: [47.31878, 5.00137], nom: "Bachelard" },
      { coordonnees: [47.31760, 5.00368], nom: "Chanoine Kir" },
      { coordonnees: [47.31856, 5.00548], nom: "Avenue du Lac" },
      { coordonnees: [47.32035, 5.00864], nom: "Gorgets" },
      { coordonnees: [47.32225, 5.01123], nom: "CHS la Chartreuse" },
      { coordonnees: [47.32243, 5.01944], nom: "Albert 1er" },
      { coordonnees: [47.32245, 5.02632], nom: "SNCF Vincenot" },
      { coordonnees: [47.32253, 5.03046], nom: "Gare SNCF" },
      { coordonnees: [47.32329, 5.03295], nom: "Darcy Sévigné" },
      { coordonnees: [47.32412, 5.03429], nom: "Darcy Devosge" },
      { coordonnees: [47.32624, 5.03815], nom: "Dupuis" },
      { coordonnees: [47.32649, 5.03869], nom: "Dupuis" },
      { coordonnees: [47.32628, 5.04520], nom: "République" },
      { coordonnees: [47.32359, 5.04956], nom: "Lycée Carnot" },
      { coordonnees: [47.32095, 5.05202], nom: "30 Octobre" },
      { coordonnees: [47.31908, 5.05163], nom: "Lycée H. Fontaine" },
      { coordonnees: [47.31860, 5.05500], nom: "Champmaillot" },
      { coordonnees: [47.31752, 5.05830], nom: "Creux d'Enfer" },
      { coordonnees: [47.31722, 5.06098], nom: "Défense" },
      { coordonnees: [47.31713, 5.06415], nom: "Boulanger" },
      { coordonnees: [47.31799, 5.06541], nom: "Jeanne d'Arc" },
      { coordonnees: [47.31911, 5.06527], nom: "CHU - Hôpitaux" },
      { coordonnees: [47.32257, 5.06511], nom: "Parc des Sports" },
      { coordonnees: [47.32508, 5.06507], nom: "Montmuzard" },
      { coordonnees: [47.32920, 5.06500], nom: "Grésilles Trimolet" },
      { coordonnees: [47.33125, 5.06545], nom: "Ste-Bernadette" },
      { coordonnees: [47.33130, 5.06753], nom: "Place des Savoirs" },
      { coordonnees: [47.33283, 5.06831], nom: "Seguin" },
      { coordonnees: [47.33439, 5.06651], nom: "Lycée Eiffel" },
      { coordonnees: [47.33590, 5.06228], nom: "Dallas CRI" },
      { coordonnees: [47.33899, 5.06409], nom: "Mayence" },
      { coordonnees: [47.33968, 5.06738], nom: "Epirey Capnord" }
    ],
    L4: [
      { coordonnees: [47.31673, 5.03068], nom: "Monge Cité de la gastronomie" },
      { coordonnees: [47.31608, 5.02668], nom: "Rolin" },
      { coordonnees: [47.31775, 5.02708], nom: "Faubourg Raines" },
      { coordonnees: [47.31519, 5.02364], nom: "Ste-Chantal" },
      { coordonnees: [47.31395, 5.01977], nom: "Diebolt" },
      { coordonnees: [47.31326, 5.01410], nom: "Bourroches Eiffel" },
      { coordonnees: [47.31156, 5.01477], nom: "Volnay" },
      { coordonnees: [47.30970, 5.01617], nom: "Fyot" },
      { coordonnees: [47.30626, 5.01563], nom: "Richet" },
      { coordonnees: [47.30482, 5.01267], nom: "Abbé Chanlon" },
      { coordonnees: [47.30250, 5.01024], nom: "L. de Vinci" },
      { coordonnees: [47.30139, 5.00834], nom: "Croix des Valendons" },
      { coordonnees: [47.29899, 5.00573], nom: "Renan" },
      { coordonnees: [47.29613, 5.00418], nom: "Collège Chapitre" },
      { coordonnees: [47.29422, 5.00582], nom: "Chenôve Centre" },
      { coordonnees: [47.29357, 5.00889], nom: "Thibaut" },
      { coordonnees: [47.29083, 5.00819], nom: "Rue de Longvic" },
      { coordonnees: [47.28856, 5.00602], nom: "Foussets" },
      { coordonnees: [47.28620, 5.00380], nom: "Curie" },
      { coordonnees: [47.28516, 5.00578], nom: "Bicentenaire" },
      { coordonnees: [47.28447, 5.00830], nom: "Grands Crus" },
      { coordonnees: [47.28342, 5.00963], nom: "Langevin" },
      { coordonnees: [47.27977, 5.00645], nom: "Marsannay" },
      { coordonnees: [47.27835, 5.00990], nom: "Dardelain" },
      { coordonnees: [47.27734, 5.01536], nom: "Pièce Léger" },
      { coordonnees: [47.27835, 5.01637], nom: "Herbiottes" },
      { coordonnees: [47.27885, 5.01922], nom: "Marsannay Portes du Sud" }
    ],
    L5: [
      { coordonnees: [47.34026, 4.99263], nom: "TALANT Dullin" },
      { coordonnees: [47.34039, 4.98932], nom: "Néruda" },
      { coordonnees: [47.33846, 4.99116], nom: "Rétisseys" },
      { coordonnees: [47.33713, 4.99389], nom: "Picasso" },
      { coordonnees: [47.33886, 4.99689], nom: "Jouvet" },
      { coordonnees: [47.34105, 4.99703], nom: "Nachey" },
      { coordonnees: [47.34266, 4.99930], nom: "Moulissards" },
      { coordonnees: [47.34267, 5.00062], nom: "Canzio" },
      { coordonnees: [47.34017, 5.00530], nom: "La Fillotte" },
      { coordonnees: [47.33768, 5.01054], nom: "Herriot" },
      { coordonnees: [47.33662, 5.01239], nom: "Chaumière" },
      { coordonnees: [47.33338, 5.01647], nom: "Clomiers" },
      { coordonnees: [47.33240, 5.01822], nom: "St-Mesmin" },
      { coordonnees: [47.33074, 5.02248], nom: "Ziem" },
      { coordonnees: [47.32921, 5.02504], nom: "Génois" },
      { coordonnees: [47.32604, 5.03025], nom: "Spuller" },
      { coordonnees: [47.32496, 5.03202], nom: "Dubois" },
      { coordonnees: [47.32390, 5.03286], nom: "Square Darcy" },
      { coordonnees: [47.32243, 5.03045], nom: "Gare SNCF" },
      { coordonnees: [47.31690, 5.03108], nom: "Monge Cité de la gastronomie" },
      { coordonnees: [47.31596, 5.03382], nom: "Suquet" },
      { coordonnees: [47.31525, 5.03852], nom: "Transvaal" },
      { coordonnees: [47.31555, 5.04075], nom: "Févret" },
      { coordonnees: [47.31523, 5.04203], nom: "Wilson Dumont" },
      { coordonnees: [47.31644, 5.04260], nom: "Wilson Sisley" },
      { coordonnees: [47.31634, 5.04413], nom: "Wilson Carnot" },
      { coordonnees: [47.31532, 5.04569], nom: "Baudin" },
      { coordonnees: [47.31416, 5.04821], nom: "De Musset" },
      { coordonnees: [47.31290, 5.05156], nom: "Prison" },
      { coordonnees: [47.31329, 5.05496], nom: "D'arbaumont" },
      { coordonnees: [47.31315, 5.05777], nom: "Petites Roches" },
      { coordonnees: [47.31251, 5.06230], nom: "Mansart" },
      { coordonnees: [47.31160, 5.06510], nom: "AgroSup" },
      { coordonnees: [47.30968, 5.06907], nom: "IUT" },
      { coordonnees: [47.30917, 5.07165], nom: "21e Siècle" },
      { coordonnees: [47.31094, 5.07328], nom: "Université" }
    ],
    L6: [
      { coordonnees: [47.28216, 5.05896], nom: "LONGVIC" },
      { coordonnees: [47.28396, 5.05678], nom: "Duhamel" },
      { coordonnees: [47.28409, 5.06099], nom: "Bief du Moulin" },
      { coordonnees: [47.28440, 5.06298], nom: "Longvic Mairie" },
      { coordonnees: [47.28703, 5.06290], nom: "Longvic Centre" },
      { coordonnees: [47.28831, 5.06036], nom: "Valentin" },
      { coordonnees: [47.29139, 5.05846], nom: "Bouhey" },
      { coordonnees: [47.29438, 5.05561], nom: "Pommerets" },
      { coordonnees: [47.29637, 5.05406], nom: "Tamaris" },
      { coordonnees: [47.29853, 5.05271], nom: "Bourillot" },
      { coordonnees: [47.30227, 5.04887], nom: "Parc" },
      { coordonnees: [47.30562, 5.04738], nom: "Chancenotte" },
      { coordonnees: [47.30748, 5.04657], nom: "Piscine Carrousel" },
      { coordonnees: [47.31006, 5.04548], nom: "Le Nôtre" },
      { coordonnees: [47.31313, 5.04422], nom: "Princes de Condé" },
      { coordonnees: [47.31633, 5.04413], nom: "Wilson Carnot" },
      { coordonnees: [47.31652, 5.04276], nom: "Wilson Sisley" },
      { coordonnees: [47.31911, 5.04334], nom: "Bibliothèque" },
      { coordonnees: [47.32102, 5.04356], nom: "Théâtre" },
      { coordonnees: [47.31923, 5.04661], nom: "Cité Dampierre" },
      { coordonnees: [47.31864, 5.05049], nom: "Lycée H. Fontaine" },
      { coordonnees: [47.31898, 5.05172], nom: "Lycée H. Fontaine" },
      { coordonnees: [47.32084, 5.05210], nom: "30 Octobre" },
      { coordonnees: [47.32350, 5.04961], nom: "Lycée Carnot" },
      { coordonnees: [47.32650, 5.04533], nom: "République" },
      { coordonnees: [47.32988, 5.04463], nom: "Vaillant" },
      { coordonnees: [47.33035, 5.04866], nom: "Marne" },
      { coordonnees: [47.33272, 5.05164], nom: "Reims" },
      { coordonnees: [47.33428, 5.05358], nom: "Alsace" },
      { coordonnees: [47.33598, 5.05170], nom: "Giraud" },
      { coordonnees: [47.33793, 5.05078], nom: "Theuriet" },
      { coordonnees: [47.34000, 5.05330], nom: "Joffre" },
      { coordonnees: [47.34075, 5.05722], nom: "Quantin" },
      { coordonnees: [47.34271, 5.05834], nom: "Via Romana" },
      { coordonnees: [47.34623, 5.05944], nom: "La Vapeur" },
      { coordonnees: [47.34820, 5.05757], nom: "Roosevelt" },
      { coordonnees: [47.35011, 5.05210], nom: "Granville" },
      { coordonnees: [47.35274, 5.05335], nom: "Churchill" },
      { coordonnees: [47.35435, 5.05241], nom: "Toison d'Or" }
    ],
    L7: [
      { coordonnees: [47.29735, 5.12566], nom: "CHEVIGNY" },
      { coordonnees: [47.29414, 5.12731], nom: "L'Ogive" },
      { coordonnees: [47.29288, 5.13010], nom: "Kennedy" },
      { coordonnees: [47.29510, 5.13342], nom: "Pasteur" },
      { coordonnees: [47.29954, 5.13498], nom: "Clématites" },
      { coordonnees: [47.30123, 5.13517], nom: "Chevigny Mairie" },
      { coordonnees: [47.30207, 5.13266], nom: "Molière" },
      { coordonnees: [47.30216, 5.12724], nom: "Lycée Boivin" },
      { coordonnees: [47.30318, 5.12276], nom: "Bois du Roy" },
      { coordonnees: [47.30428, 5.11981], nom: "Visitation" },
      { coordonnees: [47.30773, 5.11633], nom: "Lycée de Serres" },
      { coordonnees: [47.30825, 5.11018], nom: "Atria" },
      { coordonnees: [47.30961, 5.10777], nom: "Quetignerot" },
      { coordonnees: [47.31140, 5.10419], nom: "Quetigny C. Cial" },
      { coordonnees: [47.31223, 5.10329], nom: "Grand Marché" },
      { coordonnees: [47.31440, 5.10593], nom: "Château" },
      { coordonnees: [47.31674, 5.10747], nom: "Collège Rostand" },
      { coordonnees: [47.31897, 5.10976], nom: "Camus" },
      { coordonnees: [47.32047, 5.10920], nom: "Prévert" },
      { coordonnees: [47.32108, 5.10626], nom: "Allende" },
      { coordonnees: [47.31941, 5.10502], nom: "QUETIGNY Europe" }
    ],
    L8: [
      { coordonnees: [47.29941, 5.05705], nom: "Chicago" },
      { coordonnees: [47.30036, 5.06015], nom: "Guignard" },
      { coordonnees: [47.30137, 5.06384], nom: "Champeaux" },
      { coordonnees: [47.30202, 5.06678], nom: "Zipfel" },
      { coordonnees: [47.30358, 5.06390], nom: "Cimetière" },
      { coordonnees: [47.30489, 5.06168], nom: "Stade Poussots" },
      { coordonnees: [47.30620, 5.05942], nom: "Le Jolivet" },
      { coordonnees: [47.30831, 5.05625], nom: "Salengro" },
      { coordonnees: [47.31036, 5.05375], nom: "Guibaudet" },
      { coordonnees: [47.31218, 5.05151], nom: "Prison" },
      { coordonnees: [47.31414, 5.04829], nom: "De Musset" },
      { coordonnees: [47.31533, 5.04568], nom: "Baudin" },
      { coordonnees: [47.31634, 5.04422], nom: "Wilson Carnot" },
      { coordonnees: [47.31650, 5.04283], nom: "Wilson Sisley" },
      { coordonnees: [47.31911, 5.04334], nom: "Bibliothèque" },
      { coordonnees: [47.32102, 5.04356], nom: "Théâtre" },
      { coordonnees: [47.31923, 5.04661], nom: "Cité Dampierre" },
      { coordonnees: [47.31864, 5.05049], nom: "Lycée H. Fontaine" },
      { coordonnees: [47.31898, 5.05172], nom: "Lycée H. Fontaine" },
      { coordonnees: [47.32084, 5.05210], nom: "30 Octobre" },
      { coordonnees: [47.32145, 5.05471], nom: "SNCF Porte Neuve" },
      { coordonnees: [47.32138, 5.05811], nom: "Strasbourg" },
      { coordonnees: [47.32178, 5.06136], nom: "Doumer" },
      { coordonnees: [47.32217, 5.06613], nom: "Parc des Sports" },
      { coordonnees: [47.32221, 5.06962], nom: "Urgences CHU" },
      { coordonnees: [47.32635, 5.06890], nom: "Bouteiller" },
      { coordonnees: [47.32851, 5.06989], nom: "Billardon" },
      { coordonnees: [47.32952, 5.07370], nom: "Castelnau" },
      { coordonnees: [47.33014, 5.07722], nom: "Longènes" },
      { coordonnees: [47.33086, 5.08200], nom: "Gauthier" },
      { coordonnees: [47.33131, 5.08487], nom: "Jacquat" },
      { coordonnees: [47.33171, 5.08757], nom: "Paquier d'Aupré" },
      { coordonnees: [47.33296, 5.09061], nom: "Opaline" },
      { coordonnees: [47.33394, 5.08897], nom: "Marie de Bourgogne" },
      { coordonnees: [47.33650, 5.09166], nom: "SAINT-APOLLINAIRE Val Sully" }
    ],
    L9: [
      { coordonnees: [47.35462, 5.05179], nom: "Toison d'Or" },
      { coordonnees: [47.35499, 5.04485], nom: "Europe Découverte" },
      { coordonnees: [47.35469, 5.04098], nom: "Jean Bertin" },
      { coordonnees: [47.35264, 5.03782], nom: "Touzet du Vigier" },
      { coordonnees: [47.35513, 5.03500], nom: "Presles" },
      { coordonnees: [47.35564, 5.03029], nom: "Fontaine C. Cial" },
      { coordonnees: [47.35578, 5.02685], nom: "Prés Potets" },
      { coordonnees: [47.35379, 5.02633], nom: "Cortots" },
      { coordonnees: [47.35214, 5.03031], nom: "Belfontaine" },
      { coordonnees: [47.34968, 5.02839], nom: "Ratel" },
      { coordonnees: [47.34687, 5.02641], nom: "Monnet" },
      { coordonnees: [47.34558, 5.02457], nom: "Les Charmes" },
      { coordonnees: [47.34297, 5.02314], nom: "Félizots" },
      { coordonnees: [47.34200, 5.02710], nom: "Jura" },
      { coordonnees: [47.34172, 5.02927], nom: "Ranelagh" },
      { coordonnees: [47.33675, 5.03287], nom: "Terrillon" },
      { coordonnees: [47.33360, 5.03408], nom: "Hoin" },
      { coordonnees: [47.33085, 5.03300], nom: "Rouen" },
      { coordonnees: [47.32762, 5.03333], nom: "Cellerier" },
      { coordonnees: [47.32511, 5.03237], nom: "Dubois" },
      { coordonnees: [47.32412, 5.03358], nom: "Square Darcy" },
      { coordonnees: [47.32413, 5.03432], nom: "Darcy Devosge" },
      { coordonnees: [47.32407, 5.03694], nom: "De Brosses" },
      { coordonnees: [47.32273, 5.03832], nom: "Grangier" },
      { coordonnees: [47.32266, 5.03696], nom: "Grangier" },
      { coordonnees: [47.32141, 5.03665], nom: "Bossuet" },
      { coordonnees: [47.32073, 5.03700], nom: "Bossuet" },
      { coordonnees: [47.31924, 5.03502], nom: "Zola" },
      { coordonnees: [47.31937, 5.03319], nom: "Zola" },
      { coordonnees: [47.31786, 5.03166], nom: "Monge Cité de la gastronomie" },
      { coordonnees: [47.31787, 5.02708], nom: "Faubourg Raines" }
    ],
    Corol: [
      { coordonnees: [47.32295, 4.99795], nom: "Fontaine d’Ouche" },
      { coordonnees: [47.32258, 5.00116], nom: "Piscine" },
      { coordonnees: [47.32018, 5.00413], nom: "Champs Perdrix" },
      { coordonnees: [47.31857, 5.00549], nom: "Avenue du Lac" },
      { coordonnees: [47.31740, 5.00366], nom: "Chanoine Kir" },
      { coordonnees: [47.31584, 5.00561], nom: "Tire Pesseau" },
      { coordonnees: [47.31277, 5.01034], nom: "Rossignol Eiffel" },
      { coordonnees: [47.31328, 5.01297], nom: "Bourroches Eiffel" },
      { coordonnees: [47.31406, 5.01981], nom: "Diebolt" },
      { coordonnees: [47.31527, 5.02368], nom: "St-Chantal" },
      { coordonnees: [47.31603, 5.02692], nom: "Rolin" },
      { coordonnees: [47.31495, 5.03058], nom: "1er Mai Foyer" },
      { coordonnees: [47.31300, 5.03654], nom: "Lycée le Castel" },
      { coordonnees: [47.31012, 5.03840], nom: "INSPE" },
      { coordonnees: [47.30848, 5.03946], nom: "Milsand" },
      { coordonnees: [47.30711, 5.04371], nom: "Chevreul Piscine" },
      { coordonnees: [47.30579, 5.04763], nom: "Chancenotte" },
      { coordonnees: [47.30517, 5.05225], nom: "Collège Lentillères" },
      { coordonnees: [47.30633, 5.05497], nom: "Piot" },
      { coordonnees: [47.30837, 5.05750], nom: "Salengro" },
      { coordonnees: [47.31024, 5.05964], nom: "Péjoces" },
      { coordonnees: [47.31291, 5.06270], nom: "Mansart" },
      { coordonnees: [47.31556, 5.06447], nom: "Fac. des Sciences" },
      { coordonnees: [47.31798, 5.06541], nom: "Jeanne d'Arc" },
      { coordonnees: [47.31960, 5.06536], nom: "CHU - Hôpitaux" },
      { coordonnees: [47.32228, 5.06603], nom: "Parc des Sports" },
      { coordonnees: [47.32231, 5.06954], nom: "Urgences CHU" },
      { coordonnees: [47.32415, 5.07370], nom: "Docteur Schmitt" },
      { coordonnees: [47.32618, 5.07341], nom: "Hyacinthe Vincent" },
      { coordonnees: [47.32995, 5.07058], nom: "Billardon" },
      { coordonnees: [47.33133, 5.06751], nom: "Place des Savoirs" },
      { coordonnees: [47.33127, 5.06547], nom: "St-Bernadette" },
      { coordonnees: [47.33116, 5.06393], nom: "D'Alembert" },
      { coordonnees: [47.33259, 5.06308], nom: "Laplace" },
      { coordonnees: [47.33485, 5.06132], nom: "Boutaric" },
      { coordonnees: [47.33689, 5.05519], nom: "St-Exupéry" },
      { coordonnees: [47.33828, 5.05080], nom: "Theuriet" },
      { coordonnees: [47.33951, 5.04599], nom: "Junot" },
      { coordonnees: [47.33928, 5.03865], nom: "Allobroges" },
      { coordonnees: [47.33792, 5.03564], nom: "St-Martin" },
      { coordonnees: [47.33625, 5.03211], nom: "Terrillon" },
      { coordonnees: [47.33481, 5.02420], nom: "Suisse" },
      { coordonnees: [47.33406, 5.01626], nom: "Clomiers" },
      { coordonnees: [47.33122, 5.01414], nom: "Chèvre Morte" },
      { coordonnees: [47.32805, 5.01298], nom: "Marmuzots" },
      { coordonnees: [47.32948, 5.01069], nom: "Fontaine aux Fées" },
      { coordonnees: [47.33158, 5.01224], nom: "Leclerc" }
    ],
    B10: [
      { coordonnees: [47.34346, 4.99313], nom: "TALANT Citadelle" },
      { coordonnees: [47.34206, 4.99088], nom: "Brossolette" },
      { coordonnees: [47.34046, 4.98934], nom: "Néruda" },
      { coordonnees: [47.33857, 4.99112], nom: "Rétisseys" },
      { coordonnees: [47.33726, 4.99392], nom: "Picasso" },
      { coordonnees: [47.33898, 4.99691], nom: "Jouvet" },
      { coordonnees: [47.33886, 4.99842], nom: "Logis de Bourgogne" },
      { coordonnees: [47.33811, 5.00362], nom: "Arbalétriers" },
      { coordonnees: [47.33773, 5.00922], nom: "Côte aux Moines" },
      { coordonnees: [47.33479, 5.00931], nom: "Fassoles" },
      { coordonnees: [47.33316, 5.00887], nom: "Cottages" },
      { coordonnees: [47.33247, 5.01089], nom: "Libération" },
      { coordonnees: [47.33127, 5.01202], nom: "Leclerc" },
      { coordonnees: [47.32948, 5.01064], nom: "Fontaine aux Fées" },
      { coordonnees: [47.32816, 5.01258], nom: "Marmuzots" },
      { coordonnees: [47.32529, 5.01480], nom: "St-François" },
      { coordonnees: [47.32297, 5.01922], nom: "Perrières" },
      { coordonnees: [47.32343, 5.02251], nom: "Bagatelle" },
      { coordonnees: [47.32438, 5.02799], nom: "SNCF Brifaut" },
      { coordonnees: [47.32503, 5.03203], nom: "Dubois" },
      { coordonnees: [47.32406, 5.03279], nom: "Square Darcy" },
      { coordonnees: [47.32412, 5.03431], nom: "Darcy Devosge" },
      { coordonnees: [47.32638, 5.03842], nom: "Dupuis" },
      { coordonnees: [47.32787, 5.04201], nom: "Cours Fleury" },
      { coordonnees: [47.32898, 5.03982], nom: "Barbe" },
      { coordonnees: [47.33131, 5.03843], nom: "Beaune" },
      { coordonnees: [47.33302, 5.03896], nom: "Houblonnière" },
      { coordonnees: [47.33596, 5.03969], nom: "Mazières" },
      { coordonnees: [47.33864, 5.03944], nom: "Fauconnet" },
      { coordonnees: [47.34225, 5.03797], nom: "Morvan" },
      { coordonnees: [47.34690, 5.03512], nom: "Le Suzon" },
      { coordonnees: [47.34711, 5.04168], nom: "Lycée de Gaulle" },
      { coordonnees: [47.34718, 5.04387], nom: "Nation" },
      { coordonnees: [47.35081, 5.03987], nom: "Coteaux du Suzon" },
      { coordonnees: [47.35267, 5.03780], nom: "Touzet du Vigier" },
      { coordonnees: [47.35568, 5.03465], nom: "Presles" },
      { coordonnees: [47.36444, 5.02829], nom: "Les Plantes" },
      { coordonnees: [47.36760, 5.02433], nom: "AHUY" },
      { coordonnees: [47.36772, 5.02027], nom: "Grands Clos" }
    ],
    B12: [
      { coordonnees: [47.34666, 4.96500], nom: "Plombières" },
      { coordonnees: [47.34566, 4.96451], nom: "La Flamme" },
      { coordonnees: [47.34401, 4.96529], nom: "Courtois" },
      { coordonnees: [47.34148, 4.96699], nom: "Lycée Kir" },
      { coordonnees: [47.34074, 4.97008], nom: "Victor Hugo" },
      { coordonnees: [47.33982, 4.97307], nom: "Plombières Mairie" },
      { coordonnees: [47.33887, 4.97577], nom: "Vallon" },
      { coordonnees: [47.33743, 4.97946], nom: "Combe aux Fées" },
      { coordonnees: [47.33603, 4.98302], nom: "Vaux Bruns" },
      { coordonnees: [47.33429, 4.98737], nom: "Cherains" },
      { coordonnees: [47.33206, 4.99027], nom: "Seize Vannes" },
      { coordonnees: [47.32981, 4.99862], nom: "Parc à Bateaux" },
      { coordonnees: [47.32547, 5.00767], nom: "Le Lac" },
      { coordonnees: [47.32260, 5.01086], nom: "CHS La Chartreuse" },
      { coordonnees: [47.32295, 5.01923], nom: "Perrières" },
      { coordonnees: [47.32343, 5.02249], nom: "Bagatelle" },
      { coordonnees: [47.32438, 5.02792], nom: "SNCF Brifaut" },
      { coordonnees: [47.32502, 5.03207], nom: "Dubois" },
      { coordonnees: [47.32398, 5.03302], nom: "Square Darcy" },
      { coordonnees: [47.32252, 5.03043], nom: "Gare SNCF" },
      { coordonnees: [47.31709, 5.03115], nom: "Monge Cité de la gastronomie" },
      { coordonnees: [47.31605, 5.03388], nom: "Suquet" },
      { coordonnees: [47.31536, 5.03847], nom: "Transvaal" },
      { coordonnees: [47.31563, 5.04079], nom: "Févret" },
      { coordonnees: [47.31657, 5.04266], nom: "Wilson Sisley" },
      { coordonnees: [47.31644, 5.04415], nom: "Wilson Carnot" },
      { coordonnees: [47.31534, 5.04204], nom: "Wilson Dumont" },
      { coordonnees: [47.31429, 5.04145], nom: "Dumont" },
      { coordonnees: [47.31259, 5.03997], nom: "Bordot" },
      { coordonnees: [47.31011, 5.03841], nom: "INSPE" },
      { coordonnees: [47.30752, 5.03745], nom: "Blanchisseries" },
      { coordonnees: [47.30532, 5.03984], nom: "Morel Retz" },
      { coordonnees: [47.30392, 5.04091], nom: "Attiret" },
      { coordonnees: [47.30150, 5.03995], nom: "Ravel" },
      { coordonnees: [47.29919, 5.04027], nom: "Parc de la Colombière" }
    ],
    B13: [
      { coordonnees: [47.31547, 4.98728], nom: "Motte Giron" },
      { coordonnees: [47.31685, 4.98925], nom: "Saulx Tavannes" },
      { coordonnees: [47.31685, 4.99148], nom: "CFA-BTP" },
      { coordonnees: [47.31622, 4.99563], nom: "Paupion" },
      { coordonnees: [47.31542, 4.99777], nom: "Lycée Marcs d'Or" },
      { coordonnees: [47.31444, 5.00110], nom: "Clos Chauveau" },
      { coordonnees: [47.31293, 5.00373], nom: "Bel Air" },
      { coordonnees: [47.31217, 5.00696], nom: "Roussottes" },
      { coordonnees: [47.31265, 5.01040], nom: "Rossignol Eiffel" },
      { coordonnees: [47.31317, 5.01301], nom: "Bourroches Eiffel" },
      { coordonnees: [47.32005, 5.00974], nom: "Gorgets" },
      { coordonnees: [47.32206, 5.01122], nom: "CHS La Chartreuse" },
      { coordonnees: [47.32232, 5.01952], nom: "Albert 1er" },
      { coordonnees: [47.32235, 5.02638], nom: "SNCF Vincenot" },
      { coordonnees: [47.32227, 5.03053], nom: "Gare SNCF" },
      { coordonnees: [47.32387, 5.03314], nom: "Square Darcy" },
      { coordonnees: [47.32509, 5.03168], nom: "Dubois" },
      { coordonnees: [47.32602, 5.03034], nom: "Spuller" },
      { coordonnees: [47.32919, 5.02510], nom: "Génois" },
      { coordonnees: [47.33071, 5.02254], nom: "Ziem" },
      { coordonnees: [47.33225, 5.01857], nom: "St-Mesmin" },
      { coordonnees: [47.33373, 5.01613], nom: "Clomiers" },
      { coordonnees: [47.33469, 5.02424], nom: "Suisse" },
      { coordonnees: [47.33599, 5.02510], nom: "Houdart" },
      { coordonnees: [47.33748, 5.02323], nom: "Amandiers" },
      { coordonnees: [47.33900, 5.02110], nom: "Glycines" },
      { coordonnees: [47.33965, 5.01727], nom: "Combottes" },
      { coordonnees: [47.34093, 5.01818], nom: "St-Luc" },
      { coordonnees: [47.34275, 5.01901], nom: "Confrérie" },
      { coordonnees: [47.34153, 5.01499], nom: "Les Créots" },
      { coordonnees: [47.34378, 5.01671], nom: "Mare" },
      { coordonnees: [47.34635, 5.01373], nom: "Cottin" },
      { coordonnees: [47.34802, 5.01085], nom: "Fontaine Village" }
    ],
    B14: [
      { coordonnees: [47.26737, 4.98979], nom: "MARSANNAY Charon"},
      { coordonnees: [47.26973, 4.99084], nom: "Colombier"},
      { coordonnees: [47.27188, 4.99137], nom: "Méchalot"},
      { coordonnees: [47.27447, 4.99394], nom: "St-Vincent"},
      { coordonnees: [47.27776, 4.99792], nom: "Champforey"},
      { coordonnees: [47.27842, 5.00012], nom: "Rameau"},
      { coordonnees: [47.28037, 5.00318], nom: "Collège Aymé"},
      { coordonnees: [47.28005, 5.00654], nom: "MARSANNAY"},
      { coordonnees: [47.28408, 5.01015], nom: "Langevin"},
      { coordonnees: [47.28777, 5.01262], nom: "Route de Beaune"},
      { coordonnees: [47.29190, 5.01536], nom: "Limburgerhof"},
      { coordonnees: [47.29518, 5.01756], nom: "Ferry"},
      { coordonnees: [47.30035, 5.02107], nom: "Carraz"}
    ],
    B15: [
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" }
    ],
    B16: [
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" }
    ],
    B17: [
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" }
    ],
    B18: [
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" }
    ],
    B19: [
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" },
      { coordonnees: [], nom: "" }
    ]
};

// Créer une couche de groupe pour chaque ligne
var couchesParLigne = {};

for (var ligne in divia) {
  var arrets = divia[ligne];
  var marqueurs = L.layerGroup();

  arrets.forEach(arret => {
    var message = (arret.nom.includes(arret.nom)) ? "Activité: Indéfini" : "";

    var marqueur = L.marker(arret.coordonnees);
    marqueur.bindPopup(`
      <div style="border: none; background: none; cursor: pointer;">
        <img height="30px" src="${picto_divia[ligne]}" alt="${ligne}" style="border-radius: 8px;">
        </br>
        <b>${arret.nom}</b>
        <br/>
        <a style="color: black;" id="activity">${message}</a>
      </div>
    `).openPopup();

    marqueurs.addLayer(marqueur);
  });

  // Stocker la couche dans l'objet couchesParLigne
  couchesParLigne[ligne] = marqueurs;
}

// Ajouter un contrôle de couches pour activer/désactiver les lignes
L.control.layers(null, couchesParLigne, { collapsed: true }).addTo(maCarte);

function initMapWithUserLocation() {
  if ('geolocation' in navigator) {
    // Options pour la géolocalisation
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,  // Temps d'attente maximal pour obtenir la position (en millisecondes)
      maximumAge: 0   // Désactive la mise en cache de la position
    };

    navigator.geolocation.getCurrentPosition(
      function(position) {
        var userLatitude = position.coords.latitude;
        var userLongitude = position.coords.longitude;

        // Initialisation de la carte à la position de l'utilisateur
        maCarte.setView([userLatitude, userLongitude], 13);

        var customIcon = L.icon({
          iconUrl: 'here_icon.png',
          iconSize: [50, 50],
          iconAnchor: [30, 30],
          popupAnchor: [0, -25]
        });

        // Ajouter un marqueur à la position de l'utilisateur
        var emplacement = L.marker([userLatitude, userLongitude], { icon: customIcon }).addTo(maCarte);
        emplacement.bindPopup("<b>Vous êtes ici</b>");
      },
      function(error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error('L\'utilisateur a refusé la demande de géolocalisation.');
            break;
          case error.POSITION_UNAVAILABLE:
            console.error('Les informations de localisation ne sont pas disponibles.');
            break;
          case error.TIMEOUT:
            console.error('La demande de géolocalisation a expiré.');
            break;
          default:
            console.error('Erreur de géolocalisation inconnue : ', error);
        }

        // En cas d'erreur, initialisez la carte avec une position par défaut
        maCarte.setView([47.33088, 5.04504], 13);
      },
      // Utiliser les options définies précédemment
      options
    );
  } else {
    console.error('La géolocalisation n\'est pas prise en charge par votre navigateur.');
    maCarte.setView([47.33088, 5.04504], 13);
  }
}

// Appeler la fonction d'initialisation lorsque la fenêtre est chargée
window.onload = function() {
  initMapWithUserLocation();
};

// Bubble
var bubbleButton = document.getElementById("myBubble");
var helping = document.getElementById("helping");

bubbleButton.addEventListener("click", () => {
    helping.style.display = "block";
});

// Close
const helping2 = document.querySelector('.helping');
const closing2 = document.querySelector('.closing');

closing2.addEventListener('click', () => {
    helping2.style.display = "none";
});

// Envoie les E-Mail
function supportSend() {
  event.preventDefault();

  var email = document.getElementById("mail").value;
  var choix = document.getElementById("choix").value;
  var description = document.getElementById("description").value;

  Email.send({
    SecureToken: "60815a7c-b89d-4300-9dfa-857850db0504",
    To: 'contact.papillonlut@gmail.com',
    From: 'contact.papillonlut@gmail.com',
    Subject: "[DiviControl] " + choix,
    Body: "De: " + email + "<br>Description: " + description
  }).then(
      message => alert("Mail envoyé avec succès")
  ).catch(
      error => console.error("Erreur lors de l'envoi du mail:", error)
  );
}