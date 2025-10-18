import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

export default function ProductsPage() {
    return (
        <div className="products_page_container">
            <Hero />

            <LeftSection photo="/products-kite.png" name="Kite" desc="Our ultra-fast flagship trading 
            platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the 
            Kite experience seamlessly on your Android and iOS devices." link1="Try demo" link2="Learn more" />

            <RightSection photo="/products-console.png" name="Console" desc="The central dashboard for your Zerodha 
            account. Gain insights into your trades and investments with in-depth reports and visualisations." link="Learn more" />

            <LeftSection photo="/products-coin.png" name="Coin" desc="Buy direct mutual funds online, commission-free, 
            delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="Copy" link2="" />

            <RightSection photo="/products-kiteConnect.png" name="Kite Connect API" desc="Build powerful trading 
            platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, 
            build your investment app and showcase it to our clientbase." link="Kite Connect" />

            <LeftSection photo="/varsity-products.png" name="Varsity mobile" desc="An easy to grasp, collection of stock market 
            lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                link1="" link2="" />

            <Universe />
        </div>
    )
}

