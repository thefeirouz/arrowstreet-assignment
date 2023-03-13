import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders form', async () => {
  const {container} = render(<App />);
  await waitFor(() => {
    expect(container.getElementsByClassName("MuiTableRow-root").length).toBeGreaterThan(1);
  })
  const element = screen.getByText("Register a Student");
  expect(element).toBeInTheDocument();
});

test('it loads table after getting from api', async () => {
  const { container } = render(<App />);
  await waitFor(() => {
    expect(container.getElementsByClassName("MuiTableRow-root").length).toBeGreaterThan(1);
  })
  const tableArrayRow = container.getElementsByClassName("MuiTableRow-root")
  expect(tableArrayRow.length).toStrictEqual(5);
});

test('size of table increases after registering student', async () => {
  const { container } = render(<App />);
  await waitFor(() => {
    expect(container.getElementsByClassName("MuiTableRow-root").length).toBeGreaterThan(1);
  })
  const firstName = screen.getByLabelText("First Name")
  const lastName = screen.getByLabelText("Last Name")
  const ssn = screen.getByLabelText("Social Security Number")
  const birthdate = screen.getByLabelText("Birthdate")
  const button = screen.getByText("Register Student");
  fireEvent.change(firstName, {target: {value: 'Test First Name'}})
  fireEvent.change(lastName, {target: {value: 'Test Last Name'}})
  fireEvent.change(ssn, {target: {value: '123456789'}})
  fireEvent.change(birthdate, {target: {value: '12/12/1912'}})
  fireEvent.click(button)
  await waitFor(() => {
    expect(container.getElementsByClassName("MuiTableRow-root").length).toBeGreaterThan(5);
  })

  const tableArrayRow = container.getElementsByClassName("MuiTableRow-root")
  expect(tableArrayRow.length).toStrictEqual(6);

});
