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
  async getProductsByCategory(category: string, searchParams?: string) {
    console.log(`searchParams: ${searchParams}`);
    if (!category) return null;
    return Products.filter((item) => item.category === category);
  }
}

export default new ProductService();
