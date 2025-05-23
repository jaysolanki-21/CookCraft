import { nanoid } from "nanoid";
import { createContext,useState }  from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({children}) => {
    const [recipe,setRecipe] = useState([
   {
    id: nanoid(),
    title: "Spicy Schezwan Noodles",
    category: "Chinese",
    chef: "Chef Lee",
    description: "Fiery and flavorful noodles tossed with Schezwan sauce.",
    image: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/16x9/16x9-veg-schezwan-noodles-recipe-video-how-to-make-easy-veg-schezwan-noodles.jpg",
    ingredients: ["noodles", "capsicum", "onion", "garlic", "schezwan sauce"],
    instructions: ["Boil noodles", "Stir fry vegetables", "Mix with sauce", "Serve hot"],
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "10 min"
  },
  {
    id: nanoid(),
    title: "Classic Margherita Pizza",
    category: "Italian",
    chef: "Chef Antonio",
    description: "Traditional pizza with fresh mozzarella and basil.",
    image: "https://www.dominos.co.in/blog/wp-content/uploads/2019/12/A-Delicious-History-of-Your-Favourite-Classic-Margherita-Pizza.png",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
    instructions: ["Prepare base", "Add toppings", "Bake in oven", "Slice and serve"],
    difficulty: "Easy",
    prepTime: "20 min",
    cookTime: "15 min"
  },
  {
    id: nanoid(),
    title: "Manchurian",
    category: "Chinese",
    chef: "Chef Wang",
    description: "Crispy veggie balls in tangy manchurian gravy.",
    image: "https://c.ndtvimg.com/2021-01/rlten3n8_manchurian_625x300_27_January_21.jpg",
    ingredients: ["cabbage", "carrot", "flour", "soy sauce", "vinegar"],
    instructions: ["Make balls", "Deep fry", "Prepare gravy", "Mix and serve"],
    difficulty: "Medium",
    prepTime: "25 min",
    cookTime: "20 min"
  },
  {
    id: nanoid(),
    title: "Pasta Alfredo",
    category: "Italian",
    chef: "Chef Laura",
    description: "Creamy Alfredo pasta with garlic and parmesan.",
    image: "https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1200_628.jpg",
    ingredients: ["pasta", "cream", "garlic", "parmesan", "butter"],
    instructions: ["Boil pasta", "Make Alfredo sauce", "Mix and cook", "Serve warm"],
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "12 min"
  },
  {
    id: nanoid(),
    title: "Sweet and Sour Tofu",
    category: "Chinese",
    chef: "Chef Mei",
    description: "Delicious tofu tossed in sweet and sour sauce.",
    image: "https://assets.zuckerjagdwurst.com/l0luiaj4bkj4bpodgx43k3w1nl0h/1110/701/55/true/center/tofusuesssauer-24.jpg?animated=false",
    ingredients: ["tofu", "bell peppers", "pineapple", "soy sauce", "vinegar"],
    instructions: ["Fry tofu", "Cook veggies", "Add sauce", "Mix and serve"],
    difficulty: "Medium",
    prepTime: "15 min",
    cookTime: "15 min"
  },
  {
    id: nanoid(),
    title: "Masala Dosa",
    category: "South Indian",
    chef: "Chef Ananya",
    description: "Crispy rice crepes filled with spicy potato filling.",
    image: "https://source.unsplash.com/featured/?masala-dosa",
    ingredients: ["rice", "urad dal", "potato", "mustard seeds", "curry leaves"],
    instructions: ["Prepare batter", "Ferment overnight", "Make filling", "Cook dosa and stuff"],
    difficulty: "Medium",
    prepTime: "8 hr (ferment)",
    cookTime: "15 min"
  },
  {
    id: nanoid(),
    title: "Idli Sambar",
    category: "South Indian",
    chef: "Chef Kavya",
    description: "Steamed rice cakes served with lentil vegetable stew.",
    image: "https://source.unsplash.com/featured/?idli-sambar",
    ingredients: ["rice", "urad dal", "toor dal", "vegetables", "tamarind"],
    instructions: ["Prepare batter", "Steam idlis", "Cook sambar", "Serve hot"],
    difficulty: "Easy",
    prepTime: "8 hr (ferment)",
    cookTime: "30 min"
  },
  {
    id: nanoid(),
    title: "Veg Sushi",
    category: "Japanese",
    chef: "Chef Akiko",
    description: "Nori rolls filled with seasoned rice and vegetables.",
    image: "https://source.unsplash.com/featured/?veg-sushi",
    ingredients: ["sushi rice", "nori", "cucumber", "avocado", "rice vinegar"],
    instructions: ["Cook rice", "Season rice", "Assemble rolls", "Slice and serve"],
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "30 min"
  },
  {
    id: nanoid(),
    title: "Falafel Wrap",
    category: "Middle Eastern",
    chef: "Chef Nour",
    description: "Crispy falafel wrapped with hummus and veggies.",
    image: "https://source.unsplash.com/featured/?falafel",
    ingredients: ["chickpeas", "parsley", "onion", "tahini", "flatbread"],
    instructions: ["Make falafel mix", "Fry balls", "Prepare wrap", "Serve"],
    difficulty: "Medium",
    prepTime: "25 min",
    cookTime: "20 min"
  },
  {
    id: nanoid(),
    title: "Vegetable Paella",
    category: "Spanish",
    chef: "Chef Isabel",
    description: "Traditional saffron rice dish with seasonal vegetables.",
    image: "https://source.unsplash.com/featured/?vegetable-paella",
    ingredients: ["rice", "saffron", "bell peppers", "peas", "vegetable broth"],
    instructions: ["Sauté veggies", "Add rice & broth", "Simmer till done", "Serve warm"],
    difficulty: "Hard",
    prepTime: "20 min",
    cookTime: "40 min"
  },
  {
    id: nanoid(),
    title: "Rasam",
    category: "South Indian",
    chef: "Chef Meena",
    description: "Spicy and tangy tomato-based South Indian soup.",
    image: "https://source.unsplash.com/featured/?rasam",
    ingredients: ["tomato", "tamarind", "black pepper", "garlic", "curry leaves"],
    instructions: ["Boil base", "Add tempering", "Simmer", "Serve hot"],
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "20 min"
  },
  {
    id: nanoid(),
    title: "Spinach Ricotta Cannelloni",
    category: "Italian",
    chef: "Chef Elisa",
    description: "Stuffed pasta tubes baked in tomato sauce and cheese.",
    image: "https://source.unsplash.com/featured/?cannelloni",
    ingredients: ["spinach", "ricotta", "pasta tubes", "tomato sauce", "cheese"],
    instructions: ["Prepare filling", "Stuff tubes", "Bake", "Serve hot"],
    difficulty: "Hard",
    prepTime: "35 min",
    cookTime: "30 min"
  },
  {
    id: nanoid(),
    title: "Hot & Sour Soup",
    category: "Chinese",
    chef: "Chef Anil",
    description: "Spicy tangy soup with tofu and vegetables.",
    image: "https://source.unsplash.com/featured/?hotsour-soup",
    ingredients: ["cabbage", "carrot", "vinegar", "soy sauce", "tofu"],
    instructions: ["Chop veggies", "Boil in stock", "Add sauce", "Serve hot"],
    difficulty: "Medium",
    prepTime: "10 min",
    cookTime: "20 min"
  },
  {
    id: nanoid(),
    title: "Pesto Pasta",
    category: "Italian",
    chef: "Chef Maria",
    description: "Pasta tossed in fragrant homemade basil pesto.",
    image: "https://source.unsplash.com/featured/?pesto-pasta",
    ingredients: ["pasta", "basil", "pine nuts", "olive oil", "garlic"],
    instructions: ["Blend pesto", "Boil pasta", "Mix and garnish", "Serve hot"],
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "12 min"
  },
  {
    id: nanoid(),
    title: "Kosambari",
    category: "South Indian",
    chef: "Chef Raghav",
    description: "Refreshing lentil salad with cucumber and coconut.",
    image: "https://source.unsplash.com/featured/?kosambari",
    ingredients: ["moong dal", "cucumber", "coconut", "green chili", "mustard seeds"],
    instructions: ["Soak dal", "Mix all ingredients", "Add tempering", "Serve chilled"],
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "0 min"
  },{
    id: nanoid(),
    title: "Vegetable Biryani",
    category: "Indian",
    chef: "Chef Sanjay",
    description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
    image: "https://source.unsplash.com/featured/?vegetable-biryani",
    ingredients: ["basmati rice", "carrot", "beans", "spices", "yogurt"],
    instructions: ["Sauté veggies", "Layer with rice", "Cook on dum", "Garnish and serve"],
    difficulty: "Hard",
    prepTime: "30 min",
    cookTime: "45 min"
  },
  {
    id: nanoid(),
    title: "Caprese Salad",
    category: "Italian",
    chef: "Chef Gianni",
    description: "Fresh tomatoes layered with mozzarella and basil.",
    image: "https://source.unsplash.com/featured/?caprese-salad",
    ingredients: ["tomato", "mozzarella", "basil", "olive oil", "balsamic vinegar"],
    instructions: ["Slice ingredients", "Layer them", "Drizzle oil and serve"],
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "0 min"
  },
  {
    id: nanoid(),
    title: "Medu Vada",
    category: "South Indian",
    chef: "Chef Latha",
    description: "Crispy lentil donuts served with chutney and sambar.",
    image: "https://source.unsplash.com/featured/?medu-vada",
    ingredients: ["urad dal", "ginger", "green chili", "curry leaves", "oil"],
    instructions: ["Soak and grind dal", "Shape vadas", "Deep fry", "Serve with chutneys"],
    difficulty: "Medium",
    prepTime: "8 hr",
    cookTime: "25 min"
  },
  {
    id: nanoid(),
    title: "Greek Salad",
    category: "Greek",
    chef: "Chef Nikos",
    description: "Crunchy salad with feta, olives, cucumber, and tomatoes.",
    image: "https://source.unsplash.com/featured/?greek-salad",
    ingredients: ["cucumber", "tomato", "onion", "olives", "feta cheese"],
    instructions: ["Chop veggies", "Mix with feta", "Add dressing", "Serve chilled"],
    difficulty: "Easy",
    prepTime: "10 min",
    cookTime: "0 min"
  },
  {
    id: nanoid(),
    title: "Bisibele Bath",
    category: "South Indian",
    chef: "Chef Ramesh",
    description: "Spiced lentil rice dish from Karnataka.",
    image: "https://source.unsplash.com/featured/?bisibelebath",
    ingredients: ["rice", "toor dal", "vegetables", "tamarind", "bisibele masala"],
    instructions: ["Cook rice and dal", "Mix with veggies and masala", "Simmer and serve"],
    difficulty: "Hard",
    prepTime: "20 min",
    cookTime: "40 min"
  },
  {
    id: nanoid(),
    title: "Stuffed Bell Peppers",
    category: "Continental",
    chef: "Chef Emma",
    description: "Bell peppers filled with spiced rice and veggies.",
    image: "https://source.unsplash.com/featured/?stuffed-peppers",
    ingredients: ["bell peppers", "rice", "corn", "black beans", "spices"],
    instructions: ["Prepare filling", "Stuff peppers", "Bake", "Serve hot"],
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "30 min"
  }
]);
    return (
        <RecipeContext.Provider value={{recipe,setRecipe}}>
            {children}
        </RecipeContext.Provider>
    )
}

