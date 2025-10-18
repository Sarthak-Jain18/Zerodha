import Hero from './Hero'
import Brokerage from './Brokerage'
import Charges from './Charges'

export default function PricingPage() {
    return (
        <div className="pricing_page_container">
            <Hero />
            <Brokerage />
            <Charges/>
        </div>
    )
}

