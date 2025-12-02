import React from 'react'

export default function StatusBadge({ status }) {
  const s = (status || '').toLowerCase()
  const base = 'inline-block px-2 py-1 rounded text-xs font-medium'
  if (s.includes('deliv')) return <span className={`${base} bg-green-100 text-green-800`}>{status}</span>
  if (s.includes('transit') || s.includes('in transit')) return <span className={`${base} bg-blue-100 text-blue-800`}>{status}</span>
  if (s.includes('delay')) return <span className={`${base} bg-yellow-100 text-yellow-800`}>{status}</span>
  if (s.includes('packed') || s.includes('dispatched')) return <span className={`${base} bg-indigo-100 text-indigo-800`}>{status}</span>
  return <span className={`${base} bg-gray-100 text-gray-800`}>{status}</span>
}
