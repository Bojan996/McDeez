export const foodBuilderState = () => {
    return {
        isBoolean: false,
        disabledButton: true,
        menuTypeClicked: null,
        menuItemClicked: null,
        ingredients: [],
        totalPrice: 1,
        Burger: {
            Regular: {
                salad: 0,
                meet: 0,
                bacon: 0,
                cheese: 0,
                bread: 0,
                onion: 0,
                pickle: 0,
                tomato: 0
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
                olive: false,
                tomato: false,
                corn: false
            },
            Sauces: {
                ketchup: false,
                mayo: false,
                burgerSauce: false,
                mcdeezSecretSauce: false
            }
        },
        Salad: {
            Vegetables: {
                lettuce: false,
                tomato: false,
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
                pestoDressing: false
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
                sprinkles: false
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
        }
    }
}

export const foodMakerState = () => {
    return {
        showDrawer: false,
        drawerClicked: '',
        drawerIngredients: '',
        drawerPrice: '',
        showBuilder: false,
        whichBuidler: null,
        showOrderSummary: false,
        totalPriceDrinksAdditionals: 0,
        drinksAdditionals: {},
        drinks: {
            Cola: {
                price: '1.25',
                amount: 0
            },
            Pepsi: {
                price: '1.25',
                amount: 0
            },
            Sprite: {
                price: '1.00',
                amount: 0
            },
            Fanta: {
                price: '1.00',
                amount: 0
            },
            Water: {
                price: '1.50',
                amount: 0
            },
            Juice: {
                price: '1.75',
                amount: 0
            }
        },
        additionals: {
            friesFrench: {
                price: '1.25',
                amount: 0
            },
            wafelsFries: {
                price: '1.75',
                amount: 0
            },
            cheeseFried: {
                price: '1.75',
                amount: 0
            },
            chocolateIceCream: {
                price: '2.00',
                amount: 0
            },
            strawberryIceCream: {
                price: '2.00',
                amount: 0
            },
            blueberryIceCream: {
                price: '2.25',
                amount: 0
            }
        }
    }
}