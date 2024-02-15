import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MenuCard from "./HomePage/menucard";
import { TabContent } from "./TabContent";
import menuDetails from "../Data/food.json";
import { useEffect } from "react";
import Images from "../Data/Images";

interface MenuProps {
  category: string;
  content: ContentProp[];
}
interface menuDetailsProps {
  Date: string;
  MenuId: string;
  menu: MenuProps[];
}
interface ContentProp {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}
const tempMenuDetails = [
  {
    Date: "2019-01-01",
    MenuId: "thanksgiving",
    Menu: [
      {
        Category: "Meal Box",
        Content: [
          {
            id: 1,
            name: "Naan",
            price: 2.99,
            description:
              "Soft and fluffy Indian bread, typically served with curry.",
            imgUrl: "/imgs/computer.jpg",
          },
          {
            id: 2,
            name: "Shahi Paneer",
            price: 9.99,
            description:
              "A rich and creamy North Indian curry made with paneer (cottage cheese) and a flavorful tomato-based gravy.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
      {
        Category: "Desserts",
        Content: [
          {
            id: 3,
            name: "Gulab Jamun",
            price: 4.99,
            description:
              "A popular Indian sweet made from khoya (reduced milk) balls, deep-fried and soaked in sugar syrup.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
      {
        Category: "Appetizers",
        Content: [
          {
            id: 4,
            name: "Samosa",
            price: 3.99,
            description:
              "A crispy and savory pastry filled with spiced potatoes, peas, and sometimes meat, typically deep-fried.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
      {
        Category: "Beverages",
        Content: [
          {
            id: 5,
            name: "Lassi",
            price: 2.99,
            description:
              "A popular yogurt-based drink, often flavored with fruit and spices.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
    ],
  },
  {
    Date: "2019-01-02",
    MenuId: "christmas",
    Menu: [
      {
        Category: "Meal Box",
        Content: [
          {
            id: 1,
            name: "Tandoori Roti",
            price: 2.99,
            description:
              "Soft and fluffy Indian bread, typically served with curry.",
            imgUrl: "/imgs/computer.jpg",
          },
          {
            id: 2,
            name: "Kadai Paneer",
            price: 9.99,
            description:
              "A rich and creamy North Indian curry made with paneer (cottage cheese) and a flavorful tomato-based gravy.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
      {
        Category: "Desserts",
        Content: [
          {
            id: 3,
            name: "Cham Cham",
            price: 4.99,
            description:
              "A popular Indian sweet made from khoya (reduced milk) balls, deep-fried and soaked in sugar syrup.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
      {
        Category: "Appetizers",
        Content: [
          {
            id: 4,
            name: "Tikki",
            price: 3.99,
            description:
              "A crispy and savory pastry filled with spiced potatoes, peas, and sometimes meat, typically deep-fried.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
      {
        Category: "Beverages",
        Content: [
          {
            id: 5,
            name: "Amma Panna",
            price: 2.99,
            description:
              "A popular yogurt-based drink, often flavored with fruit and spices.",
            imgUrl: "/imgs/computer.jpg",
          },
        ],
      },
    ],
  },
];

function MenuTab() {
  useEffect(() => {
    // Log the menuDetail.Menu outside of JSX
    menuDetails.forEach((menuDetail) => {
      console.log(menuDetail.Menu);
    });
  }, []);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {menuDetails.map((menuDetail) => (
        <Tab eventKey={menuDetail.MenuId} title={menuDetail.Date}>
          {JSON.stringify(menuDetail.Menu)}
          <TabContent />
          {/* <TabContent {...menuDetail.Menu}/> */}
        </Tab>
      ))}
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
        <Container><img 
                src = {"/Imgs/car.jpg"}
                alt = "Rasoi - The Indian Kitchen"
                height = "75px"
                width = "75px" 
                style = {{objectFit : "cover"}}/> </Container>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        {JSON.stringify(menuDetails[0])}
      </Tab>
      <Tab eventKey="contact 2" title="Contact" disabled>
        Tab content for Contact if (menuDetails === tempMenuDetails) return{" "}
        <img src={Images.banana}/>
        {<h3>hey it matches</h3>}
      </Tab>
    </Tabs>
  );
}

export default MenuTab;
