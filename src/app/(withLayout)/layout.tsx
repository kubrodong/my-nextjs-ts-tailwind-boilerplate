import BasicLayout from '@/layouts/BasicLayout';

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BasicLayout>{children}</BasicLayout>;
}
