import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import { useCart } from "../context/CartContext";

import styles from "./checkoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  
  const clickHandler = (type, payload) => dispatch({ type, payload });
  
  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty!</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage