import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { to, applicationType, ...formData } = data;
    
    // Configure nodemailer with your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format application data for email
    const formatApplicationData = () => {
      let formattedData = '';
      
      for (const [key, value] of Object.entries(formData)) {
        if (value) { // Only include non-empty values
          // Format keys from camelCase to Title Case with spaces
          const formattedKey = key.replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
            
          formattedData += `<p><strong>${formattedKey}:</strong> ${value}</p>`;
        }
      }
      
      return formattedData;
    };

    // Create email content
    const mailOptions = {
      from: `MSI Website <${process.env.EMAIL_USER}>`,
      to: to || process.env.DEFAULT_EMAIL_TO || 'appmaniazar@gmail.co.za',
      subject: `New ${applicationType.charAt(0).toUpperCase() + applicationType.slice(1)} Application from MSI Website`,
      text: `New ${applicationType} application received. Please check the details in the HTML version.`,
      html: `
        <h2>New ${applicationType.charAt(0).toUpperCase() + applicationType.slice(1)} Application</h2>
        <div>${formatApplicationData()}</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
} 