import React from 'react';
import MainContainer from "../../src/components/mainContainer/MainContainer";
import { Collapse, Text } from "@nextui-org/react";

const Index = () => {
    return (
        <MainContainer>
            <Collapse.Group>
                <Collapse title="Option A">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="Option B">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
                <Collapse title="Option C">
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Text>
                </Collapse>
            </Collapse.Group>
        </MainContainer>
    );
};

export default Index;