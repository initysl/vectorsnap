import { FileText, Clock, Tag } from 'lucide-react';

export default function RecentDocuments() {
  const recentDocs = [
    {
      id: 1,
      title: 'Python FastAPI Tutorial',
      category: 'Articles',
      time: '2 hours ago',
      tags: ['python', 'backend'],
    },
    {
      id: 2,
      title: 'Meeting Notes - Q1 Planning',
      category: 'Notes',
      time: '5 hours ago',
      tags: ['work', 'planning'],
    },
    {
      id: 3,
      title: 'Chicken Stir-Fry Recipe',
      category: 'Recipes',
      time: '1 day ago',
      tags: ['dinner', 'asian'],
    },
  ];

  return (
    <div className='bg-white rounded-3xl p-4 shadow-lg border border-gray-100'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-gray-900'>Recent Documents</h2>
        <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>
          View All
        </button>
      </div>

      <div className='space-y-4'>
        {recentDocs.map((doc) => (
          <div
            key={doc.id}
            className='p-4 bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-md transition-shadow cursor-pointer'
          >
            <div className='flex items-start gap-3'>
              <div className='p-2 bg-white rounded-lg'>
                <FileText className='w-5 h-5 text-blue-600' />
              </div>
              <div className='flex-1'>
                <h3 className='font-semibold text-gray-900 text-sm mb-1'>
                  {doc.title}
                </h3>
                <div className='flex items-center gap-2 text-xs text-gray-500 mb-2'>
                  <Clock className='w-3 h-3' />
                  <span>{doc.time}</span>
                  <span>•</span>
                  <span>{doc.category}</span>
                </div>
                <div className='flex gap-1 flex-wrap'>
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-white/70 rounded-full text-xs text-gray-600'
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className='w-full mt-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all'>
        Upload New Document
      </button>
    </div>
  );
}
