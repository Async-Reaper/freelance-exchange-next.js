import Link from "next/link";

const HeaderPublic = () => {
    return (
        <div>
            <Link href={'/login'}>Войти</Link>
            <Link href={'/signup'}>Зарегистрироваться</Link>
        </div>
    );
};

export default HeaderPublic;