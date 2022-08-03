import { enzyme, mount, shallow } from "enzyme";

import DonutChart from "../DonutChart";
import { Pie } from "@ant-design/plots";
const data = [
   {
      type: "Some missing",
      value: 50,
   },
   {
      type: "Category 2",
      value: 30,
   },
   {
      type: "Category 3",
      value: 20,
   },
];

describe("<DonutChart />", () => {
   let chartWrapper;
   beforeEach(() => {
      chartWrapper = shallow(
         <DonutChart data={[{ type: "", value: 50 }]} title="Hello" />
      );
   });

   it("should have data as a prop", () => {
      expect(chartWrapper.find(Pie).props().data).toBeDefined();
   });

   it("should have a title as a prop", () => {
      chartWrapper = shallow(
         <DonutChart data={[{ type: "", value: 50 }]} title="Hello" />
      );
      const title = chartWrapper.find("p");
      expect(title.text()).toBe("Hello");
   });

   it("should have atleast one element in data", () => {
      const pieChart = chartWrapper.find(Pie);
      expect(pieChart.props().data.length).toBeGreaterThan(0);
   });

   it("should have value and type in element in data prop", () => {
      const pieChart = chartWrapper.find(Pie);
      expect(pieChart.props().data[0].type).toBeDefined();
      expect(pieChart.props().data[0].type).toBeDefined();
   });

   it("should have same data and title as passed through props", () => {
      chartWrapper = shallow(<DonutChart data={data} title="Hello" />);
      expect(chartWrapper.find(Pie).props().data).toBe(data);
      expect(chartWrapper.find("p").text()).toBe("Hello");
   });

   it("should convert 5 to 5%", () => {
      expect(chartWrapper.find(Pie).props().label.content({ value: 50 })).toBe(
         "50%"
      );
   });

   it("should have color if passed", () => {
      chartWrapper = shallow(<DonutChart colors={["red"]} />);
      const a = chartWrapper.find(Pie).props().color;
      expect(a).toEqual(["red"]);
   });
});
