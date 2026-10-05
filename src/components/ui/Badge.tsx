interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block border border-ink px-2 py-0.5 text-[10px] uppercase tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}
