"use client";
import React, { ReactNode, useCallback, useMemo, useState } from "react";

export type TTabProps = {
  tabItems: { id: string; label: string }[];
  tabContents: { id: string; content: ReactNode }[];
  initTabId?: string;
};

export const Tab: React.FC<Readonly<TTabProps>> = ({
  tabContents,
  tabItems,
  initTabId,
}) => {
  const [activeId, setActiveId] = useState<string | null>(initTabId || null);

  const renderTabItem = useCallback(
    (item: { id: string; label: string }) => (
      <button
        className={`border border-gray-300 border-b-0 p-3 mr-[-1px] ${
          activeId === item.id ? "text-black" : "text-gray-400"
        }`}
        onClick={() => setActiveId(item.id)}
        key={item.id}
      >
        {item.label}
      </button>
    ),
    [activeId]
  );

  const itemContent = useMemo(
    () => tabContents.find((t) => t.id === activeId)?.content,
    [activeId, tabContents]
  );

  return (
    <>
      {/* tab items */}
      <div className="flex border-b border-gray-200">
        {tabItems.map(renderTabItem)}
      </div>

      {/* tab content */}
      <div className="border border-gray-200 text-gray-400 p-4 mt-[-1px]">{itemContent}</div>
    </>
  );
};
