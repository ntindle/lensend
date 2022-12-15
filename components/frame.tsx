import {
    AppShell,
    Center,
    Container,
    Footer,
    Text,
    useMantineTheme,
} from '@mantine/core';
import FrameHeader from './header';
import { useState } from 'react';
import FrameFooter from './footer';
import NumericInput from './numeric_input';
import Home from './home';

export default function Frame() {
    const theme = useMantineTheme();

    return (
        <AppShell
            styles={{
                // No styles defined by default
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            aside={
                <></>
            }
            footer={
                <FrameFooter />
            }
            header={
                <FrameHeader />
            }
        >
            <Container size={'md'}>
                <Home/>
            </Container>
        </AppShell>
    );
}