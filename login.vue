// Login.vue
<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Administration</h1>
      <p>Diocèse de Kipushi-Sakania</p>
      
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            placeholder="admin@diocese-sakania-kipushi.cd"
            required
          >
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            v-model="password"
            placeholder="●●●●●●●"
            required
          >
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Connexion...' : 'Se connecter' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: 'admin@diocese-sakania-kipushi.cd',
      password: '',
      loading: false,
      error: ''
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = '';

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth, 
          this.email, 
          this.password
        );
        
        // Connexion réussie
        console.log('Utilisateur connecté:', userCredential.user);
        
        // Redirection vers le dashboard
        this.$router.push('/admin');
        
      } catch (error) {
        console.error('Erreur de connexion:', error);
        
        // Gestion des erreurs
        switch (error.code) {
          case 'auth/invalid-email':
            this.error = 'Email invalide';
            break;
          case 'auth/user-disabled':
            this.error = 'Ce compte a été désactivé';
            break;
          case 'auth/user-not-found':
            this.error = 'Aucun compte trouvé avec cet email';
            break;
          case 'auth/wrong-password':
            this.error = 'Mot de passe incorrect';
            break;
          default:
            this.error = 'Erreur de connexion. Veuillez réessayer.';
        }
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.error-message {
  background: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
