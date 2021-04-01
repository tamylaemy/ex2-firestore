import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUrLa7JpKyHkSi-Sc_iRveVSVfftM6WWw",
  authDomain: "ex2-produits.firebaseapp.com",
  projectId: "ex2-produits",
  storageBucket: "ex2-produits.appspot.com",
  messagingSenderId: "172754654209",
  appId: "1:172754654209:web:0aadc3c2086b8ace405c00"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();

/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) ci-dessous la référence à "bd" obtenue ci-dessus (pour pouvoir l'utiliser dans le composant ListeProduits)
export default bd;