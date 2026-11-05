# Selah · site de présentation

Page de présentation de Selah, application mobile de lecture et de méditation biblique pour les chrétiens francophones.

En ligne : https://willdev61.github.io/selah-landing/

## Contenu

- `index.html` : la page (HTML statique, sans framework)
- `styles.css` : styles, avec mode clair et sombre selon le système
- `script.js` : menu mobile, apparition des cartes, lien actif dans la navigation
- `assets/screens/` : captures de l'application (WebP, 540 × 1200)

Polices chargées depuis Google Fonts : Geist, Geist Mono, EB Garamond, Noto Serif Hebrew, les mêmes que dans l'application.

## Aperçu local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mettre à jour les captures

Prendre les captures depuis l'émulateur (`adb exec-out screencap -p > capture.png`), puis les convertir :

```bash
python3 -c "from PIL import Image; Image.open('capture.png').convert('RGB').resize((540,1200)).save('assets/screens/nom.webp', quality=82)"
```

## Déploiement

GitHub Pages publie automatiquement la branche `main` (dossier racine) à chaque push.
