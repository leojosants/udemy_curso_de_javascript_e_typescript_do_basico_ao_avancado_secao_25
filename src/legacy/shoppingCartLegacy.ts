/* - - - - - - - - - - - - - - - types - - - - - - - - - - - - - - - */
type CardItem = {
  name: string;
  price: number;
}

type OrderStatus = 'open' | 'closed';

/* - - - - - - - - - - - - - - - classes - - - - - - - - - - - - - - - */
export class ShoppingCartLegacy {
  private readonly _items: CardItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  public get items(): Readonly<CardItem[]> {
    return this._items;
  }

  public get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public addItem(item: CardItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  public totalItems(): number {
    return Number(this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2));
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public sendMessage(message: string): void {
    console.log('Mensagem:', message);
  }

  public saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  public clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compra zerado!');
  }

  public checkout(): void {
    if (this.isEmpty()) {
      console.log('Carrinho vazio!');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de R$${this.totalItems()} foi recebido!`);
    this.saveOrder();
    this.clear();
  }
}

/* - - - - - - - - - - - - - - - functions - - - - - - - - - - - - - - - */
export function instanceateShoppingCart(): ShoppingCartLegacy {
  return new ShoppingCartLegacy();
}

export function runMain(): void {
  const shoppingCart = instanceateShoppingCart();
  shoppingCart.addItem({ name: 'Camisa', price: 49.90 });
  shoppingCart.addItem({ name: 'Caderno', price: 9.3330 });
  shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
  console.log('Itens:', shoppingCart.items);
  console.log(`Total: ${shoppingCart.totalItems()}`);
  console.log(`Status: ${shoppingCart.orderStatus}`);
  shoppingCart.checkout();
  console.log(`Status: ${shoppingCart.orderStatus}`);
}

/* - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - */
runMain();
