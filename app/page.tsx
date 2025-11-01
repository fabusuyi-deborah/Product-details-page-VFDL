// src/app/page.tsx

import Navbar from '@/app/components/layout/navbar/page';
import Breadcrumb from '@/app/components/products/breadcrumbs/page';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Breadcrumb />
    </>
  );
}
