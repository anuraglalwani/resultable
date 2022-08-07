import {shallow} from "enzyme";
import Source from "../Source";
import SourceCard from "../SourceCard/SourceCard"


describe("source",()=>{
    test("length of no. of source-card",()=>{
      const  wrapper= shallow(<Source/>);
      expect(wrapper.find(SourceCard).length).toBe(4);
    })
})