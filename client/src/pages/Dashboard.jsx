import React, { useState, useEffect } from 'react'
import useShipments from '../hooks/useShipments'
import Loader from '../components/Loader'
import OverviewCards from '../components/OverviewCards'
import ShipmentsTable from '../components/ShipmentsTable'

export default function Dashboard() {
  const { data, loading, error } = useShipments()

  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowLoader(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [loading])

  if (showLoader) return <div className="p-8"><Loader size="lg" /></div>
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>

  const shipments = data || []
  const total = shipments.length
  const inTransit = shipments.filter(s => (s.status || '').toLowerCase().includes('transit')).length
  const delivered = shipments.filter(s => (s.status || '').toLowerCase().includes('deliv')).length
  const delayed = shipments.filter(s => (s.status || '').toLowerCase().includes('delay')).length

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6">
          <h1 className="text-3xl text-white font-semibold">Dashboard</h1>
          <p className="text-sm text-purple-700 mt-1">Snipe Shipment Tracker</p>
        </div>

        <OverviewCards total={total} inTransit={inTransit} delivered={delivered} delayed={delayed} />

        <div className="mt-6 rounded-lg">
          <ShipmentsTable shipments={shipments} />
        </div>
      </div>
    </div>
  )
}
