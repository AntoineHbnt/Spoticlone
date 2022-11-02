import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  textColor?: string;
  backgroundColor?: string;
}

export function Tooltip(props: TooltipProps) {
  const {
    children,
    content,
    open,
    onOpenChange,
    defaultOpen,
    side = 'top',
    textColor = 'white',
    backgroundColor = '#242424',
  } = props;

  return (
    <TooltipPrimitive.TooltipProvider delayDuration={300} skipDelayDuration={500}>
      <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side={side}
          align="center"
          className="my-2 animate-fade-in rounded p-2 text-xs font-bold drop-shadow-md"
          style={{ color: textColor, backgroundColor }}
          {...props}
        >
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
}
