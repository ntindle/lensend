import {
    AppShell,
    Container,
    useMantineTheme,
} from '@mantine/core';
import FrameHeader from '../Header';
import { useState } from 'react';
import FrameFooter from './Footer';
import HomePage from '../HomePage';
import BalancePage from '../BalancePage';
import ActivityPage from '../ActivityPage';
import SearchPage from '../SearchPage';
import QRPage from '../QRPage';

export default function Frame() {
    const theme = useMantineTheme();
    const [page, setPage] = useState('home');
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
                <FrameFooter onActivityClick={() => {
                    setPage('activity')
                }}
                    onBalanceClick={() => {
                        setPage('balance')
                    }}
                    onHomeClick={() => {
                        setPage('home')
                    }}
                    onSearchClick={() => {
                        setPage('search')
                    }}
                    onQrClick={() => {
                        setPage('qr')
                    }}
                />
            }
            header={
                <FrameHeader />
            }
        >
            <Container size={'md'}>
                {page === 'balance' && <BalancePage />}
                {page === 'qr' && <QRPage />}
                {page === 'home' && <HomePage />}
                {page === 'activity' && <ActivityPage />}
                {page === 'search' && <SearchPage />}
            </Container>
        </AppShell>
    );
}