import {Button, Navbar} from "@nextui-org/react";
import {useRouter} from "next/router";

const HeaderPublic = () => {
    const router = useRouter();
    return (
        <Navbar.Content>
            <Navbar.Item>
                <Button light color="primary" auto onClick={() => router.push('/login')}>
                    Войти
                </Button>
            </Navbar.Item>
            <Navbar.Item>
                <Button bordered color="error" auto onClick={() => router.push('/signup')}>
                    Зарегистрироваться
                </Button>
            </Navbar.Item>
        </Navbar.Content>
    );
};

export default HeaderPublic;