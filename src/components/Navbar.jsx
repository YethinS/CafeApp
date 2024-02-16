import React from "react";
import Styles from "./navbar.module.scss";
import { ReactComponent as ShoppingCartIcon } from "../icons/shoppingCart.svg";
function Navbar(props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.nameSection}>Artisan Resto Cafe</div>
      <div className={Styles.orderSection}>
        <div className={Styles.myOrder}>My orders</div>
        <div className={Styles.iconSection}>
          <ShoppingCartIcon />
          <div className={Styles.circle}>
            <span>{props.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
