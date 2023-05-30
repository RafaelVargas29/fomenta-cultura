import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD0Rfzoa-qFQOX5jbjVJiy31XoBmixbfVY",
  authDomain: "fomenta-cultura-gallery.firebaseapp.com",
  projectId: "fomenta-cultura-gallery",
  storageBucket: "fomenta-cultura-gallery.appspot.com",
  messagingSenderId: "475821089066",
  appId: "1:475821089066:web:d43a331cae894452d5be53"
};
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
