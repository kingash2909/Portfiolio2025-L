import { NextResponse } from 'next/server'

// Health check endpoint
// Returns a simple JSON response indicating the application is running
export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Ashish Mishra Portfolio API is running successfully'
  })
}