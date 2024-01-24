import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const content = 
{
  Category: 'Desserts',
  Content: [
    {
      id: 3,
      name: 'Gulab Jamun',
      price: 4.99,
      description: 'A popular Indian sweet made from khoya (reduced milk) balls, deep-fried and soaked in sugar syrup.',
      imgUrl: '/imgs/computer.jpg',
    },],
};

function MenuCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={content.Content[0].imgUrl} />
      <Card.Body>
        <Card.Title>{content.Content[0].name}</Card.Title>
        <Card.Text>
          {content.Content[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;

/* import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type MenuCardProps = {
    id: number
    name: string
    description: string
    price: number
    imgUrl: string
}
function MenuCard({ id, name,description, price, imgUrl }: MenuCardProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard; */