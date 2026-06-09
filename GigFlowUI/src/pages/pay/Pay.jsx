import React, { useState } from "react";
import "./Pay.scss";
import newRequest from "../../utils/newRequest";
import { useParams, useNavigate } from "react-router-dom";

const Pay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleOrder = async () => {
        setLoading(true);
        setError(null);
        try {
            await newRequest.post(`/orders/${id}`);
            navigate("/success");
        } catch (err) {
            setError(err.response?.data || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pay">
            <h2>Confirm Your Order</h2>
            <p>Click the button below to place your order.</p>
            {error && <p className="error">{error}</p>}
            <button onClick={handleOrder} disabled={loading}>
                {loading ? "Placing Order..." : "Confirm Order"}
            </button>
        </div>
    );
};

export default Pay;
