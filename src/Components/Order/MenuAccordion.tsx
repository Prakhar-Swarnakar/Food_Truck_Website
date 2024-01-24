import Accordion from 'react-bootstrap/Accordion';
import { MenuItem } from './MenuItem';
import { Row } from 'react-bootstrap';
import menuDetails from '../../Data/food.json';
import CheckoutPage from '../CheckoutPage';

export function MenuAccordion() {
  const menuDetailOne = menuDetails[0];
  const menu = menuDetailOne.Menu;
  return(
    <Accordion defaultActiveKey="0">
      {menu.map((menuCategory) => (
        <Accordion.Item eventKey={menuCategory.Category}>
          <Accordion.Header>{menuCategory.Category}</Accordion.Header>
          <Accordion.Body>
            <Row>
              {menuCategory.Content.map((menuContent) => (
                <MenuItem {...menuContent}/>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))}
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <CheckoutPage/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
);
}

export default MenuAccordion;