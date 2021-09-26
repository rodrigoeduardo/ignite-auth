import { FormEvent, useContext, useState } from "react"

import styles from '../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <>
      <h1>Rodrigo Eduardo</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input className={styles.input} placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className={styles.input} placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className={styles.button} type="submit">Entrar</button>
      </form>
    </>
  )
}
