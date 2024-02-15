import { Products } from "../utils/mockup/products";
class ProductService {
  async getProducts(searchQuery?: string) {
    if (searchQuery) {
      return Products.find((item) => item.name === searchQuery);
    }
    return Products.map((item) => item);
  }
  async getProductsById(id: string) {
    return Products.find((item) => item.id === id);
  }
  async getProductsByCategory(category: string) {
    if (!category) return null;
    if (category === "cpu") {
      return [
        {
          id: 1,
          isFav: true,
          name: "Acheron",
          image: "/src/assets/test_image/acheron_01.jpg",
          price: 1999,
          sold: 20,
          category: "cpu",
        },
        {
          id: 2,
          isFav: true,
          name: "BlackSwan",
          image: "/src/assets/test_image/blackswan_01.jpg",
          price: 2199,
          sold: 20,
          category: "cpu",
        },
        {
          id: 3,
          isFav: true,
          name: "Hanabi",
          image: "/src/assets/test_image/hanabi_01.jpg",
          price: 2299,
          sold: 20,
          category: "cpu",
        },
      ];
    } else if (category === "mainboard") {
      return [
        {
          id: 4,
          isFav: false,
          name: "Robin",
          image: "/src/assets/test_image/robin_01.jpg",
          price: 3999,
          sold: 20,
          category: "mainboard",
        },
        {
          id: 5,
          isFav: false,
          name: "Stelle",
          image: "/src/assets/test_image/stelle_01.jpg",
          price: 3999,
          sold: 20,
          category: "mainboard",
        },
        {
          id: 6,
          isFav: true,
          name: "Acheron",
          image: "/src/assets/test_image/acheron_01.jpg",
          price: 1999,
          sold: 20,
          category: "mainboard",
        },
      ];
    } else {
      return null;
    }
  }
}

export default new ProductService();
