import { Tab as TabType } from './component-shelf';

export interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

export interface TabsProps {
  tabs: TabType[];
  onChange: (index: number) => void;
  className?: string;
}

export const Tab = (props: TabProps) => {
  const { title, active, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`rounded-full py-1 px-3 transition-colors duration-200 ease-in ${
        active ? 'bg-white' : 'bg-background-tinted-base hover:bg-background-tinted-highlight'
      }`}
    >
      <span className={`text-sm ${active ? 'text-black' : 'text-white'}`}>{title}</span>
    </button>
  );
};

export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { tabs, onChange, className } = props;

  const handleClick = (index: number) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          active={activeTab === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
