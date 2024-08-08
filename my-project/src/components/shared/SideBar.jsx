import React from 'react'
import { FcPositiveDynamic } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants';
import { Link } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi';
function SideBar() {
    return (

        <div className='border-2 w-60  bg-neutral-900 text-white flex flex-col p-3'>
            <div className='flex p-2 space-x-2 my-12 '>
                <FcPositiveDynamic fontSize={24} />
                <span>Open Shop</span>

            </div>
            <div className='flex-1'>
                {DASHBOARD_SIDEBAR_LINKS.map(items => (
                    links(items)
                ))}

            </div>
            <div>
                <div className=' '>
                    {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(items => (
                        links(items)
                    ))}

                </div>
                 
                <div   className='flex items-center gap-2 hover:bg-neutral-400 cursor-pointer hover:delay-75'><HiOutlineLogout/> <span>Logout</span></div>
                 
            </div>

        </div>


    )
}


function links(items) {
    return <>
        <Link to={items.path} className='flex items-center gap-2 hover:bg-neutral-400 cursor-pointer hover:delay-75'><span>{items.icon}</span> {items.label}</Link>
    </>
}

export default SideBar