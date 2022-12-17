import { Avatar, Text } from "@mantine/core";
import { MediaSet, NftImage, Profile, ProfileMedia, useProfilesQuery } from "@use-lens/react-apollo";
import { useAccount } from "wagmi";

export type ConnectedLensAvatarProps = {
};

export default function ConnectedLensAvatar(props: ConnectedLensAvatarProps) {

    const { address } = useAccount();
    const { data: profilesData, loading, error } = useProfilesQuery({
        variables: {
            request: {
                ownedBy: [address]
            }
        }
    });


    const defaultProfile = profilesData?.profiles?.items.find(profile => profile.isDefault);
    const currentProfile1 = defaultProfile || profilesData?.profiles?.items[0];
    const currentProfile = currentProfile1 as Profile;

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }
    return (
        <>
            { profilesData && profilesData.profiles && profilesData?.profiles?.items.length > 0 &&
                <Avatar src={(currentProfile as Profile).picture?.__typename === 'MediaSet' ? ((currentProfile.picture as ProfileMedia) as MediaSet).original.url : (currentProfile.picture as NftImage)?.uri} />
            }
        </>
    )
}