import {Button, Navbar, User} from "@nextui-org/react";
import {useRouter} from "next/router";
import React from "react";
import {deleteCookie} from "../../../../utils/cookie/deleteCookie";
import {useTypeDispatch} from "../../../../hooks/useTypeDispatch";
import {setLoginStatus} from "../../../../store/slices/loginSlice/loginSlice";

const HeaderPrivate = () => {
    const router = useRouter();
    const dispatch = useTypeDispatch();

    const signout = () => {
        deleteCookie('token');
        dispatch(setLoginStatus(false))
    }
    return (
        <Navbar.Content>
            <Navbar.Item>
                <User
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name={'f'}
                    size="xs"
                />
            </Navbar.Item>
            <Navbar.Item>
                <Button bordered color="error" auto onPress={signout}>
                    Выйти
                </Button>
            </Navbar.Item>
        </Navbar.Content>
    );
};

export default HeaderPrivate;