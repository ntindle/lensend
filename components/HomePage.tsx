import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import RequestModal from "./RequestModal";
import SendModal from "./SendModal";
import SendRequestButtons from "./SendRequestButtons";

export default function Home() {
    const [sendModalOpened, setSendModalOpened] = useState(false);
    const [requestModalOpened, setRequestModalOpened] = useState(false);
    const [amount, setAmount] = useState('0');
    const [currency, setCurrency] = useState("USDC");
    return (
        <>
            <SendModal currency={currency} amount={amount} opened={sendModalOpened} onClose={() => {
                setSendModalOpened(false)
                console.log("Closed Send Modal")
            }} />
            <RequestModal currency={currency} amount={amount} opened={requestModalOpened} onClose={() => {
                setRequestModalOpened(false)
                console.log("Closed Request Modal")
            }} />
            <CurrencyInput amount={amount} setAmount={setAmount} currency={currency} setCurrency={setCurrency} />
            <SendRequestButtons
                sendModalOpened={sendModalOpened}
                requestModalOpened={requestModalOpened}
                setSendModalOpened={setSendModalOpened}
                setRequestModalOpened={setRequestModalOpened} />
        </>
    )
}
