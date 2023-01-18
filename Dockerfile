# Utilisez une image Node.js en tant que base
FROM node:alpine

# Définissez le répertoire de travail
WORKDIR /app

# Copiez les fichiers de votre projet dans le conteneur
COPY . .

# Installez les dépendances
RUN npm install

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Définissez l'entrée de commande pour démarrer l'application
CMD ["npm", "start"]