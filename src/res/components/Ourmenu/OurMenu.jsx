import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartService } from "../../../services/cartService";
import styles from "./OurMenu.module.css";

const MenuItem = ({ item }) => {
  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await cartService.addToCart(item.id, 1);
      console.log("تم الإضافة للسلة:", item.name);
    } catch (error) {
      console.error("فشل الإضافة للسلة:", error);
    }
  };

  return (
    <Link to={`/product/${item.id}`} className={styles.menuItemLink}>
      <div className={styles.menuItemCard}>
        <div className={styles.menuItemInfo}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className={styles.menuItemPriceWrapper}>
            <span className={styles.menuItemPrice}>
              {item.price} {item.currency || "ريال"}
            </span>
            <button
              onClick={handleAddToCart}
              className={styles.menuItemIconButton}
            >
              <div className={styles.menuItemIcon}>🛒</div>
            </button>
          </div>
        </div>
        <div className={styles.menuItemImageWrapper}>
          <img
            src={item.image}
            alt={item.name}
            className={styles.menuItemImage}
          />
        </div>
      </div>
    </Link>
  );
};

const OurMenu = ({ menu = [] }) => {
  const [categories, setCategories] = useState(["Popular"]);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [filteredItems, setFilteredItems] = useState([]);
  const [viewMode, setViewMode] = useState("cards");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    if (menu.length > 0) {
      const uniqueCategories = ["Popular", ...new Set(menu.map(item => item.category).filter(Boolean))];
      setCategories(uniqueCategories);
    }
  }, [menu]);

  useEffect(() => {
    if (!menu || menu.length === 0) {
      setFilteredItems([]);
      return;
    }

    let categoryItems = activeCategory === "Popular" 
      ? menu 
      : menu.filter(item => item.category === activeCategory);

    const sortedItems = [...categoryItems].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name, 'ar');
      } else if (sortBy === "price") {
        return a.price - b.price;
      }
      return 0;
    });

    setFilteredItems(sortedItems);
  }, [activeCategory, sortBy, menu]);

  return (
    <div className={styles.ourMenuContainer}>
      <h1 className={styles.mainTitle}>قائمتنا</h1>
      <p className={styles.subtitle}>استكشف قائمتنا اللذيذة</p>

      <div className={styles.categoryTabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryTabButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.toolbar}>
        <div className={styles.viewOptions}>
          <button
            className={`${styles.toolbarButton} ${
              viewMode === "cards" ? styles.active : ""
            }`}
            onClick={() => setViewMode("cards")}
          >
            عرض بطاقات
          </button>
          <button
            className={`${styles.toolbarButton} ${
              viewMode === "list" ? styles.active : ""
            }`}
            onClick={() => setViewMode("list")}
          >
            عرض قائمة
          </button>
        </div>

        <div className={styles.sortOptions}>
          <button
            className={`${styles.toolbarButton} ${
              sortBy === "name" ? styles.active : ""
            }`}
            onClick={() => setSortBy("name")}
          >
            ترتيب بالاسم
          </button>
          <button
            className={`${styles.toolbarButton} ${
              sortBy === "price" ? styles.active : ""
            }`}
            onClick={() => setSortBy("price")}
          >
            ترتيب بالسعر
          </button>
        </div>

        <button className={styles.downloadButton}>تحميل القائمة</button>
      </div>

      <div
        className={`${styles.menuItemsGrid} ${
          viewMode === "list" ? styles.listView : ""
        }`}
      >
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
        {filteredItems.length === 0 && (
          <div className={styles.noItemsMessage}>
            {menu.length === 0 
              ? "لا توجد عناصر في القائمة حالياً" 
              : "لا توجد أطعمة في هذا التصنيف"
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default OurMenu;
