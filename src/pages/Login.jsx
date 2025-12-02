import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function validate() {
    const e = {}
    if (!email) e.email = 'Email is required'
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Invalid email'
    if (!password) e.password = 'Password required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (!validate()) return
    localStorage.setItem('snipe_auth', '1')
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form onSubmit={onSubmit} className="w-full max-w-md p-8 bg-gray-900 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-6">Sign in to Snipe</h2>
        <label className="block mb-3">
          <span className="text-sm">Email</span>
          <input value={email} placeholder='email@domain.....' onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </label>
        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input type="password" placeholder='••••••••' value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border px-3 py-2" />
          {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
        </label>
        <button className="w-full py-2 rounded-md bg-purple-950 text-white" type="submit">Sign in</button>
      </form>
    </div>
  )
}
