import { Button, Stack, Text } from "@mantine/core";
import { Profile, ProfileSearchResult, SearchRequestTypes, useSearchProfilesQuery } from "@use-lens/react-apollo";

export type SearchResultsProps = {
    query: string;
    onClick: (value: string) => void;
};

export default function SearchResults(props: SearchResultsProps) {
    const { data: profiles, loading, error } = useSearchProfilesQuery({
        variables: {
            request: {
                type: SearchRequestTypes.Profile,
                query: props.query,
            },
        },
    });


    return (
        <>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            <Stack>
                {(profiles?.search as ProfileSearchResult).items.map((profile: Profile) => {
                    return (
                        <Button key={profile.id}
                            onClick={(event) => {
                                props.onClick(event.currentTarget.textContent || "");
                            }}
                        >
                            Send to @{profile.handle}
                        </Button>
                    );
                }
                )}
            </Stack>
        </>
    );
}