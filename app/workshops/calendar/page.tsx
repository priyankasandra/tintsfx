'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Header from '@/components/Header'
import CalendarMonth from '@/components/CalendarMonth'
import EventCard from '@/components/EventCard'
import FilterBar from '@/components/FilterBar'
import { workshopEvents, getEventsInMonth, getNextUpcomingEvent, WorkshopEvent } from '@/lib/workshops'

function CalendarContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Get initial month from next upcoming event
  const nextEvent = getNextUpcomingEvent()
  const initialDate = nextEvent ? new Date(nextEvent.start) : new Date()
  
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth())
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear())
  const [view, setView] = useState(searchParams.get('view') || 'month')
  const [formatFilter, setFormatFilter] = useState('all')
  const [levelFilter, setLevelFilter] = useState('all')

  // Update URL when view changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('view', view)
    router.push(`?${params.toString()}`, { scroll: false })
  }, [view, router, searchParams])

  // Filter events based on current filters
  const filterEvents = (events: WorkshopEvent[]) => {
    return events.filter(event => {
      const formatMatch = formatFilter === 'all' || 
        (formatFilter === 'in-person' && event.format === 'In-person') ||
        (formatFilter === 'live-zoom' && event.format === 'Live Zoom')
      
      const levelMatch = levelFilter === 'all' ||
        (levelFilter === 'beginner' && event.level === 'Beginner') ||
        (levelFilter === 'pro' && event.level === 'Pro')
      
      return formatMatch && levelMatch
    })
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const currentMonthEvents = filterEvents(getEventsInMonth(currentYear, currentMonth))
  const allFilteredEvents = filterEvents(workshopEvents)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk mb-4">
              WORKSHOPS CALENDAR
            </h1>
            <p className="text-xl text-gray-300">
              View all upcoming workshops and book your seat
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar
            format={formatFilter}
            level={levelFilter}
            view={view}
            onFormatChange={setFormatFilter}
            onLevelChange={setLevelFilter}
            onViewChange={setView}
          />

          {/* Calendar or List View */}
          {view === 'month' ? (
            <CalendarMonth
              year={currentYear}
              month={currentMonth}
              events={currentMonthEvents}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white font-space-grotesk">
                Upcoming Workshops
              </h2>
              {allFilteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allFilteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">
                    No workshops found matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setFormatFilter('all')
                      setLevelFilter('all')
                    }}
                    className="mt-4 text-brand-orange hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile responsive note */}
          <div className="mt-8 p-4 bg-gray-900 rounded-lg lg:hidden">
            <p className="text-sm text-gray-400">
              💡 Tip: Switch to List view for easier browsing on mobile
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default function WorkshopsCalendar() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-black text-white">Loading...</div>}>
      <CalendarContent />
    </Suspense>
  )
}
