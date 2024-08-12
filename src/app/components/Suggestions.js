import { useEffect, useState } from "react"
import faker from "faker"

export default function Suggestions() {
    const [suggestions,setSuggestions] = useState([]);
    useEffect(() => {
    const suggestions = [...Array(5)].map((_,i) => ({
        username: faker.internet.userName(),
        company: faker.company.companyName(),
        avatar: "https://www.thinkingfaith.org/sites/default/files/styles/article_full_687/public/field/image/Iron%20Man%203.jpg",
        id : i
}));
setSuggestions(suggestions);
} , [])
  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="font-bold text-sm text-gray-400"> Suggestions for you </h3>
            <button className="text-gray-600 font-semibold"> See All </button>
        </div>
        {suggestions.map((profile) =>(
            <div 
            key = {profile.id}
            className="flex items-center justify-between mt-3">
                <img src= {profile.avatar}
                alt=""
                className="h-10 w-10 rounded-full border p-[2px]"/>
                <div className="flex-1 ml-4">
                    <h2 className="font-semibold text-sm">{profile.username}</h2>
                    <h3 className="text-xs text-400">Works at {profile.company}</h3>
                    </div>
                    <button className="text-sm text-blue-400 font-bold"> Follow </button>
            </div>
          
        ))}

    </div>
  )
}

