import faker from "faker"
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";


export default function Stories() {
  const session = useSession()
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({

      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: "https://www.thinkingfaith.org/sites/default/files/styles/article_full_687/public/field/image/Iron%20Man%203.jpg",

      password: faker.internet.password(),

      registeredAt: faker.date.past(),
      id: i
    }));
    setSuggestions(suggestions);
    console.log(suggestions)
  }, []);


  return (
    <div className="flex space-x-2 p-6 bg-slate-50 mt-8 border-gray-300 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session.data && (
        <Story
          key={0}
          img={session.data.user.image} 
          username={session.data.user.name}
        />)}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}

        />


      ))}


    </div>
  )
}
