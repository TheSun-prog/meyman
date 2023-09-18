import React, {useState} from 'react';
import styles from "../../FillingRoomDetails/AddPhoto/AddPhotoRoom.module.scss";
import {Link} from "react-router-dom";
import Button from "../../../components/ui/Button/Button";
import warning from "../../../assets/images/vnimanie.svg";
import plus from "../../../assets/images/plus.svg";
import logoAddPhoto from "../../../assets/images/addPhoto.svg";

function AddHotelPhoto({hotelData, setHotelData}) {

    const [photos2, setPhotos2] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length + photos2.length > 5) {
            const newPhotos = [...photos2];
            const imageFiles = [...hotelData.images]

            for (let i = 0; i < files.length; i++) {
                newPhotos.push(URL.createObjectURL(files[i]));
                imageFiles.push(files[i])
            }

            setHotelData(prevState => {
                return {
                    ...prevState,
                    images: imageFiles
                }
            })
            setPhotos2(newPhotos);
        }
    };


    let uploadForm;
    let photoAddText;
    let minPhotoText;


    if (photos2.length >=1)
    {
        photoAddText = (
            <div>
                <h1 className='font-quicksand text-xl font-normal mt-[50px] mb-[40px]'>
                    Обратите особое внимание на <b>главное фото</b>, оно выразит суть и уникальность вашего объекта
                </h1>
            </div>
        )
    }


    if (photos2.length <5)
    {
        minPhotoText = (
            <div className="flex items-center mt-[41px]">
                <img src={warning} alt="logoWarning" className="mr-[10px]"/>
                <h1 className='font-quicksand text-xl font-normal text-red'>
                    Загрузите не менее 5 фотографий чтобы продолжить
                </h1>
            </div>

        )
    }
    if (photos2.length >= 1) {
        uploadForm = (
            <div className="flex left-0">
                <form action="#" onClick={() => document.querySelector('#inputFile').click()}>
                    <input
                        type="file"
                        id="inputFile"
                        className="input-filed hidden"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                    />

                    <button className={styles.buttonAddPhoto} type="button">
                        <img src={plus} alt="plusLogo" />
                        <p className="text-base font-normal leading-relaxed">
                            Загрузите фотографии
                        </p>
                    </button>


                </form>
            </div>
        );
    } else {
        uploadForm = (
            <div className={styles.wrapper_addPhoto}>
                <form action="#" onClick={() => document.querySelector('#inputFile').click()}>
                    <input
                        type="file"
                        id="inputFile"
                        className="input-filed hidden"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                    />
                    <img src={logoAddPhoto} alt="logoAddPhoto" className="w-[180px] h-[180px] mt-[121px] logoAddPhoto" />
                    <div className="flex items-center justify-center mt-[27px]">
                        <img src={plus} alt="plusLogo" />
                        <p className="text-base font-normal leading-relaxed">
                            Загрузите фотографии
                        </p>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-xl font-normal mt-[100px] mb-[40px]'>
                Загрузите фотографии вашего отеля
            </h1>
            <p className="text-base font-normal leading-relaxed mb-[5px]">
                Загрузите не менее 5 фотографий вашего объекта размещения
            </p>
            <p className="text-base font-normal leading-relaxed mb-[40px] text-[#A1A1A1]">С учетом налогов, комиссии и
                Чем больше фотографий вы добавите,тем выше шансы получить бронирования.<br/>
                Позже вы сможете загрузить еще больше фотографий.
            </p>

            {photoAddText}

            <div className={styles.photosContainer}>
                {photos2.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Uploaded Photo ${index + 1}`}
                        className={styles.uploadedPhoto}
                    />
                ))}
            </div>
            {uploadForm}
            {minPhotoText}
            <Link to={photos2.length >= 5 ? '/fillingRoomDetails' : '#'}>
                <Button classes={'py-[20px] mt-[25px] w-[295px] h-[53px] hover:bg-[#1178B4] mb-[100px] mt-[100px]'}>
                    Сохранить
                </Button>
            </Link>

        </div>
    );
}

export default AddHotelPhoto;