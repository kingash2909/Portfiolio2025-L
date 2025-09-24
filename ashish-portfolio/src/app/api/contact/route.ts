import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// API route for handling contact form submissions
// Receives form data and sends it via email using Nodemailer
export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json()
    
    // Extract form data fields
    const { name, email, subject, message } = body
    
    // Basic validation to ensure all fields are provided
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // Check if email environment variables are set
    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    
    // If email credentials are not set, log the form data instead
    if (!gmailUser || !gmailAppPassword) {
      console.warn('Email credentials not set. Logging form data instead.')
      console.log('Contact Form Submission:', { name, email, subject, message })
      
      // Return success response even if email is not sent
      return NextResponse.json(
        { message: 'Message received! I\'ll get back to you soon.' },
        { status: 200 }
      )
    }
    
    // Configure nodemailer transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })
    
    // Define email options for the contact form submission
    const mailOptions = {
      from: gmailUser,
      to: 'i.m.ashishhh@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact Form: ${subject}`,
      // Plain text version of the email
      text: `
        You have received a new message from your portfolio website contact form.
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      // HTML version of the email
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }
    
    // Send the email using the configured transporter
    await transporter.sendMail(mailOptions)
    
    // Return success response to the client
    return NextResponse.json(
      { message: 'Message sent successfully! I\'ll get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Contact Form Error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}