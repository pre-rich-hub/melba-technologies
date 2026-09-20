import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key")

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

    const { name, email, company, message, source, referrer, landingPage, utm_source, utm_medium, utm_campaign, utm_term, utm_content } = data
    const attribution = [
      `How they found us: ${source || "not specified"}`,
      `Referrer: ${referrer || "direct / none"}`,
      `Landing page: ${landingPage || "unknown"}`,
      `UTM: source=${utm_source || "-"} medium=${utm_medium || "-"} campaign=${utm_campaign || "-"} term=${utm_term || "-"} content=${utm_content || "-"}`,
    ].join("\n")

    const { data: resData, error } = await resend.emails.send({
      from: 'Melba Technology <onboarding@resend.dev>',
      to: ['hellomelbatechnology@gmail.com'],
      subject: `Project Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}\n\n--- Lead source ---\n${attribution}`,
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
