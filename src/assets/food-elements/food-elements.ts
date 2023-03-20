export interface FoodElements {
  name?: string,
  effort?: FoodElementEffort,
  cost?: FoodElementCost,
  proteinPercentage?: number,
  additionalInfo?: string,
}


export enum FoodElementEffort {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard'
}

export enum FoodElementCost {
  Low = '€',
  Medium = '€€',
  High = '€€€'
}


export const FOOD_ELEMENTS: FoodElements[] = [
  {
    name: "Sojasauce marienierte Pute mit Reis",
    cost: FoodElementCost.Low,
    effort: FoodElementEffort.Easy,
    proteinPercentage: 29,
    additionalInfo: "Tip: If you marinate turkey in soy sauce for 30min, it becomes more tender and juicy."
  },
  {
  name: "Sojasauce marieniert Pute mit Karottenreis",
  cost: FoodElementCost.Medium,
  effort: FoodElementEffort.Medium,
  proteinPercentage: 29,
  additionalInfo: "Slightly higher in effort due to extra chopping of carrots. Definitely worth it though if you want to trick someone into eating more vegetables."
  },
  {
    name: "Spicy Chicken Bits mit Reis",
    cost: FoodElementCost.Low,
    effort: FoodElementEffort.Easy,
    proteinPercentage: 23,
    additionalInfo: "Classic dish. Give the chicken a dry rub with spices of your choice (e.g.Chili, Pepper, etc...). To achieve crispy chicken bits, cook thm on high heat right before serving."
  },
  {
  name: "Spicy Chicken Bits mit Karottenreis",
  cost: FoodElementCost.Low,
  effort: FoodElementEffort.Medium,
  proteinPercentage: 23,
  additionalInfo: "Nice touch to add carrots or other vegetables into the rice for extra vitamins."
  },
  {
    name: "Thunfischnudis á la Bébé",
    cost: FoodElementCost.Low,
    effort: FoodElementEffort.Medium,
    proteinPercentage: 25,
    additionalInfo: "Very low in calories but filling at the same time. Easy to spice it up with some Chili and get a real kick out of it."
  },
  {
    name: "Eiweißburger",
    cost: FoodElementCost.High,
    effort: FoodElementEffort.Hard,
    proteinPercentage: 34,
    additionalInfo: "The effort to make these burgers is quite high but absolutely worth it. A great alternative to McDonalds or Burgers Bar with more protein and less unsaturated fats."
  },
  {
    name: "Quesadillas á la Bébé",
    cost: FoodElementCost.High,
    effort: FoodElementEffort.Hard,
    proteinPercentage: 34,
    additionalInfo: "High effort but very fun to make. You definitely need to clean the kitchen afterwards. Cheese will get everywhere."

  },
  {
    name: "Blaubeertschinkus",
    cost: FoodElementCost.Low,
    effort: FoodElementEffort.Hard,
    proteinPercentage: 21,
    additionalInfo: "Great for breakfast, lunch, or dinner if you have a sweet tooth."
  },
  {
    name: "Lachs mit Reis",
    cost: FoodElementCost.High,
    effort: FoodElementEffort.Medium,
    proteinPercentage: 20,
    additionalInfo: "Salmon tastes even better if you marinate it in lemon juice and add freshly cracked black pepper."
  },
  {
    name: "Spaghetti Bolognese",
    cost:FoodElementCost.Medium,
    effort: FoodElementEffort.Medium,
    proteinPercentage: 21,
    additionalInfo: "Classic Italian dish. Best served with Parmesano Reggiano D.B."
  }
]

