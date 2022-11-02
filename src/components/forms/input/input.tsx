import { InputHTMLAttributes } from 'react';
import { Icon } from '../../icon/icon';
import './input.styles.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
  iconColor?: string;
}

export const Input = (props: InputProps) => {
  const { label, error, icon, className, iconColor = '#000', ...rest } = props;

  return (
    <label className="h-[40px] w-[360px]">
      <div
        className={`ri-xl flex h-full items-center gap-4 overflow-hidden rounded-full bg-background-base px-3 py-1.5 text-black ${className}`}
      >
        <Icon name="search-line" className={`text-black`} />
        <input
          type="text"
          className="flex-1 bg-transparent font-sans text-xs focus:outline-0"
          {...rest}
        />
      </div>
    </label>
  );
};
