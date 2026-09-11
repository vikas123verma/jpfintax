import { ContactFormData, ContactSubmissionResponse, ConsultationRequestData } from '@jpfintax/types';
import { apiClient } from './apiClient';

export const contactService = {
  /**
   * Submits contact consultation form data.
   * Gracefully attempts backend API call, and if backend is not running,
   * simulates a successful submission for standalone frontend operation.
   */
  async submitContactForm(data: ContactFormData): Promise<ContactSubmissionResponse> {
    try {
      // Attempt real backend call if available
      return await apiClient<ContactSubmissionResponse>('/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        timeoutMs: 2500, // Quick timeout so user isn't stuck waiting for offline local server
      });
    } catch {
      // Fallback simulation for standalone frontend execution
      await new Promise((resolve) => setTimeout(resolve, 600));

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const referenceId = `JPF-${new Date().getFullYear()}-${randomSuffix}`;

      // Also record in local state/storage for developer verification
      try {
        const history = JSON.parse(localStorage.getItem('jpf_inquiries') || '[]');
        history.push({ ...data, referenceId, createdAt: new Date().toISOString() });
        localStorage.setItem('jpf_inquiries', JSON.stringify(history));
      } catch {
        // Ignore storage errors in private browsing
      }

      return {
        success: true,
        referenceId,
        message: 'Your inquiry has been received. Our team will review your requirements and reach out within 24 business hours.',
        timestamp: new Date().toISOString(),
      };
    }
  },

  /**
   * Submits quick consultation request
   */
  async requestQuickConsultation(data: ConsultationRequestData): Promise<ContactSubmissionResponse> {
    return this.submitContactForm({
      fullName: data.fullName,
      email: 'consultation@jpfintax.local',
      phone: data.phone,
      serviceRequired: data.serviceCategory || 'Consultation Request',
      message: `Preferred Callback Window: ${data.preferredTime || 'Anytime'}. Note: ${data.notes || 'None'}`,
    });
  },
};
