import React, { useEffect } from "react";
import { useReservation } from "../contexts/ReservationContext";

const Reservations = () => {
  const { reservations, loading, error, fetchReservations } = useReservation();

  useEffect(() => {
    fetchReservations(1); // Replace 1 with the actual restaurant admin ID
  }, [fetchReservations]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="reservationsPage">
      <h2>Your Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <h3>Reservation #{reservation.id}</h3>
              <p>Date: {reservation.date}</p>
              <p>Time: {reservation.time}</p>
              <p>Guests: {reservation.guests}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reservations;
