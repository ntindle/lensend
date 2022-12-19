import { Button, Stack, Text } from "@mantine/core";
import { Profile, useFollowingQuery } from "@use-lens/react-apollo";
import { useAccount } from "wagmi";


export type FriendsSelectorProps = {
    onClick: (value: Profile) => void
}


export default function FriendsSelector(props: FriendsSelectorProps) {
    const { address } = useAccount()
    const { data: profilesData, loading, error } = useFollowingQuery(
        {
            variables: {
                request: {
                    address: address,
                    limit: 4,
                }
            }
        }
    )
    return (
        <>
            <Text fz={'lg'}>Friends</Text>
            <Stack spacing={"xs"}>
                {profilesData && (profilesData?.following).items.map((following) => {
                    if (following.profile == null) {
                        return null
                    }
                    else {
                        return (
                            <Button key={following.profile.id}
                                onClick={(event) => { props.onClick(following.profile as Profile) }}>
                                Send to @{following.profile.handle}
                            </Button>)
                    }
                })
                }
            </Stack>
        </>
    );
}