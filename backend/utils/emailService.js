// backend/utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

exports.sendOrderConfirmation = async (order, user) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Order Confirmation - සෝස ලංකා',
      html: `
        <h1>Thank you for your order!</h1>
        <p>Order ID: ${order._id}</p>
        <p>Total Amount: LKR ${order.totalAmount}</p>
        <p>Status: ${order.status}</p>
      `
    });
  } catch (error) {
    console.error('Error sending email:', error);
  }
};