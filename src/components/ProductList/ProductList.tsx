import React, { useState } from 'react';
import { useGetProductsQuery } from '../../../src/services/productsApi';
import type { Product } from '../../../src/types/product';
import styles from './ProductList.module.css';

const ProductList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetProductsQuery({ limit: 10, skip: (page - 1) * 10 });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading products</div>;

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.productList}>
      <div className={styles.grid}>
        {data.products.map((product: Product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
            <div className={styles.productInfo}>
              <h3>{product.title}</h3>
              <p className={styles.category}>{product.category}</p>
              <p>${product.price.toFixed(2)}</p>
              {product.discountPercentage > 0 && (
                <p className={styles.discount}>${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {data.products.length < data.total && (
        <button onClick={handleLoadMore} className={styles.loadMore}>
          Load more Products
        </button>
      )}
    </div>
  );
};

export default ProductList;