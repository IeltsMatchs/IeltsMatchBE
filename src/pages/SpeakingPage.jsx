import { useState } from 'react';
import { Card, Button, Select, Tag, Progress, message } from 'antd';
import { SoundOutlined, AudioMutedOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { mockSpeakingQuestions, mockFeedback } from '../utils/mockData';
import './SpeakingPage.css';

const { Option } = Select;

const SpeakingPage = () => {
    const [selectedPart, setSelectedPart] = useState(1);
    const [isRecording, setIsRecording] = useState(false);
    const [hasRecording, setHasRecording] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(false);

    const currentQuestion = mockSpeakingQuestions[selectedPart][0];

    const handleRecord = () => {
        setIsRecording(!isRecording);
        if (isRecording) {
            setHasRecording(true);
            message.success('Recording saved!');
        }
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setFeedback(mockFeedback.speaking);
            setLoading(false);
            message.success('Feedback generated!');
        }, 2000);
    };

    return (
        <div className="speaking-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="speaking-header"
                >
                    <h1 className="page-title">
                        <SoundOutlined /> Speaking Practice
                    </h1>
                    <p className="page-subtitle">Practice with AI-powered feedback</p>
                </motion.div>

                <div className="speaking-content">
                    {/* Question Card */}
                    <Card className="question-card">
                        <div className="part-selector">
                            <label>Select Speaking Part:</label>
                            <Select
                                value={selectedPart}
                                onChange={setSelectedPart}
                                size="large"
                                style={{ width: 200 }}
                            >
                                <Option value={1}>Part 1</Option>
                                <Option value={2}>Part 2</Option>
                                <Option value={3}>Part 3</Option>
                            </Select>
                        </div>

                        <div className="question-content">
                            <Tag color="blue">Part {selectedPart}</Tag>
                            <h2>{currentQuestion}</h2>
                        </div>

                        <div className="recording-controls">
                            <Button
                                type={isRecording ? 'default' : 'primary'}
                                size="large"
                                icon={isRecording ? <AudioMutedOutlined /> : <SoundOutlined />}
                                onClick={handleRecord}
                                className={`record-btn ${isRecording ? 'recording' : ''}`}
                                danger={isRecording}
                            >
                                {isRecording ? 'Stop Recording' : 'Start Recording'}
                            </Button>

                            {hasRecording && (
                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={handleSubmit}
                                    loading={loading}
                                >
                                    Submit for Feedback
                                </Button>
                            )}
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
                                    <div className="score-item">
                                        <span>Pronunciation</span>
                                        <Progress percent={feedback.pronunciation * 10} strokeColor="#52c41a" />
                                    </div>
                                    <div className="score-item">
                                        <span>Fluency</span>
                                        <Progress percent={feedback.fluency * 10} strokeColor="#1890ff" />
                                    </div>
                                    <div className="score-item">
                                        <span>Vocabulary</span>
                                        <Progress percent={feedback.vocabulary * 10} strokeColor="#722ed1" />
                                    </div>
                                    <div className="score-item">
                                        <span>Grammar</span>
                                        <Progress percent={feedback.grammar * 10} strokeColor="#fa8c16" />
                                    </div>
                                </div>

                                <div className="estimated-band">
                                    <h3>Estimated Band</h3>
                                    <div className="band-score">{feedback.estimatedBand}</div>
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

export default SpeakingPage;
