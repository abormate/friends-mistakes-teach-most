const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial(this._meal && this._price) {
    if (this._meal) {
      return `Today's special is " + ${this._meal} + " for " + "$" + ${this._price}` 
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};
