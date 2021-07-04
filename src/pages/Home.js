import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <main className="container m-auto px-5">
            <section className="mt-10 px-24 py-8 bg-red-100 text-center">
                <h1 className="text-3xl py-5">Change Text and generate Code!</h1>
                <p className="md:px-12">
                    By pressing the buttons below, one can change the text box color, font family and font color all together or one by one. For example, when someone clicks cyan button, text color of this box and the heading should change to cyan from black. In the box below with a heading 'Code' should print the html/css styling for the current text and text box styling. It should change, when any of following buttons are clicked, accordingly so that when someone copies the code it reproduces a similar text box like this one. Reset button should remove all effects.
                </p>
            </section>
            <section className="mt-14 flex justify-between">
                <div>
                    <div className="flex space-x-4 items-center py-5">
                        <p>Background Color:</p>
                        <button className="text-sm uppercase text-white bg-blue-500 py-2 px-4 rounded-full">Blue</button>
                        <button className="text-sm uppercase text-white bg-green-500 py-2 px-4 rounded-full">Green</button>
                        <button className="text-sm uppercase text-white bg-red-500 py-2 px-4 rounded-full">Red</button>
                    </div>

                    <div className="flex space-x-4 items-center py-5">
                        <p>Font Family:</p>
                        <button className="text-sm uppercase text-white bg-black py-2 px-4 rounded-full">Ubuntu</button>
                        <button className="text-sm uppercase text-white bg-black py-2 px-4 rounded-full">Roboto</button>
                        <button className="text-sm uppercase text-white bg-black py-2 px-4 rounded-full">Courier New</button>
                    </div>

                    <div className="flex space-x-4 items-center py-5">
                        <p>Background Color:</p>
                        <button className="text-sm uppercase text-black border-2 border-blue-500 py-2 px-4 rounded-full">Cyan</button>
                        <button className="text-sm uppercase text-black border-2 border-green-500 py-2 px-4 rounded-full">Purple</button>
                        <button className="text-sm uppercase text-black border-2 border-red-500 py-2 px-4 rounded-full">Black</button>
                    </div>
                </div>

                <div className="w-1/2 pr-10">
                    <label htmlFor="textarea">Code:</label>
                    <textarea id="textarea" className="w-full h-full border border-gray-400 p-4" placeholder="Code for the above text box should printed here..."></textarea>
                </div>
            </section>
        </main>
    );
};

export default Home;