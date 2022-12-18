import { Button, Stack, Text } from "@mantine/core";
import { Profile, ProfileSearchResult, ProfileSortCriteria, useExploreProfilesQuery } from "@use-lens/react-apollo";

export type SuggestionsProps = {
    onClick: (value: Profile) => void
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
                {profilesData && (profilesData?.exploreProfiles as ProfileSearchResult).items.map((profile) => {
                    return (
                        <Button key={profile.id} onClick={(event) => { props.onClick(profile) }}>Send to @{profile.handle}</Button>
                    )
                })
                }
                {/* <Button onClick={(event) => { props.onClick(event.currentTarget.textContent || "") }}>Send to @user1</Button> */}
                

            </Stack>
        </>
    )
}