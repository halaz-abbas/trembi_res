import React, { useEffect, useState } from "react";
import { restaurantService } from "../../services/restaurantService";
import NavBar2 from "../../shared/components/navbar/NavBar2";
import Res from "../components/res1/Res";
import AboutUs from "../components/aboutus/AboutUs";
import OurMenu from "../components/Ourmenu/OurMenu";

export default function Restaurant() {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await restaurantService.getFlatRestaurantDetails();
        console.log("API Response:", response);
        if (response && response.data) {
          const { settings, appearance, restaurant, menu } = response.data;
          setRestaurantDetails({
            name: settings.title,
            description: settings.description,
            address: settings.address,
            about: settings.about_us,
            logo: appearance.logo,
            primaryColor: appearance.primary_color,
            secondaryColor: appearance.secondary_color,
          });
          setMenu(menu || []); // Update menu state
        }
      } catch (err) {
        console.error("Error fetching Flat Burger details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>خطأ: {error}</div>;

  return (
    <>
      <NavBar2 />
      <Res details={restaurantDetails} />
      <AboutUs details={restaurantDetails} />
      <OurMenu menu={menu} />
    </>
  );
}
