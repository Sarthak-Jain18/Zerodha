import { MoveRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="products_hero_container m-5 text-center">
            <br /><br />
            <div className="row m-md-3">
                <h3 className='p-md-1'>Zerodha Products</h3>
                <h5 className='text-muted p-1'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='p-1'>Check out our <a href="#" onClick={(e) => e.preventDefault()} className="custom-link-hover2">investment offerings <MoveRight /></a></p>
            </div>
            <hr className=' mt-5 text-muted' />
        </div>
    )
}