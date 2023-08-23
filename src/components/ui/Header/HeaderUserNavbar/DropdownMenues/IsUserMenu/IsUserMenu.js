

const IsUserMenu = ({

                   }) => {
    return(
        <div className="w-[286px] min-h-[392px] absolute right-0 top-[51px] rounded-[18px] shadow-dropdown-menu border-dropdown border-[1px] p-[20px] flex flex-col gap-[20px] bg-white">
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px]"
            >
                Личный кабинет
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px]"
            >
                Избранное
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px]"
            >
                Сдать автомобиль на Meyman
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px]"
            >
                Сдать жилье на Meyman
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px]"
            >
                Скачать приложение Meyman
            </p>
            <p
                className="text-[16px] py-[10px] border-b-grey border-b-[1px]"
            >
                Выйти
            </p>
        </div>
    )
}

export default IsUserMenu