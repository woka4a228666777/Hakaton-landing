import React, { useState } from 'react';
import './style.scss';
import Radio from '../../assets/img/Radio.svg'
import RadioActive from '../../assets/img/RadioActive.svg'

function Help_donation() {
    const [selectedAmount, setSelectedAmount] = useState(100);
    const [isMonthly, setIsMonthly] = useState(false);
    const amounts = [100, 250, 500, 1000, 3000];

    return (
        <section id="donation" className="Help_donation_section">
            <div className="Help_donation">
                <h1>ПОМОЧЬ ОЧЕНЬ ПРОСТО</h1>
                <form action="">
                        <div className="row">
                            <div className="amounts-container">
                                {amounts.map((amount) => (
                                    <button
                                        key={amount}
                                        className={selectedAmount === amount ? "selected button" : "amount button"}
                                        onClick={() => setSelectedAmount(amount)}
                                        type="button"
                                    >
                                        {amount} Р
                                    </button>
                                ))}
                            </div>
                            <div className="buttons-container">
                                <button className="other-amount" type="button">ДРУГАЯ СУММА</button>
                                <button className="help-button" type="submit">ПОМОЧЬ ДЕТЯМ</button>
                            </div>
                        </div>
                        <div className="toggle-container">
                            <label>
                                <img src={isMonthly ? Radio : RadioActive} alt="radio" />
                                <input
                                    type="radio"
                                    name="donationType"
                                    checked={!isMonthly}
                                    onChange={() => setIsMonthly(false)}
                                />
                                Хочу помочь <span className="one-time">ОДНОКРАТНО</span>
                            </label>
                            <label>
                                <img src={!isMonthly ? Radio : RadioActive} alt="radio" />
                                <input
                                    type="radio"
                                    name="donationType"
                                    checked={isMonthly}
                                    onChange={() => setIsMonthly(true)}
                                />
                                Хочу помогать <span className="monthly">ЕЖЕМЕСЯЧНО</span>
                            </label>
                        </div>
                </form>
            </div>
        </section>
    );
}

export default Help_donation;
