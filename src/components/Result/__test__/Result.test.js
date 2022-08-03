import React from "react";
import Result from "../Result";

import { render, screen, fireEvent } from "@testing-library/react";
import Row from "../../Row/Row";
import userEvent from "@testing-library/user-event";



const mockhandleClick = jest.fn();


describe("result table", () => {
  test("result table render", () => {
    render(<Result />);
    expect(screen.getByTestId("expand_more")).toHaveTextContent("expand_more");
  });

  test("select all function call/checks onclick", () => {
    render(<Result />);
    const inputWrapper = screen.getByRole("checkbox");
    userEvent.click(inputWrapper);
    expect(inputWrapper).toBeChecked();
  });

  test("expand less renders", () => {
    render(<Result />);
    const expandMore = screen.getByTestId("expand_more");
    let expandLess = screen.queryByTestId("expand_less");
    expect(expandLess).not.toBeInTheDocument();
    userEvent.click(expandMore);
    expandLess = screen.queryByTestId("expand_less");
    expect(expandLess).toBeInTheDocument();
  });

  test("rows renders", () => {
    render(<Result />);
    const expandMore = screen.getByTestId("expand_more");
    userEvent.click(expandMore);
    const rows = screen.getByTestId("rows");
    expect(rows).toBeInTheDocument();
  });

  test("handleClick fn. call", () => {
    render(
      <Row
        key={1}
        id={1}
        percent={30}
        products={50}
        handleClick={mockhandleClick}
        isChecked={false}
      />
    );
    const inputWrapper = screen.getByRole("checkbox");
    fireEvent.click(inputWrapper);
    expect(mockhandleClick).toHaveBeenCalledTimes(1);
  });
  
  test("3 rows renders",()=>{
     render(<Result/>);
     const expandMore = screen.getByTestId("expand_more");
     userEvent.click(expandMore);
     const rowInputs= screen.getAllByTestId("row-checkbox");
     expect(rowInputs.length).toBe(3)
  });

//   test("handleclick event check",()=>{
//     render(<Row
//         key={1}
//         id="1"
//         percent={30}
//         products={50}
//         handleClick={mockhandleClick}
//         isChecked={false}
//       />);
//     const rowInput= screen.getByTestId("row-checkbox1");
//     fireEvent.change(rowInput,{target:{id:"1"}});
//     expect(rowInput.id).toBe('1');

//  })


});
