import './FirstStep.css'

const FirstStep = ({ savedData, submitForm, handleSubmit, register }) => {
    return (
        <div className="Auth__title">
            <h1>Данные вашего аккаунта</h1>
            <h3>Чтобы зарегестрировать ваш объект и управлять им</h3>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="Auth__input">
                    <label htmlFor="email">
                        <h3>Адрес электронной почты</h3>
                        <input defaultValue={savedData?.email} type="email" id="email" {...register("email")} />
                    </label>
                    <label htmlFor="name">
                        <h3>Имя</h3>
                        <input type="name" defaultValue={savedData?.name} id="name" {...register("name")} />
                    </label>
                    <label htmlFor="surname">
                        <h3>Фамилия</h3>
                        <input type="surname" id="surname" defaultValue={savedData?.surname} {...register("surname")} />
                    </label>
                    <label  htmlFor="number">
                        <h3>Номер</h3>
                        <input className='mb-[100px]' type="number" id="number" defaultValue={savedData?.number} {...register("number")} />
                    </label>
                </div>
                <button className='w-[392px]  h-[62px] rounded-[31px] bg-blue-700 text-lg text-white' type="submit">Продолжить</button>
            </form>
        </div>
    )
}

export default FirstStep;