'use client'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";

const GEMINI_KEY = process.env.GEMINI_KEY ||"AIzaSyBbgqbWA7c3BekpceqfiMoFXbcregK2LKE";
export default function AIInsights() {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const formdata = new FormData();
                const requestOptions = {
                    method: "POST",
                    body: formdata,
                    
                  };
                const productname = "laptop";

                const res=await fetch(`http://localhost:8000/api/trends/${productname}`,requestOptions);
                const data=await res.text();
                console.log(data);

                const prompt = `I have some data regarding searches for a product over a period of time. Could you please analyze this data and provide insights into the trend? the data is given below :${data}`;
                const temp = await getFromGemini(prompt);
                setText(temp);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    async function getFromGemini(prompt: string) {
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        return text;
    }

    return (
        <textarea
            placeholder="Enter your text here"
            className="w-full h-96 p-4 border-2 border-gray-300 rounded-lg shadow-lg"
            value={text}
            readOnly
        />
    );
}
