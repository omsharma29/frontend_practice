import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { Lables } from "./Layout/Lables";
import Pricing from "./Layout/Pricing";
import QnA from "./Layout/QnA";

export default function App() {
  return (
    <div>
   <Header/>
   
   <Pricing/>
    <Lables/>
  
   <QnA/>
<Footer/>
    </div>

  )
}