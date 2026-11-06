import { 
  Globe2, 
  Cpu, 
  Megaphone, 
  Smartphone, 
  GraduationCap,
  Target,
  Layers,
  Users,
  TrendingUp,
  Search,
  MessageSquare,
  Code2
} from 'lucide-react';

export type TerritoryIconType = 
  | 'globe' 
  | 'cpu' 
  | 'megaphone' 
  | 'smartphone' 
  | 'graduation' 
  | 'target' 
  | 'layers' 
  | 'users' 
  | 'trending-up' 
  | 'search' 
  | 'message-square'
  | 'code';

interface TerritoryServiceIconProps {
  iconType: TerritoryIconType | string;
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
    case 'target':
      return <Target size={size} className={className} />;
    case 'layers':
      return <Layers size={size} className={className} />;
    case 'users':
      return <Users size={size} className={className} />;
    case 'trending-up':
      return <TrendingUp size={size} className={className} />;
    case 'search':
      return <Search size={size} className={className} />;
    case 'message-square':
      return <MessageSquare size={size} className={className} />;
    case 'code':
      return <Code2 size={size} className={className} />;
    default:
      return <Globe2 size={size} className={className} />;
  }
}
