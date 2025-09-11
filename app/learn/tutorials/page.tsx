'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import SearchBar from '@/components/SearchBar'
import Tag from '@/components/Tag'
import CardGrid from '@/components/CardGrid'
import TutorialCard from '@/components/TutorialCard'
import { tutorials, filterTutorialsByTag, searchTutorials } from '@/lib/learn'

const availableTags = ['All', 'Beginner', 'Intermediate', 'Pro', 'Edges', 'Aging', 'Wounds', 'Coloration', 'Transfers']

export default function TutorialsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredTutorials = useMemo(() => {
    let filtered = filterTutorialsByTag(tutorials, selectedTag)
    if (searchQuery) {
      filtered = searchTutorials(filtered, searchQuery)
    }
    return filtered
  }, [searchQuery, selectedTag])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20">
        {/* Header */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="TUTORIALS"
              subtitle="Step-by-step video guides covering essential prosthetic makeup techniques from beginner to professional level."
            />
          </div>
        </section>

        {/* Filters */}
        <section className="pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              {/* Search Bar */}
              <div className="w-full lg:w-96">
                <SearchBar 
                  placeholder="Search tutorials..."
                  onSearch={setSearchQuery}
                />
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-3">
                {availableTags.map((tag) => (
                  <Tag
                    key={tag}
                    label={tag}
                    variant="filter"
                    isActive={selectedTag === tag}
                    onClick={() => setSelectedTag(tag)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Results count */}
            <div className="mb-8">
              <p className="text-gray-400">
                {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedTag !== 'All' && ` in ${selectedTag}`}
              </p>
            </div>

            {/* Tutorials Grid */}
            {filteredTutorials.length > 0 ? (
              <CardGrid columns={3}>
                {filteredTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.slug} {...tutorial} />
                ))}
              </CardGrid>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">
                  No tutorials found matching your criteria.
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTag('All')
                  }}
                  className="text-brand-orange hover:text-white transition-colors duration-200"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk mb-6">
              Want hands-on practice?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our workshops to practice these techniques with expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/workshops/beginner"
                className="inline-block bg-brand-orange text-brand-black font-bold py-3 px-6 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200"
              >
                Beginner Workshop
              </a>
              <a
                href="/workshops/pro-intensive"
                className="inline-block border border-brand-orange text-brand-orange font-bold py-3 px-6 rounded hover:bg-brand-orange hover:text-brand-black transition-all duration-200"
              >
                Pro Intensive
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
