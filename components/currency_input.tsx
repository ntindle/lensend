import { Flex, Space, Stack } from "@mantine/core";
import { useState } from "react";
import CurrencySelector from "./currency_selector";
import NumericInput from "./numeric_input";
import NumericOutput from "./numeric_output";

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
                    setAmount(amount.slice(0, -1))
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