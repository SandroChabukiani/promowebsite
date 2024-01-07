import './Footer.css';
import { FacebookLogo, InstagramLogo, TwitterLogo,  } from 'phosphor-react';
export default function Footer () {
    return(
        <div className='footer'>
            <div className="footer-div">
                <div className="fo">
                    <ul>
                        <li>Customer service</li>
                        <li>FAQs</li>
                        <li>Order and Delivery</li>
                    </ul>
                </div>
                <div className="fs">
                    <ul>
                        <li>About Farfetch</li>
                        <li>About us</li>
                        <li>Investors</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="ft">
                    <div className="ruzh">
                        <ul>
                            <li>About Farfetch</li>
                            <li>Discounts and membership</li>
                            <li>Farfetch membership</li>
                        </ul>
                    </div>
                    <div className="socials">
                        <FacebookLogo className='fb' />
                        <div className='in'>
                            <InstagramLogo className='ins' />
                        </div>
                        <div className="tw">
                            <TwitterLogo className='twt'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
