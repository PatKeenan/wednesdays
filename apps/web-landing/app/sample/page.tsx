import React from "react";

import { Sun, Car, Users, Calendar, Trophy } from "lucide-react";

export default function StylizedMainScreen() {
  return (
    <div className="flex flex-col h-screen bg-emerald-100/80 p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-800">Main Dashboard</h1>
        <div className="bg-yellow-400 rounded-full p-2">
          <Sun className="w-6 h-6 text-emerald-800" />
        </div>
      </header>

      {/* Weather and Date */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-white rounded-full py-2 px-4 shadow-lg">
          <span className="text-emerald-800 font-semibold">65°F</span>
        </div>
        <div className="bg-white rounded-full py-2 px-4 shadow-lg">
          <span className="text-emerald-800 font-semibold">09:30 AM</span>
        </div>
      </div>

      {/* Main Options */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center mb-2">
            <div className="bg-yellow-400 rounded-full p-2 mr-2">
              <Car className="w-6 h-6 text-emerald-800" />
            </div>
            <h2 className="text-xl font-bold text-emerald-800">
              Fun Golf Games
            </h2>
          </div>
          <p className="text-emerald-600">Play exciting mini-games!</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center mb-2">
            <div className="bg-emerald-400 rounded-full p-2 mr-2">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-emerald-800">
              Social Golfing
            </h2>
          </div>
          <p className="text-emerald-600">Connect with golf buddies!</p>
        </div>
      </div>

      {/* Quick Access Buttons */}
      <div className="flex justify-between mb-6">
        {["Social", "Leader", "Tips"].map((item, index) => (
          <button
            key={item}
            className={`w-20 h-20 rounded-full shadow-lg flex items-center justify-center ${
              index === 0
                ? "bg-emerald-500"
                : index === 1
                ? "bg-blue-500"
                : "bg-cyan-500"
            }`}
          >
            <span className="text-white font-semibold">{item}</span>
          </button>
        ))}
      </div>
      <div>
        <button className="w-full rounded-full bg-emerald-500 text-white py-2 px-4 h-14">
          Book Tee Time
        </button>
      </div>

      {/* Bottom Navigation */}
      <nav className="mt-auto flex justify-around items-center bg-white rounded-full p-4 shadow-lg">
        <Car className="w-8 h-8 text-emerald-600" />
        <Users className="w-8 h-8 text-emerald-600" />
        <Calendar className="w-8 h-8 text-emerald-600" />
        <Trophy className="w-8 h-8 text-emerald-600" />
      </nav>
    </div>
  );
}
