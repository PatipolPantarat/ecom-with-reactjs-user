class ProductService {
  async getProducts(searchQuery?: string) {
    if (searchQuery) {
      return [
        {
          id: 1,
          name: "AMD Ryzen 7 7800X3D",
          thumbnail: "https://via.placeholder.com/200x200",
        },
      ];
    }
    return [
      {
        id: 1,
        name: "AMD Ryzen 7 7800X3D",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 2,
        name: "Product 2",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 3,
        name: "Product 3",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 4,
        name: "Product 4",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 5,
        name: "Product 5",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 6,
        name: "Product 6",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 7,
        name: "Product 7",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 8,
        name: "Product 8",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 9,
        name: "Product 9",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 10,
        name: "Product 10",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 11,
        name: "Product 11",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 12,
        name: "Product 12",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 13,
        name: "Product 13",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 14,
        name: "Product 14",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 15,
        name: "Product 15",
        thumbnail: "https://via.placeholder.com/200x200",
      },
      {
        id: 16,
        name: "Product 16",
        thumbnail: "https://via.placeholder.com/200x200",
      },
    ];
  }
}

export default new ProductService();
