'use client';

import ProductsTable from '@/components/Products/ProductsTable';
import { productsData } from '@/components/Products/Components/products-data';

export default function Page() {
  return <ProductsTable data={productsData} />;
}
