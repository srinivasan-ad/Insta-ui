import Post from "./Post";

export default function Posts() {
    const Trial_Data = [{
        id : '1',
        username : 'baba',
        userimage : "https://www.thinkingfaith.org/sites/default/files/styles/article_full_687/public/field/image/Iron%20Man%203.jpg",
        img : 'https://wallpapers.com/images/hd/one-piece-marvel-crossover-swsdunb7o2eddrxi.jpg',
        caption : 'Jai Sri Ram - Onepiece and Marvel crossover !!!',
        
    },
  {
        id : '1',
        username : 'baba',
        userimage : "https://www.thinkingfaith.org/sites/default/files/styles/article_full_687/public/field/image/Iron%20Man%203.jpg",
        img : 'https://assetsio.reedpopcdn.com/loki-cropped.jpg?width=880&quality=80&format=jpg&auto=webp',
        caption : 'Jai Sri Ram - Loki is on fire !!!',
        
    }];
  return (
    <div>
        {Trial_Data.map((posts) => (
          <Post
          key = {posts.id}
          username = {posts.username}
          userimage = {posts.userimage}
          img = {posts.img}
          caption = {posts.caption}
          />  
        ))}
  
    </div>
  )
}

