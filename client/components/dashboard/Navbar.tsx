import { useState } from 'react';
import {
  Home,
  Upload,
  Search,
  FileText,
  Settings,
  Bell,
  ChevronDown,
} from 'lucide-react';
import { TbHexagonLetterV } from 'react-icons/tb';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className='sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
              <TbHexagonLetterV />
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className='flex items-center gap-4'>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all
                    ${
                      isActive
                        ? 'bg-gray-900 text-white shadow-md'
                        : 'text-gray-600 bg-gray-200 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className='w-4 h-4' />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Section - Notifications & User */}
          <div className='flex items-center gap-4'>
            {/* Notifications */}
            <button className='relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors'>
              <Bell className='w-5 h-5' />
              <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
            </button>

            {/* User Menu */}
            <div className='relative'>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className='flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors'
              >
                <div className='flex items-center gap-2'>
                  <img
                    src='https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica'
                    alt='User'
                    className='w-8 h-8 rounded-full'
                  />
                  <div className='text-left hidden md:block'>
                    <p className='text-sm font-semibold text-gray-900'>
                      Jessica
                    </p>
                    <p className='text-xs text-gray-500'>jessica@email.com</p>
                  </div>
                </div>
                <ChevronDown className='w-4 h-4 text-gray-500' />
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className='absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50'>
                  <div className='px-4 py-3 border-b border-gray-100'>
                    <p className='text-sm font-semibold text-gray-900'>
                      Jessica Parker
                    </p>
                    <p className='text-xs text-gray-500'>jessica@email.com</p>
                  </div>
                  <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                    Profile Settings
                  </button>
                  <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                    API Keys
                  </button>
                  <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'>
                    Billing
                  </button>
                  <div className='border-t border-gray-100 mt-2 pt-2'>
                    <button className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
