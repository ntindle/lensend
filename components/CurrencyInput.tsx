import { Flex, Space, Stack } from "@mantine/core";
import { useState } from "react";
import CurrencySelector from "./CurrencySelector";
import NumericInput from "./NumericInput";
import NumericOutput from "./NumericOutput";

export type SendRequestButtonsProps = {
    amount: string
    setAmount: (amount: string) => void
    currency: string
    setCurrency: (currency: string) => void
}

export default function CurrencyInput(props: SendRequestButtonsProps) {
    const { amount, setAmount, currency, setCurrency } = props

    return (
        <>
            <NumericOutput currency={currency} value={amount} />
            <Space h='xl' />
            <CurrencySelector onChange={(new_currency) => {
                if (new_currency === "")
                    return
                setCurrency(new_currency)
            }} validValues={['ETH', 'MATIC', 'USDC', 'CODE']} defaultValue={currency} value={currency} />
            <Space h='xl' />
            <NumericInput onChange={(value) => {
                if (value === '\b') {
                    // if the value is a backspace, remove the last character
                    setAmount(amount.slice(0, -1))
                    // if we don't have any more characters, set the amount to 0
                    if (amount.length === 1) {
                        setAmount('0')
                    }
                    return
                }
                if (amount == '0') {
                    setAmount(value)
                    return
                }
                setAmount(amount + value)
            }}
            />
        </>
    )
}