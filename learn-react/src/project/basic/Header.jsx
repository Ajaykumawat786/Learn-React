function Header() {

    let logo = "LOGO"

    return (

        <div className="flex  justify-between p-5 font-bold w-full   uppercase text-sky-800">
            <h2>{logo}</h2>

            <nav>
                <ul className="flex divide-x-2  ">
                    <li className="px-3 "><a href="#">Home</a></li>
                    <li className="px-3"><a href="#">About us</a></li>
                    <li className="px-3"><a href="#">Project</a></li>
                    <li className="px-3"><a href="#">why us</a></li>
                    <li className="px-3"><a href="#">gallery</a></li>
                    <li className="px-3"><a href="#">governance</a></li>
                    <li className="px-3"><a href="#">Contect us</a></li>
                    <li className="px-3"><a href="#">enquiry</a></li>


                </ul>

            </nav>

            <div>
                <input className="border" type="search" />
            
            </div>
        </div>
    )
}
export default Header