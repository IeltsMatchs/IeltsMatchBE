import { Card, Avatar, Progress, Button, Tag } from 'antd';
import {
    UserOutlined,
    TrophyOutlined,
    ClockCircleOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { getMatchScoreColor, formatBandScore } from '../../utils/helpers';
import './MatchCard.css';

/**
 * MatchCard Component
 * Displays a single match with score, compatibility, and action button
 */
const MatchCard = ({ match, index, onStartSession }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
            <Card className="match-card" hoverable>
                {/* Match Score Badge */}
                <div className="match-score-badge">
                    <span className="score-value">{match.matchScore}%</span>
                    <span className="score-label">Match</span>
                </div>

                {/* User Info */}
                <div className="match-header">
                    <Avatar size={80} src={match.avatar} icon={<UserOutlined />} />
                    <div className="match-info">
                        <h3 className="match-name">{match.name}</h3>
                        <div className="match-bands">
                            <Tag color="blue">Speaking: {formatBandScore(match.speakingBand)}</Tag>
                            <Tag color="green">Target: {formatBandScore(match.targetBand)}</Tag>
                        </div>
                    </div>
                </div>

                {/* Match Details */}
                <div className="match-details">
                    {/* Match Score Progress */}
                    <div className="detail-item">
                        <div className="detail-header">
                            <TrophyOutlined />
                            <span>Overall Match</span>
                        </div>
                        <Progress
                            percent={match.matchScore}
                            strokeColor={getMatchScoreColor(match.matchScore)}
                            size="small"
                            showInfo={false}
                        />
                    </div>

                    {/* Band Similarity */}
                    <div className="detail-item">
                        <div className="detail-row">
                            <span className="detail-label">
                                <CheckCircleOutlined /> Band Similarity
                            </span>
                            <span className="detail-value">{match.bandSimilarity}</span>
                        </div>
                    </div>

                    {/* Skill Match */}
                    <div className="detail-item">
                        <div className="detail-row">
                            <span className="detail-label">
                                <CheckCircleOutlined /> Skill Match
                            </span>
                            <span className="detail-value">{match.skillMatch}</span>
                        </div>
                    </div>

                    {/* Time Overlap */}
                    <div className="detail-item">
                        <div className="detail-row">
                            <span className="detail-label">
                                <ClockCircleOutlined /> Time Overlap
                            </span>
                            <span className="detail-value">{match.timeOverlap}</span>
                        </div>
                    </div>

                    {/* Common Times */}
                    <div className="detail-item">
                        <div className="common-times">
                            {match.commonTimes.slice(0, 3).map((time, idx) => (
                                <Tag key={idx} color="purple">
                                    {time}
                                </Tag>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Button
                    type="primary"
                    size="large"
                    block
                    className="start-session-btn"
                    onClick={() => onStartSession(match)}
                >
                    Start Study Session
                </Button>
            </Card>
        </motion.div>
    );
};

export default MatchCard;
