import React, { useEffect, useState } from "react";

function Cursor({ isHovered, isHovered1, text, isHovered2, text1}) {

    const [cursorPosition3, setCursorPosition3] = useState({ x: 0, y: 0 });
    
  
    const lagFactorCursor1 = 1;
    
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const deltaXCursor3 = (e.clientX - cursorPosition3.x) * lagFactorCursor1;
        const deltaYCursor3 = (e.clientY - cursorPosition3.y) * lagFactorCursor1;
    
        setCursorPosition3({
          x: cursorPosition3.x + deltaXCursor3,
          y: cursorPosition3.y + deltaYCursor3,
        });        
      };
  
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, [cursorPosition3]);
  
  return (
    <div
    className={`cursor1 ${isHovered ? "hover" : ""} ${isHovered1 ? "hover" : ""} ${isHovered2 ? "hover" : ""}`}
      style={{
        transform: `translate(${cursorPosition3.x}px, ${cursorPosition3.y}px)`,
      }}
    >
       {isHovered1 && <div className="explore-text">{text}</div>}
       {isHovered2 && <div className="drag-text">{text1}</div>}
    </div>
  );
}


export default Cursor ;

