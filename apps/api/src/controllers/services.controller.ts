import { Request, Response } from 'express';

// Services list placeholder endpoint for future database/CMS dynamic integration
const placeholderServices = [
  { slug: 'income-tax-return', title: 'Income Tax Return (ITR)' },
  { slug: 'gst-registration-returns', title: 'GST Registration & Returns' },
  { slug: 'tds-tcs-compliance', title: 'TDS & TCS Compliance' },
  { slug: 'accounting-bookkeeping', title: 'Accounting & Bookkeeping' },
  { slug: 'company-llp-compliance', title: 'Company / LLP Compliance' },
  { slug: 'roc-mca-filing', title: 'ROC & MCA Filing' },
  { slug: 'payroll-services', title: 'Payroll Services' },
  { slug: 'tax-planning-consultancy', title: 'Tax Planning & Consultancy' }
];

export function getServices(_req: Request, res: Response): void {
  res.status(200).json({
    success: true,
    data: placeholderServices
  });
}

export function getServiceBySlug(req: Request, res: Response): void {
  const { slug } = req.params;
  const service = placeholderServices.find((s) => s.slug === slug);
  if (!service) {
    res.status(404).json({
      success: false,
      message: `Service with slug '${slug}' not found.`
    });
    return;
  }
  res.status(200).json({
    success: true,
    data: service
  });
}
