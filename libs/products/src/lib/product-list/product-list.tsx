import styles from './product-list.module.css';

export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
      <p>
        This is a change.
        <span role="img" aria-label="shakehand">
          👋
        </span>
      </p>
    </div>
  );
}

export default ProductList;
