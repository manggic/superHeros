import dbConnect from "../../db/dbconnect";
import Hero from "../../models/Hero";

dbConnect();

export default async function handler(req, res) {
  try {
    const hero = await Hero.findByIdAndUpdate({ _id: req.body.id }, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, hero: hero });
  } catch (error) {
    res.status(200).json({ success: false, msg: error });
  }
}
