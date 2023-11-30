import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { dataContext } from "../context/DataContext";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);
  const { t } = useTranslation("cartElements"); // "cartElements" es el nombre del namespace para estas traducciones

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => (
    <div className="m-auto col-10" key={product.id}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{t("id")}</th>
            <th scope="col">{t("product")}</th>
            <th scope="col">{t("name")}</th>
            <th scope="col">{t("price")}</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr key={product.id}>
            <td className="producto-if">{product.id}</td>
            <td><img src={product.img} alt={product.nombre} width="100" height="100" /></td>
            <td className="producto-nombre">{product.nombre}</td>
            <td className="producto-precio">{product.precio * product.quanty}</td>
            <CartItemCounter product={product} />
            <td><button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>{t("remove")}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
  
}

export default CartElements