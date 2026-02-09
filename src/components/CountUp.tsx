import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const count = useCountUp({ end, duration, enabled: isInView });

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
