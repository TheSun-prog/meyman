import React from 'react';
import Button from "../../components/ui/Button/Button";
import {Link} from "react-router-dom";
import img_home from  '../../assets/images/businessMainPage/zhilie v arendu.svg'
function BusinessMainPage(props) {
    return (
        <div className="mx-auto w-[1240px]">
            <div className='flex items-center justify-between mt-[200px]'>
                <div>
                    <h1 className='font-quicksand text-[28px] font-normal'>
                        Приветствуем вас на нашей платформе!
                    </h1>
                    <p className='font-quicksand text-[22px] font-normal mb-[40px]'>
                        Приветствуем вас на нашей платформе!
                    </p>
                    <Link to='/businessAccountData'>
                        <Button classes='w-[344px] h-[61px] hover:bg-[#1178B4]'>
                            Начать
                        </Button>
                    </Link>
                </div>

                <div>
                    <img src={img_home} alt="img_home"/>
                </div>

            </div>
        </div>
    );
}

export default BusinessMainPage;