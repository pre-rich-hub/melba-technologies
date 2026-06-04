import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Log the submission for debugging
    console.log("Contact form submission:", data)

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Email will not be delivered.")
      // Simulate success for local testing/UX
      await new Promise(resolve => setTimeout(resolve, 1000))
      return NextResponse.json({
        success: true,
        message: "Submission received (Mock mode - API Key missing)"
      })
    }

    const { name, email, company, message } = data

    const { data: resData, error } = await resend.emails.send({
      from: 'Melba Technology <onboarding@resend.dev>',
      to: ['hellomelbatechnology@gmail.com'],
      subject: `Project Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
    })

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json({ success: true, message: "Email sent successfully", id: resData?.id })
  } catch (error: any) {
    console.error("Error in contact API:", error)
    return NextResponse.json({
      success: false,
      error: error.message || "Failed to send email"
    }, { status: 500 })
  }
}
