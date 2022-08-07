import React from "react";
import Result from "../Result";
import { act } from 'react-dom/test-utils';


import { configure, shallow, mount } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { handleClick } from "../../../Functions/Function";
import { handleSelectAll} from "../../../Functions/Function";
import {handleActive,setRowData} from "../../../Functions/Function"


configure({ adapter: new Adapter() });




describe("result table", () => {
  let setIsCheckMock = jest.fn();
  let setActive= jest.fn();

  test('handleClick fn. called', () => {
    handleClick({ target: '1' }, ['1', '2'], setIsCheckMock)
    expect(setIsCheckMock).toHaveBeenCalledTimes(2)
  });
  test("handleSelectAll called check",()=>{
    act(() => {
      handleSelectAll(setIsCheckMock,false,jest.fn(),[]);
    });
   
    expect(setIsCheckMock).toHaveBeenCalledTimes(1);
  });
   
  test("handleActive fn.call test",()=>{
    handleActive(false,setActive);
    expect(setActive).toBeCalledTimes(1);
  })



  test("result table render", () => {
     const wrapper= shallow(<Result/>)
     expect(wrapper.find('span').length).toBe(1);
  });


  test("input renders with right id",()=>{
    let mockhandleSelectAll= jest.fn();

    const wrapper= shallow(<Result/>);
   
    wrapper.find("input").props().onChange(mockhandleSelectAll)
    wrapper.find("input").simulate('change', { target: { id:'myCheck' } });
    
    expect(wrapper.find('input').props().id).toEqual("myCheck");
  });


  // test("setdata called in useeffect",()=>{
   
  // })

  // test("expand less renders", () => {
  //   render(<Result />);
  //   const expandMore = screen.getByTestId("expand_more");
  //   let expandLess = screen.queryByTestId("expand_less");
  //   expect(expandLess).not.toBeInTheDocument();
  //   userEvent.click(expandMore);
  //   expandLess = screen.queryByTestId("expand_less");
  //   expect(expandLess).toBeInTheDocument();
  // });

  // test("rows renders", () => {
  //   render(<Result />);
  //   const expandMore = screen.getByTestId("expand_more");
  //   userEvent.click(expandMore);
  //   const rows = screen.getByTestId("rows");
  //   expect(rows).toBeInTheDocument();
  // });

 
  
  // test("3 rows renders",()=>{
  //    render(<Result/>);
  //    const expandMore = screen.getByTestId("expand_more");
  //    userEvent.click(expandMore);
  //    const rowInputs= screen.getAllByTestId("row-checkbox");
     

  //    expect(rowInputs.length).toBe(3);
     
  // });

   test("expand less renders",()=>{
     const resultWrapper= shallow(<Result/>);
     expect(resultWrapper.exists('#expand_more')).toBeTruthy();
    //  const span =resultWrapper.find("span");
    //  span.simulate("click");
    //  expect(resultWrapper.exists("#expand_less")).toBeTruthy();

   })


});
