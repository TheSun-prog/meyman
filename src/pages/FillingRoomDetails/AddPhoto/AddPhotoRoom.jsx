import React, {useState} from 'react';
import logoAddPhoto from '../../../assets/images/addPhoto.svg'
import warning from '../../../assets/images/vnimanie.svg'
import plus from '../../../assets/images/plus.svg'
import styles from './AddPhotoRoom.module.scss';

import Button from "../../../components/ui/Button/Button";
import {Link, useNavigate} from "react-router-dom";
import {Modal} from "antd";


function AddPhotoRoom({setRoomData, roomData, saveRoomData}) {

    const navigate = useNavigate()

    const [photos, setPhotos] = useState([]);
    const [isShow, setIsShow] = useState(false)
    const [error, setError] = useState('')
    const showModal = () => {
        setIsShow(true);
    };
    const handleOk = () => {
        setIsShow(false);
    };
    const handleCancel = () => {
        setIsShow(false);
    };

    const handleFileChange = (e) => {
        const files = e.target.files;

        if (files.length + photos.length < 20) {
            const newPhotos = [...photos];
            const imageFiles = [...roomData.images]

            for (let i = 0; i < files.length; i++) {
                newPhotos.push(URL.createObjectURL(files[i]));
                imageFiles.push(files[i])
            }
            setRoomData(prevState => {
                return {
                    ...prevState, images: imageFiles
                }
            })
            setPhotos(newPhotos);
        } else {
            alert('Максимально количество фотографий 20');
        }
    };


    let uploadForm;
    let photoAddText;
    let minPhotoText;


    if (photos.length >= 1) {
        photoAddText = (<div>
            <h1 className='font-quicksand text-xl font-normal mt-[50px] mb-[40px]'>
                Обратите особое внимание на <b>главное фото</b>, оно выразит суть и уникальность вашего объекта
            </h1>
        </div>)
    }


    if (photos.length < 5) {
        minPhotoText = (<div className="flex items-center mt-[41px]">
                <img src={warning} alt="logoWarning" className="mr-[10px]"/>
                <h1 className='font-quicksand text-xl font-normal text-red'>
                    Загрузите не менее 5 фотографий чтобы продолжить
                </h1>
            </div>

        )
    }
    if (photos.length >= 1) {
        uploadForm = (<div className="flex left-0">
            <form action="#" onClick={() => document.querySelector('#inputFile2').click()}>
                <input
                    type="file"
                    id="inputFile2"
                    className="input-filed hidden"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                />

                <button className={`${styles.buttonAddPhoto}`} type="button">
                    <img src={plus} alt="plusLogo"/>
                    <p className="text-base font-normal leading-relaxed">
                        Загрузите фотографии
                    </p>
                </button>


            </form>
        </div>);
    } else {
        uploadForm = (<div className={styles.wrapper_addPhoto}>
            <form action="#" onClick={() => document.querySelector('#inputFile2').click()}>
                <input
                    type="file"
                    id="inputFile2"
                    className="input-filed hidden"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                />
                <img src={logoAddPhoto} alt="logoAddPhoto" className="w-[180px] h-[180px] logoAddPhoto mt-[75px] "/>
                <div className="flex items-center mt-[27px]">
                    <img src={plus} alt="plusLogo"/>
                    <p className="text-base font-normal leading-relaxed">
                        Загрузите фотографии
                    </p>
                </div>
            </form>
        </div>);
    }


    return (<>
        <div className="mx-auto w-[1240px]">
            <h1 className='font-quicksand text-xl font-normal mt-[100px] mb-[40px]'>
                Загрузите фотографии вашего номера
            </h1>
            <p className="text-base font-normal leading-relaxed mb-[5px]">
                Загрузите не менее 5 фотографий вашего объекта размещения
            </p>
            <p className="text-base font-normal leading-relaxed mb-[40px] text-[#A1A1A1]">С учетом налогов, комиссии
                и
                Чем больше фотографий вы добавите,тем выше шансы получить бронирования.<br/>
                Позже вы сможете загрузить еще больше фотографий.
            </p>

            {photoAddText}

            <div className={styles.photosContainer}>
                {photos.map((photo, index) => (<img
                    key={index}
                    src={photo}
                    alt={`Uploaded Photo ${index + 1}`}
                    className={styles.uploadedPhoto}
                />))}
            </div>
            {uploadForm}
            {error && (<div className="flex items-center mt-[41px]">
                    <img src={warning} alt="logoWarning" className="mr-[10px]"/>
                    <h1 className='font-quicksand text-xl font-normal text-red'>
                        {error}
                    </h1>
                </div>

            )}
            <Link to={photos.length >= 5 ? '/businessOwnerNotification' : '#'}>
                <Button classes={'py-[20px] mt-[25px] w-[295px] h-[53px] hover:bg-[#1178B4] mb-[100px] mt-[100px]'}
                        clickFunc={() => {
                            if (!error) {
                                setIsShow(prevState => !prevState)
                            }
                        }}
                >
                    Сохранить
                </Button>
            </Link>
            <Modal width={464} open={isShow} onOk={handleOk} onCancel={handleCancel} footer={null} closeIcon={false}
                   bodyStyle={{borderRadius: '10px', padding: '50px 15px'}}>
                <p className={'text-[24px] flex justify-center'}>Добавить еще один номер?</p>
                <div className="flex gap-[30px] justify-center pt-[50px]">
                    <Button
                        width={200}
                        height={50}
                        classes={'bg-white border-blue border-[1px] !text-black'}
                        text={"Завершить"}
                        clickFunc={() => {
                            if (saveRoomData()) {
                                navigate('/businessOwnerNotification')
                            } else {
                                setError('Заполните все поля')
                                setIsShow(false)
                            }
                        }}
                    />
                    <Button
                        width={200}
                        height={50}
                        text={'Добавить'}
                        clickFunc={''}
                    />
                </div>
            </Modal>
        </div>
    </>);
}

export default AddPhotoRoom;