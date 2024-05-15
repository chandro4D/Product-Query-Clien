import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import Switch from "react-switch";


const Header = () => {

    const { user, logOut, signIn, googleLogin, toggleTheme, theme } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
        logOut()
            .then(result => {

                Swal.fire({
                    icon: "success",
                    text: "LogOut successfully!",

                });
                console.log(result.user);
            })
            .catch()
    }

    const links = <>
        {
            !user ?
                <div className="flex ml-[350px] text-xl font-semibold">
                    <li className="mr-3"><Link to="/"> Home</Link></li>

                    <li className="mr-3"><Link to="/queries"> Queries</Link></li>

                    <li className="mr-3"><Link to="/login"> Login</Link></li>
                    <li className="mr-[320px]"><Link to="/register"> Register</Link></li>
                    <div className="mt-3 mr-2">
                        < Switch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>

                    <Link to="/login"><button className="btn mr-16 bg-green-600 text-xl font-medium ">LOGIN</button></Link>

                </div>
                :
                <div className="flex ml-[100px] text-lg mt-[14px] font-medium" >
                    <li className="mr-[1px]"><Link to="/"> Home</Link></li>
                    <li className="mr-[1px]"><Link to="/queries"> Queries</Link></li>
                    <li className="mr-[1px]"><Link to="/RecomendationForMe"> Recommendation For Me</Link></li>
                    <li className="mr-[1px]"><Link to="/myQueries"> My Queries</Link></li>
                    <li className="mr-[1px]"><Link to="/MyRecomendation"> My Recommendation</Link></li>
                    <li className="mr-[1px]"><Link to="/login"> Login</Link></li>
                    <li className="mr-[12px]"><Link to="/register"> Register</Link></li>
                    <div className=" tooltip tooltip-bottom mr-5" data-tip={user.displayName || user.email}  >
                        <img className="rounded-full w-14" src={user.photoURL || "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"} />
                    </div>
                    <div className="mt-3 mr-2 ">
                        < Switch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                    <Link to=""><button onClick={handleSignOut} className="btn  bg-green-600 text-xl font-medium ">SING OUT</button></Link>

                </div>

        }


    </>
    return (
        <div className="navbar bg-violet-900 sm:w-[300px] lg:w-full mb-[50px] ">
            <div className="ml-[15px]">
                <img className="w-[100px] h-[100px] " src="https://i.ibb.co/M179kmX/Pngtree-creative-s-logo-4259366.png" alt="" />
                <h1 className=" text-2xl font-bold"><span className="text-amber-500">A</span>lter<span className="text-amber-500">N</span>ative</h1>
            </div>
            <div >
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                user ?
                    <div className="flex navbar-end">
                        <div>

                        </div>
                        <div className="ml-5">

                        </div>
                    </div>
                    :
                    <div className="navbar-end ">

                    </div>

            }


        </div>
    );
};

export default Header;