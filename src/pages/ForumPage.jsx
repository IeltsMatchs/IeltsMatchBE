import { useState } from 'react';
import { Card, Input, Select, Button, Tag, Avatar, Modal, Form, message } from 'antd';
import {
    MessageOutlined,
    SearchOutlined,
    PlusOutlined,
    CommentOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { mockForumPosts } from '../utils/mockData';
import { formatRelativeTime } from '../utils/helpers';
import './ForumPage.css';

const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;

const ForumPage = () => {
    const [posts, setPosts] = useState(mockForumPosts);
    const [filteredPosts, setFilteredPosts] = useState(mockForumPosts);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const handleSearch = (value) => {
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(value.toLowerCase()) ||
            post.content.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    const handleFilter = (value, type) => {
        let filtered = posts;
        if (type === 'skill' && value) {
            filtered = filtered.filter((post) => post.skill === value);
        }
        setFilteredPosts(filtered);
    };

    const handleCreatePost = async (values) => {
        const newPost = {
            id: String(posts.length + 1),
            ...values,
            author: {
                name: 'John Doe',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
            },
            createdAt: new Date().toISOString(),
            replies: 0,
        };

        setPosts([newPost, ...posts]);
        setFilteredPosts([newPost, ...filteredPosts]);
        setIsModalOpen(false);
        form.resetFields();
        message.success('Post created successfully!');
    };

    return (
        <div className="forum-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="forum-header"
                >
                    <div>
                        <h1 className="page-title">
                            <MessageOutlined /> Community Forum
                        </h1>
                        <p className="page-subtitle">Connect, share, and learn together</p>
                    </div>
                    <Button
                        type="primary"
                        size="large"
                        icon={<PlusOutlined />}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Create Post
                    </Button>
                </motion.div>

                {/* Search & Filters */}
                <Card className="filter-card">
                    <div className="filter-controls">
                        <Search
                            placeholder="Search posts..."
                            prefix={<SearchOutlined />}
                            size="large"
                            onSearch={handleSearch}
                            style={{ flex: 1 }}
                        />
                        <Select
                            placeholder="Filter by skill"
                            size="large"
                            style={{ width: 200 }}
                            onChange={(value) => handleFilter(value, 'skill')}
                            allowClear
                        >
                            <Option value="speaking">Speaking</Option>
                            <Option value="writing">Writing</Option>
                        </Select>
                        <Select
                            placeholder="Filter by target band"
                            size="large"
                            style={{ width: 200 }}
                            allowClear
                        >
                            <Option value={7.0}>7.0</Option>
                            <Option value={7.5}>7.5</Option>
                            <Option value={8.0}>8.0</Option>
                        </Select>
                    </div>
                </Card>

                {/* Posts List */}
                <div className="posts-list">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="post-card" hoverable>
                                <div className="post-header">
                                    <Avatar src={post.author.avatar} size={48} />
                                    <div className="post-meta">
                                        <h3 className="post-title">{post.title}</h3>
                                        <div className="post-info">
                                            <span className="author-name">{post.author.name}</span>
                                            <span className="post-time">{formatRelativeTime(post.createdAt)}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="post-content">{post.content}</p>

                                <div className="post-footer">
                                    <div className="post-tags">
                                        <Tag color="blue">{post.skill}</Tag>
                                        <Tag color="green">Target: {post.targetBand}</Tag>
                                    </div>
                                    <div className="post-stats">
                                        <span>
                                            <CommentOutlined /> {post.replies} replies
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Create Post Modal */}
                <Modal
                    title="Create New Post"
                    open={isModalOpen}
                    onCancel={() => setIsModalOpen(false)}
                    footer={null}
                    width={600}
                >
                    <Form form={form} layout="vertical" onFinish={handleCreatePost}>
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={[{ required: true, message: 'Please enter a title' }]}
                        >
                            <Input size="large" placeholder="Enter post title" />
                        </Form.Item>

                        <Form.Item
                            name="content"
                            label="Content"
                            rules={[{ required: true, message: 'Please enter content' }]}
                        >
                            <TextArea
                                rows={6}
                                placeholder="Share your thoughts, questions, or experiences..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="skill"
                            label="Skill"
                            rules={[{ required: true, message: 'Please select a skill' }]}
                        >
                            <Select size="large" placeholder="Select skill">
                                <Option value="speaking">Speaking</Option>
                                <Option value="writing">Writing</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="targetBand"
                            label="Target Band"
                            rules={[{ required: true, message: 'Please select target band' }]}
                        >
                            <Select size="large" placeholder="Select target band">
                                <Option value={7.0}>7.0</Option>
                                <Option value={7.5}>7.5</Option>
                                <Option value={8.0}>8.0</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" block>
                                Create Post
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default ForumPage;
