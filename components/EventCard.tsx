import Link from 'next/link'
import { WorkshopEvent } from '@/lib/workshops'

interface EventCardProps {
  event: WorkshopEvent
  compact?: boolean
}

export default function EventCard({ event, compact = false }: EventCardProps) {
  const startDate = new Date(event.start)
  const endDate = new Date(event.end)
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const isSameDay = startDate.toDateString() === endDate.toDateString()

  if (compact) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded p-3 hover:border-brand-orange transition-colors">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm text-white">{event.title}</h3>
          <span className={`px-2 py-1 text-xs rounded ${
            event.format === 'Live Zoom' 
              ? 'bg-blue-900 text-blue-300' 
              : 'bg-green-900 text-green-300'
          }`}>
            {event.format}
          </span>
        </div>
        {event.city && (
          <p className="text-xs text-gray-400 mb-1">{event.city}</p>
        )}
        <p className="text-xs text-gray-400 mb-2">
          {formatTime(startDate)} - {formatTime(endDate)}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-brand-orange">
            ₹{event.priceINR.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400">
            {event.seatsLeft} seats left
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black border border-gray-800 rounded-lg p-6 hover:border-brand-orange transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white font-space-grotesk mb-2">
            {event.title}
          </h3>
          {event.city && (
            <p className="text-gray-400 mb-1">{event.city}</p>
          )}
          <span className={`inline-block px-3 py-1 text-sm rounded ${
            event.format === 'Live Zoom' 
              ? 'bg-blue-900 text-blue-300' 
              : 'bg-green-900 text-green-300'
          }`}>
            {event.format}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">
            ₹{event.priceINR.toLocaleString()}
          </div>
          <div className="text-brand-orange font-medium">
            {event.seatsLeft} seats left
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-300">
          {isSameDay ? (
            <>
              {formatDate(startDate)} • {formatTime(startDate)} - {formatTime(endDate)}
            </>
          ) : (
            <>
              {formatDate(startDate)} - {formatDate(endDate)}
            </>
          )}
        </p>
      </div>

      <Link 
        href={event.slug}
        className="block w-full bg-brand-orange text-brand-black font-bold py-3 px-6 rounded text-center hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200"
      >
        Book Seat
      </Link>
    </div>
  )
}

