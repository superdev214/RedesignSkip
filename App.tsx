import React, { useState } from 'react';

type TodoItem = {
    Id: string;
    Content: string;
}

type AppState = {
    NewItemText: string;
    Items: TodoItem[];
}

function App() {
    // Initialize state with useState hook
    const [state, setState] = useState<AppState>({
        NewItemText: '',
        Items: []
    });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prevState => ({
            ...prevState,
            NewItemText: e.target.value
        }));
    };

    // Handle adding new items
    const handleAddItem = () => {
        if (!state.NewItemText.trim()) return;

        setState(prevState => ({
            Items: [
                ...prevState.Items,
                {
                    Id: Date.now().toString(),
                    Content: state.NewItemText.trim()
                }
            ],
            NewItemText: ''
        }));
    };

    // Handle key press for input
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    // Handle deleting items
    const handleDeleteItem = (id: string) => {
        setState(prevState => ({
            ...prevState,
            Items: prevState.Items.filter(item => item.Id !== id)
        }));
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-[#2A2A2A] rounded-xl shadow-2xl p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-[#0037C1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                        Task Manager
                    </h1>
                    
                    <div className="flex gap-3 mb-6">
                        <input
                            type="text"
                            value={state.NewItemText}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            className="flex-1 px-4 py-3 bg-[#1a1a1a] text-white rounded-lg border border-[#3a3a3a] focus:outline-none focus:border-[#0037C1] focus:ring-1 focus:ring-[#0037C1] placeholder-gray-500"
                            placeholder="Add a new task..."
                        />
                        <button
                            onClick={handleAddItem}
                            className="px-6 py-3 bg-[#0037C1] text-white rounded-lg hover:bg-[#0042db] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0037C1] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
                        >
                            Add Task
                        </button>
                    </div>

                    <div className="space-y-3">
                        {state.Items.map(item => (
                            <div 
                                key={item.Id}
                                className="flex items-center justify-between bg-[#1a1a1a] p-4 rounded-lg group hover:bg-[#222222] transition-colors duration-200"
                            >
                                <span className="text-white break-all flex-1 mr-4">{item.Content}</span>
                                <button
                                    onClick={() => handleDeleteItem(item.Id)}
                                    className="flex items-center text-gray-400 hover:text-red-500 transition-colors duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    </svg>
                                    <span className="ml-2 hidden group-hover:inline">Delete</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    {state.Items.length === 0 && (
                        <div className="text-center py-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#0037C1] opacity-50 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <path d="M14 2v6h6"></path>
                                <path d="M12 18v-6"></path>
                                <path d="M8 15h8"></path>
                            </svg>
                            <p className="text-gray-500">No tasks yet. Add one above!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App; 