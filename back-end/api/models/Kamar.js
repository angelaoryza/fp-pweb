/**
 * Kamar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nomor: { type: 'string', required: true },
    fasilitas : { type: 'json', columnType: 'array' },
    harga: { type: 'number', required: true},
  },

};

