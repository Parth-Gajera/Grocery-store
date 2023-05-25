import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import cart1 from '../img/cart1.png'

function IncDecCounter() {

    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (

        <div className="row">

            <div className="col-lg-8 col-md-8 col-sm-8  part1">
                <span class="input-group">

                    <button type="button" class="btn1" onClick={decNum}>-</button>

                    <input type="text" class=" num" value={num} onChange={handleChange} />

                    <button type="button" class="btn1" onClick={incNum}>+</button>

                </span>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-sm part2">
                <span className="cart1"><img width='100%' src={cart1}></img></span>
                {/* <button><img  src={cart1}></img></button> */}
            </div>

        </div>
             
    );
}

export default IncDecCounter;