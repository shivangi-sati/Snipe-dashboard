import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchShipmentById } from '../api/api'
import Loader from '../components/Loader'
import StatusBadge from '../components/StatusBadge'
import Timeline from '../components/Timeline'

export default function ShipmentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [shipment, setShipment] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLogs, setShowLogs] = useState(false)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetchShipmentById(id)
      .then(s => {
        if (!s) setError('Shipment not found')
        else setShipment(s)
      })
      .catch(err => setError(err.message || 'Failed to load'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="p-6"><Loader /></div>
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>
  if (!shipment) return null

  return (
    <div className="p-6 bg-gray-950 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-4 text-sm text-purple-500">← Back</button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2 bg-gray-900 p-4 rounded shadow">

            <div className="flex items-center gap-4 mb-4">
              <img 
                src={shipment.productImage} 
                alt="product" 
                className="w-28 h-28 object-cover rounded" 
              />
              <div>
                <div className="text-lg font-medium">{shipment.productName}</div>
                <div className="text-sm text-gray-600">
                  {shipment.source} → {shipment.destination}
                </div>
                <div className="mt-2">
                  <StatusBadge status={shipment.status} />
                </div>
              </div>
            </div>

            <h3 className="font-semibold mb-2">Timeline</h3>
            <Timeline timeline={shipment.timeline} />

            <div className="mt-6">
              <button
                onClick={() => setShowLogs(prev => !prev)}
                className="text-purple-400 text-sm underline"
              >
                {showLogs ? "Hide Log Events" : "Show Last 5 Log Events"}
              </button>

              {showLogs && (
                <ul className="mt-3 space-y-2">
                  {(shipment.logs || []).slice(0, 5).map((log, i) => (
                    <li key={i} className="text-sm text-gray-400">
                      {new Date(log.time).toLocaleString()} — {log.msg}
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

          <aside className="bg-gray-900 p-4 rounded shadow">
            <div className="text-sm text-gray-500">Shipment ID</div>
            <div className="font-medium mb-4">{shipment.id}</div>

            <div className="text-sm text-gray-500">Estimated Delivery</div>
            <div className="text-lg font-medium">{shipment.estimatedDelivery}</div>

            <div className="mt-4 text-sm text-gray-500">Last Updated</div>
            <div className="text-sm">
              {new Date(shipment.lastUpdated).toLocaleString()}
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
