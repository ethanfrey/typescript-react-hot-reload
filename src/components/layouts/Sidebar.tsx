import * as React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.less";

class Sidebar extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="sidebar">
                <p key="1">
                    <Link to="/home">
                        <span className="nav-text">Home</span>
                    </Link>
                </p>
                <p key="2">
                    <Link to="/about">
                        <span className="nav-text">About</span>
                    </Link>
                </p>
            </div>
        );
    }
}

export default Sidebar;
