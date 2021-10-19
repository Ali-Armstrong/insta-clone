import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import {HeartIcon as HeartFill} from "@heroicons/react/solid";

function Post({id, username, userImg, img, caption}) {
    return (
        <div className="bg-white border rounded-sm my-7">
            {/** Header */}
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12
                object-contain border p-1 mr-3" src={userImg} alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>
            {/** img */}
            <img src={img} className="object-cover w-full" />
            {/** Buttons */}
            <div className="flex justify-between px-4 pt-4 py-4">
                <div className="flex space-x-4">
                    <HeartIcon className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn"/>
                </div>
                <BookmarkIcon className="btn" />
            </div>
            {/** captions */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}
            </p>
            {/** comments */}
            {/** inputbox */}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..." type="text" />
                <button className="font-semibold text-blue-500">POST</button>
            </form>
        </div>
    )
}

export default Post
