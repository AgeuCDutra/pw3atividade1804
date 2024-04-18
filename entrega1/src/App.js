import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // alterado aqui
import 'firebase/compat/auth'; // alterado aqui

// Configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgfH6gOFX394H5SQqQmWgezhoqDkhJ6qc",
  authDomain: "autenticacao-bbb28.firebaseapp.com",
  projectId: "autenticacao-bbb28",
  storageBucket: "autenticacao-bbb28.appspot.com",
  messagingSenderId: "64748979595",
  appId: "1:64748979595:web:fa4fe567c31b49c9629b8e"
  // adicione outras configurações do Firebase aqui
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
      window.location.href ="https://chat.openai.com/"
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Firebase Authentication</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
    
  );
}

export default App;
