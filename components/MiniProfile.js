function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="rounded-full border p-[2px] w-16 h-16"
             src="https://yt3.ggpht.com/yti/APfAmoFDyDfPK4T991qYRlz9MeobWWLhhhnSpdkL1DZ7KA=s108-c-k-c0x00ffffff-no-rj" />

             <div className="flex-1 mx-4">
                 <h2 className="font-bold">Ali-TheAlchemist</h2>
                 <h3 className="text-sm text-gray-400">Welcome to My Instagram</h3>
             </div>

             <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
