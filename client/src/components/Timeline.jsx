import React from 'react'

const STEPS = ['Ordered','Packed','Dispatched','In Transit','Delivered']

export default function Timeline({ timeline }) {
  const doneSteps = timeline?.map(t => t.step) || []
  return (
    <div className="space-y-3">
      {STEPS.map(step => {
        const done = doneSteps.includes(step)
        const item = (timeline || []).find(t => t.step === step)
        return (
          <div key={step} className="flex items-start gap-3">
            <div className={`w-3 h-3 rounded-full mt-1 ${done ? 'bg-purple-500' : 'bg-gray-300'}`} />
            <div>
              <div className={`${done ? 'font-medium' : 'text-gray-500'}`}>{step}</div>
              {item && <div className="text-sm text-gray-500">{item.date}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
