import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Badge, Input, Avatar, message } from 'antd';
import {
    VideoCameraOutlined,
    AudioOutlined,
    SendOutlined,
    PhoneOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { formatDuration } from '../utils/helpers';
import './StudyRoomPage.css';

const { TextArea } = Input;

/**
 * StudyRoomPage Component
 * Real-time study session with video/voice and chat
 */
const StudyRoomPage = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const [sessionStatus, setSessionStatus] = useState('ACTIVE'); // CREATED, ACTIVE, FINISHED
    const [duration, setDuration] = useState(0);
    const [chatMessage, setChatMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            user: 'Sarah Chen',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            message: 'Hi! Ready to practice?',
            time: '10:30',
        },
    ]);

    useEffect(() => {
        // Timer
        const timer = setInterval(() => {
            setDuration((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSendMessage = () => {
        if (!chatMessage.trim()) return;

        setMessages([
            ...messages,
            {
                id: messages.length + 1,
                user: 'You',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                message: chatMessage,
                time: new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                }),
            },
        ]);
        setChatMessage('');
    };

    const handleEndSession = () => {
        setSessionStatus('FINISHED');
        message.success('Session ended successfully!');
        setTimeout(() => {
            navigate('/match');
        }, 2000);
    };

    return (
        <div className="study-room-page">
            <div className="container">
                {/* Header */}
                <div className="room-header">
                    <div className="room-info">
                        <Badge status="processing" text="Live Session" />
                        <span className="room-id">Room: {roomId}</span>
                    </div>
                    <div className="session-timer">
                        <ClockCircleOutlined />
                        <span>{formatDuration(duration)}</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="room-content">
                    {/* Video/Voice Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="video-panel"
                    >
                        <Card className="video-card">
                            <div className="video-placeholder">
                                <VideoCameraOutlined className="video-icon" />
                                <p>Video/Voice Integration</p>
                                <p className="video-note">(Zego SDK will be integrated here)</p>
                            </div>
                            <div className="video-controls">
                                <Button
                                    type="primary"
                                    shape="circle"
                                    size="large"
                                    icon={<AudioOutlined />}
                                    className="control-btn"
                                />
                                <Button
                                    type="primary"
                                    shape="circle"
                                    size="large"
                                    icon={<VideoCameraOutlined />}
                                    className="control-btn"
                                />
                                <Button
                                    danger
                                    shape="circle"
                                    size="large"
                                    icon={<PhoneOutlined />}
                                    onClick={handleEndSession}
                                    className="control-btn end-call-btn"
                                />
                            </div>
                        </Card>
                    </motion.div>

                    {/* Chat Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="chat-panel"
                    >
                        <Card className="chat-card" title="Chat">
                            <div className="chat-messages">
                                {messages.map((msg) => (
                                    <div key={msg.id} className="chat-message">
                                        <Avatar src={msg.avatar} size="small" />
                                        <div className="message-content">
                                            <div className="message-header">
                                                <span className="message-user">{msg.user}</span>
                                                <span className="message-time">{msg.time}</span>
                                            </div>
                                            <p className="message-text">{msg.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="chat-input">
                                <TextArea
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    autoSize={{ minRows: 2, maxRows: 4 }}
                                    onPressEnter={(e) => {
                                        if (!e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                />
                                <Button
                                    type="primary"
                                    icon={<SendOutlined />}
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default StudyRoomPage;
