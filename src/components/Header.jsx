import Topbar from "./Topbar"
import Menus from "./Menus"
export default function Header(){
    return(
        <div className="flex flex-wrap w-full">
            <div className="w-24/24">
                <Topbar/>
            </div>
            <div className="w-24/24">
                <Menus/>
            </div>
        </div>

    )
}