import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Log the received data (optional)
    console.log('Contact Form Submission:', { name, email, subject, message });

    return NextResponse.json({ message: 'Form submission received successfully' });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Failed to process form' },
      { status: 500 }
    );
  }
}



// import { NextResponse } from 'next/server';
// //import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const { name, email, subject, message, to } = await request.json();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: to,
//       subject: `Contact Form: ${subject}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
        
//         Message:
//         ${message}
//       `,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { error: 'Failed to send email' },
//       { status: 500 }
//     );
//   }
// } 