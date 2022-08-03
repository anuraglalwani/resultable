import Chart from "./components/Chart/Chart";
import Result from "./components/Result/Result";
// import FieldData from "./components/FieldData/FieldData";
// import SearchInput from "./components/SearchInput/SearchInput";
import "./App.scss";
import "antd/dist/antd.min.css";
import Map from "./components/Map/Map";
//import ConnectIcon from "./components/ConnectIcon/ConnectIcon";
function App() {
  return (
    <div className="">
       <div style={{display:"flex", margin:"15%"}}>
        <Result />
        {/* <Chart /> */}
        
        </div>  
        {/* <Map/>  */}
     
    </div>
  );
}

export default App;
