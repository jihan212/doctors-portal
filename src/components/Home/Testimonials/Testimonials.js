import React from 'react';
import ema from '../../../images/ema.png';
import ginny from '../../../images/ginny.png';
import harry from '../../../images/harry.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : harry
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : ginny
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div>
                    <h5 style={{color: '#1CC7C1'}} className="text-uppercase">Testimonial</h5>
                    <h1> What's Our Patients <br/> Says </h1>
                </div>
                <div className="card-deck mt-5">
                {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;