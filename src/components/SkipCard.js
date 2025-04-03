import React from 'react';

const SkipCard = ({ 
    size, 
    price, 
    hirePeriod = "14 day hire period",
    isSelected = false,
    privatePropertyOnly = false,
    onSelect
}) => {
    return (
        <div 
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${
                isSelected 
                    ? 'ring-2 ring-[#0037C1] shadow-lg shadow-[#0037C1]/20' 
                    : 'hover:ring-2 hover:ring-[#0037C1]/50'
            }
            bg-[#1C1C1C] text-white cursor-pointer animate-fadeIn`}
            onClick={onSelect}
        >
            {/* Selected indicator */}
            {isSelected && (
                <div className="absolute top-3 right-3 z-10 animate-pulse">
                    <div className="bg-[#0037C1] text-white p-2 rounded-full shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                    </div>
                </div>
            )}
            
            {/* Card content */}
            <div className="p-5 md:p-6">
                {/* Skip image with overlay */}
                <div className="relative rounded-lg overflow-hidden mb-4 group-hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#2A2A2A] to-[#1C1C1C]">
                        <img 
                            src={`https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800&size=${size}`} 
                            alt={`${size} Yard Skip`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Size badge */}
                    <div className="absolute top-3 left-3 z-10 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        {size} Yards
                    </div>
                    
                    {/* Private property badge */}
                    {privatePropertyOnly && (
                        <div className="absolute bottom-3 left-3 z-10">
                            <div className="bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                    <path d="M12 9v4" />
                                    <path d="M12 17h.01" />
                                </svg>
                                <span className="text-xs font-medium text-yellow-500">Private Property Only</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Skip details */}
                <div className="space-y-3">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg md:text-xl font-bold">{size} Yard Skip</h3>
                        <div className="text-right">
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">£{price}</span>
                            <span className="text-sm text-gray-400 ml-1">per week</span>
                        </div>
                    </div>
                    
                    <p className="text-sm text-gray-400">{hirePeriod}</p>
                    
                    {/* Features list */}
                    <div className="pt-2 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0037C1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>Standard delivery included</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0037C1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>Collection when full</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#0037C1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                            <span>Environmentally friendly disposal</span>
                        </div>
                    </div>
                </div>

                {/* Select button */}
                <button 
                    className={`w-full mt-4 py-2.5 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSelected 
                            ? 'bg-[#0037C1] text-white' 
                            : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'
                    }`}
                >
                    <span>{isSelected ? 'Selected' : 'Select This Skip'}</span>
                    {!isSelected && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default SkipCard; 