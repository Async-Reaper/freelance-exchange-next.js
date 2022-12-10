import HeaderPublic from "../HeaderPublic/HeaderPublic";
import Link from "next/link";
import {Button, Navbar, Spacer, Text, useTheme} from "@nextui-org/react";

const HeaderAll = () => {
    const {isDark} = useTheme();
    const variants = [
        "default",
        "highlight",
        "highlight-solid",
        "underline",
        "highlight-rounded",
        "highlight-solid-rounded",
        "underline-rounded",
    ];

    return (
        <>
            <Navbar isCompact isBordered variant="sticky">
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        PFE
                    </Text>
                </Navbar.Brand>
                <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"default"}>
                    <Link href="/">Заказы</Link>
                    <Link href="faq">FAQ</Link>
                </Navbar.Content>
                <HeaderPublic />
            </Navbar>
            <Spacer y={2} />
        </>
    );
};

export default HeaderAll;