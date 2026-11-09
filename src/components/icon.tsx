import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Layers,
  Lock,
  ExternalLink,
} from "lucide-react";

const icons = {
  arrow: ArrowRight,
  check: Check,
  chevron: ChevronRight,
  clock: Clock,
  menu: Menu,
  close: X,
  spark: Sparkles,
  shield: ShieldCheck,
  trend: TrendingUp,
  layers: Layers,
  lock: Lock,
  external: ExternalLink,
};

export type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 18,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Component = icons[name];

  return <Component aria-hidden="true" size={size} strokeWidth={1.8} className={className} />;
}
