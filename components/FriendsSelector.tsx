import { Button, Stack, Text } from "@mantine/core";
import { Profile, useFollowingQuery } from "@use-lens/react-apollo";
import { useAccount } from "wagmi";


export type FriendsSelectorProps = {
    onClick: (value: Profile) => void
}


export default function FriendsSelector(props : FriendsSelectorProps) {
    const {address} = useAccount()
    const {data: profilesData, loading, error} = useFollowingQuery(
        {
            variables: {
                request: {
                    address: address,
                    limit: 10,
                }
            }
        }
    )
    return (
        <>
            <Text>Friends</Text>
            <Stack spacing={"xs"}>
                {/* {profilesData && (profilesData?.following).items.map((profile) => {
                    return (
                        <Button key={profile.id} onClick={(event) => { props.onClick(profile) }}>Send to @{profile.handle}</Button>
                    )
                })
                } */}
                <Button onClick={(event) => { }}>Send to @user1</Button>
            </Stack>
        </>
    );
}