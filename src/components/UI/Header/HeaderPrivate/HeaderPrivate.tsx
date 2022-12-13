import {Button, Navbar, User} from "@nextui-org/react";
import React, {useEffect} from "react";
import {deleteCookie} from "../../../../utils/cookie/deleteCookie";
import {useTypeDispatch} from "../../../../hooks/useTypeDispatch";
import {setLoginStatus} from "../../../../store/slices/loginSlice/loginSlice";
import {getUserDataHeader} from "../../../../services/api/getUserDataHeader";
import getCookie from "../../../../utils/cookie/getCookie";
import setCookie from "../../../../utils/cookie/setCookie";

export default function HeaderPrivate () {
    const dispatch = useTypeDispatch();

    useEffect(() => {
        getUserDataHeader()
    }, [])


    const signout = () => {
        deleteCookie('token');
        deleteCookie('uid');
        deleteCookie('firstname');
        deleteCookie('surname');
        deleteCookie('roleUser');
        deleteCookie('age')
        dispatch(setLoginStatus(false))
    }

    return (
        <Navbar.Content>
            <Navbar.Item>
                <User
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name={`${getCookie('firstname')} ${getCookie('surname')}`}
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
