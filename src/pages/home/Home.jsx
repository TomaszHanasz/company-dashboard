import React, { useState, useContext } from "react";
import { menuIcons } from "../../database/icons/menuIcons";
import NavBar from "../../components/navBar/NavBar";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItems } from "../../components/dasshboardIcons/DashboardIcons";
import SelectMenu from "../../components/selectMenu/SelectMenu";
import Leaders from "../../components/leaders/Leaders";
import "./home.style.css";
import { ThemeContext } from "../../App";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [icons, setIcons] = useState([...menuIcons]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme } = useContext(ThemeContext);

  const selectedMenus = icons
    .slice(0, 6)
    .map((icon, index) => (
      <SortableItems key={icon.id} icon={icon} index={index} />
    ));

  const handleDragEnd = (e) => {
    const { active, over } = e;

    setIcons((icons) => {
      const oldIndex = icons.findIndex((icons) => icons.id === active.id);
      const newIndex = icons.findIndex((icons) => icons.id === over.id);
      console.log(theme.theme);
      return arrayMove(icons, oldIndex, newIndex);
    });
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div>
      <NavBar />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className={`home-menus__container home-menus-${theme}`}>
          <div className="home-menus__title-div">
            <SelectMenu />
            <h2 className={`home-menus__title home-menus__title-${theme}`}>
              Favorite Apps
            </h2>
          </div>
          <div className="home-menus">
            <SortableContext
              items={icons}
              strategy={horizontalListSortingStrategy}
            >
              {isCollapsed
                ? selectedMenus
                : icons.map((icon, index) => (
                    <SortableItems key={icon.id} icon={icon} index={index} />
                  ))}
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
