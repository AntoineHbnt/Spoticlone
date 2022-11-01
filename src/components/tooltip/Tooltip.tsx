import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export function Tooltip(props: TooltipProps) {
  const { children, content, open, onOpenChange, defaultOpen } = props;

  return (
    <TooltipPrimitive.TooltipProvider delayDuration={300} skipDelayDuration={500}>
      <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side="top"
          align="center"
          className="mb-2 animate-fade-in rounded bg-background-elevated-base p-2 text-xs font-bold drop-shadow-md"
          {...props}
        >
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
}
