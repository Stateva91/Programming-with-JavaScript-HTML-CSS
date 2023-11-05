function fruit(nameOfFruit, grams, pricePerKg) {
    const kgOfFruits = grams / 1000;
    const totalPrice = kgOfFruits * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kgOfFruits.toFixed(2)} kilograms ${nameOfFruit}.`)
}

fruit('orange', 2500, 1.80);