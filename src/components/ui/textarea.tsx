import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base transition-[border-color,box-shadow,background-color] duration-150 placeholder:text-muted-foreground focus-visible:border-accent/80 focus-visible:bg-accent/[0.025] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_hsl(var(--accent)/0.12)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
