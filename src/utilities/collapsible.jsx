import React, { useState } from "react";
import { useCollapse } from "react-collapsed";

function Collapsible() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Collapse" : "Expand"}
      </div>
      <div {...getCollapseProps()}></div>
      {!isExpanded && <button onClick={handleExpand}></button>}
    </div>
  );
}

export { Collapsible };
