import { useState } from "react";
import CurrencyInput from "./currency_input";
import SendModal from "./SendModal";
import SendRequestButtons from "./send_request";

export default function Home() {
    const [sendModalOpened, setSendModalOpened] = useState(false);
    const [requestModalOpened, setRequestModalOpened] = useState(false);
    const [amount, setAmount] = useState('0');
    const [currency, setCurrency] = useState("USDC");
    return (
        <>
            <SendModal currency={currency} amount={amount} opened={sendModalOpened} onClose={() => {
                setSendModalOpened(false)
            }} />
            <CurrencyInput amount={amount} setAmount={setAmount} currency={currency} setCurrency={setCurrency} />
            <SendRequestButtons setSendModalOpened={setSendModalOpened} setRequestModalOpened={setRequestModalOpened} />
        </>
    )
}
