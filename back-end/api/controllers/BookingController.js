/**
 * BookingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 module.exports = {
    // create
    createBooking: async function(req, res){
      const params = req.allParams()
      if(!params) return res.badRequest({err: 'No data is sent'})
      // creating new booking
      await Booking.create({
          namaPenghuni: params.namaPenghuni,
          noTelp: params.noTelp,
          noKerabat: params.noKerabat,
          dateMulai: params.dateMulai,
          durasi: params.durasi,
          dateSelesai : params.dateSelesai,
          totalHarga : params.totalHarga,
          ktp : params.ktp,
          metodePembayaran : params.metodePembayaran,
          idKamar : params.idKamar,
          userId : params.userId,
          status : params.status,
      }, (err, result) => {
          if(err) return res.serverError(err)
          return res.ok(result)
      })
    },
    
    // get all kamar
    getAllBooking: async function(req, res){
    const params = req.allParams()
    if(!params) return res.badRequest({err: 'No data is sent'})
    try {
        var certainBooking = await Booking.find({
            where: {userId : params.userId},
          });
          // no data
          if(!certainBooking.length) return res.serverError({err: 'No data found'})
          return res.ok(certainBooking)
    }
    catch (error) {
        return res.badRequest({err: error})
    }
    }
  
  };
  
  