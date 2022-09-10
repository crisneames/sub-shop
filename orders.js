const orders = [];

export const getOrders = () => {
  // Add logic here to return a copy of your orders
  return orders.map((order) => ({ ...order }));
};

const getNewOrderId = () => {
  let highestOrderId = 0;
  if (orders.length > 0) {
    highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id;
  }
  return highestOrderId + 1;
};

export const addNewOrder = (order) => {
  console.log('New Order', order);
  const newId = getNewOrderId();
  order.id = newId;
  // Need to add logic
  orders.push(order);
  console.log(orders);
  document.dispatchEvent(new CustomEvent('stateChanged'));
};
