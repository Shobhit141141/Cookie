import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());

// Configure CORS
app.use(cors({
  origin: 'https://cookie-bg8z.vercel.app', // your frontend URL
  credentials: true // allow cookies to be sent and received
}));

// Endpoint to set a cookie
app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'cookieValue', {
    httpOnly: true, // accessible only by the web server
    secure: true, // set to true if using https
    sameSite: 'none', // required for cross-site cookies
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  });
  res.send('Cookie has been set');
});

// Endpoint to get a cookie
app.get('/get-cookie', (req, res) => {
  const myCookie = req.cookies.myCookie;
  console.log("my cookie : ", myCookie);
  if (myCookie) {
    res.send(`Cookie value: ${myCookie}`);
  } else {
    res.send('No cookie found');
  }
});

// Base API endpoint
app.get('/', (req, res) => {
    res.send('Backend is working!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
