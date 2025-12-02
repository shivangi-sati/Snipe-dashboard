import React from 'react'

export default function OverviewCards({ total, inTransit, delivered, delayed }) {
  const items = [
    { title: 'Total Shipments', value: total },
    { title: 'In Transit', value: inTransit },
    { title: 'Delivered', value: delivered },
    { title: 'Delayed', value: delayed }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <div key={it.title} className="bg-gray-900 border-purple-950 p-4 rounded shadow-purple-950 shadow-md">
          <div className="text-sm">{it.title}</div>
          <div className="text-2xl  font-semibold mt-2">{it.value}</div>
        </div>
      ))}
    </div>
  )
}
