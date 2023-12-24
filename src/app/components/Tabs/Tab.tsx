import React, { useState } from "react";

const Tab = ({
  label,
  isActive,
  onClick,
}: {
  label: any;
  isActive: any;
  onClick: any;
}) => (
  <li className={`me-2 ${isActive ? "active" : ""}`}>
    <a
      href="#"
      onClick={onClick}
      className={`inline-block p-4 rounded-t-lg ${
        isActive
          ? "text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500"
          : "hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
      }`}
    >
      {label}
    </a>
  </li>
);

const TabList = ({
  tabs,
  activeTab,
  onTabClick,
}: {
  tabs: any;
  activeTab: any;
  onTabClick: any;
}) => (
  <ul className="flex flex-wrap text-sm font-medium text-center text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    {tabs.map((tab: any, index: any) => (
      <Tab
        key={index}
        label={tab.label}
        isActive={activeTab === index}
        onClick={() => onTabClick(index)}
      />
    ))}
  </ul>
);

const TabPanel = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

export const Tabs = ({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabList tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <TabPanel>{tabs[activeTab].content}</TabPanel>
    </div>
  );
};
