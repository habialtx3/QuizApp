import React from 'react'

export default function StatItem({ label, value, icon, accent = "accent" }) {
    return (
        <div className={`bg-white p-4 rounded-xl shadow-sm border border-slate-100`}>
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">
                {label}
            </p>
            <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-black text-${accent}`}>
                    {value}
                </span>
                <span className={`material-symbols-outlined text-${accent}`}>
                    {icon}
                </span>
            </div>
        </div>
    )
}

