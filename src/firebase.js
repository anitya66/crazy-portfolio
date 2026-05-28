import { initializeApp }

from "firebase/app"

import {

getFirestore

}

from "firebase/firestore"

const firebaseConfig = {

apiKey: "AIzaSyBBur40ihpUuFoGlfo7yd3gkKbIslNGYs",

authDomain: "crazy-portfolio-abdf4.firebaseapp.com",

projectId: "crazy-portfolio-abdf4",

storageBucket: "crazy-portfolio-abdf4.firebasestorage.app",

messagingSenderId: "166559748559",

appId: "1:166559748559:web:0dd71d2b3a8b5fccfb42ba"

}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)