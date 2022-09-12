import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Doc <span className="text-secondary">mic.</span></a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home </a></li>
                    <li><a>About</a></li>
                    <li><a>Depertments</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contacts</a></li>

                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-secondery">Free consulation </button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;