import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SeoTextProps {
  children: ReactNode;
  className?: string;
}

function TextSEO ({ children, className = '' }: SeoTextProps) {
  return (
    <div id="text-seo" className={cn([className, ''])}
      dangerouslySetInnerHTML={{ __html: children || '' }}
    />
  );
};

export default TextSEO; 