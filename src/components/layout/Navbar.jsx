import { Layout as AntLayout, Menu, Avatar, Dropdown, Badge } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    HomeOutlined,
    UserOutlined,
    TeamOutlined,
    SoundOutlined,
    EditOutlined,
    MessageOutlined,
    BellOutlined,
    LogoutOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import useAuthStore from '../../store/authStore';
import './Navbar.css';

const { Header } = AntLayout;

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const menuItems = [
        {
            key: '/match',
            icon: <TeamOutlined />,
            label: <Link to="/match">Find Partner</Link>,
        },
        {
            key: '/speaking',
            icon: <SoundOutlined />,
            label: <Link to="/speaking">Speaking</Link>,
        },
        {
            key: '/writing',
            icon: <EditOutlined />,
            label: <Link to="/writing">Writing</Link>,
        },
        {
            key: '/forum',
            icon: <MessageOutlined />,
            label: <Link to="/forum">Forum</Link>,
        },
    ];

    const userMenuItems = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Profile',
            onClick: () => navigate('/profile'),
        },
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings',
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Logout',
            onClick: () => {
                logout();
                navigate('/login');
            },
        },
    ];

    return (
        <Header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <HomeOutlined className="logo-icon" />
                    <span className="logo-text">
                        IELTS <span className="text-gradient">Match</span>
                    </span>
                </Link>

                {/* Navigation Menu */}
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    className="navbar-menu"
                />

                {/* Right Side - Notifications & User */}
                <div className="navbar-actions">
                    {/* Notifications */}
                    <Badge count={3} size="small">
                        <BellOutlined className="navbar-icon" />
                    </Badge>

                    {/* User Dropdown */}
                    <Dropdown
                        menu={{ items: userMenuItems }}
                        placement="bottomRight"
                        trigger={['click']}
                    >
                        <div className="navbar-user">
                            <Avatar src={user?.avatar} icon={<UserOutlined />} />
                            <span className="user-name">{user?.name || 'User'}</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Header>
    );
};

export default Navbar;
