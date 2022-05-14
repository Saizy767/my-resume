import { useMatch, useResolvedPath, Link, LinkProps } from "react-router-dom";
import React from "react";

const CustomLink = ({ children, to, ...props }: LinkProps) =>{
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " (active)"}
      </div>
    );
  }

export default CustomLink