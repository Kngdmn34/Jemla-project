'use client'



export default function TopMenu () {

    const menuItems = [
        { id: 1, name: 'Home'},
        { id: 2, name: 'Saved'},
        { id: 3, name: 'Fashion'},
        { id: 4, name: 'Collectables and Art'},
        { id: 5, name: 'Health & Beauty'},
        { id: 6, name: 'Electronics'},
        { id: 7, name: 'Sell'},
    ]

    return (
        <>
            <div id='SubMenu' className="border-b">
                <div className="flex items-center justify-between  w-full mx-auto max-w-[1200px]">
                    <ul id='TopMenuLeft' className="flex items-center text-[13px] text-black px-2 h-8">

                        {menuItems.map(item => (
                            <li key={item.id} className="px-6 hover:underline cursor-pointer">
                               {item.name}
                            </li>
                        ))}

                        
                    </ul>
                </div>
            </div>
        </>
    )
}