/**
 * Vercel Serverless Function: /api/contact
 * Handles secure contact form submissions for Pratiksha Dhere's Portfolio.
 * 
 * Target Recipient: pratikshadhere07@gmail.com
 * Environment Variables required for production on Vercel:
 * - RESEND_API_KEY (Recommended): API key from resend.com
 * - FROM_EMAIL (Optional): Verified sender email, defaults to 'Portfolio Contact <onboarding@resend.dev>'
 * - RECIPIENT_EMAIL (Optional): Defaults to 'pratikshadhere07@gmail.com'
 */

module.exports = async (req, res) => {
  // Polyfill status & json for native Node.js environments (local dev / micro)
  if (typeof res.status !== 'function') {
    res.status = function (code) {
      res.statusCode = code;
      return res;
    };
  }
  if (typeof res.json !== 'function') {
    res.json = function (data) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      return res;
    };
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Contact submissions must use POST.'
    });
  }

  // Parse body
  let payload = req.body;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: 'Invalid JSON payload received.'
      });
    }
  }

  if (!payload || typeof payload !== 'object') {
    return res.status(400).json({
      success: false,
      error: 'Request body cannot be empty.'
    });
  }

  const { name, email, subject, message, _gotcha } = payload;

  // 1. Anti-spam honeypot detection
  if (_gotcha) {
    // Silently accept without sending to frustrate automated bot harvesters
    return res.status(200).json({
      success: true,
      message: 'Message processed.'
    });
  }

  // 2. Strict Server-Side Validation
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedEmail = typeof email === 'string' ? email.trim() : '';
  const trimmedSubject = typeof subject === 'string' ? subject.trim() : '';
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';

  if (!trimmedName || trimmedName.length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid full name (minimum 2 characters).'
    });
  }
  if (trimmedName.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Name cannot exceed 100 characters.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address (e.g., name@example.com).'
    });
  }
  if (trimmedEmail.length > 120) {
    return res.status(400).json({
      success: false,
      error: 'Email address cannot exceed 120 characters.'
    });
  }

  if (!trimmedSubject || trimmedSubject.length < 3) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a subject (minimum 3 characters).'
    });
  }
  if (trimmedSubject.length > 150) {
    return res.status(400).json({
      success: false,
      error: 'Subject cannot exceed 150 characters.'
    });
  }

  if (!trimmedMessage || trimmedMessage.length < 10) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a message with at least 10 characters.'
    });
  }
  if (trimmedMessage.length > 4000) {
    return res.status(400).json({
      success: false,
      error: 'Message is too long (maximum 4000 characters).'
    });
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || 'pratikshadhere07@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';
  const resendApiKey = process.env.RESEND_API_KEY;

  // 3. Verify Email Delivery Credentials
  if (!resendApiKey) {
    return res.status(503).json({
      success: false,
      error: 'Email service is not yet configured. Please set the RESEND_API_KEY environment variable in your Vercel Project Settings to enable live inbox delivery to ' + recipientEmail + '.'
    });
  }

  // 4. Dispatch Email via Resend REST API
  try {
    const formattedDate = new Date().toUTCString();
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeSubject = escapeHtml(trimmedSubject);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br/>');

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0c101d; color: #f1f5f9; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <div style="background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); padding: 24px 30px; text-align: left;">
          <h1 style="margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 0.5px;">New Portfolio Inquiry</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.85);">Received via Portfolio Contact Form &bull; ${formattedDate}</p>
        </div>
        
        <div style="padding: 30px;">
          <div style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; width: 110px; font-weight: 600; text-transform: uppercase;">From:</td>
                <td style="padding: 6px 0; color: #ffffff; font-size: 15px; font-weight: bold;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase;">Email:</td>
                <td style="padding: 6px 0; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase;">Subject:</td>
                <td style="padding: 6px 0; color: #e2e8f0; font-size: 15px;">${safeSubject}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 28px;">
            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Message Content:</p>
            <div style="background: rgba(255,255,255,0.04); border-left: 4px solid #6366f1; border-radius: 8px; padding: 18px; font-size: 14.5px; line-height: 1.7; color: #f8fafc;">
              ${safeMessage}
            </div>
          </div>

          <div style="text-align: center; padding-top: 10px;">
            <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(trimmedSubject)}" style="display: inline-block; background: #6366f1; color: #ffffff; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 14px rgba(99,102,241,0.4);">
              Reply Directly to ${safeName}
            </a>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); padding: 14px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06);">
          <p style="margin: 0; font-size: 12px; color: #64748b;">Pratiksha Dhere Portfolio Notification System &bull; Delivered to ${recipientEmail}</p>
        </div>
      </div>
    `;

    const emailText = `New Portfolio Inquiry from ${trimmedName} (${trimmedEmail})\n\nSubject: ${trimmedSubject}\nDate: ${formattedDate}\n\nMessage:\n${trimmedMessage}\n\n---\nDelivered to ${recipientEmail}`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: trimmedEmail,
        subject: `[Portfolio Inquiry] ${trimmedSubject} - from ${trimmedName}`,
        html: emailHtml,
        text: emailText
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendData);
      return res.status(resendResponse.status).json({
        success: false,
        error: resendData.message || 'Email delivery service rejected the request. Please try again later.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Email delivered successfully to inbox.',
      id: resendData.id
    });
  } catch (err) {
    console.error('Email dispatch exception:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while dispatching your message. Please try again or use direct email.'
    });
  }
};

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
