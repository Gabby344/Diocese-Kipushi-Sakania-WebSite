// middleware/auth.js
import { auth } from '@/firebase'

export default function ({ route, redirect }) {
  // Protéger les routes admin
  if (route.path.startsWith('/admin')) {
    const user = auth.currentUser
    if (!user) {
      return redirect('/login')
    }
  }
}
