import { getGreeting } from '../../utils/pages/home';

export const Greetings = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-3xl font-bold text-white">{getGreeting()}</h2>
    </section>
  );
};
