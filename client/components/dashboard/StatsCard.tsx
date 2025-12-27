import { FileText, HardDrive, TrendingUp, Folder } from 'lucide-react';

export default function StatsCard() {
  const stats = [
    {
      label: 'Total Documents',
      value: '1,234',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      label: 'Storage Used',
      value: '2.3 GB',
      icon: HardDrive,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      label: 'Searches This Week',
      value: '89',
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      label: 'Categories',
      value: '6',
      icon: Folder,
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
  ];

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className='bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-shadow'
          >
            <div
              className={`${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}
            >
              <Icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <p className='text-2xl font-bold text-gray-900'>{stat.value}</p>
            <p className='text-sm text-gray-500 mt-1'>{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
