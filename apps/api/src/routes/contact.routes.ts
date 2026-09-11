import { Router } from 'express';
import { submitContact, submitConsultation } from '../controllers/contact.controller';
import { validateContactSubmission } from '../validators/contact.validator';

export const contactRouter = Router();

contactRouter.post('/contact', validateContactSubmission, submitContact);
contactRouter.post('/consultation', submitConsultation);
