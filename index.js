import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import express from 'express';
import bodyParser from 'body-parser';

const firebaseConfig = {
  apiKey: 'AIzaSyCfG6HxM5_BR0D3l4uGmCDcJCVY06onXfg',
  authDomain: 'fir-crud-nodejs.firebaseapp.com',
  projectId: 'fir-crud-nodejs',
  storageBucket: 'fir-crud-nodejs.appspot.com',
  messagingSenderId: '736015692385',
  appId: '1:736015692385:web:5f69643f81de0fdc9df020',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const userCollection = collection(db, 'users');

const users = [];

const getUsers = async () => {
  const data = await getDocs(userCollection);
  users.push(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

app.get('/', async function (req, res) {
  await getUsers();
  res.send(users);
});
