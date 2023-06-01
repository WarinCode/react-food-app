// import style
import '../style/css/content.css';

// import type
import PropTypes from 'prop-types';

// import lib
import { BiFoodMenu } from "react-icons/bi";
import { FcDocument } from 'react-icons/fc';

function Content({ Prop }) {

    return (
        <section>
            <header>
                <h1>Food <BiFoodMenu style={{ transform: 'translateY(9px)' }} /> </h1>
                <hr />
            </header>
            <div className="grid-container">
                {Prop.map((item, idx) => (
                    <div className="card" key={idx}>
                        <img src={item.strCategoryThumb} alt={item.strCategory} />
                        <div className="card-body">
                            <header>
                                <h3 className="card-title">{item.strCategory}</h3>
                                <hr />
                            </header>
                            <div>
                                <p className="card-description" >
                                    <strong>Description<FcDocument style={{
                                        transform: 'translateY(2.7px)',
                                        marginRight: '6px'
                                    }} />
                                    </strong>
                                    &nbsp;{item.strCategoryDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

Content.propTypes = {
    Prop: PropTypes.array.isRequired
};

export default Content;
