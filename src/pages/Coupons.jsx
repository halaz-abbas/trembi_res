import React, { useEffect } from "react";
import { useCoupon } from "../contexts/CouponContext";

const Coupons = () => {
  const { coupons, loading, error, fetchCoupons } = useCoupon();

  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="couponsPage">
      <h2>Available Coupons</h2>
      {coupons.length === 0 ? (
        <p>No coupons available.</p>
      ) : (
        <ul>
          {coupons.map((coupon) => (
            <li key={coupon.id}>
              <h3>{coupon.code}</h3>
              <p>Type: {coupon.type}</p>
              <p>Discount: {coupon.amount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Coupons;
