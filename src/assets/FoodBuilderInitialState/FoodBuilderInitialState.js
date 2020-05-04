export const initialState = {
    disabledButton: true,
    menuTypeClicked: null,
    menuItemClicked: null,
    Burger: {
        Regular: {
            salad: 0,
            meet: 0,
            bacon: 0,
            cheese: 0,
            onion: 0,
            pickle: 0,
            tomato: 0,
            bread: 0
        },
        Sauces: {
            ketchup: false,
            mayo: false,
            bbqSauce: false,
            burgerSauce: false,
            mcdeezSecretSauce: false
        }
    },
    Pizza: {
        Regular: {
            tomatoSauce: false,
            regularCheese: false,
            mozzarella: false,
            parmesan: false,
            ham: false,
            sausage: false,
            bacon: false,
            tuna: false
        },
        Vegetables: {
            mushroom: false,
            onion: false,
            tomato: false,
            olive: false,
            zucchini: false,
            eggplant: false
        },
        Sauces: {
            ketchup: false,
            mayo: false,
            bbqSauce: false,
            burgerSauce: false,
            mcdeezSecretSauce: false
        }
    },
    Salad: {
        Vegetables: {
            tomato: false,
            lettuce: false,
            cucumber: false,
            spinach: false,
            olive: false,
            onion: false,
            corn: false,
            whiteCheese: false
        },
        Meet: {
            chickenBreast: false,
            steak: false, 
            bacon: false,
            tuna: false,
            slamon: false
        },
        Dressing: {
            honeyDressing: false,
            burgerDressing: false,
            regularOil: false,
            oliveOil: false,
            vinegar: false
        }
    },
    Wafel: {
        Regular: {
            nutela: false,
            honey: false,
            strawberryJam: false,
            blueberryJam: false,
            peachJam: false,
            biscuit: false,
            oreo: false,
            kitkat: false,
            chocolateChips: false,
            sprinkles: false,
            whipCream: false
        },
        Fruits: {
            banana: false,
            apple: false,
            cherry: false,
            blueberry: false,
            strawberry: false,
            peach: false,
            pineapple: false
        }
    },
    Additional: {
        
        Fried: {
            frenchFries: 0,
            wafelFries: 0,
            onionRings: 0,
            friedCheese: 0
        },
        Pie: {
            applePie: 0,
            blueberryPie: 0
        },
        Shakes: {
            vanilaShake: 0,
            chocolateShake: 0,
            strawberryShake: 0
        }
    }
}