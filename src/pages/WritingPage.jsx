import { useState } from 'react';
import { Card, Button, Input, Tag, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { mockWritingTasks, mockFeedback } from '../utils/mockData';
import './WritingPage.css';

const { TextArea } = Input;

const WritingPage = () => {
    const [content, setContent] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(false);
    const task = mockWritingTasks[2];

    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

    const handleSubmit = () => {
        if (wordCount < task.minWords) {
            message.warning(`Please write at least ${task.minWords} words`);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setFeedback(mockFeedback.writing);
            setLoading(false);
            message.success('Feedback generated!');
        }, 2000);
    };

    return (
        <div className="writing-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="writing-header"
                >
                    <h1 className="page-title">
                        <EditOutlined /> Writing Practice
                    </h1>
                    <p className="page-subtitle">Get AI-powered feedback on your writing</p>
                </motion.div>

                <div className="writing-content">
                    {/* Task Card */}
                    <Card className="task-card">
                        <Tag color="green">{task.type}</Tag>
                        <h3>Task</h3>
                        <p>{task.prompt}</p>
                        <div className="task-info">
                            <span>Minimum words: {task.minWords}</span>
                            <span className={wordCount >= task.minWords ? 'word-count-ok' : 'word-count-low'}>
                                Current: {wordCount} words
                            </span>
                        </div>
                    </Card>

                    {/* Editor Card */}
                    <Card title="Your Answer" className="editor-card">
                        <TextArea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Start writing your answer here..."
                            autoSize={{ minRows: 15, maxRows: 25 }}
                            className="writing-editor"
                        />
                        <div className="editor-actions">
                            <Button
                                type="primary"
                                size="large"
                                onClick={handleSubmit}
                                loading={loading}
                                disabled={wordCount < task.minWords}
                            >
                                Submit for Feedback
                            </Button>
                        </div>
                    </Card>

                    {/* Feedback Card */}
                    {feedback && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card title="AI Feedback" className="feedback-card">
                                <div className="feedback-scores">
                                    <div className="score-box">
                                        <span className="score-label">Task Response</span>
                                        <span className="score-value">{feedback.taskResponse}</span>
                                    </div>
                                    <div className="score-box">
                                        <span className="score-label">Coherence</span>
                                        <span className="score-value">{feedback.coherence}</span>
                                    </div>
                                    <div className="score-box">
                                        <span className="score-label">Vocabulary</span>
                                        <span className="score-value">{feedback.vocabulary}</span>
                                    </div>
                                    <div className="score-box">
                                        <span className="score-label">Grammar</span>
                                        <span className="score-value">{feedback.grammar}</span>
                                    </div>
                                </div>

                                <div className="estimated-band">
                                    <h3>Estimated Band</h3>
                                    <div className="band-score">{feedback.estimatedBand}</div>
                                </div>

                                <div className="feedback-section">
                                    <h4>Grammar Highlights</h4>
                                    <div className="grammar-highlights">
                                        {feedback.grammarHighlights.map((item, idx) => (
                                            <div key={idx} className="highlight-item">
                                                <Tag color="red">{item.text}</Tag>
                                                <span>→</span>
                                                <Tag color="green">{item.suggestion}</Tag>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="feedback-section">
                                    <h4>Strengths</h4>
                                    <ul>
                                        {feedback.strengths.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="feedback-section">
                                    <h4>Areas for Improvement</h4>
                                    <ul>
                                        {feedback.improvements.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WritingPage;
