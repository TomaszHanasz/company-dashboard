import React, { useState, useContext, useEffect } from "react";
import { menuIcons } from "../../database/icons/menuIcons";
import NavBar from "../../components/navBar/NavBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItems } from "../../components/dasshboardIcons/DashboardIcons";
import { SelectMenu } from "../../components/selectMenu/SelectMenu";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import Leaders from "../../components/leaders/Leaders";
import Footer from "../../components/footer/Footer";
import "./home.style.css";

const Home = () => {
  const [icons, setIcons] = useState([...menuIcons]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme } = useContext(ThemeContext);
  const [selectedMenuIcon, setSelectedMenuIcon] = useState([]);

  const handleMenuIconChange = (menuIcon) => {
    setSelectedMenuIcon(menuIcon);
  };

  const selectedMenuIcons = icons.filter((icon) =>
    selectedMenuIcon.includes(icon.name)
  );

  useEffect(() => {
    const selectedIcons = localStorage.getItem("selected icons");
    if (selectedIcons) {
      setSelectedMenuIcon(selectedIcons.split(","));
    }
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: theme === "dark" ? "#f4f4f4" : "black",
  };

  const selectedMenus = selectedMenuIcons.map((icon, index) => (
    <Link to={icon.link} style={linkStyle}>
      <SortableItems key={icon.id} icon={icon} index={index} />
    </Link>
  ));

  const handleDragEnd = (e) => {
    const { active, over } = e;

    setIcons((icons) => {
      const oldIndex = icons.findIndex((icons) => icons.id === active.id);
      const newIndex = icons.findIndex((icons) => icons.id === over.id);
      return arrayMove(icons, oldIndex, newIndex);
    });
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div>
      <NavBar />
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        activationConstraint={{
          delay: 250,
          tolerance: 5,
        }}
      >
        <div className={`home-menus__container home-menus-${theme}`}>
          <div className="home-menus__title-div">
            <SelectMenu onMenuIconChange={handleMenuIconChange} />
            <h2 className={`home-menus__title home-menus__title-${theme}`}>
              Favorite Apps
            </h2>
          </div>
          <div className="home-menus">
            <SortableContext
              items={icons}
              strategy={horizontalListSortingStrategy}
            >
              {isCollapsed ? selectedMenus.slice(0, 6) : selectedMenus}
            </SortableContext>
          </div>
        </div>
      </DndContext>
      <button onClick={toggleCollapse} className="home__expand-btn">
        {isCollapsed ? "∨" : "∧"}
      </button>
      <div className={`home__charts home-menus-${theme}`}>
        <h2 className={`home-menus__title home-menus__title-${theme}`}>
          S&P 500 E-Mini Decemeber 2021
        </h2>
        <div className="home__charts__container">
          <iframe
            src="https://admisclientservices.websol.barchart.com/?module=futuresInteractiveChart&symbol=ZWU23&hideDisclaimer=1"
            className="home__main-chart"
            title="main chart"
          />
        </div>
      </div>
      <div>
        <Leaders />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
