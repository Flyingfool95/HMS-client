import { useRef, useState } from "react";
import imageCompression from "browser-image-compression";
import useNotificationStore from "../../notifications/store/useNotificationStore";
import useProfile from "../hooks/useProfile";

function Image() {
    const profileImageRef = useRef<HTMLInputElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const { addNotification } = useNotificationStore((state) => state);

    const { updateImage } = useProfile();

    const handleUpload = async () => {
        const formData = new FormData();

        if (!profileImageRef.current || !profileImageRef.current.files?.[0]) {
            addNotification("Please add an image", "warning");
            return;
        }
        const image = profileImageRef.current.files[0];

        const options = {
            maxSizeMB: 0.2,
            maxWidthOrHeight: 320,
            useWebWorker: true,
        };

        const compressedImage = await imageCompression(image, options);
        formData.append("image", compressedImage);
        const blobUrl = URL.createObjectURL(compressedImage);
        setImageUrl(blobUrl);

        updateImage.mutate(formData);
    };

    return (
        <div
            className="profile-image"
            style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                height: "100px",
                width: "100px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid #ccc",
            }}
        >
            <input type="file" name="profile-image" id="profile-image" accept=".jpg,.png" ref={profileImageRef} />
            <button onClick={handleUpload}>Save</button>
        </div>
    );
}

export default Image;
