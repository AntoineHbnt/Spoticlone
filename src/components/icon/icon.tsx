import { ComponentPropsWithoutRef } from 'react';
import Pause from './icons/pause';
import Play from './icons/play';

export enum IconSVG {
  Play = 'Play',
  Pause = 'Pause',
}

export interface IconSVGProps extends ComponentPropsWithoutRef<'svg'> {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

export interface IconProps extends ComponentPropsWithoutRef<'i'> {
  name?: string;
  className?: string;
  svg?: IconSVG;
  width?: number;
  height?: number;
  fill?: string;
}

export const Icon = (props: IconProps) => {
  const {
    name,
    className = '',
    svg,
    width,
    height,
    fill,
    'aria-label': ariaLabel,
    ...otherProps
  } = props;

  const svgIcon = {
    [IconSVG.Play]: <Play className={className} width={width} height={height} fill={fill} />,
    [IconSVG.Pause]: <Pause className={className} width={width} height={height} fill={fill} />,
  };

  if (svg) {
    return svgIcon[svg];
  }

  return (
    <i
      className={`ri-${name} ${className}`}
      role="img"
      aria-label={ariaLabel || name}
      {...otherProps}
    />
  );
};
