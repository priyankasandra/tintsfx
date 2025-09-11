'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import SearchBar from '@/components/SearchBar'
import Tag from '@/components/Tag'
import CardGrid from '@/components/CardGrid'
import ResourceCard from '@/components/ResourceCard'
import { resources, filterResourcesByTag, searchResources } from '@/lib/learn'

const availableTags = ['All', 'Beginner', 'Intermediate', 'Pro', 'Transfers', 'Coloration']

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredResources = useMemo(() => {
    let filtered = filterResourcesByTag(resources, selectedTag)
    if (searchQuery) {
      filtered = searchResources(filtered, searchQuery)
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
              title="RESOURCES"
              subtitle="Download essential guides, templates, and references for prosthetic makeup work."
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
                  placeholder="Search resources..."
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
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedTag !== 'All' && ` in ${selectedTag}`}
              </p>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <CardGrid columns={3}>
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} {...resource} />
                ))}
              </CardGrid>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">
                  No resources found matching your criteria.
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

        {/* Footer Note */}
        <section className="py-12 px-6 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                All resources © TINTSFX for personal educational use. 
                Commercial use requires written permission.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
