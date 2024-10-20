
import Dashboard from "./Dashboard";
import { Routes ,Route} from "react-router-dom";
import TrackBoard from "./TrackBoard";
import CreateInvoice from "./CreateInvoice";
import ViewInvoice from "./ViewInvoice";
import ViewCustomer from "./ViewCustomer";
import CreateCustomer from "./CreateCustomer";
import Login from "./Login";
import CompanyDetails from "./CompanyDetails";
import EditCompanyDetails from "./EditCompanyDetails";
import CompanyName from "./CompanyName";
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
  <Route path="create-customer" element={<CreateCustomer/>}/>
  <Route path="edit-company" element={<EditCompanyDetails/>}/>
  <Route path="company-view" element={<CompanyName/>}/>
</Route>
</Routes>
  );
}

export default App;
