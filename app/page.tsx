import * as Icons from "@/components/icons/icons";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {Object.entries(Icons).map(([key, Icon]) => (
        <div
          key={key}
          className="flex flex-col items-center p-4 border rounded-lg"
        >
          <div className="mb-2 size-10">
            <Icon />
          </div>
          <span className="text-sm text-gray-600">{key}</span>
        </div>
      ))}
    </div>
  );
}
