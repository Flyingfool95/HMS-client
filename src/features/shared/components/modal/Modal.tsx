import { ReactElement, useState } from "react";
import "./Modal.css";

function Modal({ children, buttonContent }: { children: ReactElement; buttonContent: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = (e) => {
        if (e.target.className === "modal-background") return setIsOpen(false);
    };

    return (
        <>
            <button className="modal-trigger" onClick={() => setIsOpen(true)}>
                {buttonContent}
            </button>
            {isOpen && (
                <div className="modal-background" onClick={(e) => handleClose(e)}>
                    <div className="modal-content">
                        {children}
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
