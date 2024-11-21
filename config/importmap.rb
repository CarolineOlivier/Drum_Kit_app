#Importmap.rb est un fichier de configuration Ruby qui permet de "mapper" les chemins des fichiers JavaScript 
#à importer dans l'application Rails.

# Pin npm packages by running ./bin/importmap
pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

# Pin additional JavaScript files
pin "hello", to: "hello.js"   # Corrige hello.js
pin "drum", to: "drum.js"     # Corrige drum.js
