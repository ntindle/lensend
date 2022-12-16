import { Button, Stack, Text } from "@mantine/core";

export type SuggestionsProps = {
    onClick: (value: string) => void
}

export default function Suggestions(props: SuggestionsProps) {
    return (
        <>
            <Text>Suggestions</Text>
            <Stack>
                <Button onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @user1</Button>
                <Button onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @user2</Button>
                <Button onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @user3</Button>
                <Button onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @user4</Button>

            </Stack>
        </>
    )
}