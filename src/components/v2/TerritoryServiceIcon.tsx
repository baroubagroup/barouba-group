import { 
  Globe2, 
  Cpu, 
  Megaphone, 
  Smartphone, 
  GraduationCap 
} from 'lucide-react';

interface TerritoryServiceIconProps {
  iconType: 'globe' | 'cpu' | 'megaphone' | 'smartphone' | 'graduation';
  size?: number;
  className?: string;
}

export default function TerritoryServiceIcon({ iconType, size = 22, className }: TerritoryServiceIconProps) {
  switch (iconType) {
    case 'globe':
      return <Globe2 size={size} className={className} />;
    case 'cpu':
      return <Cpu size={size} className={className} />;
    case 'megaphone':
      return <Megaphone size={size} className={className} />;
    case 'smartphone':
      return <Smartphone size={size} className={className} />;
    case 'graduation':
      return <GraduationCap size={size} className={className} />;
    default:
      return <Globe2 size={size} className={className} />;
  }
}
