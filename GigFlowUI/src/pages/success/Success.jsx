import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/orders");
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <h2>Order Placed Successfully!</h2>
            <p>You will be redirected to your orders page shortly.</p>
        </div>
    );
};

export default Success;
