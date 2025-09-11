'use client'

import { useState, useRef, useEffect } from 'react'
import { WorkshopEvent } from '@/lib/workshops'
import Link from 'next/link'

interface CalendarMonthProps {
  year: number
  month: number
  events: WorkshopEvent[]
  onPrevMonth: () => void
  onNextMonth: () => void
}

export default function CalendarMonth({ 
  year, 
  month, 
  events, 
  onPrevMonth, 
  onNextMonth 
}: CalendarMonthProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [popoverEvent, setPopoverEvent] = useState<WorkshopEvent | null>(null)
  const [focusedDay, setFocusedDay] = useState<number>(1)
  const popoverRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  // Generate calendar days
  const calendarDays = []
  
  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true
    })
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isPrevMonth: false
    })
  }
  
  // Next month days to fill grid
  const remainingCells = 42 - calendarDays.length // 6 rows * 7 days
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isPrevMonth: false
    })
  }

  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.start)
      return eventDate.getDate() === day && 
             eventDate.getMonth() === month && 
             eventDate.getFullYear() === year
    })
  }

  // Handle event click
  const handleEventClick = (event: WorkshopEvent, dayNumber: number) => {
    setSelectedDay(dayNumber)
    setPopoverEvent(event)
  }

  // Close popover
  const closePopover = () => {
    setSelectedDay(null)
    setPopoverEvent(null)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        setFocusedDay(Math.max(1, focusedDay - 1))
        break
      case 'ArrowRight':
        e.preventDefault()
        setFocusedDay(Math.min(daysInMonth, focusedDay + 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedDay(Math.max(1, focusedDay - 7))
        break
      case 'ArrowDown':
        e.preventDefault()
        setFocusedDay(Math.min(daysInMonth, focusedDay + 7))
        break
      case 'Home':
        e.preventDefault()
        // Go to start of week
        const startOfWeek = focusedDay - (focusedDay % 7) + 1
        setFocusedDay(Math.max(1, startOfWeek))
        break
      case 'End':
        e.preventDefault()
        // Go to end of week
        const endOfWeek = focusedDay + (6 - (focusedDay % 7)) + 1
        setFocusedDay(Math.min(daysInMonth, endOfWeek))
        break
      case 'Escape':
        closePopover()
        break
    }
  }

  // Close popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        closePopover()
      }
    }

    if (popoverEvent) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popoverEvent])

  return (
    <div className="relative">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onPrevMonth}
          className="p-2 text-gray-400 hover:text-brand-orange transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-white font-space-grotesk">
          {monthNames[month]} {year}
        </h2>
        
        <button
          onClick={onNextMonth}
          className="p-2 text-gray-400 hover:text-brand-orange transition-colors"
          aria-label="Next month"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Calendar Grid */}
      <div 
        ref={gridRef}
        role="grid" 
        className="grid grid-cols-7 gap-1 mb-4"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Day Headers */}
        {dayNames.map(day => (
          <div key={day} className="p-3 text-center text-sm font-medium text-gray-400">
            {day}
          </div>
        ))}

        {/* Calendar Days */}
        {calendarDays.map((calDay, index) => {
          const dayEvents = calDay.isCurrentMonth ? getEventsForDay(calDay.day) : []
          const isToday = calDay.isCurrentMonth && 
                         calDay.day === new Date().getDate() && 
                         month === new Date().getMonth() && 
                         year === new Date().getFullYear()
          const isFocused = calDay.isCurrentMonth && calDay.day === focusedDay

          return (
            <div
              key={`${calDay.isPrevMonth ? 'prev' : calDay.isCurrentMonth ? 'current' : 'next'}-${calDay.day}`}
              role="gridcell"
              className={`min-h-[80px] p-2 border border-gray-800 ${
                calDay.isCurrentMonth 
                  ? 'bg-gray-900 hover:bg-gray-800' 
                  : 'bg-gray-950 text-gray-600'
              } ${isToday ? 'ring-2 ring-brand-orange' : ''} ${
                isFocused ? 'ring-2 ring-blue-500' : ''
              } transition-colors cursor-pointer`}
              tabIndex={calDay.isCurrentMonth ? 0 : -1}
              onClick={() => calDay.isCurrentMonth && setFocusedDay(calDay.day)}
            >
              <div className={`text-sm font-medium ${
                calDay.isCurrentMonth ? 'text-white' : 'text-gray-600'
              }`}>
                {calDay.day}
              </div>
              
              {dayEvents.map(event => (
                <button
                  key={event.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleEventClick(event, calDay.day)
                  }}
                  className="block w-full mt-1 px-2 py-1 text-xs rounded bg-brand-orange text-brand-black hover:bg-orange-400 transition-colors text-left"
                >
                  {event.title.replace(' Workshop', '')}
                </button>
              ))}
            </div>
          )
        })}
      </div>

      {/* Event Popover */}
      {popoverEvent && (
        <div 
          ref={popoverRef}
          className="absolute z-50 bg-black border border-gray-700 rounded-lg p-6 shadow-xl max-w-sm"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white font-space-grotesk">
                {popoverEvent.title}
              </h3>
              {popoverEvent.city && (
                <p className="text-gray-400">{popoverEvent.city}</p>
              )}
            </div>
            <button
              onClick={closePopover}
              className="text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-4">
            <p className="text-gray-300 mb-2">
              {new Date(popoverEvent.start).toLocaleDateString('en-IN', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-brand-orange">
                ₹{popoverEvent.priceINR.toLocaleString()}
              </span>
              <span className="text-sm text-gray-400">
                {popoverEvent.seatsLeft} seats left
              </span>
            </div>
          </div>

          <Link
            href={popoverEvent.slug}
            className="block w-full bg-brand-orange text-brand-black font-bold py-2 px-4 rounded text-center hover:bg-orange-400 transition-colors"
            onClick={closePopover}
          >
            Book Seat
          </Link>
        </div>
      )}

      {/* Overlay for popover */}
      {popoverEvent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closePopover}
        />
      )}
    </div>
  )
}

