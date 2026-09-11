import { Router } from 'express';
import { getServices, getServiceBySlug } from '../controllers/services.controller';

export const servicesRouter = Router();

servicesRouter.get('/services', getServices);
servicesRouter.get('/services/:slug', getServiceBySlug);
