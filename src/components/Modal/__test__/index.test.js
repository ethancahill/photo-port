import {render, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Modal from '../index'


describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  })  