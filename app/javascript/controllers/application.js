//Ce dossier est principalement destiné aux contrôleurs Stimulus.js. 
//Ce sont des modules JavaScript conçus pour rendre les pages interactives.

import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
