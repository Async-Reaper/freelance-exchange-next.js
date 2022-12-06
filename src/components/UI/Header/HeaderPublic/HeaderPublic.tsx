import Link from "next/link";

const HeaderPublic = () => {
    return (
        <div>
            <Link href={'/login'}>Войти</Link>
        </div>
    );
};

export default HeaderPublic;