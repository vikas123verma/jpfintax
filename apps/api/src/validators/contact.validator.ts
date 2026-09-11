import { Request, Response, NextFunction } from 'express';

export function validateContactSubmission(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { fullName, email, phone, serviceRequired, message } = req.body;

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    res.status(400).json({
      success: false,
      message: 'A valid full name (minimum 2 characters) is required.'
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    res.status(400).json({
      success: false,
      message: 'A valid email address is required.'
    });
    return;
  }

  const phoneRegex = /^[0-9+ -]{8,15}$/;
  if (!phone || !phoneRegex.test(phone.trim())) {
    res.status(400).json({
      success: false,
      message: 'A valid contact phone number is required.'
    });
    return;
  }

  if (!serviceRequired || typeof serviceRequired !== 'string') {
    res.status(400).json({
      success: false,
      message: 'Please select the service required.'
    });
    return;
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    res.status(400).json({
      success: false,
      message: 'A message of at least 5 characters is required.'
    });
    return;
  }

  next();
}
