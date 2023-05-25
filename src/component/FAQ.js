import React from 'react'
import FAQ1 from './FAQ1'

function FAQ() {

    return (

        <div><h1 style={{ textAlign: 'center' }}>FAQ</h1>

            <div className='row container r4'>

                <div className='col-lg-7'>
                    <FAQ1 />
                </div>

                <div className='col-lg-5' id='part'>
                    <iframe width="150" height="150px" src="https://www.youtube.com/embed/FvFsMjRfvyI" title="Invernadero de Almería con tomates cherrys rama Golán ." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id='vid' ></iframe>
                </div>

            </div>
            
        </div >



    )
}

export default FAQ
