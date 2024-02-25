/* - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - */
export abstract class Discount {
  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;

  public calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  public calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  public calculate(price: number): number {
    return price;
  }
}
