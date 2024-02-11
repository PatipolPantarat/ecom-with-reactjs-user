interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`max-w-[1440px] mx-auto ${className}`}>
      {children}
    </section>
  );
};
