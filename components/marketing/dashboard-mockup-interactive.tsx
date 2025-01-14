"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const InteractiveDashboardMockup = () => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  // Simulate real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const events = [
    { id: 1, title: "Team Standup", time: "10:00", type: "meeting" },
    { id: 2, title: "Focus Block", time: "11:00", type: "focus" },
    { id: 3, title: "Client Call", time: "14:00", type: "meeting" },
  ];

  return (
    <div className="w-full overflow-hidden rounded-xl border bg-white shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="border-b bg-gray-50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium">DevTime Calendar</div>
              <div className="text-xs text-gray-500">{currentTime}</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-blue-50 p-2 text-blue-600 hover:bg-blue-100">
              <Plus className="h-4 w-4" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200 p-1">
              <User className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between border-b bg-white p-4">
        <div className="flex space-x-2">
          <button className="rounded p-1 hover:bg-gray-100">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded p-1 hover:bg-gray-100">
            <ChevronRight className="h-4 w-4" />
          </button>
          <span className="font-medium">January 2025</span>
        </div>
        <div className="flex space-x-2">
          <button className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-100">
            Today
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 p-4">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`aspect-square bg-white p-2 transition-colors duration-200 ${
              hoveredDay === i ? "bg-blue-50" : ""
            }`}
            onMouseEnter={() => setHoveredDay(i)}
            onMouseLeave={() => setHoveredDay(null)}
          >
            <div className="flex justify-between">
              <div className="h-6 w-6 rounded-full text-center text-sm leading-6">
                {(i % 30) + 1}
              </div>
              {i === 14 && (
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              )}
            </div>
            {events.map(
              (event, index) =>
                i === 14 && (
                  <div
                    key={event.id}
                    className={`mt-1 cursor-pointer rounded px-2 py-1 text-xs ${
                      event.type === "focus"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    } ${activeBlock === index ? "ring-2 ring-blue-400" : ""}`}
                    onClick={() => setActiveBlock(index)}
                  >
                    {event.time} {event.title}
                  </div>
                )
            )}
          </div>
        ))}
      </div>

      {/* Focus Time Indicator */}
      <div className="border-t bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Focus Time Available</span>
            </div>
            <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full w-2/3 bg-green-500 transition-all duration-1000"
                style={{ width: hoveredDay ? "75%" : "66%" }}
              ></div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="rounded-lg bg-green-50 p-2 text-green-600 hover:bg-green-100">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboardMockup;
