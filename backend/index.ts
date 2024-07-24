import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());

app.use(
  cors({
    origin: "https://cookie-bg8z.vercel.app",
    credentials: true,
  })
);

// Endpoint to set a cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("myCookie", "cookieValue", {
    httpOnly: true, // accessible only by the web server
    secure: true, // https
    sameSite: "none", //  cross-site cookies
  });
  res.status(200).json({ message: "Cookie Sent" });
});

// Endpoint to get a cookie
app.get("/get-cookie", (req, res) => {
  const myCookie = req.cookies.myCookie;
  console.log("my cookie : ", myCookie);
  if (myCookie) {
    res.status(200).json({ message: `Cookie value: ${myCookie}` });
  } else {
    res.send("No cookie found");
  }
});

// Base API endpoint
app.get("/", (req, res) => {
  res.send("Backend is working!");
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
