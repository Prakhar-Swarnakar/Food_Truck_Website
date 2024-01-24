import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

type CartButtonsProps = {
  id: number;
}
export function CartButtons({id}: CartButtonsProps){
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity =  getItemQuantity(id)
    return (
        <div>
            {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
               Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
    )
}