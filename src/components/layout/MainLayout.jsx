import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './MainLayout.css';

const { Content } = AntLayout;

/**
 * MainLayout Component
 * Provides consistent layout structure for all authenticated pages
 */
const MainLayout = () => {
    return (
        <AntLayout className="main-layout">
            <Navbar />
            <Content className="main-content">
                <Outlet />
            </Content>
        </AntLayout>
    );
};

export default MainLayout;
