import { Button, Stack, Text } from "@mantine/core";
import { ProfileSortCriteria, useExploreProfilesQuery } from "@use-lens/react-apollo";

export type SuggestionsProps = {
    onClick: (value: string) => void
}

export default function Suggestions(props: SuggestionsProps) {

    const {data: profilesData, loading, error } = useExploreProfilesQuery({
        variables:
        {
            request:{
                sortCriteria: ProfileSortCriteria.MostFollowers,
                limit: 4
            }
        }
    })
    return (
        <>
            <Text>Suggestions</Text>
            <Stack spacing={"xs"}>
                {profilesData && profilesData?.exploreProfiles.items.map((profile) => {
                    return (
                        <Button key={profile.id} onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @{profile.handle}</Button>
                    )
                })
                }
                {/* <Button onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @user1</Button> */}
                

            </Stack>
        </>
    )
}