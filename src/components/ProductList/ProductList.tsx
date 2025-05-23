import React, { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../../../src/services/productsApi';
import type { Product } from '../../../src/types/product';
import styles from './ProductList.module.css';

const ProductList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { data, isLoading, isError } = useGetProductsQuery({ limit: 10, skip: (page - 1) * 10 });

  // Append new products to the existing list when data changes
  useEffect(() => {
    if (data && data.products) {
      setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);

  if (isLoading && page === 1) return <div className={styles.loading}>Loading...</div>;
  if (isError || !data) return <div className={styles.loading}>Error loading products</div>;

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h4 className={styles.h4}>Featured Products</h4>
      <h3 className={styles.h3}>BESTSELLER PRODUCTS</h3>
      <p className={styles.p}>Problems trying to resolve the conflict between</p>

      <div className={styles.productList}>
        <div className={styles.grid}>
          {allProducts.map((product: Product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
              <div className={styles.productInfo}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.category}>{product.category}</p>
                <div className={styles.prices}>
                  <p className={styles.price}>${product.price.toFixed(2)}</p>
                  {product.discountPercentage > 0 && (
                    <p className={styles.discount}>${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {allProducts.length < data.total && (
          <button onClick={handleLoadMore} className={styles.loadMore}>
            LOAD MORE PRODUCTS
          </button>
        )}
      </div>
    </>
  );
};

export default ProductList;