// Hard-coded grocery categories
const categories = [
  { id: 1, name: "Fruits", shortName: "FRU", description: "Seasonal and fresh fruits" },
  { id: 2, name: "Vegetables", shortName: "VEG", description: "Fresh vegetables" },
  { id: 3, name: "Dairy", shortName: "DRY", description: "Milk, butter, cheese, paneer" },
  { id: 4, name: "Meat & Seafood", shortName: "MEAT", description: "Chicken, fish, eggs" },
  { id: 5, name: "Bakery", shortName: "BAK", description: "Bread, cakes, pastries" },
  { id: 6, name: "Pantry Staples", shortName: "PAN", description: "Rice, flour, pulses, oils, spices" },
  { id: 7, name: "Frozen Foods", shortName: "FRZ", description: "Frozen vegetables, ice cream, ready meals" },
  { id: 8, name: "Snacks", shortName: "SNK", description: "Biscuits, chips, namkeen, chocolates" },
  { id: 9, name: "Beverages", shortName: "BEV", description: "Tea, coffee, juices, soft drinks" },
  { id: 10, name: "Household Essentials", shortName: "HSE", description: "Cleaning supplies, detergents" },
  { id: 11, name: "Personal Care", shortName: "PER", description: "Skincare, haircare, hygiene products" }
];

const getCategories = (req, res) => {
  res.status(200).json(categories);
};

module.exports = { getCategories, categories };
