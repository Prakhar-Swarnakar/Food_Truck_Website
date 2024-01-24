import { Card,Row ,Col, Button } from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { CartButtons } from "../Cart/CartButtons";

type FoodItemProps = {
    id: number;
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  }
 
export function MenuItem( {id, name,description,imgUrl, price}: FoodItemProps){
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity =  getItemQuantity(id)
    return <Card className="h-100">
        <Card.Body>
           <Row>
                <Col>
                <img 
                    src = {imgUrl}
                    alt = "Rasoi - The Indian Kitchen"
                    style = {{objectFit : "cover"}}/> 
                </Col>
                <Col>
                    <Row>
                        <h3>{name}</h3>
                    </Row>
                    <Row>
                        <p>{description}</p>
                    </Row>
                    <Row>
                        <Col> 
                            <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: "100%" }}>
                            Spice Level
                            </Button>
                        </Col>
                        <Col>
                            <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: "100%" }}>
                            Allergent Free
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3>{price}</h3>
                    </Row>
                    <Row>
                     <CartButtons id = {id}/>
                    </Row>
                </Col>
           </Row>
        </Card.Body>
    </Card>
}