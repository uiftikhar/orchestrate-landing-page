import React from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

export function ImpactAttributionImagery() {
  return (
    <div
      className="relative bg-gradient-to-br from-gray-50 to-gray-100"
      style={{
        width: '942px',
        height: '530px',
      }}
    >
      {/* LEFT SECTION: CONFOUNDED VIEW */}
      <div
        className="absolute"
        style={{
          left: '40px',
          top: '30px',
        }}
      >
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2">
          <AlertCircle className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
            Without Attribution
          </span>
        </div>
      </div>

      {/* Left Metric Card */}
      <div
        className="absolute bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        style={{
          left: '40px',
          top: '80px',
          width: '391px',
          height: '370px',
        }}
      >
        {/* Confusion Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          {/* Organized grid of question marks creating pattern */}
          {[...Array(8)].map((_, row) =>
            [...Array(6)].map((_, col) => (
              <span
                key={`${row}-${col}`}
                className="absolute text-amber-500 font-bold"
                style={{
                  left: `${col * 65 + 20}px`,
                  top: `${row * 50 + 10}px`,
                  fontSize: '32px',
                  transform: `rotate(${(row + col) * 15}deg)`,
                  opacity: 0.3 + Math.sin(row + col) * 0.2,
                }}
              >
                ?
              </span>
            )),
          )}
        </div>

        {/* Gradient Overlay for Confusion Effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          {/* Big Number with Glow */}
          <div className="text-center relative">
            <div
              className="absolute inset-0 blur-2xl opacity-20"
              style={{
                background:
                  'radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, transparent 70%)',
                transform: 'scale(1.5)',
              }}
            />
            <div className="relative text-7xl font-bold text-gray-900">
              +17%
            </div>
            <div className="text-base text-gray-500 mt-4 font-medium">
              Total Change
            </div>
          </div>

          {/* Floating Question Indicators */}
          <div
            className="absolute"
            style={{
              left: '60px',
              top: '100px',
            }}
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center">
              <span className="text-amber-600 font-bold text-xl">?</span>
            </div>
          </div>
          <div
            className="absolute"
            style={{
              right: '60px',
              top: '120px',
            }}
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-orange-200 flex items-center justify-center">
              <span className="text-orange-600 font-bold text-lg">?</span>
            </div>
          </div>
          <div
            className="absolute"
            style={{
              left: '80px',
              bottom: '100px',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-red-100 border-2 border-red-200 flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">?</span>
            </div>
          </div>
          <div
            className="absolute"
            style={{
              right: '70px',
              bottom: '110px',
            }}
          >
            <div className="w-11 h-11 rounded-full bg-amber-100 border-2 border-amber-200 flex items-center justify-center">
              <span className="text-amber-600 font-bold text-lg">?</span>
            </div>
          </div>

          {/* Bottom Label */}
          <div className="absolute bottom-6 text-center w-full px-6">
            <p className="text-sm text-gray-400 font-medium">
              Which changes drove this?
            </p>
          </div>
        </div>
      </div>

      {/* CENTER DIVIDER */}
      <div
        className="absolute bg-gradient-to-b from-transparent via-gray-300 to-transparent"
        style={{
          left: '471px',
          top: '60px',
          width: '1px',
          height: '410px',
        }}
      />

      {/* Arrow Circle */}
      <div
        className="absolute bg-white border-2 border-emerald-200 rounded-full flex items-center justify-center shadow-lg"
        style={{
          left: '455px',
          top: '249px',
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-emerald-600"
        >
          <path
            d="M5 12h14m0 0l-6-6m6 6l-6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* RIGHT SECTION: CLEAN ATTRIBUTION */}
      <div
        className="absolute"
        style={{
          left: '511px',
          top: '30px',
        }}
      >
        <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
            With Impact Trace
          </span>
        </div>
      </div>

      {/* Right Stacked Bars Container */}
      <div
        className="absolute bg-white border border-gray-200 rounded-lg shadow-sm"
        style={{
          left: '511px',
          top: '80px',
          width: '391px',
          height: '370px',
          padding: '24px',
        }}
      >
        {/* Subtle Success Background */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.03) 0%, transparent 60%)',
          }}
        />

        <div className="relative">
          {/* Bar 1: Feature A */}
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-between px-4 shadow-sm hover:shadow-md transition-shadow"
            style={{
              height: '64px',
              width: '343px',
            }}
          >
            <span className="text-sm font-semibold text-white">Feature A</span>
            <span className="text-base font-bold text-white">+8.2%</span>
          </div>

          {/* Bar 2: Feature B */}
          <div
            className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-between px-4 mt-3 shadow-sm hover:shadow-md transition-shadow"
            style={{
              height: '48px',
              width: '343px',
            }}
          >
            <span className="text-sm font-semibold text-white">Feature B</span>
            <span className="text-base font-bold text-white">+3.8%</span>
          </div>

          {/* Bar 3: Organic */}
          <div
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-between px-4 mt-3 shadow-sm hover:shadow-md transition-shadow"
            style={{
              height: '40px',
              width: '343px',
            }}
          >
            <span className="text-sm font-semibold text-white">
              Organic Growth
            </span>
            <span className="text-base font-bold text-white">+2.9%</span>
          </div>

          {/* Bar 4: Seasonality (negative) */}
          <div
            className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-between px-4 mt-3 shadow-sm relative overflow-hidden"
            style={{
              height: '32px',
              width: '343px',
            }}
          >
            {/* Diagonal stripes for negative */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 20px)',
              }}
            />
            <span className="text-sm font-semibold text-white relative z-10">
              Seasonality
            </span>
            <span className="text-base font-bold text-white relative z-10">
              -1.8%
            </span>
          </div>

          {/* Bar 5: Feature C */}
          <div
            className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-between px-4 mt-3 shadow-sm hover:shadow-md transition-shadow"
            style={{
              height: '32px',
              width: '343px',
            }}
          >
            <span className="text-sm font-semibold text-white">Feature C</span>
            <span className="text-base font-bold text-white">+1.7%</span>
          </div>

          {/* Total Summary */}
          <div
            className="bg-gradient-to-r from-gray-50 to-emerald-50 border-2 border-emerald-200 rounded-lg flex items-center justify-between px-4 mt-3 shadow-sm"
            style={{
              height: '48px',
              width: '343px',
            }}
          >
            <span className="text-sm font-semibold text-gray-900">
              Total Impact
            </span>
            <span className="text-lg font-bold text-emerald-600">+16.8%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

