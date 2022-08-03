import React from "react";


import { render, screen, fireEvent } from "@testing-library/react";
import Row from "../Row";
import userEvent from "@testing-library/user-event";



const mockhandleClick = jest.fn();


describe("row",()=>{
    test("calls handle click",()=>{
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

})