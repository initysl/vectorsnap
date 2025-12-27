import { Upload, Settings, FileEdit } from 'lucide-react';
import Link from 'next/link';
import { GrAction } from 'react-icons/gr';
import { ROUTES } from '@/lib/routes';

const qa = [
  {
    name: 'upload',
    description: 'Upload',
    href: ROUTES.dashboard.upload,
    icon: Upload,
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    name: 'documents',
    description: 'Documents',
    href: ROUTES.dashboard.documents,
    icon: FileEdit,
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    name: 'settings',
    description: 'Settings',
    href: ROUTES.dashboard.settings,
    icon: Settings,
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export default function QuickAction() {
  return (
    <div className='bg-white rounded-3xl p-4 border border-gray-100 exo'>
      <h2 className='flex items-center text-md font-semibold text-gray-900 mb-6'>
        <GrAction size={18} className='mr-2' />
        Quick Action
      </h2>

      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {qa.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.name}
              className={`
                ${item.bg}
                rounded-2xl p-4 flex flex-col gap-3
                text-left transition-all duration-300
                hover:shadow-md hover:-translate-y-0.5
              `}
            >
              <div className='w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm'>
                <Icon size={18} className={item.iconColor} />
              </div>

              <div>
                <p className='text-sm font-semibold text-gray-900'>
                  {item.description}
                </p>
                <p className='text-xs text-gray-500'>Quick access</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
