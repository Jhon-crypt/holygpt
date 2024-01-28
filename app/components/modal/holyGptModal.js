"use client"
import { GiCrossedAirFlows } from "react-icons/gi"
import { useState } from "react";

export default function HolyGptModal() {

    const [holyGpt, setHolyGpt] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleHolyGpt() {

        setLoading(true)

        try {
            const api_key = process.env.NEXT_PUBLIC_GEMINI_API_KEY
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api_key}`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: "Act as a word of God preacher, preach a random long sermon, with title and description, explain extnsively with bible verses based different peoplas problems, to give people hope and make them trus God again, explain using real world examples that everyone will understand",
                                },
                            ],
                        },
                    ],
                }),
            });

            if (!response.ok) {
                setLoading(false)
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            setLoading(false)
            const responseData = await response.json();
            const generatedText = responseData.candidates[0].content.parts[0]?.text;

            setHolyGpt(generatedText)

            console.log(generatedText)


        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setLoading(false);
        }



    }

    return (

        <>

            <div class="modal fade" id="holyGptModal">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <div class="modal-title">
                                <button type="button" class="btn btn-dark" onClick={handleHolyGpt}>Generate bible lesson <GiCrossedAirFlows /></button>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            {loading ?

                                <>
                                    <div class="col-12 text-center">
                                        <img src="./loader.gif" height={55} width={55} class="mx-auto" alt="Loading"/>
                                    </div>
                                </>
                                :
                                <>
                                    <p style={{ whiteSpace: "pre-wrap" }}>{holyGpt}</p>
                                </>

                            }
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}