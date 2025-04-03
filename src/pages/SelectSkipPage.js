import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressIndicator from '../components/ProgressIndicator';
import SkipCard from '../components/SkipCard';

const SKIP_OPTIONS = [
    { size: 4, price: 216, privatePropertyOnly: false },
    { size: 5, price: 260, privatePropertyOnly: false },
    { size: 6, price: 296, privatePropertyOnly: false },
    { size: 8, price: 294, privatePropertyOnly: false },
    { size: 10, price: 369, privatePropertyOnly: true },
    { size: 12, price: 407, privatePropertyOnly: true },
    { size: 14, price: 477, privatePropertyOnly: true },
    { size: 16, price: 571, hirePeriod: "7 day hire period", privatePropertyOnly: true },
    { size: 20, price: 763, privatePropertyOnly: true },
    { size: 40, price: 836, privatePropertyOnly: true }
];

const SelectSkipPage = () => {
    const [selectedSkip, setSelectedSkip] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all', 'commercial', 'private'
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        
        return () => clearTimeout(timer);
    }, []);

    const handleSkipSelect = (size) => {
        setSelectedSkip(size);
    };

    const handleBack = () => {
        console.log('Navigate back');
    };

    const handleContinue = () => {
        console.log('Navigate forward');
    };

    const handleFilterChange = (newFilter) => {
        setActiveTab(newFilter);
        setTimeout(() => {
            setFilter(newFilter);
        }, 300);
    };

    const selectedSkipDetails = SKIP_OPTIONS.find(skip => skip.size === selectedSkip);
    
    const filteredSkips = SKIP_OPTIONS.filter(skip => {
        if (filter === 'all') return true;
        if (filter === 'commercial') return !skip.privatePropertyOnly;
        if (filter === 'private') return skip.privatePropertyOnly;
        return true;
    });

    return (
        <section className="min-h-screen">
            <ProgressIndicator currentStep={2} />
            
            <div className="max-w-7xl mx-auto px-4 py-8 pb-32 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
                <div className="text-center mb-10 animate-fadeIn">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Choose Your Skip Size
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Select the perfect skip size for your waste management needs. 
                        We offer a range of options from small domestic skips to large commercial containers.
                    </p>
                </div>
                
                {/* Filter tabs with animation */}
                <div className="flex justify-center mb-8">
                    <div className="relative flex bg-[#2A2A2A] rounded-lg w-[360px]">
                        <motion.div 
                            className="absolute inset-[2px] bg-[#0037C1] rounded-md"
                            layoutId="activeTab"
                            transition={{
                                type: "spring",
                                bounce: 0.15,
                                duration: 0.5
                            }}
                            style={{
                                width: 'calc(100% / 3 - 4px)',
                                x: activeTab === 'all' ? 2 : 
                                   activeTab === 'commercial' ? 122 : 
                                   242
                            }}
                        />
                        
                        <motion.button 
                            onClick={() => handleFilterChange('all')}
                            className={`relative z-10 h-9 flex-1 text-sm font-medium ${
                                activeTab === 'all' ? 'text-white' : 'text-gray-400'
                            }`}
                            whileHover={{ color: '#ffffff' }}
                            animate={{ color: activeTab === 'all' ? '#ffffff' : '#9CA3AF' }}
                        >
                            All Skips
                        </motion.button>
                        <motion.button 
                            onClick={() => handleFilterChange('commercial')}
                            className={`relative z-10 h-9 flex-1 text-sm font-medium ${
                                activeTab === 'commercial' ? 'text-white' : 'text-gray-400'
                            }`}
                            whileHover={{ color: '#ffffff' }}
                            animate={{ color: activeTab === 'commercial' ? '#ffffff' : '#9CA3AF' }}
                        >
                            Commercial
                        </motion.button>
                        <motion.button 
                            onClick={() => handleFilterChange('private')}
                            className={`relative z-10 h-9 flex-1 text-sm font-medium ${
                                activeTab === 'private' ? 'text-white' : 'text-gray-400'
                            }`}
                            whileHover={{ color: '#ffffff' }}
                            animate={{ color: activeTab === 'private' ? '#ffffff' : '#9CA3AF' }}
                        >
                            Private Property
                        </motion.button>
                    </div>
                </div>
                
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0037C1]"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredSkips.map((skip, index) => (
                            <div 
                                key={skip.size}
                                className="animate-fadeIn"
                                style={{ 
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <SkipCard
                                    size={skip.size}
                                    price={skip.price}
                                    hirePeriod={skip.hirePeriod}
                                    privatePropertyOnly={skip.privatePropertyOnly}
                                    isSelected={selectedSkip === skip.size}
                                    onSelect={() => handleSkipSelect(skip.size)}
                                />
                            </div>
                        ))}
                    </div>
                )}
                
                {!isLoading && filteredSkips.length === 0 && (
                    <div className="text-center py-12 animate-fadeIn">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2A2A2A] mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">No skips found</h3>
                        <p className="text-gray-400 mb-4">Try changing your filter selection</p>
                        <button 
                            onClick={() => handleFilterChange('all')}
                            className="px-4 py-2 rounded-md bg-[#0037C1] text-white hover:bg-[#002da1] transition-colors"
                        >
                            Show all skips
                        </button>
                    </div>
                )}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C]/90 backdrop-blur-md border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile view */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">
                                {selectedSkip && `${selectedSkip} Yard Skip`}
                            </h3>
                            {selectedSkipDetails && (
                                <div>
                                    <span className="text-xl font-bold text-[#0037C1]">£{selectedSkipDetails.price}</span>
                                    <span className="text-sm text-gray-400 ml-2">per week</span>
                                </div>
                            )}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                onClick={handleBack}
                                className="w-full py-2.5 px-4 rounded-md bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] transition-colors"
                            >
                                Back
                            </button>
                            <button 
                                onClick={handleContinue}
                                className={`w-full py-2.5 px-4 rounded-md text-white transition-colors flex items-center justify-center gap-2 ${
                                    selectedSkip 
                                        ? 'bg-[#0037C1] hover:bg-[#002da1]' 
                                        : 'bg-[#2A2A2A] opacity-50 cursor-not-allowed'
                                }`}
                                disabled={!selectedSkip}
                            >
                                Continue
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Desktop view */}
                    <div className="hidden lg:flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            {selectedSkipDetails ? (
                                <>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-[#0037C1]/20 flex items-center justify-center">
                                            <span className="text-xl font-bold text-[#0037C1]">{selectedSkip}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{selectedSkip} Yard Skip</h3>
                                            <p className="text-sm text-gray-400">Selected</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-px bg-[#2A2A2A]"></div>
                                    <div>
                                        <span className="text-2xl font-bold text-[#0037C1]">£{selectedSkipDetails.price}</span>
                                        <span className="text-sm text-gray-400 ml-2">per week</span>
                                    </div>
                                </>
                            ) : (
                                <div className="flex items-center gap-2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="12" />
                                        <line x1="12" y1="16" x2="12.01" y2="16" />
                                    </svg>
                                    <span>Select a skip size to continue</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={handleBack}
                                className="px-6 py-2.5 rounded-md bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] transition-colors"
                            >
                                Back
                            </button>
                            <button 
                                onClick={handleContinue}
                                className={`px-6 py-2.5 rounded-md text-white transition-colors flex items-center gap-2 ${
                                    selectedSkip 
                                        ? 'bg-[#0037C1] hover:bg-[#002da1]' 
                                        : 'bg-[#2A2A2A] opacity-50 cursor-not-allowed'
                                }`}
                                disabled={!selectedSkip}
                            >
                                Continue
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectSkipPage;