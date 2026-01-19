import { Form, Select, Radio, Button, Steps, message, Calendar, Modal, DatePicker, TimePicker, Badge, Checkbox } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';
import { generateBandOptions } from '../../utils/helpers';
import './ProfileForm.css';

const { Option } = Select;

/**
 * ProfileForm Component
 * Multi-step form for collecting user IELTS profile data
 */
const ProfileForm = ({ initialValues, onSubmit, loading }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();

    // New state for Calendar/Modal logic
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalForm] = Form.useForm();
    const [recurrenceType, setRecurrenceType] = useState('specific'); // 'specific' | 'weekly'
    const [selectedDate, setSelectedDate] = useState(dayjs());
    // eslint-disable-next-line
    const [availabilityList, setAvailabilityList] = useState([]); // Local state for UI updates if needed, though we rely on form values

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const steps = [
        {
            title: 'Current Level',
            description: 'Your current IELTS bands',
        },
        {
            title: 'Goals',
            description: 'Your target and practice focus',
        },
        {
            title: 'Preferences',
            description: 'Accent and availability',
        },
    ];

    const handleNext = async () => {
        try {
            await form.validateFields();
            setCurrentStep(currentStep + 1);
        } catch (error) {
            message.error('Please fill in all required fields');
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values);
        } catch (error) {
            message.error('Please fill in all required fields');
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="form-step">
                        <h3 className="step-title">What are your current IELTS bands?</h3>
                        <Form.Item
                            name="speakingBand"
                            label="Speaking Band"
                            rules={[{ required: true, message: 'Please select your speaking band' }]}
                        >
                            <Select size="large" placeholder="Select your speaking band">
                                {generateBandOptions().map((option) => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="writingBand"
                            label="Writing Band"
                            rules={[{ required: true, message: 'Please select your writing band' }]}
                        >
                            <Select size="large" placeholder="Select your writing band">
                                {generateBandOptions().map((option) => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>
                );

            case 1:
                return (
                    <div className="form-step">
                        <h3 className="step-title">What are your goals?</h3>
                        <Form.Item
                            name="targetBand"
                            label="Target Band"
                            rules={[{ required: true, message: 'Please select your target band' }]}
                        >
                            <Select size="large" placeholder="Select your target band">
                                {generateBandOptions().map((option) => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="practiceSkill"
                            label="Which skill do you want to practice?"
                            rules={[{ required: true, message: 'Please select a skill' }]}
                        >
                            <Radio.Group size="large">
                                <Radio.Button value="speaking">Speaking</Radio.Button>
                                <Radio.Button value="writing">Writing</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                );

            case 2:
                return (
                    <div className="form-step">
                        <h3 className="step-title">Set your preferences</h3>
                        <Form.Item
                            name="accentPreference"
                            label="Accent Preference"
                            rules={[{ required: true, message: 'Please select accent preference' }]}
                        >
                            <Select size="large" placeholder="Select accent preference">
                                <Option value="US">US Accent</Option>
                                <Option value="UK">UK Accent</Option>
                                <Option value="Any">Any Accent</Option>
                            </Select>
                        </Form.Item>

                        <div className="availability-section">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                <label className="ant-form-item-label" style={{ fontWeight: 500 }}>
                                    When are you available to study?
                                </label>
                                <Button type="dashed" onClick={() => setIsModalOpen(true)}>
                                    + Add Availability
                                </Button>
                            </div>

                            <Form.Item
                                name="timeAvailability"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please add at least one time slot'
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || value.length === 0) {
                                                return Promise.reject(new Error('Please add at least one time slot'));
                                            }
                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                            >
                                <div className="calendar-container">
                                    <Calendar
                                        fullscreen={false}
                                        onSelect={(date) => {
                                            setSelectedDate(date);
                                            // Optional: Auto open modal on select
                                            // setIsModalOpen(true);
                                            // modalForm.setFieldsValue({ date });
                                        }}
                                        cellRender={(date) => {
                                            const currentList = form.getFieldValue('timeAvailability') || [];
                                            const dayEvents = [];

                                            currentList.forEach(item => {
                                                if (item.type === 'specific' || (!item.type && item.date)) {
                                                    if (dayjs(item.date).isSame(date, 'day')) {
                                                        dayEvents.push(item);
                                                    }
                                                } else if (item.type === 'weekly') {
                                                    if (item.days && item.days.includes(date.format('dddd'))) {
                                                        dayEvents.push(item);
                                                    }
                                                }
                                            });

                                            // Unique based on time
                                            const uniqueEvents = Array.from(new Set(dayEvents.map(e => e.time)))
                                                .map(time => dayEvents.find(e => e.time === time));

                                            return (
                                                <ul className="events-list">
                                                    {uniqueEvents.map((item, index) => (
                                                        <li key={index}>
                                                            <Badge status={item.type === 'weekly' ? 'warning' : 'success'} text={item.time} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }}
                                    />
                                </div>
                            </Form.Item>
                        </div>

                        <Modal
                            title="Add Availability"
                            open={isModalOpen}
                            onCancel={() => setIsModalOpen(false)}
                            onOk={() => {
                                modalForm.validateFields().then(values => {
                                    const { time, mode, specificDate, weekDays } = values;
                                    const timeStr = time.format('HH:mm');
                                    const current = form.getFieldValue('timeAvailability') || [];

                                    let newEntry;
                                    if (mode === 'specific') {
                                        const dateStr = specificDate.format('YYYY-MM-DD');
                                        newEntry = { type: 'specific', date: dateStr, time: timeStr };
                                    } else {
                                        newEntry = { type: 'weekly', days: weekDays, time: timeStr };
                                    }

                                    const updated = [...current, newEntry];
                                    form.setFieldValue('timeAvailability', updated);
                                    setAvailabilityList(updated); // Force re-render

                                    modalForm.resetFields();
                                    setIsModalOpen(false);
                                });
                            }}
                        >
                            <Form form={modalForm} layout="vertical" initialValues={{ mode: 'specific', specificDate: selectedDate }}>
                                <Form.Item name="mode" label="Type">
                                    <Radio.Group onChange={(e) => setRecurrenceType(e.target.value)}>
                                        <Radio.Button value="specific">Specific Date</Radio.Button>
                                        <Radio.Button value="weekly">Weekly Recurring</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>

                                {recurrenceType === 'specific' && (
                                    <Form.Item
                                        name="specificDate"
                                        label="Date"
                                        rules={[{ required: true, message: 'Please select a date' }]}
                                    >
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                )}

                                {recurrenceType === 'weekly' && (
                                    <Form.Item
                                        name="weekDays"
                                        label="Repeat Every"
                                        rules={[{ required: true, message: 'Please select days' }]}
                                    >
                                        <Checkbox.Group options={days} />
                                    </Form.Item>
                                )}

                                <Form.Item
                                    name="time"
                                    label="Time"
                                    rules={[{ required: true, message: 'Please select a time' }]}
                                >
                                    <TimePicker format="HH:mm" style={{ width: '100%' }} minuteStep={30} />
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="profile-form-container">
            <Steps current={currentStep} items={steps} className="profile-steps" />

            <Form
                form={form}
                layout="vertical"
                initialValues={initialValues}
                className="profile-form"
            >
                {renderStepContent()}

                <div className="form-actions">
                    {currentStep > 0 && (
                        <Button size="large" onClick={handlePrev}>
                            Previous
                        </Button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <Button type="primary" size="large" onClick={handleNext}>
                            Next
                        </Button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <Button
                            type="primary"
                            size="large"
                            onClick={handleSubmit}
                            loading={loading}
                        >
                            Complete Profile
                        </Button>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default ProfileForm;
