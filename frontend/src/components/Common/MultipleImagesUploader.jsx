import { useEffect } from 'react';
import { useState } from 'react';

export default function MultipleImagesUploader(props) {

    const [imagesArray, setImagesArray] = useState([]);

    function fileSelected(event) {
        if (event.target.files.length === 0) {
            return;
        }
        
        setImagesArray(prev => [
            ...prev,
            event.target.files[0]
        ]
        )
    }

    function removeImage(index) {
        setImagesArray(prev => prev.filter((image, idx) => index !== idx))
    }

    useEffect(() => {
        props.imageAdded(imagesArray);
    }, [imagesArray]);
    
    return (
        <div className="upload__box">
            <div className="upload__btn-box">
                <label className="upload__btn">
                    <p>Dodavanje slika</p>
                    <input type="file" className="upload__inputfile" onChange={event => fileSelected(event)} />
                </label>
            </div>
            <div className="upload__img-wrap">
                {imagesArray.map((image, index) => {
                    return (
                    <div className='upload__img-box' key={index}>
                        <div style={{backgroundImage: "url('" + URL.createObjectURL(image) + "')"}} data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' className='img-bg'>
                            <div className='upload__img-close' onClick={() => removeImage(index)}>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}