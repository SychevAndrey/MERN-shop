import User from "../../models/User";
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "PUT":
      handlePutRequest(req, res);
      break;
    default:
      res.status(405).send("Method not supported");
  }
};

async function handleGetRequest(req, res) {
  if (!("authorization" in req.headers)) {
    res.status(401).send("No authorization token provided");
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const users = await User.find({ _id: { $ne: userId } });
    res.status(200).json(users);
  } catch (error) {
    res.status(403).send("Invalid token");
  }
}

async function handlePutRequest(req, res) {
  const { _id, role } = req.body;
  const updatedUser = await User.findOneAndUpdate(
    { _id },
    { role },
    { new: true }
  );
  res.status(203).json(updatedUser);
}
