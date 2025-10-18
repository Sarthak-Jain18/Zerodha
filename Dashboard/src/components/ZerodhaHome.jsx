import { useEffect } from "react";

export default function ZerodhaHome() {

    useEffect(() => {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
    }, []);

    return (
        <div className="m-5 p-5">
            <p>Redirecting...</p>
        </div>
    );
}
