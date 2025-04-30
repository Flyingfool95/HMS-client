import useAuth from "../../features/auth/hooks/useAuth";
import Image from "../../features/profile/components/Image";
import Details from "../../features/profile/components/Details";
import Modal from "../../features/shared/components/modal/Modal";

export default function Profile() {
    const { deleteUser } = useAuth();

    return (
        <main>
            <h1>Profile</h1>
            <Image />
            <Details />
            <Modal buttonContent="Delete my account">
                <button onClick={() => deleteUser.mutate()}>Delete</button>
            </Modal>
        </main>
    );
}
