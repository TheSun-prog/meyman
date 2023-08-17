import googlePlay from '../../../assets/images/footer-googlePlay.svg'


const Footer = () => {
    return(
        <footer className="border-t-[1px] border-grey mt-[100px]">
            <div className="container mx-auto flex justify-between relative pt-[70px] h-[386px]">
                <ul className="flex flex-col gap-[20px]">
                    <li><h6 className="mb-[10px] text-[22px]">Компания</h6></li>
                    <li><p>О нас</p></li>
                    <li><p>Служба поддержки</p></li>
                </ul>
                <ul className="flex flex-col gap-[20px]">
                    <li><h6 className="mb-[10px] text-[22px]">Партнёрам</h6></li>
                    <li><p>Подключить отель</p></li>
                    <li><p>Подключить транспорт</p></li>
                </ul>
                <ul>
                    <li><h6 className="mb-[37px] text-[22px]">Приложение Meyman</h6></li>
                    <li><img src={googlePlay} alt="download android"/></li>
                </ul>

                <p className="absolute bottom-[20px] left-0">© 2023 Meyman</p>
                <div className="absolute bottom-[20px] right-0 w-[52px] h-[52px] bg-black rounded-full text-white text-[32px] flex justify-center items-center">?</div>
            </div>
        </footer>
    )
}

export default Footer