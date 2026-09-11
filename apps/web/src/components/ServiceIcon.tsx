import React from 'react';
import {
  FileText,
  Receipt,
  Percent,
  Calculator,
  Building2,
  ClipboardCheck,
  Users,
  TrendingUp,
  ShieldCheck,
  LucideProps
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'FileText':
      return <FileText {...props} />;
    case 'Receipt':
      return <Receipt {...props} />;
    case 'Percent':
      return <Percent {...props} />;
    case 'Calculator':
      return <Calculator {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'ClipboardCheck':
      return <ClipboardCheck {...props} />;
    case 'Users':
      return <Users {...props} />;
    case 'TrendingUp':
      return <TrendingUp {...props} />;
    default:
      return <ShieldCheck {...props} />;
  }
};
