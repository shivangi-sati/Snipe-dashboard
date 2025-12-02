import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

export default function ShipmentsTable({ shipments = [] }) {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('lastUpdated')
  const [sortDir, setSortDir] = useState('desc')
  const [page, setPage] = useState(1)
  const perPage = 10

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    let list = shipments.filter(s => {
      if (!q) return true
      return (
        s.id.toLowerCase().includes(q) ||
        s.productName.toLowerCase().includes(q)
      )
    })


    list.sort((a, b) => {
      let cmp = 0

      if (sortBy === 'lastUpdated') {
        cmp =
          new Date(a.lastUpdated).getTime() -
          new Date(b.lastUpdated).getTime()
      } 
      else if (sortBy === 'productID') {
        cmp = a.productName.localeCompare(b.id)
      }
      else if (sortBy === 'estimatedDelivery') {
        cmp =
          new Date(a.estimatedDelivery).getTime() -
          new Date(b.estimatedDelivery).getTime()
      }

      return sortDir === 'asc' ? cmp : -cmp
    })

    return list
  }, [shipments, query, sortBy, sortDir])

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage))
  const current = filtered.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="bg-gray-900 border-purple-950 shadow-lg rounded-lg shadow-purple-950 p-4">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPage(1)
          }}
          placeholder="Search by ID or product"
          className="border-b px-3 py-2 w-full md:w-1/3  outline-none"
        />

        <div className="flex items-center gap-2">
          <label className="text-sm">Sort</label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-2 py-1 bg-gray-950 rounded outline-none"
          >
            <option value="lastUpdated">Last Updated</option>
            <option value="productID">Product ID</option>
            <option value="estimatedDelivery">Delivery Date</option>
          </select>

          <button
            onClick={() => setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))}
            className="px-2 py-1 border rounded"
          >
            {sortDir === 'asc' ? '▲' : '▼'}
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-2">Shipment ID</th>
              <th className="p-2">Product</th>
              <th className="p-2">Source</th>
              <th className="p-2">Destination</th>
              <th className="p-2">Status</th>
              <th className="p-2">Last Updated</th>
              <th className="p-2">Delivery Date</th>
            </tr>
          </thead>

          <tbody>
            {current.map((s) => (
              <tr key={s.id} className="hover:bg-indigo-100 hover:text-black">
                <td className="p-2">
                  <Link
                    to={`/shipments/${encodeURIComponent(s.id)}`}
                    className="text-purple-500 hover:underline"
                  >
                    {s.id}
                  </Link>
                </td>

                <td className="p-2">{s.productName}</td>
                <td className="p-2">{s.source}</td>
                <td className="p-2">{s.destination}</td>
                <td className="p-2">
                  <StatusBadge status={s.status} />
                </td>

                <td className="p-2">
                  {new Date(s.lastUpdated).toLocaleString()}
                </td>

                <td className="p-2">
                  {new Date(s.estimatedDelivery).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     <div className="mt-4 flex items-center justify-between">
  <div className="text-sm text-gray-600">
    {filtered.length} shipments
  </div>

  <div className="flex items-center gap-2">

    {page > 1 && (
      <button
        onClick={() => setPage(p => Math.max(1, p - 1))}
        className="px-2 py-1 border rounded hover:bg-gray-200 hover:text-black"
      >
        Prev
      </button>
    )}

    <div className="px-3 py-1 border rounded">
      {page} / {pageCount}
    </div>

    {page < pageCount && (
      <button
      onClick={() => setPage(p => Math.min(pageCount, p + 1))}
      className="px-2 py-1 border rounded hover:bg-gray-200 hover:text-black"
      disabled={page === pageCount}
    >
      Next
    </button>
    )}

  </div>
</div>


    </div>
  )
}
