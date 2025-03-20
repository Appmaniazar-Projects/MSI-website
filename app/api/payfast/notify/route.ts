import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())
    
    // Verify the payment signature
    const signature = data.signature as string
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY
    const merchantId = process.env.PAYFAST_MERCHANT_ID
    
    // Create the signature string
    const signatureString = Object.entries(data)
      .filter(([key]) => key !== 'signature')
      .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
      .join('&')
    
    // Generate the signature
    const generatedSignature = crypto
      .createHash('md5')
      .update(signatureString + merchantKey)
      .digest('hex')
    
    // Verify the signature
    if (signature !== generatedSignature) {
      console.error('Invalid signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }
    
    // Process the payment notification
    const paymentStatus = data.payment_status as string
    const paymentId = data.m_payment_id as string
    const amount = data.amount as string
    const email = data.email_address as string
    
    // Here you would typically:
    // 1. Update your database with the payment status
    // 2. Send confirmation emails
    // 3. Update subscription status if applicable
    console.log('Payment Notification:', {
      paymentStatus,
      paymentId,
      amount,
      email
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing payment notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 