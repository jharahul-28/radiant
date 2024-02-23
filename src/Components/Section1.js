import React, { useState } from 'react'
import '../scss/section.css'
import { CiCircleCheck } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

function Section1() {
    const [val, setValue]=useState('');
    const changeHandler = (e) => {
        setValue(e.target.value)
        console.log(val);
    }
    return (
        <div className='section1'>
            <h3>Best Website builders in the US</h3>
            <div className='s1'>
                <div className='s1left'>
                    <CiCircleCheck />
                    <p>Last Updated - February 22, 2020</p>
                    <span>
                        <IoInformationCircleOutline />
                        <p>Advertising Disclosure</p>
                    </span>
                </div>
                <div className='s1right'>
                    <select id="dropdown" value={val} onClick={changeHandler}>
                        <option value="Relevant">Relevant</option>
                        <option value="Relevant">Relevant</option>
                    </select>
                </div>
            </div>
            <div className='s2'>
                <ul>
                    <li>Tools</li>
                    <li>AWS Builder</li>
                    <li>Start Build</li>
                    <li>Build Supplies</li>
                    <li>Tooling</li>
                    <li>BlueHosting</li>
                </ul>
            </div>
            <div className='s3'>
                <p>Home {'>'} Hosting for all {'>'} Hosting {'>'} Hosting6 {'>'} Hosting5</p>
            </div>
        </div>
    )
}

export default Section1