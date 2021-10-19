import { useState, useEffect, Profiler } from "react"
import faker from "faker";

function Suggestions() {
    const [suggestions,setSuggestions] = useState([]);

    useEffect(() => {
        const sugg = [...Array(5).map((_,i)=>(
            {
                ...faker.helpers.contextualCard(),
                id: i
            }
        ))]

        setSuggestions(suggestions);
    }, []);

    return (
        <div className="mt-4 ml-8">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-500">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                suggestions.map(sugg => (
                    <div key={sugg.id} className="flex items-center justify-between mt-3">
                        <img className= "w-10 h-10 rounded-full border p-[2px]" src={sugg.avatar} />
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
