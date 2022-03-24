import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {replaceCamelWithSpaces} from './App';

test("button has correct initial color", () => {
    render(<App />);

    //find an element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    // expect the backgroung color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    //click button
    fireEvent.click(colorButton);

    //expect the backgroundColor to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    // expect the button text to be "Change to red"
    expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
    render(<App />);

    // check that the button starts out enabled
    const colorButton = screen.getByRole("button", { name: "Change to blue" });
    expect(colorButton).toBeEnabled();

    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    expect(checkbox).not.toBeChecked();
});

test('checking toggles button disabling', () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  //click checkbox
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // click checkbox again
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).not.toBeDisabled();
}) 

test('disabling changes color to gray and back again', () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});

  //click checkbox to disable and turn gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //click again to return to red
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button to turn to blue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //click checkbox to disable and turn gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  //click again to return to blue
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});


describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces("Red")).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe('Midnight Blue');
  });
  test('Works for multiple capital letters', () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe('Medium Violet Red');
  });
})
