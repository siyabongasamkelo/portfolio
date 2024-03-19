import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.all("*", (req, res) => {
//   res.status(400).json("404 Page not found");
// });

app.post("/send-message", (req, res) => {
  try {
    const myEmail = process.env.MYEMAIL;
    const { message, email } = req.body;

    console.log(req.body);

    if (!message) return res.status(400).json("message is required");
    if (!email) return res.status(400).json("email is required");

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const options = {
      from: "siyabongasamkelociam@outlook.com",
      to: `${myEmail}`,
      subject: "Luxurious Watches Subscription Email",
      text: `Hellow syah someone sent you a message from your website that says ${message}`,
    };

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(400).json(err);
      }
      res.status(200).json("Message sent Successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
