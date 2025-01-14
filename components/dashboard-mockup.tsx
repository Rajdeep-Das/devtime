import React from "react";

const DashboardMockup = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-white shadow-2xl">
      <div className="border-b bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
            <div className="space-y-1">
              <div className="h-4 w-24 rounded bg-gray-200"></div>
              <div className="h-3 w-32 rounded bg-gray-200"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200 p-4">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="aspect-square bg-white p-2">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
            {Math.random() > 0.7 && (
              <div className="mt-2 space-y-1">
                <div className="h-2 w-12 rounded bg-blue-100"></div>
                <div className="h-2 w-10 rounded bg-blue-100"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="border-t bg-white p-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="h-4 w-48 rounded bg-gray-100"></div>
            <div className="h-3 w-32 rounded bg-gray-100"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-8 w-8 rounded bg-blue-100"></div>
            <div className="h-8 w-8 rounded bg-blue-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
