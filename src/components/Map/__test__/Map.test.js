import {shallow } from "enzyme";
import Map from "../Map"
import FieldData from "../../FieldData/FieldData"
import SearchInput from "../../SearchInput/SearchInput"
describe('testing the map component',()=>{
    test("renders field data component",()=>{
      const wrapper = shallow(<Map/>);

      expect(wrapper.find(FieldData).length).toBe(16);

    })
    test("renders searchInput component",()=>{
        const wrapper = shallow(<Map/>);
  
        expect(wrapper.find(SearchInput).length).toBe(6);
  
      })
})