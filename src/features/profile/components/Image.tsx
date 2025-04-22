import { useRef } from "react";

function Image() {
    const profileImageRef = useRef(null);

    const handleUpload = () => {
        console.log(profileImageRef.current.files[0])
    }

    return (
        <div className="profile-image">
            <input type="file" name="profile-image" id="profile-image" accept=".jpg,.png" ref={profileImageRef} />
            <button onClick={handleUpload}>Save</button>
        </div>
    );
}

export default Image;
