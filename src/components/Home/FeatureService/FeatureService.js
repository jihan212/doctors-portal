import React from 'react';
import featured from '../../../images/featured.png';

const FeatureService = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-4 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                    <div className="col-md-8 align-self-center">
                        <h2> Exceptional Dental <br/> Care , on Your Terms </h2>

                        <p className="text-secondary my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe aperiam ab quae beatae minus, voluptas nihil expedita libero omnis reprehenderit, sunt autem vitae accusantium aliquid odio inventore sint alias recusandae, corporis dolor? Architecto, pariatur. Commodi quisquam delectus facere ad doloremque qui excepturi voluptates expedita velit harum, quidem consectetur consequatur, sunt laborum. Quo vel reprehenderit omnis natus inventore? Voluptatibus a vitae ut. Magni, voluptatibus? Iste unde, laboriosam temporibus inventore blanditiis velit vitae rerum dolores doloribus soluta quia doloremque illo labore explicabo beatae totam officia aperiam placeat, obcaecati nemo in tenetur voluptatem quisquam. Nihil, rerum esse. Cum aliquam est necessitatibus distinctio.</p>

                        <button style={{backgroundColor: '#1CC7C1', color: 'white'}} className="btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;