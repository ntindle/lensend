import { Avatar, Badge, Card, Center, Image, Space, Stack, Text, Title } from "@mantine/core";
import { MediaSet, NftImage, Profile, ProfileMedia } from "@use-lens/react-apollo";
import Link from "next/link";

export type SendPreviewCardProps = {
    amount: string
    currency: string
    reciever: Profile
    reason?: string
    hash?: string
    isTransactionSuccess?: boolean
}

export default function SendPreviewCard(props: SendPreviewCardProps) {
    return (
        <Card withBorder>
            <Card.Section>
                <Space h={'xl'} />
                <Center>
                    <Avatar radius={'xl'} size={70} src={(props.reciever as Profile).picture?.__typename === 'MediaSet' ? ((props.reciever.picture as ProfileMedia) as MediaSet).original.url : (props.reciever.picture as NftImage)?.uri} />

                    {/* Note: Doesn't support IPFS lol
                    TODO: Support IPFS */}
                </Center>
            </Card.Section>
            <Card.Section>
                <Stack spacing={0}>
                    <Center>
                        <Title>
                            {props.amount} {props.currency}
                        </Title>
                    </Center>
                    <Center>
                        <Title order={2}>
                            {props.reciever.name}
                        </Title>
                    </Center>
                    <Center>
                        <Text>
                            @{props.reciever.handle}
                        </Text>
                    </Center>
                    <Center>
                        <Text c="dimmed" lineClamp={1}>
                            {props.reciever.ownedBy}
                        </Text>
                    </Center>
                </Stack>
                <Space h={'xl'} />
            </Card.Section>
            {
                props.reason &&
                <Card.Section withBorder>
                    <Stack spacing={0}>
                        <Center>
                            <Text c="dimmed">
                                Reason:
                            </Text>
                        </Center>
                        <Center>
                            <Text>
                                {props.reason}
                            </Text>
                        </Center>
                    </Stack>
                </Card.Section>
            }
            {
                props.hash &&
                <Card.Section>
                    <Space h={'md'} />
                    <Stack spacing={0}>
                        <Center>
                            {props.isTransactionSuccess != true &&
                                <Badge size="xl" color="yellow">
                                    Waiting for Transaction
                                </Badge>
                            }
                            {props.isTransactionSuccess &&
                                <Badge size="xl" color="green">
                                    Transaction Successful
                                </Badge>
                            }
                        </Center>
                        <Center>
                            <Text>
                                <a href={`https://polygonscan.com/tx/${props.hash}`}>
                                    View on Polygonscan </a>
                            </Text>
                        </Center>
                    </Stack>


                </Card.Section>
            }
        </Card>
    )
}