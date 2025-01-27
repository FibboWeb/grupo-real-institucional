interface FeatureSectionProps {
  children?: React.ReactNode;
  badge?: string;
  title?: string;
  content?: string;
}

export default function FeatureSection({ children, badge, title, content }: FeatureSectionProps) {
  return (
    <div>
      {badge && <span>{badge}</span>}
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {children}
    </div>
  );
}
