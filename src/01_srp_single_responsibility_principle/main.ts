/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { Messaging } from "./services/messagingService";
import { Order } from "./entities/orderEntity";
import { Persistency } from "./services/persintencyService";
import { Product } from "./entities/productEntity";
import { ShoppingCart } from "./entities/shoppingCartEntity";

/* - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - */
(function main() {
  const shoppingCart = new ShoppingCart();
  const messaging = new Messaging();
  const persistency = new Persistency();
  const order = new Order(shoppingCart, messaging, persistency);
  const shirtProduct = new Product('Camisa', 49.90);
  const notebookProduct = new Product('Caderno', 9.3330);
  const pencilProduct = new Product('Lápis', 1.59);

  shoppingCart.addItem(shirtProduct);
  shoppingCart.addItem(notebookProduct);
  shoppingCart.addItem(pencilProduct);

  console.log('Itens:', shoppingCart.items);
  console.log(`Total: ${shoppingCart.totalItems()}`);
  console.log(`Status: ${order.orderStatus}`);

  order.checkout();

  console.log(`Status: ${order.orderStatus}`);
})()
