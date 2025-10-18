import { useEffect } from "react";

export default function SignupPage() {

    useEffect(() => {
        window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}/`;
    }, []);

    return (
        <div className="m-5 p-5">
            <p>Redirecting...</p>
        </div>
    );
}
