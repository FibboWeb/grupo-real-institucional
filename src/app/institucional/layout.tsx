export default function InstitutionalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col fb_container">
      <div className="flex flex-1 w-full">
        <main className="bg-white relative w-full min-w-0">{children}</main>
      </div>
    </div>
  );
}
