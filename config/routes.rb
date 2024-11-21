  Rails.application.routes.draw do
    # Définir la route racine (page d'accueil)
    #La page d'accueil est accessible via la racine (/) et est gérée par l'action home du PagesController.
    root 'pages#home'
  
    # Routes spécifiques pour les pages statiques
    #Les URLs pour les pages about et contact seront directement accessibles via /about et /contact
    get 'about', to: 'pages#about'    # Page À propos
    get 'contact', to: 'pages#contact' # Page Contact
  
  # Route pour la boîte à musique (DrumsController)
  #ci, nous définissons une ressource RESTful pour drums avec seulement l'action index.
  #Cela signifie que nous aurons une route pour /drums pointant vers drums#index, 
  #ce qui est plus propre que get "drums/index".
  resources :drums, only: [:index]

#Routes Spécifiques (up, service-worker, manifest) :
# Ces routes restent telles quelles car elles ont une nature particulière 
# et n'ont pas besoin d'être refactorisées avec resources.

  # Configuration des routes pour vérifier la santé de l'application
  # Révèle l'état de santé de l'application sur /up qui renvoie 200 si l'application démarre sans exceptions, sinon 500.
  # Peut être utilisé par les équilibrages de charge et les moniteurs de disponibilité pour vérifier que l'application est en ligne.
  get "up" => "rails/health#show", as: :rails_health_check

  # Routes pour les fichiers PWA (service worker et manifest)
  # Rendre les fichiers PWA dynamiques à partir de app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
