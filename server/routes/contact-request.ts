import { Router } from 'express';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const router = Router();

const contactRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  bestTimeToReach: z.string().optional(),
  contactsOf: z.string().min(10, "Please specify what contacts you need (minimum 10 characters)")
});

// Create transporter using environment variables
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'info@elpdata.com',
      pass: process.env.SMTP_PASS || process.env.BREVO_SMTP_KEY
    }
  });
};

// Log contact requests for tracking
const logContactRequest = (data: any) => {
  console.log('👥 CONTACT REQUEST RECEIVED:', {
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    company: data.company || 'Not provided',
    contactsOf: data.contactsOf,
    sentTo: 'info@elpdata.com'
  });
};

router.post('/api/contact-request', async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactRequestSchema.parse(req.body);
    
    // Log the contact request for tracking
    logContactRequest(validatedData);
    
    const transporter = createTransporter();
    
    // Email to ELP Data team - always sent to info@elpdata.com
    const adminEmailOptions = {
      from: process.env.SMTP_FROM || 'info@elpdata.com',
      to: 'info@elpdata.com',
      cc: 'info@elpdata.com', // Ensure delivery to info@elpdata.com
      subject: '👥 New Contact Request - ELP Data',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Industry Contact Request
          </h2>
          
          <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
            ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
            ${validatedData.bestTimeToReach ? `<p><strong>Best Time to Reach:</strong> ${validatedData.bestTimeToReach}</p>` : ''}
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Request Details</h3>
            <p><strong>Contacts Of:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #059669;">
              ${validatedData.contactsOf}
            </div>
          </div>
          
          <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #059669; font-weight: bold;">
              👥 URGENT: Respond within 24 hours with customized industry contact lists
            </p>
            <p style="margin: 5px 0 0 0; color: #059669; font-size: 14px;">
              This email was sent to info@elpdata.com for immediate action
            </p>
          </div>
        </div>
      `
    };
    
    // Confirmation email to user
    const userEmailOptions = {
      from: process.env.SMTP_FROM || 'info@elpdata.com',
      to: validatedData.email,
      subject: 'Contact Request Confirmation - ELP Data',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669 0%, #0ea5e9 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${validatedData.name}!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 18px;">Your contact request has been received</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #374151; margin-top: 0;">What happens next?</h2>
            
            <div style="display: flex; align-items: center; margin: 20px 0;">
              <div style="background-color: #d1fae5; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                <span style="color: #059669; font-weight: bold; font-size: 18px;">1</span>
              </div>
              <div>
                <h3 style="margin: 0; color: #374151;">Request Analysis (Within 2 hours)</h3>
                <p style="margin: 5px 0 0 0; color: #6b7280;">Our team will analyze your contact request and identify the best industry sources</p>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; margin: 20px 0;">
              <div style="background-color: #dbeafe; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                <span style="color: #0ea5e9; font-weight: bold; font-size: 18px;">2</span>
              </div>
              <div>
                <h3 style="margin: 0; color: #374151;">Contact Compilation (Within 24 hours)</h3>
                <p style="margin: 5px 0 0 0; color: #6b7280;">We'll compile targeted industry contact lists matching your requirements</p>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; margin: 20px 0;">
              <div style="background-color: #fef3c7; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                <span style="color: #f59e0b; font-weight: bold; font-size: 18px;">3</span>
              </div>
              <div>
                <h3 style="margin: 0; color: #374151;">List Delivery</h3>
                <p style="margin: 5px 0 0 0; color: #6b7280;">Receive your custom industry contact lists via email with targeting insights</p>
              </div>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Request Summary</h3>
              <p><strong>Contacts Of:</strong> ${validatedData.contactsOf}</p>
              ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
              ${validatedData.bestTimeToReach ? `<p><strong>Best Time to Reach:</strong> ${validatedData.bestTimeToReach}</p>` : ''}
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; margin: 0;">Need immediate assistance?</p>
              <p style="color: #059669; margin: 5px 0 0 0;">
                📧 <a href="mailto:info@elpdata.com" style="color: #059669;">info@elpdata.com</a> | 
                📞 <a href="tel:+13072242324" style="color: #059669;">(307) 224-2324</a>
              </p>
            </div>
          </div>
        </div>
      `
    };
    
    // Send both emails - priority to admin notification
    try {
      // Send admin notification first (priority)
      await transporter.sendMail(adminEmailOptions);
      console.log('✅ Contact request notification sent to info@elpdata.com');
      
      // Then send user confirmation
      await transporter.sendMail(userEmailOptions);
      console.log('✅ Confirmation email sent to user:', validatedData.email);
      
    } catch (emailError) {
      console.error('❌ Email sending error:', emailError);
      // Even if emails fail, log the request for manual follow-up
      console.log('📝 MANUAL FOLLOW-UP REQUIRED for contact request:', validatedData);
    }
    
    res.json({ 
      success: true, 
      message: 'Contact request submitted successfully',
      notificationSent: 'info@elpdata.com'
    });
    
  } catch (error) {
    console.error('Error processing contact request:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors: error.errors 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

export default router;