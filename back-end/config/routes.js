/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /createUser': 'UserController.createUser',
    'POST /login': 'UserController.login',
    'POST /createKamar': 'KamarController.createKamar',
    'GET /getAllKamar': 'KamarController.getAllKamar',
    'POST /createBooking': 'BookingController.createBooking',
    'GET /getAllBooking' : 'BookingController.getAllBooking',
    'GET /getCertainBooking' : 'BookingController.getCertainBooking',
    'PATCH /updateBookingStatus' : 'BookingController.updateBookingStatus',
    'DELETE /deleteBooking' : 'BookingController.deleteBooking'
};
