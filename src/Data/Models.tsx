// interfaces/food.ts
interface MenuItem {
    id: number;
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  }
  
  interface MenuCategory {
    Category: string;
    Content: MenuItem[];
  }
  
  export interface DailyMenu {
    Date: string;
    MenuId: string;
    Menu: MenuCategory[];
  }
  