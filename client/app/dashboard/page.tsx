import Searchbar from '@/components/dashboard/Searchbar';
import RecentDocuments from '@/components/dashboard/RecentDocuments';
import StatsCard from '@/components/dashboard/StatsCard';
import ActivityTimeline from '@/components/dashboard/QuickAction';

export default function DashboardHome() {
  return (
    <div className='space-y-4'>
      {/* Header Section */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>
            Hello, <span className='text-blue-600'>Jessica</span>
          </h1>
          <p className='text-gray-600 mt-1'>You have 5 documents today</p>
        </div>
        {/* <Searchbar /> */}
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left Section - Timeline (2/3 width) */}
        <div className='lg:col-span-2 space-y-6'>
          <ActivityTimeline />
          <StatsCard />
        </div>

        {/* Right Section - Quick Actions (1/3 width) */}
        <div className='space-y-6'>
          <RecentDocuments />
        </div>
      </div>
    </div>
  );
}
