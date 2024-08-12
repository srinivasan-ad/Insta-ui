export default function Story({img , username}) {
  return (
    <div>
      <img src= {img} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-300 border-2 cursor-pointed hover:scale-110
      transiton transform duration-200 ease-out"/>
      <p className="w-14 truncate text-xs text-center">{username}</p>
    </div>
  )
}

