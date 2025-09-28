# Prompts pour le projet Ressourcerie - Vert et Coton

*Prompts utiliser pour Claude AI - Projet de 2ème année BUT*

# Prompt 1 : Structure HTML et Accessibilité

**Rôle :** Tu es un expert en développement web et accessibilité, spécialisé dans les standards W3C.

**Tâche :** Analyse les fichiers HTML de mon projet de ressourcerie et propose des améliorations concrètes.

**Objectifs spécifiques :**
1. Vérifier la conformité aux normes W3C HTML5
2. Améliorer l'accessibilité 
3. Optimiser les performances de chargement
4. Corriger la structure sémantique

**Format de réponse attendu :**
- Liste des problèmes identifiés avec localisation précise
- Code HTML corrigé pour chaque problème
- Explication des améliorations apportées
- Validation des changements

**Contraintes :**
- Conserver la fonctionnalité existante
- Maintenir le design actuel

---

## Prompt 2 : Génération du JavaScript

**Rôle :** Tu es un développeur JavaScript senior, expert en vanilla JS et bonnes pratiques de performance.

**Tâche :** Génère 3 fichiers JavaScript distincts pour les interactions utilisateur de mon site de ressourcerie.

**Fichiers à créer :**
1. `theme.js` - Système de thème clair/sombre
2. `menu.js` - Menu burger responsive
3. `back-to-top.js` - Bouton retour en haut

**Spécifications détaillées :**

**theme.js :**
- Toggle entre mode clair/sombre
- Sauvegarde localStorage
- Animation de transition fluide
- Icône soleil/lune dynamique

**menu.js :**
- Affichage/masquage menu mobile
- Animations smooth

**back-to-top.js :**
- Apparition progressive après scroll
- Scroll smooth vers le haut
- Gestion des performances (throttling)

**Format de livraison :**
- Code complet pour chaque fichier
- Commentaires explicatifs
- Instructions d'intégration HTML
- Tests de compatibilité

**Contraintes techniques :**
- JavaScript uniquement
- Optimisé performances     
- Accessible 

---

## Prompt 3 : Optimisation CSS

**Rôle :** Tu es un expert CSS/Performance Web, spécialisé dans l'optimisation et les bonnes pratiques modernes.

**Tâche :** Refactorise et optimise le fichier CSS de mon projet pour améliorer les performances et respecter les standards.

**Analyse et corrections requises :**

**1. Architecture CSS :**
- Utiliser des sélecteurs .classes et non des ID
- Conserver IDs uniquement pour JS et accessibilité
- Organiser par sections logiques

**2. Optimisation performances :**
- Minification du code (suppression espaces/commentaires)
- Regroupement sélecteurs similaires
- Elimination CSS inutilisé

**3. Système de couleurs :**
- Variables CSS bien structurées
- Mode sombre cohérent et contrasté

**Palette actuelle :**
- **Clair :** Fond beige (#F8F5ED), Vert principal (#2D4A32), Accent marron (#B8956D)
- **Sombre :** Fond bleu (#0B1426), Vert clair (#52C878), Accent orange (#FF8C42)

**Livrables attendus :**
- CSS optimisé complet
- Liste des changements de classes
- Validation des contrastes

**Contraintes :**
- Conserver apparence visuelle actuelle
- Compatible navigateurs modernes
- Responsive mobile-first maintenu
- Accessibilité respectée
