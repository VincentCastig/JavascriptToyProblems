// Problem: Battalion Equipment Inventory
// Description:

// You are a logistics officer in the US Army responsible for managing the inventory of equipment for a battalion. Each piece of equipment has a unique identification number and belongs to one of several categories. Your task is to analyze the inventory and determine the following:

// Total Number of Items: Calculate the total number of equipment items in the inventory.
// Category Counts: Count how many pieces of equipment belong to each category.
// Category with Most Items: Identify which category has the highest number of items.
// Input:

// You will be given an array of equipment objects. Each object has the following properties:

// id (string): A unique identifier for the equipment.
// category (string): The category to which the equipment belongs (e.g., "Weapon", "Communication", "Medical", "Transportation").

// Output:

// You need to implement a function analyzeInventory(inventory) that returns an object with the following properties:

// totalItems (number): The total number of equipment items.
// categoryCounts (object): An object where each key is a category and the value is the count of items in that category.
// mostPopulousCategory (string): The category with the highest number of items. If there is a tie, return the category that appears first in the input array.

function analyzeInventory(inventoryInput) {

    const analysis = {
        totalItems: inventoryInput.length,
        categoryCounts: {},
        mostPopulousCategory: ''
    };

    inventoryInput.forEach(item => {
        const category = item.category;
        if (!analysis.categoryCounts[category]) {
            analysis.categoryCounts[category] = 0
        }
        analysis.categoryCounts[category]++;
    });

      // count items in array. count how many belong to each category
      let maxCounts = 0;

      for (const category in analysis.categoryCounts) {
          if (analysis.categoryCounts[category] > maxCounts) {
              maxCounts = analysis.categoryCounts[category];
              analysis.mostPopulousCategory = category;
          }
      }
   

    console.log('analysis ', analysis);
}

analyzeInventory([
    { id: 'E001', category: 'Weapon' },
    { id: 'E002', category: 'Medical' },
    { id: 'E003', category: 'Weapon' },
    { id: 'E004', category: 'Communication' },
    { id: 'E005', category: 'Weapon' },
    { id: 'E006', category: 'Medical' },
    { id: 'E007', category: 'Transportation' }
]);
