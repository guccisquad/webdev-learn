class CoffeeMachine {
  constructor() {
    this.moneyCash = 0;
    this.coffeeMenu = [{id: 1, name: 'Американо', price: 10 },
                      {id: 2, name: 'Капучино', price: 15},
                      {id: 3, name: 'Латте', price: 20},
                      {id: 4, name: '123', price: 510}];
    this.currentCoffeeNumber = 0;
  }

  setCash(money) {
    if ((money === 1) || (money === 2) || (money === 5) || (money === 10) || (money === 50)) {
      this.moneyCash += money;
      console.log(`Ваш баланс: ${this.moneyCash} руб.`)
      return true;
    } else {
      console.log(`Аппарат принимает монеты 1, 2, 5, 10 руб. и купюры 10 и 50 руб.`)
      return false;
    }
  }

  getCoffeeMenu() {
    this.coffeeMenu.forEach(function(cup, i) {
      console.log(`${cup.id} - ${cup.name} ${cup.price}  руб`);
    });
  }

  checkNumber(num) {
    return (this.coffeeMenu.find(item => item.coffeeId === number) !== undefined) ? true : false;
  }

  checkMoney(coffeeNumber) {
    if (this.moneyCash < this.coffeeMenu[coffeeNumber].price)
      return false;
    else
      return true;
  }

  chooseCoffee(coffeeNumber) {
    if (this.checkNumber(coffeeNumber) && this.checkMoney(coffeeNumber - 1)) {
      this.currentCoffeeNumber = coffeeNumber;
      return true;
    } else
      return false;
  }

  getRemainCash() {
    return this.moneyCash - this.coffeeMenu[this.currentCoffeeNumber - 1].price;
  }
}
