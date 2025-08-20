import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

/*
// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// HTML email template
const generateEmailTemplate = (name: string, email: string, userMessage: string) => `
  <div>
    <h2>New Message Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${userMessage}</p>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload: any, message: string) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: "Portfolio",
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error: any) {
    console.error('Error while sending email:', error.message);
    return false;
  }
}
*/

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    // במקום לשלוח מייל, נחזיר תשובה עם הדאטה שקיבלנו
    return NextResponse.json({
      success: true,
      message: 'Message received (email sending disabled for now).',
      data: { name, email, userMessage }
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
}
