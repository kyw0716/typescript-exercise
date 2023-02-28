interface Restaurant {
  category: string;
  name: string;
  distance: number;
  menus: string[];
}

const restaurants: Restaurant[] = [];

function add({}: Restaurant) {}

function filterByCategory(category: string) {}
