import { Button, Stack, Text } from "@mantine/core";
import { Profile, ProfileSearchResult, ProfileSortCriteria, useExploreProfilesQuery } from "@use-lens/react-apollo";

export type SuggestionsProps = {
    onClick: (value: Profile) => void
}

export default function Suggestions(props: SuggestionsProps) {

    // TODO: make this serve up suggestions based on the user's most interacted with profiles

    const { data: profilesData, loading, error } = useExploreProfilesQuery({
        variables:
        {
            request: {
                sortCriteria: ProfileSortCriteria.MostFollowers,
                limit: 4
            }
        }
    })
    return (
        <>
            <Text fz={'lg'}>Suggestions</Text>
            <Stack spacing={"xs"}>
                {profilesData && (profilesData?.exploreProfiles as ProfileSearchResult).items.map((profile) => {
                    return (
                        <Button key={profile.id} onClick={(event) => { props.onClick(profile) }}>Send to @{profile.handle}</Button>
                    )
                })
                }
            </Stack>
        </>
    )
}