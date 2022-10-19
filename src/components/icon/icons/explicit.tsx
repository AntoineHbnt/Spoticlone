import { IconSVGProps } from '../icon';

export const ExplicitIcon = (props: IconSVGProps) => {
  const {
    className = '',
    width = 16,
    height = 16,
    fill = 'hsla(0,0%,100%,.6)',
    ...otherProps
  } = props;

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-sm  ${className}`}
      style={{ width: width, height: height, backgroundColor: fill }}
    >
      <span className="text-[9px] font-bold text-[#121212]">E</span>
    </span>
  );
};
