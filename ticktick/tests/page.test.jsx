import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';
import DatePicker from '../src/app/components/DatePicker'; // Adjust path if necessary

describe('Page', () => {
  test('renders the heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      name: /date picker with recurrence/i,
    });
    expect(heading).toBeInTheDocument();
  });
  test('tests the DatePicker component', () => {
    render(<DatePicker />);     
    const startDateInput = screen.getByLabelText(/start date/i);
    const endDateInput = screen.getByLabelText(/end date/i);
    expect(startDateInput).toBeInTheDocument();
    expect(endDateInput).toBeInTheDocument();
  });
});
