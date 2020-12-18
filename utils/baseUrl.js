const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nuke-mern-shop.vercel.app"
    : "http://localhost:3000";

export default baseUrl;
