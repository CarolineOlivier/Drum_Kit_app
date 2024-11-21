//Le fichier hello_controller.js est un contrôleur Stimulus.
// Si tu souhaites utiliser Stimulus.js pour rendre certaines parties de l'application interactives, 
//ce fichier doit rester dans le dossier app/javascript/controllers.
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
