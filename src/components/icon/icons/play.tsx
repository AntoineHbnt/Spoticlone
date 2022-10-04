import { IconSVGProps } from '../icon';

function Play(props: IconSVGProps) {
  const { className, width, height, fill } = props;

  return (
    <svg width={width} height={height} className={className} viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
      ></path>
    </svg>
  );
}

export default Play;
