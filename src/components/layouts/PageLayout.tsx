import * as React from "react";
import Sidebar from "./Sidebar";
import { Redirect } from "react-router-dom";
import {renderRoutes} from "react-router-config";
import { routes } from "../routes";
import "./PageLayout.less";

const PageLayout: React.StatelessComponent<{}> = () => {
    return (
        <div>
            <Sidebar />
            <div>
                <Redirect to="/home" />
                {renderRoutes(routes)}
            </div>
        </div>
    );
};

export default PageLayout;
