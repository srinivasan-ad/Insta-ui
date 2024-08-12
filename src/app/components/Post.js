import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    EmojiHappyIcon,
} from  "@heroicons/react/outline";

import {HeartIcon as Heart} from "@heroicons/react/solid";



export default function Post({key,username,userimage,img ,caption}) {
   
  return (
    <div className="bg-white border rounded-sm my-7">
    <div className="flex items-center p-5">
        {/* Header */}
        <img src={userimage} alt="" className="rounded-full h-12 w-12 border mr-3 p-1"/>
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5"/>
        </div>
        


     
         {/* img */}
         <img src={img} alt="" className="object-cover w-full"/>
        
        {/* button */}
        <div className="flex  justify-between pt-4 px-4">
        <div className="flex space-x-4">

        <HeartIcon className="btn" />
        <ChatIcon className="btn"/>
        <PaperAirplaneIcon className="btn"/>
      
        </div>
        <BookmarkIcon className="btn"/>

        </div>
        
        {/* caption  */}
        <p className="p-5 truncate">
            <span className="font-bold mr-1">{username} : </span>
            {caption}
        </p>
        
        {/* comments */}
        
        {/* inputbox  */}
        <form className="flex items-center p-4">
            <EmojiHappyIcon className="h-7"/>
            <input 
            type="text"
            placeholder="Add a comment..."
            className="flex-1 border-none focus:ring-0 outline-none"/>
           <button> Post </button> 
        </form>
    
   
    </div>
  )
}



