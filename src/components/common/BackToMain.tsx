import {Link} from "react-router-dom";
import homeIcon from "../../assets/home-solid.svg";

export default function BackToMain() {
  return (
    <>
      <Link to="" className="absolute top-4 left-4 text-white z-10">
        <img src={homeIcon} className="filter w-10 contrast-0" alt={'return to main page'}/>
      </Link>
      <h3 className='absolute right-6 bottom-4 text-base text-gray-500 italic'>scroll page to see result</h3>
    </>

)
}