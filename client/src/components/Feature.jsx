import React from "react";

const Feature = () => {
  return (
    <div class="mt-10 px-4 md:px-10">
      <div class="bg-black/30 backdrop-blur-lg rounded-xl flex flex-col md:flex-row justify-between items-center text-white p-6 md:p-10 gap-6 shadow-lg border border-white/10">
        <div class="flex items-center gap-4 text-center md:text-left">
          <div class="text-2xl">✅</div>
          <div>
            <h3 class="text-lg font-semibold">Real-Time Review</h3>
            <p class="text-sm text-gray-300">Instant suggestions as you code</p>
          </div>
        </div>

        <div class="flex items-center gap-4 text-center md:text-left">
          <div class="text-2xl">🚀</div>
          <div>
            <h3 class="text-lg font-semibold">Boost Productivity</h3>
            <p class="text-sm text-gray-300">Write faster & cleaner</p>
          </div>
        </div>

        <div class="flex items-center gap-4 text-center md:text-left">
          <div class="text-2xl">🔍</div>
          <div>
            <h3 class="text-lg font-semibold">Catch Bugs Early</h3>
            <p class="text-sm text-gray-300">Detect issues before production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
