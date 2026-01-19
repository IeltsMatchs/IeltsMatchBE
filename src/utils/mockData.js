/**
 * Mock Data for Development
 * Replace with real API calls when backend is ready
 */

export const mockUser = {
  id: '1',
  email: 'john.doe@example.com',
  name: 'John Doe',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  profileCompleted: true,
  speakingBand: 6.0,
  writingBand: 6.5,
  targetBand: 7.5,
  practiceSkill: 'speaking',
  accentPreference: 'US',
  timeAvailability: [
    { date: '2026-01-20', time: '09:00' },
    { date: '2026-01-22', time: '15:00' },
  ],
};

export const mockMatches = [
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    speakingBand: 6.5,
    writingBand: 6.0,
    targetBand: 7.5,
    practiceSkill: 'speaking',
    accentPreference: 'US',
    matchScore: 95,
    bandSimilarity: 'Excellent',
    skillMatch: 'Perfect Match',
    timeOverlap: '12 hours/week',
    commonTimes: ['Monday 09:00', 'Wednesday 15:00', 'Friday 18:00'],
  },
  {
    id: '3',
    name: 'Michael Park',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    speakingBand: 5.5,
    writingBand: 6.5,
    targetBand: 7.0,
    practiceSkill: 'speaking',
    accentPreference: 'Any',
    matchScore: 88,
    bandSimilarity: 'Very Good',
    skillMatch: 'Perfect Match',
    timeOverlap: '8 hours/week',
    commonTimes: ['Monday 09:00', 'Friday 18:00'],
  },
  {
    id: '4',
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    speakingBand: 6.0,
    writingBand: 7.0,
    targetBand: 8.0,
    practiceSkill: 'speaking',
    accentPreference: 'UK',
    matchScore: 82,
    bandSimilarity: 'Good',
    skillMatch: 'Perfect Match',
    timeOverlap: '6 hours/week',
    commonTimes: ['Wednesday 15:00', 'Friday 19:00'],
  },
];

export const mockSpeakingQuestions = {
  1: [
    'Do you work or are you a student?',
    'What do you like about your job/studies?',
    'Do you prefer to study in the morning or in the evening?',
  ],
  2: [
    'Describe a place you visited that was particularly memorable.',
    'Describe a person who has influenced you.',
    'Describe a skill you would like to learn.',
  ],
  3: [
    'How has education changed in your country?',
    'What role does technology play in modern education?',
    'Do you think online learning is as effective as traditional classroom learning?',
  ],
};

export const mockWritingTasks = {
  1: {
    type: 'Task 1',
    prompt:
      'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    minWords: 150,
  },
  2: {
    type: 'Task 2',
    prompt:
      'Some people believe that technology has made our lives more complicated. Others think it has made life easier. Discuss both views and give your own opinion.',
    minWords: 250,
  },
};

export const mockForumPosts = [
  {
    id: '1',
    title: 'Looking for speaking partner - Target 7.5',
    content: 'Hi everyone! I\'m preparing for IELTS and looking for a speaking partner...',
    skill: 'speaking',
    targetBand: 7.5,
    author: {
      name: 'Alex Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    createdAt: '2026-01-15T10:30:00Z',
    replies: 5,
  },
  {
    id: '2',
    title: 'Writing Task 2 - Need feedback',
    content: 'Can someone review my essay about technology and education?',
    skill: 'writing',
    targetBand: 7.0,
    author: {
      name: 'Lisa Wang',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    },
    createdAt: '2026-01-14T15:20:00Z',
    replies: 12,
  },
  {
    id: '3',
    title: 'Tips for improving pronunciation',
    content: 'What are the best resources for improving British accent?',
    skill: 'speaking',
    targetBand: 8.0,
    author: {
      name: 'David Kim',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    },
    createdAt: '2026-01-13T09:15:00Z',
    replies: 8,
  },
];

export const mockFeedback = {
  speaking: {
    pronunciation: 7.0,
    fluency: 6.5,
    vocabulary: 7.0,
    grammar: 6.5,
    estimatedBand: 6.5,
    strengths: [
      'Good vocabulary range',
      'Clear pronunciation',
      'Natural intonation',
    ],
    improvements: [
      'Work on reducing hesitation',
      'Use more complex sentence structures',
      'Expand answer length',
    ],
  },
  writing: {
    taskResponse: 7.0,
    coherence: 6.5,
    vocabulary: 7.0,
    grammar: 7.0,
    estimatedBand: 7.0,
    strengths: [
      'Clear position stated',
      'Good use of linking words',
      'Varied vocabulary',
    ],
    improvements: [
      'Develop ideas more fully',
      'Add more specific examples',
      'Check article usage',
    ],
    grammarHighlights: [
      { text: 'has became', suggestion: 'has become', type: 'error' },
      { text: 'more easier', suggestion: 'easier', type: 'error' },
    ],
  },
};
