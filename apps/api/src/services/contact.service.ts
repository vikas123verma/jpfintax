import { ContactFormData, ContactSubmissionResponse } from '@jpfintax/types';

export class ContactService {
  public async handleSubmission(data: ContactFormData): Promise<ContactSubmissionResponse> {
    const referenceId = `JPF-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    console.log(`[Contact Lead Captured]: Ref #${referenceId}`, {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      service: data.serviceRequired,
      message: data.message
    });

    return {
      success: true,
      message: 'Thank you for reaching out to JP FIN TAX SERVICES LLP. Our consultation team will contact you promptly.',
      referenceId,
      timestamp: new Date().toISOString()
    };
  }
}

export const contactService = new ContactService();
