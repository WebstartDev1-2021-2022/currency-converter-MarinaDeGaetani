// Toujours récupérer au debut du script les elements Html nécéssaires dans les constantes
const inputFrom = document.querySelector("#from");
const inputTo = document.querySelector("#to");
const switchButton = document.querySelector(".switch");
const selectFromCurrencies = document.querySelector("#from-currencies");
const selectToCurrencies = document.querySelector("#to-currencies");
const submitInput = document.querySelector('[type="submit"]');
const from = document.querySelector("form");

const switchCurrencies = (event) => {
  event.preventDefault();
  // Inverser les monnaies from et to
  console.log("le bouton switch a été cliqué");
};

const submitForm = async (event) => {
  // Empecher la page de se recharger après la soumission du formulaire
  event.preventDefault();
  // Récupérer la valeur tapée dans le champ from
  const fromValue = inputFrom.value;
  //Récupérer la valeur du select from
  const currencyFrom = selectFromCurrencies.value;
  //Récupérer la valeur du select to
  const currencyTo = selectToCurrencies.value;

  // Vérifier que from & to ne sont pas egaux
  if (currencyFrom === currencyTo) {
    alert("Vous avez mit les mêmes monnaies !");
    return;
  }
  // Afficher une alerte si le champs from est vide
  if (!fromValue) {
    alert("Vous n'avez pas entré de valeur!");
    return;
  }

  console.log("fromValue", fromValue);
  // Lancer la requête à l'API en lui fournissant la valeur tapée dans from
  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${fromValue}&from=${currencyFrom}&to=${currencyTo}`
    );
    const json = await response.json();

    console.log("réponse complète :", json);

    // differentes maniere d'affichage
    //console.log("date :", json.date);
    //console.log("date :", json["date"]);

    console.log("résultat :", json.rates[currencyTo]);

    // TODO : traitée la réponse de l'API en remplissant le champ to
  } catch (error) {
    console.error("Erreur dans la requête:", error);
    alert("Oups ! Une erreur est arrivée, veuillez ré-essayer ultérieurement.");
  }
  console.log("le formulaire à été validé");
};
switchButton.addEventListener("click", switchCurrencies);
from.addEventListener("submit", submitForm);

// AJAX = Asynchronously Javascript And XML
