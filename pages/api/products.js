// import products from "../../static/products.json";
import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  const { page, size } = req.query;
  const pageNumber = parseInt(page, 10);
  const sizeNumber = parseInt(size, 10);
  const totalDocs = await Product.countDocuments();
  const totalPages = Math.ceil(totalDocs / sizeNumber);
  const skips = sizeNumber * (pageNumber - 1);
  const products = await Product.find().skip(skips).limit(sizeNumber);
  res.status(200).json({ products, totalPages });
};
