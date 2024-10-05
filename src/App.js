import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import Dashboard from "./Dashboard";
import { Routes ,Route} from "react-router-dom";
import TrackBoard from "./TrackBoard";
import CreateInvoice from "./CreateInvoice";
import ViewInvoice from "./ViewInvoice";
import ViewCustomer from "./ViewCustomer";
import CreateCustomer from "./CreateCustomer";
import Login from "./Login";
import CompanyDetails from "./CompanyDetails";
function App() {
  return (
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/home" element={
<Dashboard/>
}>
  <Route path="" element={<TrackBoard/>}/>
  <Route path="create-invoice" element={<CreateInvoice/>}/>
  <Route path="view-invoice" element={<ViewInvoice/>}/>
  <Route path="profile" element={<CompanyDetails/>}/>
  <Route path="customer" element={<ViewCustomer/>}/>
  <Route path="vendor" element={<CreateCustomer/>}/>
</Route>
</Routes>
  );
}

export default App;
