class FoodItem {
    constructor(name, price, calories) {
      this.name = name;
      this.price = price;
      this.calories = calories;
    }
  
    getInfo() {
      return `Name: ${this.name} | Price: $${this.price} | Calories: ${this.calories}`;
    }
  }
  
  // Example usage:
  const cheeseburger = new FoodItem("Cheeseburger", 10.99, 800);
  console.log(cheeseburger.getInfo()); // Name: Cheeseburger | Price: $10.99 | Calories: 800
  
  const hotdog = new FoodItem("Hot-dog", 14.00, 400);
      const foodInfoDiv = document.getElementById("food-info");
      foodInfoDiv.textContent = hotdog.getInfo();