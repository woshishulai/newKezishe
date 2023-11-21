import { getImageUrl } from "@/utils";

function Logo() {
    return (
        <div>
            <img src={getImageUrl('register/logo.png')} alt="" />
        </div>
    );
}

export default Logo;