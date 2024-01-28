'use client'
import { GiCrossedAirFlows } from "react-icons/gi"
import { useState } from 'react';

export default function CustomHolyGptModal() {

    const [holyGpt, setHolyGpt] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        //alert(searchValue)

        try {
            setLoading(true);

            const api_key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api_key}`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Act as a word of God preacher, preach a random long sermon, with title and description, explain extnsively with bible verses based different peoplas problems, to give people hope and make them trus God again, explain using real world examples that everyone will understand based on this topic ${searchValue}`,

                                },
                            ],
                        },
                    ],
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            const generatedText = responseData.candidates[0].content.parts[0]?.text;

            setHolyGpt(generatedText);

            console.log(generatedText);
        } catch (error) {
            console.error('Error generating content:', error);
        } finally {
            setLoading(false);
        }

    };

    return (

        <>

            <div class="modal fade" id="customHolyGptModal">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">

                        <div class="modal-header">
                            <div class="modal-title">
                                <form onSubmit={handleFormSubmit}>
                                    <div class="input-group">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter a topic"
                                            value={searchValue}
                                            onChange={handleInputChange} />
                                        <button class="btn btn-dark" type="submit">Generate <GiCrossedAirFlows /></button>
                                    </div>
                                </form>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            {loading ?

                                <>
                                    <div class="col-12 text-center">
                                        <img src="./loader.gif" height={55} width={55} class="mx-auto" alt="Loading" />
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