import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './OurMenu.module.css';
import { menuCategories, menuItems } from '../../../../data.js';

// مكون فرعي لعنصر القائمة الفردي
const MenuItem = ({ item }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', item.name);
  };

  return (
    <Link to={`/product/${item.id}`} className={styles.menuItemLink}>
      <div className={styles.menuItemCard}>
        <div className={styles.menuItemInfo}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className={styles.menuItemPriceWrapper}>
            <span className={styles.menuItemPrice}>{item.price} {item.currency}</span>
            <button onClick={handleAddToCart} className={styles.menuItemIconButton}>
              <div className={styles.menuItemIcon}>🛒</div>
            </button>
          </div>
        </div>
        <div className={styles.menuItemImageWrapper}>
          <img src={item.image} alt={item.name} className={styles.menuItemImage} />
        </div>
      </div>
    </Link>
  );
};

// المكون الرئيسي OurMenu
const OurMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [filteredItems, setFilteredItems] = useState([]);
  const [viewMode, setViewMode] = useState("cards");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    let itemsToFilter = menuItems.filter(item => item.category === activeCategory);

    if (sortBy === "name") {
      itemsToFilter.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      itemsToFilter.sort((a, b) => a.price - b.price);
    }

    setFilteredItems(itemsToFilter);
  }, [activeCategory, sortBy]);

  return (
    <div className={styles.ourMenuContainer}>
      <h1 className={styles.mainTitle}>Our Menu</h1>
      <p className={styles.subtitle}>Explore our special, tasteful dishes on the Restaurant Menu!</p>

      <div className={styles.categoryTabs}>
        {menuCategories.map(category => (
          <button
            key={category}
            className={`${styles.categoryTabButton} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.toolbar}>
        <div className={styles.viewOptions}>
          <button
            className={`${styles.toolbarButton} ${viewMode === 'cards' ? styles.active : ''}`}
            onClick={() => setViewMode("cards")}
          >
            View as Cards
          </button>
          <button
            className={`${styles.toolbarButton} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode("list")}
          >
            View as List
          </button>
        </div>

        <div className={styles.sortOptions}>
          <button
            className={`${styles.toolbarButton} ${sortBy === 'name' ? styles.active : ''}`}
            onClick={() => setSortBy("name")}
          >
            Sort by Name
          </button>
          <button
            className={`${styles.toolbarButton} ${sortBy === 'price' ? styles.active : ''}`}
            onClick={() => setSortBy("price")}
          >
            Sort by Price
          </button>
        </div>

        <button className={styles.downloadButton}>Download Menu</button>
      </div>

      <div className={`${styles.menuItemsGrid} ${viewMode === 'list' ? styles.listView : ''}`}>
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
        {filteredItems.length === 0 && (
          <p className={styles.noItemsMessage}>No items in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default OurMenu;