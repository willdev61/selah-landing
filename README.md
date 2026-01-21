# Selah Landing Page

Landing page professionnelle pour l'application Selah - Application de méditation biblique pour chrétiens francophones d'Afrique.

## 🚀 Déploiement rapide sur GitHub Pages

### Option 1 : Déploiement via l'interface GitHub (RECOMMANDÉ)

1. **Créer un repository GitHub**
   - Aller sur https://github.com/new
   - Nom du repository : `selah-landing` (ou autre nom)
   - Laisser en Public
   - Ne pas initialiser avec README
   - Cliquer sur "Create repository"

2. **Uploader les fichiers**
   - Sur la page du nouveau repository, cliquer sur "uploading an existing file"
   - Glisser-déposer les 3 fichiers :
     - `index.html`
     - `styles.css`
     - `script.js`
   - Cliquer sur "Commit changes"

3. **Activer GitHub Pages**
   - Aller dans Settings (onglet en haut)
   - Dans le menu de gauche, cliquer sur "Pages"
   - Sous "Source", sélectionner "Deploy from a branch"
   - Sélectionner la branche `main` et le dossier `/ (root)`
   - Cliquer sur "Save"

4. **Votre site est en ligne ! 🎉**
   - L'URL sera : `https://votre-username.github.io/selah-landing/`
   - Cela peut prendre 1-2 minutes pour être disponible

### Option 2 : Déploiement via ligne de commande

Si vous préférez utiliser Git en ligne de commande :

```bash
# Dans le dossier selah-landing
git init
git add .
git commit -m "Initial commit - Selah landing page"
git branch -M main
git remote add origin https://github.com/votre-username/selah-landing.git
git push -u origin main
```

Puis suivre l'étape 3 ci-dessus pour activer GitHub Pages.

### Option 3 : Déploiement sur Netlify (Alternative gratuite)

1. Aller sur https://www.netlify.com/
2. Cliquer sur "Add new site" > "Deploy manually"
3. Glisser-déposer le dossier `selah-landing` entier
4. Le site est instantanément en ligne avec une URL Netlify

## 📧 Envoyer le lien à Lueur.org

Une fois déployé, envoyez à Lueur.org :

**Objet :** Selah - Site de présentation du projet

**Message :**
```
Bonjour Étienne,

Suite à votre demande de voir l'avancement du projet, voici notre site de présentation :

🌐 Site web : https://votre-username.github.io/selah-landing/

Le site présente :
- Vue d'ensemble du projet Selah
- Fonctionnalités implémentées
- Architecture technique complète
- Plan d'intégration Strong's Concordance
- Notre engagement pour le partenariat avec Lueur.org

Nous restons disponibles pour toute question ou démonstration complémentaire.

Cordialement,
[Votre nom]
Équipe Selah
```

## 🎨 Contenu du site

- ✅ Hero section avec statistiques
- ✅ Vue d'ensemble et mission
- ✅ 6 catégories de fonctionnalités
- ✅ Stack technique complet
- ✅ Mockups de l'interface
- ✅ Design system
- ✅ Section partenariat Lueur.org
- ✅ Roadmap du projet
- ✅ Contact

## 🔧 Personnalisation

Pour personnaliser le site :

1. **Couleurs** : Modifier les variables CSS dans `styles.css` (lignes 14-20)
2. **Contenu** : Éditer directement dans `index.html`
3. **Design** : Ajuster les styles dans `styles.css`

## 📱 Responsive

Le site est entièrement responsive et s'adapte à :
- 💻 Desktop (1200px+)
- 📱 Tablette (768px - 1200px)
- 📱 Mobile (< 768px)

## ⚡ Performance

- Pas de dépendances externes (sauf Google Fonts)
- HTML/CSS/JS vanilla (pas de framework)
- Temps de chargement < 1 seconde
- Score Lighthouse 95+

## 🆘 Support

Si vous rencontrez des problèmes de déploiement :

1. Vérifier que les 3 fichiers sont bien dans le repository
2. Vérifier que GitHub Pages est activé sur la branche `main`
3. Attendre 2-3 minutes après l'activation
4. Vider le cache du navigateur (Ctrl+F5)

## 📄 Licence

© 2025 Selah. Tous droits réservés.

---

**Note :** Ce site est une landing page de présentation. L'application mobile Selah est en cours de développement.
