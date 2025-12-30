
import { restaurantService } from './services/restaurantService.js';

export const menuCategories = ["Popular", "Salad", "Pasta", "Sandwiches", "Pizza", "Burger", "Juice"];

export const menuItems = [
  {
    id: 1,
    category: "Popular",
    name: "Shrimp Pasta",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 50,
    currency: "$",
    image: "/images/food-1.jpg"
  },
  {
    id: 2,
    category: "Popular",
    name: "Pasta Primavera",
    description: "Mixed With Pasta, Tomatoes And Garlic.",
    price: 70,
    currency: "$",
    image: "/images/food-2.jpg"
  },
  {
    id: 3,
    category: "Popular",
    name: "Summer Pasta Salad",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 36,
    currency: "$",
    image: "/images/food-3.jpg"
  },
  {
    id: 4,
    category: "Popular",
    name: "Creamy Chicken Alfredo",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 45,
    currency: "$",
    image: "/images/food-4.jpg"
  },
  {
    id: 5,
    category: "Pasta",
    name: "Pasta-Rezepte",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 85,
    currency: "$",
    image: "/images/food-5.jpg"
  },
  {
    id: 6,
    category: "Pasta",
    name: "Creamy Tomato",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 60,
    currency: "$",
    image: "/images/Rectangle 61.png"
  },
  {
    id: 7,
    category: "Pasta",
    name: "Creamy Bunch Pasta",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 65,
    currency: "$",
    image: "/images/Rectangle 62.png"
  },
  {
    id: 8,
    category: "Pasta",
    name: "Pink Sauce Pasta",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 32,
    currency: "$",
    image: "/images/Rectangle 63.png"
  },
  {
    id: 9,
    category: "Pasta",
    name: "Nuts And Peas",
    description: "The Shrimp Version Of Vongole Rosso Dish, Clams Mixed With Pasta, Tomatoes And Garlic.",
    price: 95,
    currency: "$",
    image: "/images/Rectangle 64.png"
  },
  {
    id: 10,
    category: "Salad", // للتجربة، يمكن تغيير الفئة
    name: "Cold Italian Pasta",
    description: "Mixed With Pasta, Tomatoes And Garlic.",
    price: 54,
    currency: "$",
    image: "/images/Rectangle 77.png"
  }
];

// Restaurant data - will be fetched from API
export const restaurantData = {
  name: "FLAT BURGER",
  description: "Best Food, Best Services!",
  address: "2256 NW 2nd Ave, Miami, Fl, 37214",
  phone: "+44 543 871 1234",
  email: "info@termbi.com",
  rating: 5.0
};

// API integration functions
export const fetchMenuData = async () => {
  try {
    const [categories, menu] = await Promise.all([
      restaurantService.getCategories(),
      restaurantService.getMenu()
    ]);
    
    return {
      categories: categories.data || menuCategories,
      items: menu.data || menuItems
    };
  } catch (error) {
    console.error('Failed to fetch menu data:', error);
    return {
      categories: menuCategories,
      items: menuItems
    };
  }
};

export const fetchRestaurantDetails = async () => {
  try {
    const response = await restaurantService.getRestaurantDetails();
    return response.data;
  } catch (error) {
    console.error('Failed to fetch restaurant details:', error);
    return restaurantData;
  }
};