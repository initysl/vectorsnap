import Navbar from '@/components/dashboard/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-blue-50 p-4'>
      <Navbar />
      <main className='max-w-7xl pt-2'>{children}</main>
    </div>
  );
}
