import useAuth from "../../features/auth/hooks/useAuth";
import Image from "../../features/profile/components/Image";
import Details from "../../features/profile/components/Details";

export default function Profile() {
    const { deleteUser } = useAuth();

    return (
        <main>
            <h1>Profile</h1>
            <Image />
            <Details />
            <button onClick={() => deleteUser.mutate()}>Delete my account</button>
        </main>
    );
}
