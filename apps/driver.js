'use strict';
const event = require('../lib/events');
const vendor =require('./vendor')

event.on('pickup', pickupEventHandler)
event.on('in-transit', inTransietEventHandler)
event.on('delivered', deliveredEvenHandler);


function OrdersHandler() {
    event.emit('pickup', {
        event: "pickup",
        time: new Date().toString(),
        payload:vendor
        
    })
};

function pickupEventHandler(payload) {
    console.log("EVENT", payload)
    console.log(`DRIVER : picked up ${payload.payload.orderID} `)
    setTimeout(() => {
        (event.emit('in-transit', payload), 1000)
    })
}

function inTransietEventHandler(payload) {
    payload.event = 'in-transit'
    payload.time = new Date().toString();
    console.log("EVENT", payload);
    setTimeout(() => {
        (event.emit('delivered', payload), 3000)
    })
}
function deliveredEvenHandler(payload) {
    payload.event = 'delivered'
    payload.time = new Date().toString();
    console.log(`DRIVER : delivered up ${payload.payload.orderID}`)
    console.log(`VENDOR : Thank you for delivering ${payload.payload.orderID}`)
    console.log("EVENT", payload);

}

module.exports = {OrdersHandler};