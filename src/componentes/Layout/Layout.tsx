import React from 'react';
import { MenuSuperior } from "../MenuSuperior/MenuSuperior";
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div>
            <MenuSuperior />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;