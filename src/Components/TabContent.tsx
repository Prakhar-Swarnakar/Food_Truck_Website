import { Button, Stack } from "react-bootstrap";
import MenuCard from "./HomePage/menucard";
type menuProps = {
    Category: string 
    Content: any
}

const content = [{"Category":"Meal Box","Content":[{"id":1,"name":"Naan","price":2.99,"description":"Soft and fluffy Indian bread, typically served with curry.","imgUrl":"/imgs/computer.jpg"},{"id":2,"name":"Shahi Paneer","price":9.99,"description":"A rich and creamy North Indian curry made with paneer (cottage cheese) and a flavorful tomato-based gravy.","imgUrl":"/imgs/computer.jpg"}]},{"Category":"Desserts","Content":[{"id":3,"name":"Gulab Jamun","price":4.99,"description":"A popular Indian sweet made from khoya (reduced milk) balls, deep-fried and soaked in sugar syrup.","imgUrl":"/imgs/computer.jpg"}]},{"Category":"Appetizers","Content":[{"id":4,"name":"Samosa","price":3.99,"description":"A crispy and savory pastry filled with spiced potatoes, peas, and sometimes meat, typically deep-fried.","imgUrl":"/imgs/computer.jpg"}]},{"Category":"Beverages","Content":[{"id":5,"name":"Lassi","price":2.99,"description":"A popular yogurt-based drink, often flavored with fruit and spices.","imgUrl":"/imgs/computer.jpg"}]}];
const unfilteredContent = content.filter((category) => category.Category !== 'Meal Box');
const filteredContent = content.filter((category) => category.Category == 'Meal Box');
const dessertsContent = content.find((category) => category.Category === 'Desserts');

export function TabContent() {
  return (
    <div>
      <Stack gap={3}>
        <div><MenuCard/>
        
        {JSON.stringify(filteredContent)}
        </div>
       <Stack direction="horizontal" gap={3}>
        <MenuCard/>
        <MenuCard/>
        <MenuCard/>
       </Stack>
       <Button variant="primary">Order Now</Button>
      </Stack>
    </div>
  );
}

/* 
import { Stack } from "react-bootstrap";
import MenuCard from "./menucard";

interface MenuProps  {
    category: string 
    content: ContentProp[]
  }
  interface menuDetailsProps  {
    Date: string,
    MenuId: string,
    menu: MenuProps[]
  }
  interface ContentProp{
    id: number,
    name: string,
    price: number,
    description: string,
    imgUrl : string
  }

export function TabContent({menuList}: MenuProps) {
    const mealBoxMenu = menuList.filter((menu) => menu.category === 'Meal box');
    const otherMenu = menuList.filter((menu) => menu.category !== 'Meal box');
    return (
    <div>
      <Stack>
            {mealBoxMenu.map((menu) => (
          <MenuCard id={menu.content.id} name={menu.content.name} description={menu.content.description} price={menu.content.price} imgUrl={menu.content.imgUrl} key={menu.content.id} />))}
       <Stack direction="horizontal" gap={3}>
        {otherMenu.map((menu) => (
            <MenuCard id={menu.content.id} name={menu.content.name} description={menu.content.description} price={menu.content.price} imgUrl={menu.content.imgUrl} key={menu.content.id}/>
        ))}
       </Stack>
      </Stack>
    </div>
  );
} */