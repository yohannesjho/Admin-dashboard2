import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


const Header = () => {
    return (
        <div className='h-16 bg-white flex justify-between items-center w-full px-2 relative'>
            <div>
                <HiOutlineSearch className='absolute top-1/2 -translate-y-1/2 mx-2' />
                <input type="text" placeholder='search...' className='px-8 focus:outline-none border border-gray-300 ' />
            </div>
            <div className='flex gap-4 '>
                <Popover className="relative ">
                    <PopoverButton className='focus:outline-none'><HiOutlineChatAlt /></PopoverButton>
                    <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80 "  >
                        <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                            <strong className="text-gray-700 font-medium">Messages</strong>
                            <div className="mt-2 py-1 text-sm">This is messages panel.</div>
                        </div>
                    </PopoverPanel>
                </Popover>
                <Popover className="relative">
                    <PopoverButton className='focus:outline-none'><HiOutlineBell /></PopoverButton>
                    <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80"  >
                        <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                            <strong className="text-gray-700 font-medium">Notifications</strong>
                            <div className="mt-2 py-1 text-sm">This is notification panel.</div>
                        </div>
                    </PopoverPanel>
                </Popover>

                <Menu>
                    <div className='relative '>
                    <MenuButton>My account</MenuButton>
                    <MenuItems anchor="bottom" className='absolute  bg-white rounded-sm shadow-sm px-2 py-2.5 w-80 mt-2.5 transform '>
                        <div >
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/settings">
                                Your profile
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/support">
                                Settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/license">
                                Logout
                            </a>
                        </MenuItem>
                        </div>
                    </MenuItems>
                    </div>
                </Menu>
            </div>
        </div>
    )
}

export default Header