import Post from "./Post"

const posts = [
    {
      id: "123",
      username: "Ali-TheAlchemist",
      userImg: "https://yt3.ggpht.com/yti/APfAmoFDyDfPK4T991qYRlz9MeobWWLhhhnSpdkL1DZ7KA=s108-c-k-c0x00ffffff-no-rj",
      img: "https://cdn.wallpapersafari.com/93/61/5HZbeM.jpg",
      caption: "Some Dummy Caption"  
    },
    {
    id: "1234",
    username: "Ali-TheAlchemist",
    userImg: "https://yt3.ggpht.com/yti/APfAmoFDyDfPK4T991qYRlz9MeobWWLhhhnSpdkL1DZ7KA=s108-c-k-c0x00ffffff-no-rj",
    img: "https://wallpapercave.com/wp/wp2035660.jpg",
    caption: "Some Dummy Caption"  
    },
    {
    id: "1235",
    username: "Ali-TheAlchemist",
    userImg: "https://yt3.ggpht.com/yti/APfAmoFDyDfPK4T991qYRlz9MeobWWLhhhnSpdkL1DZ7KA=s108-c-k-c0x00ffffff-no-rj",
    img: "https://wallpapercave.com/wp/wp2035664.jpg",
    caption: "Some Dummy Caption"  
    },{
    id: "1236",
    username: "Ali-TheAlchemist",
    userImg: "https://yt3.ggpht.com/yti/APfAmoFDyDfPK4T991qYRlz9MeobWWLhhhnSpdkL1DZ7KA=s108-c-k-c0x00ffffff-no-rj",
    img: "https://wallpapercave.com/wp/wp2035668.jpg",
    caption: "Some Dummy Caption"  
    }
]


function Posts() {
    return (
        <div className="">
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} 
                />
            ))}
        </div>
    )
}

export default Posts
