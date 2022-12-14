import HeaderPublic from "../HeaderPublic/HeaderPublic";
import Link from "next/link";
import {Navbar, Spacer, Text} from "@nextui-org/react";
import getCookie from "../../../../utils/cookie/getCookie";
import HeaderPrivate from "../HeaderPrivate/HeaderPrivate";
import {useEffect} from "react";
import {useTypeDispatch} from "../../../../hooks/useTypeDispatch";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {setLoginStatus} from "../../../../store/slices/loginSlice/loginSlice";

const HeaderAll = () => {
    const {loginStatus} = useTypedSelector(state => state.login)
    const dispatch = useTypeDispatch()

    useEffect(() => {
        getCookie("token") ? dispatch(setLoginStatus(true)) : setLoginStatus(false);
    }, [loginStatus])


    return (
        <>
            <Navbar isCompact isBordered variant="sticky">
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        PFE
                    </Text>
                </Navbar.Brand>
                <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"default"}>
                    <Navbar.Item>
                        <Link href="/">Заказы</Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link href="faq">FAQ</Link>
                    </Navbar.Item>
                </Navbar.Content>
                { loginStatus ? <HeaderPrivate /> : <HeaderPublic />}
            </Navbar>
            <Spacer y={2} />
        </>
    );
};

export default HeaderAll;