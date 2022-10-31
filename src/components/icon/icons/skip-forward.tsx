import { IconSVGProps } from '../icon';

function SkipForward(props: IconSVGProps) {
  const { className, width, height, fill } = props;
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 16 16">
      <path
        fill={fill}
        d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"
      ></path>
    </svg>
  );
}

export default SkipForward;