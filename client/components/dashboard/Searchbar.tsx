'use client';

import { useState } from 'react';
import { Filter, Search, X } from 'lucide-react';

export default function Searchbar() {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'all',
    dateRange: 'all',
  });

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'notes', label: 'Notes' },
    { id: 'articles', label: 'Articles' },
    { id: 'research', label: 'Research' },
    { id: 'recipes', label: 'Recipes' },
  ];

  const dateRanges = [
    { id: 'all', label: 'All Time' },
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call search API
    console.log('Searching:', query, selectedFilters);
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <div className='w-full max-w-3xl mx-auto'>
      <form onSubmit={handleSearch} className='relative'>
        {/* Search Input */}
        <div className='relative flex items-center'>
          <Search
            size={18}
            className='absolute left-4 text-gray-400 pointer-events-none'
          />

          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='bg-white w-full pl-12 pr-24 py-2 rounded-full focus:border-blue-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400'
            placeholder='Search through docs by meaning, keywords.....'
          />

          {/* Clear button */}
          {query && (
            <button
              type='button'
              onClick={clearSearch}
              className='absolute right-16 p-1 text-gray-400 hover:text-gray-600 transition-colors'
            >
              <X size={18} />
            </button>
          )}

          {/* Filter button */}
          <button
            type='button'
            onClick={() => setShowFilters(!showFilters)}
            className={`absolute right-4 p-2 rounded-lg transition-colors ${
              showFilters
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
          >
            <Filter size={18} />
          </button>
        </div>

        {/* Filter Dropdown */}
        {showFilters && (
          <div className='absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-4 z-50'>
            <div className='space-y-4'>
              {/* Category Filter */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Category
                </label>
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2'>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type='button'
                      onClick={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          category: cat.id,
                        })
                      }
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedFilters.category === cat.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Range Filter */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>
                  Date Range
                </label>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
                  {dateRanges.map((range) => (
                    <button
                      key={range.id}
                      type='button'
                      onClick={() =>
                        setSelectedFilters({
                          ...selectedFilters,
                          dateRange: range.id,
                        })
                      }
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedFilters.dateRange === range.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className='flex items-center justify-between pt-2 border-t border-gray-200'>
                <button
                  type='button'
                  onClick={() =>
                    setSelectedFilters({ category: 'all', dateRange: 'all' })
                  }
                  className='text-sm text-gray-600 hover:text-gray-900 font-medium'
                >
                  Clear Filters
                </button>
                <button
                  type='button'
                  onClick={() => setShowFilters(false)}
                  className='px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors'
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* Active Filters Display */}
      {(selectedFilters.category !== 'all' ||
        selectedFilters.dateRange !== 'all') && (
        <div className='flex items-center gap-2 mt-3'>
          <span className='text-sm text-gray-500'>Active filters:</span>
          {selectedFilters.category !== 'all' && (
            <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1'>
              {categories.find((c) => c.id === selectedFilters.category)?.label}
              <button
                onClick={() =>
                  setSelectedFilters({ ...selectedFilters, category: 'all' })
                }
                className='hover:text-blue-900'
              >
                <X size={14} />
              </button>
            </span>
          )}
          {selectedFilters.dateRange !== 'all' && (
            <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1'>
              {
                dateRanges.find((d) => d.id === selectedFilters.dateRange)
                  ?.label
              }
              <button
                onClick={() =>
                  setSelectedFilters({ ...selectedFilters, dateRange: 'all' })
                }
                className='hover:text-blue-900'
              >
                <X size={14} />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
