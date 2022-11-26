import React, { useState } from 'react';

import '../css/Modal.css';
import ellipse from "../assets/ellipse.png"
import uparrow from "../assets/uparrow.png"

function upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin) {
    if (event.target.files && event.target.files[0]) {
        if (/image\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = function () {
                setPinDetails({
                    ...pinDetails,
                    img_blob: reader.result
                });
                setShowLabel(false);
                setShowModalPin(true);
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }
}

function check_size(event) {
    const image = event.target;

    image.classList.add('pin_max_width');

    if (
        image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
        image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height
    ) {
        image.classList.remove('pin_max_width');
        image.classList.add('pin_max_height');
    }

    image.style.opacity = 1;
}

function save_pin(pinDetails, add_pin) {
    const users_data = {
        ...pinDetails,
        author: 'Jack',
        board: 'default',
        title: document.querySelector('#pin_title').value,
        description: document.querySelector('#pin_description').value,
        destination: document.querySelector('#pin_destination').value,
        pin_size: document.querySelector('#pin_size').value,
    }

    add_pin(users_data);
}


function Modal(props) {
    const [pinDetails, setPinDetails] = useState({
        author: '',
        board: '',
        title: '',
        description: '',
        destination: '',
        img_blob: '',
        pin_size: '',
    });
    const [showLabel, setShowLabel] = useState(true);
    const [showModalPin, setShowModalPin] = useState(false);

    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container">
                            <img src= {ellipse}alt="edit" className="pint_mock_icon" />
                        </div>
                    </div>

                    <div className="section2">
                        <label htmlFor="upload_img" id="upload_img_label"
                            style={{
                                display: showLabel ? 'block' : 'none'
                            }}>
                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                        <img src={uparrow} alt="upload_img" className="pint_mock_icon" />
                                    </div>
                                    <div>Haga clic para cargar</div>
                                    <div>Recomendación: use .jpg de alta calidad de menos de 20 MB</div> 
                                </div>
                            </div>

                            <input onChange={event => upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin)} type="file" name="upload_img" id="upload_img" value="" />
                        </label>

                        <div className="modals_pin"
                            style={{
                                display: showModalPin ? 'block' : 'none'
                            }}>
                            <div className="pin_image">
                                <img onLoad={check_size} src={pinDetails.img_blob} alt="pin_image" />
                            </div>
                        </div>
                    </div>

                    <div className="section3">
                     
                    </div>
                </div>

                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select defaultValue="Select" name="pin_size" id="pin_size">
                                <option value="">Seleccionar</option>
                                <option value="small">Pequeño</option>
                                <option value="medium">Mediano</option>
                                <option value="large">Grande</option>
                            </select>
                            <div onClick={() => save_pin(pinDetails, props.add_pin)} className="save_pin">Subir</div>
                        </div>
                    </div>

                    <div className="section2">
                        <input placeholder="Agrega un título" type="text" className="new_pin_input" id="pin_title" />
                        <input placeholder="Dile a las personas de qué trata la imagen" type="text" className="new_pin_input" id="pin_description" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;