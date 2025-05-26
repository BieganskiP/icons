"use client";
import * as Icons from "@/components/icons/icons";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const filteredIcons = Object.entries(Icons).filter(([key]) =>
    key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search icons..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-6 gap-3">
        {filteredIcons.map(([key, Icon]) => (
          <div
            key={key}
            className="flex flex-col items-center p-2 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative group"
            onClick={() => handleCopy(key)}
          >
            {/* Copied badge */}
            {copiedIcon === key && (
              <div className="absolute top-1 right-1 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded shadow z-10">
                Copied!
              </div>
            )}
            {/* Tooltip */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
              <div className="bg-gray-800 text-white text-xs rounded px-2 py-1 shadow">
                Click to copy
              </div>
            </div>
            <div className="mb-1 size-8 flex items-center justify-center">
              <Icon />
            </div>
            <span className="text-xs text-gray-600 text-center break-all w-full">
              {key}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
