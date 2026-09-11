import { Request, Response, NextFunction } from 'express';
import { contactService } from '../services/contact.service';

export async function submitContact(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const result = await contactService.handleSubmission(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function submitConsultation(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { fullName, phone, serviceCategory, notes } = req.body;
    const result = await contactService.handleSubmission({
      fullName,
      phone,
      email: 'consultation-request@jpfintax.local',
      serviceRequired: serviceCategory || 'General Consultation',
      message: notes || 'Direct quick consultation request'
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
