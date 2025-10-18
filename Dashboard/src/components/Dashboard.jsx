import { Routes, Route } from 'react-router-dom'
import WatchList from './WatchList.jsx'
import ZerodhaHome from './ZerodhaHome.jsx'
import Summary from './Summary.jsx'
import Orders from './Orders.jsx'
import Holdings from './Holdings.jsx'
import Positions from './Positions.jsx'
import Funds from './Funds.jsx'
import NotFound from './NotFound.jsx';

export default function Dashboard() {
    return (
        <div className="dashboard_container d-flex mt-5 pt-4 px-3">
            <div className="border-end">
                <WatchList />
            </div>
            <div className="content p-5">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/zerodhaHome" element={<ZerodhaHome />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    )
}