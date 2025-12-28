import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Textarea() {
  const [activeTab, setActiveTab] = useState<'text' | 'metadata'>('text');
  const [metadata, setMetadata] = useState<{ key: string; value: string }[]>([
    { key: '', value: '' },
  ]);

  const addMetadata = () => {
    setMetadata((prev) => [...prev, { key: '', value: '' }]);
  };

  const updateMetadata = (
    index: number,
    field: 'key' | 'value',
    value: string
  ) => {
    setMetadata((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const removeMetadata = (index: number) => {
    setMetadata((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className='text-center'
    >
      <div className='border-3 border-dashed rounded-2xl p-6 w-full'>
        {/* Tabs */}
        <div className='flex justify-start gap-2 mb-6'>
          <button
            onClick={() => setActiveTab('text')}
            className={`px-4 py-2 text-sm rounded-xl transition
              ${
                activeTab === 'text'
                  ? 'bg-white text-blue-600 shadow'
                  : 'bg-white text-gray-800 border '
              }
            `}
          >
            Textarea
          </button>

          <button
            onClick={() => setActiveTab('metadata')}
            className={`px-4 py-2 text-sm rounded-xl transition
              ${
                activeTab === 'metadata'
                  ? 'bg-white text-blue-600 shadow'
                  : 'bg-white text-gray-800 border '
              }
            `}
          >
            Metadata
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode='wait'>
          {activeTab === 'text' && (
            <motion.div
              key='text'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                placeholder='Enter your document text here...'
                className='w-full h-40 p-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
              />
            </motion.div>
          )}

          {activeTab === 'metadata' && (
            <motion.div
              key='metadata'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='text-left space-y-4'
            >
              {metadata.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  {/* Key */}
                  <input
                    type='text'
                    placeholder='key'
                    value={item.key}
                    onChange={(e) =>
                      updateMetadata(index, 'key', e.target.value)
                    }
                    className='w-1/2 p-3 rounded-xl border border-blue-200
          focus:outline-none focus:ring-2 focus:ring-blue-400'
                  />

                  {/* Value */}
                  <input
                    type='text'
                    placeholder='value'
                    value={item.value}
                    onChange={(e) =>
                      updateMetadata(index, 'value', e.target.value)
                    }
                    className='w-1/2 p-3 rounded-xl border border-blue-200
          focus:outline-none focus:ring-2 focus:ring-blue-400'
                  />

                  {/* Remove */}
                  <button
                    onClick={() => removeMetadata(index)}
                    className='text-gray-400 hover:text-red-500 transition'
                    aria-label='Remove metadata'
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Add new metadata */}
              <button
                onClick={addMetadata}
                className='text-sm text-blue-600 hover:text-blue-700 font-medium'
              >
                + Add metadata
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
