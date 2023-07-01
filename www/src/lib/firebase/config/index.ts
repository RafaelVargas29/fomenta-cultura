import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBBKyqEatcxxzguf7XEzW5XN4FGQFoiB_E",
//   authDomain: "tcc-fomenta-cultura.firebaseapp.com",
//   projectId: "tcc-fomenta-cultura",
//   storageBucket: "tcc-fomenta-cultura.appspot.com",
//   messagingSenderId: "636194722165",
//   appId: "1:636194722165:web:52e81b08f04055e167833c"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD38kUhwCE-3KzP32sObwNul5de_kpPiRs",
  authDomain: "teste-firebase-1a95c.firebaseapp.com",
  projectId: "teste-firebase-1a95c",
  storageBucket: "teste-firebase-1a95c.appspot.com",
  messagingSenderId: "876163684607",
  appId: "1:876163684607:web:a363de19806e378d5094ca",
  measurementId: "G-403LYYM1YT"
};

const app = initializeApp(firebaseConfig);

export { app };
