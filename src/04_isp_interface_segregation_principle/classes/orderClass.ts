/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { ShoppingCart } from "./shoppingCartClass";
import { OrderStatusType } from "../types/orderStatusType";
import { Messaging } from "../services/messagingService";
import { Persistency } from "../services/persintencyService";
import { CustomerOrder } from "../interfaces/CustomerProtocol";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class Order {
  private _orderStatus: OrderStatusType = 'open';
  private readonly cart: ShoppingCart;
  private readonly messaging: Messaging;
  private readonly persistency: Persistency;
  private readonly customer: CustomerOrder;

  constructor(cart: ShoppingCart, messaging: Messaging, persistency: Persistency, customer: CustomerOrder) {
    this.cart = cart;
    this.messaging = messaging;
    this.persistency = persistency;
    this.customer = customer;
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
    this.messaging.sendMessage(`Seu pedido com total de R$${this.cart.totalItemsWithDiscount()} foi recebido!`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente é:', this.customer.getName(), this.customer.getIDN());
  }
}
