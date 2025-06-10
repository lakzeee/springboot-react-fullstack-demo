'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Product } from '@/types/product';
import { ProductActions } from '@/actions/ProductActions';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProductName, setNewProductName] = useState('');

  useEffect(() => {
    ProductActions.getAll().then(setProducts);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim()) return;

    try {
      await ProductActions.create({ name: newProductName });
      setNewProductName('');
      ProductActions.getAll().then(setProducts);
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      <div className="mb-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            placeholder="Enter product name"
            className="border p-2 rounded w-full"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-fit text-nowrap">
            Add Product
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Product List</h2>
        <ul className="list-disc pl-5">
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
