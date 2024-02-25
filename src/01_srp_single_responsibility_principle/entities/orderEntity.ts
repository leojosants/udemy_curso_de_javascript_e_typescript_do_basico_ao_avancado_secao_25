/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { ShoppingCart } from "./shoppingCartEntity";
import { OrderStatusType } from "../types/orderStatusType";
import { Messaging } from "../services/messagingService";
import { Persistency } from "../services/persintencyService";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class Order {
  private _orderStatus: OrderStatusType = 'open';
  private readonly cart: ShoppingCart;
  private readonly messaging: Messaging;
  private readonly persistency: Persistency;

  constructor(cart: ShoppingCart, messaging: Messaging, persistency: Persistency) {
    this.cart = cart;
    this.messaging = messaging;
    this.persistency = persistency;
  }

  public get orderStatus(): OrderStatusType {
    return this._orderStatus;
  }

  public checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio!');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total de R$${this.cart.totalItems()} foi recebido!`);
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
