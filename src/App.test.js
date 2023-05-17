// Import react testing methods.
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react'
// Import Jest matchers.
import '@testing-library/jest-dom'

// Import the components to test.
import { fetchAnswers, fetchQuestions, fetchQuestionsCR, fetchQuestionsWM } from './controllers/stackOverflow';
import SDFAQAns from './components/SDFAQAns';
import StackDevskiFAQ from './components/StackDevskiFAQ';

jest.mock('./controllers/stackOverflow', () => ({
  fetchAnswers: jest.fn(),
  fetchQuestions: jest.fn(),
  fetchQuestionsCR: jest.fn(),
  fetchQuestionsWM: jest.fn()
}));

describe('StackDevskiFAQ', () => {
  beforeEach(() => {
    fetchQuestions.mockResolvedValueOnce();
    fetchQuestionsCR.mockResolvedValueOnce();
    fetchQuestionsWM.mockResolvedValueOnce();
  });

  it('fetches and displays Stack Overflow questions', async () => {
    // Mock the fetchQuestions function to return a predefined set of questions
    const mockQuestions = [
      { question_id: 1, title: 'Question 1', body: 'Question body 1' },
      { question_id: 2, title: 'Question 2', body: 'Question body 2' },
    ];
    fetchQuestions.mockResolvedValue(mockQuestions);

    await act(async () => {
      render(<StackDevskiFAQ />);
      render(<SDFAQAns questions={mockQuestions} />);
    });

    // Wait for the questions to be fetched and displayed
    await waitFor(() => {
      // Verify that the expected number of question elements are rendered
      const questionElements = screen.getAllByTestId('question');
      expect(questionElements.length).toBe(mockQuestions.length);

      // Verify the properties of each question element
      mockQuestions.forEach((question, index) => {
        const questionElement = questionElements[index];
        expect(questionElement).toHaveTextContent(question.title);
      });
    });
  });
  
  it('fetches and displays Code Review questions', async () => {
     // Mock the fetchQuestionsCR function to return a predefined set of questions
     const mockQuestions = [
      { question_id: 1, title: 'Question 1', body: 'Question body 1' },
      { question_id: 2, title: 'Question 2', body: 'Question body 2' },
    ];
    fetchQuestionsCR.mockResolvedValue(mockQuestions);

    await act(async () => {
      render(<StackDevskiFAQ />);
      render(<SDFAQAns questions={mockQuestions} />);
    });

    // Wait for the questions to be fetched and displayed
    await waitFor(() => {
      // Verify that the expected number of question elements are rendered
      const questionElements = screen.getAllByTestId('question');
      expect(questionElements.length).toBe(mockQuestions.length);

      // Verify the properties of each question element
      mockQuestions.forEach((question, index) => {
        const questionElement = questionElements[index];
        expect(questionElement).toHaveTextContent(question.title);
      });
    });
  });

  it('fetches and displays Webmasters questions', async () => {
     // Mock the fetchQuestionsWM function to return a predefined set of questions
     const mockQuestions = [
      { question_id: 1, title: 'Question 1', body: 'Question body 1' },
      { question_id: 2, title: 'Question 2', body: 'Question body 2' },
    ];
    fetchQuestionsWM.mockResolvedValue(mockQuestions);

    await act(async () => {
      render(<StackDevskiFAQ />);
      render(<SDFAQAns questions={mockQuestions} />);
    });

    // Wait for the questions to be fetched and displayed
    await waitFor(() => {
      // Verify that the expected number of question elements are rendered
      const questionElements = screen.getAllByTestId('question');
      expect(questionElements.length).toBe(mockQuestions.length);

      // Verify the properties of each question element
      mockQuestions.forEach((question, index) => {
        const questionElement = questionElements[index];
        expect(questionElement).toHaveTextContent(question.title);
      });
    });
  });
});

describe('SDFAQAns', () => {
  const questions = [
    { question_id: 1, title: 'Question 1', body: 'Question body 1' }
  ];

  beforeEach(() => {
    fetchAnswers.mockResolvedValueOnce();
  });

  it('displays modal with answers when "View" button is clicked', async () => {
    const mockAnswers = ['Answer 1', 'Answer 2'];
    fetchAnswers.mockResolvedValueOnce(mockAnswers);

    render(<SDFAQAns questions={questions} />);

    const viewButtons = screen.queryAllByText('View');
    fireEvent.click(viewButtons[0]);

    await waitFor(() => {
      expect(fetchAnswers).toHaveBeenCalledTimes(1);
      expect(fetchAnswers).toHaveBeenCalledWith(1);

      const modalTitle = screen.getByText('Question 1', { selector: 'div.card-title.h5' });
      expect(modalTitle).toBeInTheDocument();

      const modalAnswers = screen.getAllByText(/Answer/);
      expect(modalAnswers).toHaveLength(1);
    });
  });

  it('displays "No Answers Found" when no answers are returned', async () => {
    fetchAnswers.mockResolvedValue([]);

    render(<SDFAQAns questions={questions} />);

    const viewButtons = screen.queryAllByText('View');
    fireEvent.click(viewButtons[0]);

    await waitFor(() => {
      expect(fetchAnswers).toHaveBeenCalledTimes(1);
      expect(fetchAnswers).toHaveBeenCalledWith(1);

      const noAnswersText = screen.getByText('No Answers Found');
      expect(noAnswersText).toBeInTheDocument();
    });
  });
});



