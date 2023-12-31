// import Booking from "../models/Booking.js";

// //create new booking
// export const createBooking = async (req, res) => {
//   const newBooking = new Booking(req.body);
//   try {
//     const savedBooking = await newBooking.save();
//     res.status(200).json({success: true, message: "Your tour is booked", data: savedBooking});
//   } catch (err) {
//     res.status(500).json({success: false, message: "Internal server error"});
//   }
// };

// //get single booking
// // export const getBooking = async (req, res) => {
// //   const id = req.params.id;

// //   try {
// //     const book = await Booking.findById(id);
// //     res.status(200).json({success: true, message: "Successfull", data: book});
// //   } catch (err) {
// //     res.status(404).json({success: false, message: "Not found"});
// //   }
// // };


// export const getBooking = async (req, res) => {
//   const userId = req.params.userId;

//   try {
//     const book = await Booking.findOne({ userId });
//     if (!book) {
//       return res.status(404).json({ success: false, message: "Booking not found" });
//     }
//     res.status(200).json({ success: true, message: "Successful", data: book });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

// //get all booking
// export const getAllBooking = async (req, res) => {
//   try {
//     const books = await Booking.find();
//     res.status(200).json({success: true, message: "Successfull", data: books});
//   } catch (err) {
//     res.status(500).json({success: false, message: "Internal server error"});
//   }
// };

import Booking from "../models/Booking.js";

export const newBook = async(req,res)=>
{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json({ success: true , message: 'Booking success',data:savedBooking})

    } catch (err) {
         res.status(500).json({ success: false , message: 'server error'})
    }
}

export const getBooking = async(req, res)=>
{
    try{
    const userId = new RegExp(req.query.userId)
    const book = await Booking.find({"userId": userId});
    res.status(200).json({ success: true , message: 'Booking data',data:book})
    }
    catch(err)
    {
        res.status(404).json(
                {
                    message:'not found', success:false
                }
            )
    }
}
export const getAllBooking = async(req, res)=>
{
    try{
    const books = await Booking.find();
    res.status(200).json({ success: true , message: 'Booking data',data:books})
    }
    catch(err)
    {
        res.status(500).json(
                {
                    message:'internal server error', success:false
                }
            )
    }
}
