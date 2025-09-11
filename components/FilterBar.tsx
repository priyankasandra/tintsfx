'use client'

interface FilterBarProps {
  format: string
  level: string
  view: string
  onFormatChange: (format: string) => void
  onLevelChange: (level: string) => void
  onViewChange: (view: string) => void
}

export default function FilterBar({ 
  format, 
  level, 
  view, 
  onFormatChange, 
  onLevelChange, 
  onViewChange 
}: FilterBarProps) {
  const formatOptions = [
    { value: 'all', label: 'All Formats' },
    { value: 'in-person', label: 'In-person' },
    { value: 'live-zoom', label: 'Live Zoom' }
  ]

  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'pro', label: 'Pro' }
  ]

  const viewOptions = [
    { value: 'month', label: 'Month' },
    { value: 'list', label: 'List' }
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex flex-col">
          <label htmlFor="format-filter" className="text-sm text-gray-400 mb-1">
            Format
          </label>
          <select
            id="format-filter"
            value={format}
            onChange={(e) => onFormatChange(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:border-brand-orange"
          >
            {formatOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="level-filter" className="text-sm text-gray-400 mb-1">
            Level
          </label>
          <select
            id="level-filter"
            value={level}
            onChange={(e) => onLevelChange(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:border-brand-orange"
          >
            {levelOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex bg-gray-900 rounded border border-gray-700">
        {viewOptions.map(option => (
          <button
            key={option.value}
            onClick={() => onViewChange(option.value)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              view === option.value
                ? 'bg-brand-orange text-brand-black'
                : 'text-gray-300 hover:text-white'
            } ${option.value === 'month' ? 'rounded-l' : 'rounded-r'}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

