import express from 'express';
import cors from 'cors';
import { config } from './config';
import { contactRouter } from './routes/contact.routes';
import { servicesRouter } from './routes/services.routes';
import { errorHandler } from './middleware/errorHandler';

export function createApp() {
  const app = express();

  app.use(cors({ origin: config.corsOrigin }));
  app.use(express.json());

  // Health check
  app.get('/api/health', (_req, res) => {
    res.status(200).json({
      status: 'ok',
      service: 'JP FIN TAX SERVICES LLP API',
      timestamp: new Date().toISOString()
    });
  });

  // API Routes
  app.use('/api', contactRouter);
  app.use('/api', servicesRouter);

  // Error Handler
  app.use(errorHandler);

  return app;
}

if (process.env.NODE_ENV !== 'test') {
  const app = createApp();
  app.listen(config.port, () => {
    console.log(`[JP FIN TAX API] Server running on http://localhost:${config.port}`);
  });
}
