export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-svh '>
      {/* <Sidebar /> */}
      <main className='flex-1 bg-linear-to-br from-slate-50 to-blue-50'>
        {/* <Navbar /> */}
        <div className=''>{children}</div>
      </main>
    </div>
  );
}
