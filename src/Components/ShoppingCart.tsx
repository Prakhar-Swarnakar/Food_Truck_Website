import { Offcanvas, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/FormatCurrency";
import storeItems from "../Data/item.json"
import { CartItem } from "./Cart/CartItem";
import { useShoppingCart } from "../Context/ShoppingCartContext";

type ShoppingCartProps = {
    isOpen : boolean
}
export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show = {isOpen} onHide ={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap = {3}>
                {cartItems.map(item =>(
                    <CartItem key = {item.id} {...item} />
                ))}
            </Stack>
            <div className="ms-auto fw-bold fs-5">
            total:{" "} {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const cartItemData = storeItems.find(item => item.id === cartItem.id);
                    return total + (cartItemData?.price || 0) * cartItem.quantity;
                    }, 0)
                )}
            </div> 
            <div> check out </div>
        </Offcanvas.Body>
    </Offcanvas>
}