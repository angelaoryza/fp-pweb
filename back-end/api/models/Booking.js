/**
 * Booking.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

    attributes: {
      namaPenghuni : { type: 'string', required: true },
      noTelp: { type: 'string', required: true },
      noKerabat: { type: 'string', required: true },
      dateMulai : { type: 'string', required: true },
      durasi : { type: 'number', required: true },
      dateSelesai : { type: 'string', required: true },
      totalHarga : { type: 'number', required: true },
      ktp : { type: 'string', required: true },
      metodePembayaran : { type: 'string', required: true },
      idKamar : { type : 'string', required: true },
      userId : { type : 'string', required: true },
      status : { type : 'string', required: true }
    },
  
  };
  
  