import { InputHTMLAttributes } from 'react';
import { Icon } from '../../icon/icon';
import './input.styles.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
}

export const Input = (props: InputProps) => {
  const { label, error, icon, className, ...rest } = props;

  return (
    <label className="height-[48px] w-[440px]">
      <div
        className={`ri-xl flex h-full items-center gap-4 overflow-hidden rounded-full bg-background-base px-3 text-white`}
      >
        <Icon name="search-line" />
        <input type="text" className="flex-1 font-sans text-sm" {...rest} />
      </div>
    </label>
  );
};
