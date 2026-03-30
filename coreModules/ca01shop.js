const EventEmitter = require('events');
class ShopEmitter extends EventEmitter {}
const shop = new ShopEmitter();
const orderID = "ORD-2024";

shop.on('order-placed',(id)=>{
    console.log("[ORDER PLACED]     Order " + orderID + " has been placed");
});

shop.on('order-shipped', (id)=>{
    console.log("[ORDER SHIPPED]    Order " + orderID + " is on its way!");
});

shop.once('order-delivered', (id)=>{
    console.log("[OREDR DELIVERED]  Order " + orderID + " has been delivered.");
    console.log("[THANK YOU]        Thank you for shopping with us! (fires once)");
});

shop.emit('order-placed', orderID);
shop.emit('order-shipped', orderID);
shop.emit('order-delivered', orderID);