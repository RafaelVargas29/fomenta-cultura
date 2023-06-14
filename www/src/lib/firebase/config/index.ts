import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBKyqEatcxxzguf7XEzW5XN4FGQFoiB_E",
  authDomain: "tcc-fomenta-cultura.firebaseapp.com",
  projectId: "tcc-fomenta-cultura",
  storageBucket: "tcc-fomenta-cultura.appspot.com",
  messagingSenderId: "636194722165",
  appId: "1:636194722165:web:52e81b08f04055e167833c"
};

const app = initializeApp(firebaseConfig);

export { app };
