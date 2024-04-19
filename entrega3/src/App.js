import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui      
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    }
  };

  return (
    <div id="teste"><button onClick={() => window.location.href ="/"}><i className="fas fa-home"></i> Home</button>
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
      <button onClick={handleGoogleLogin}>Login com Google</button>
      {user && (
        <div>
          <h2>Dados do Usuário:</h2>
          <p>Nome: {user.displayName || 'Não fornecido'}</p>
          <p>Email: {user.email}</p>
          <p>ID do Usuário: {user.uid}</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;




/*import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
      window.location.href ="https://chat.openai.com/"
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
      setError(null);
      setUser(userCredential.user);
      // Login bem-sucedido, você pode redirecionar ou fazer outras ações aqui
      window.location.href ="https://chat.openai.com/"
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  return (
    <div id="teste">
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
      <button onClick={handleGoogleLogin}>Login com Google</button>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>Dados do Usuário:</h2>
          <p>Nome: {user.displayName || 'Não fornecido'}</p>
          <p>Email: {user.email}</p>
          <p>ID do Usuário: {user.uid}</p>
          
        </div>
      )}
    </div>
  );
}

export default App; */