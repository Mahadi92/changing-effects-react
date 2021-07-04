import React, { useState } from 'react';

const Home = () => {

    const [bgColor, setBgColor] = useState('')
    const [textColor, setTextColor] = useState('')
    const [font, setFont] = useState('')
    const [text, setText] = useState('')

    return (
        <main className="container m-auto px-5">
            <section className={`mt-10 px-24 py-8 text-center ${bgColor ? bgColor : 'bg-red-100'} ${textColor ? textColor : 'text-black'} ${font ? font : ''}`}>
                <h1 className="text-3xl font-bold py-5">Change Text and generate Code!</h1>
                <p className="md:px-12">
                    {text ||
                        "By pressing the buttons below, one can change the text box color, font family and font color all together or one by one. For example, when someone clicks cyan button, text color of this box and the heading should change to cyan from black. In the box below with a heading 'Code' should print the html/css styling for the current text and text box styling. It should change, when any of following buttons are clicked, accordingly so that when someone copies the code it reproduces a similar text box like this one. Reset button should remove all effects."
                    }
                </p>
            </section>
            <section className="mt-5 flex justify-between">
                <div>
                    <div className="flex space-x-4 items-center py-5">
                        <p>Background Color:</p>
                        <button onClick={() => setBgColor('bg-blue-100')} className="text-sm uppercase text-white bg-blue-500 py-2 px-4 rounded-full">Blue</button>
                        <button onClick={() => setBgColor('bg-green-100')} className="text-sm uppercase text-white bg-green-500 py-2 px-4 rounded-full">Green</button>
                        <button onClick={() => setBgColor('bg-red-100')} className="text-sm uppercase text-white bg-red-500 py-2 px-4 rounded-full">Red</button>
                    </div>

                    <div className="flex space-x-4 items-center py-5">
                        <p>Font Family:</p>
                        <button onClick={() => setFont('font-ubuntu')} className="text-sm uppercase text-white bg-black py-2 px-4 rounded-full">Ubuntu</button>
                        <button onClick={() => setFont('font-roboto')} className="text-sm uppercase text-white bg-black py-2 px-4 rounded-full">Roboto</button>
                        <button onClick={() => setFont('font-courier')} className="text-sm uppercase text-white bg-black py-2 px-4 rounded-full">Courier New</button>
                    </div>

                    <div className="flex space-x-4 items-center py-5">
                        <p>Text Color:</p>
                        <button onClick={() => setTextColor('text-blue-500')} className="text-sm uppercase text-black border-2 border-blue-500 py-2 px-4 rounded-full">Cyan</button>
                        <button onClick={() => setTextColor('text-purple-800')} className="text-sm uppercase text-black border-2 border-purple-500 py-2 px-4 rounded-full">Purple</button>
                        <button onClick={() => setTextColor('text-black')} className="text-sm uppercase text-black border-2 border-black py-2 px-4 rounded-full">Black</button>
                    </div>

                    <div className="w-full flex justify-center py-4">
                        <button onClick={() => {
                            setBgColor('')
                            setTextColor('')
                            setFont('')
                        }} className="py-1.5 px-5 bg-yellow-300 rounded-md m-auto">Reset</button>
                    </div>

                </div>

                <div className="w-1/2 pr-10">
                    <label htmlFor="textarea">Code:</label>
                    <textarea onChange={(e) => setText(e.target.value)} id="textarea" className="w-full h-4/5 border border-gray-400 p-4" placeholder="Code for the above text box should printed here..."></textarea>
                </div>
            </section>
        </main >
    );
};

export default Home;