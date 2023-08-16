import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveData, loadDataFromLocalStorage, finishAuth } from "../../store/slices/userSlice";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SecondStep from "./Forms/SecondStep/SecondStep";
import ThirdStep from "./Forms/ThridStep/ThridStep";
import FourthStep from "./Forms/FourthStep/FourthStep";
import './Auth.css'
import FirstStep from "./Forms/FirstStep/FirstStep";

function Auth() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const { savedData } = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    useEffect(() => {
        dispatch(loadDataFromLocalStorage());
    }, [dispatch])

    const submitForm = (formData) => {
        dispatch(saveData({ ...savedData, ...formData }));
        if (Boolean(Object.values(formData)[0])) {
            switch (location.pathname) {
                case "/auth/accdata":
                    navigate("/auth/choose-category")
                    break;
                case "/auth/choose-category":
                    navigate("/auth/choose-place")
                    break;
                case "/auth/choose-place":
                    navigate("/auth/tell-about")
                    break;
                    case "/auth/tell-about" :
                        navigate("/auth/finish")
                case "/auth/tell-about":
                    dispatch(finishAuth(savedData))
                    navigate("/")
                    break;
            }
        }
        reset();
    };

    return (
        <div className="Auth">
            <div className="container">
                <div className="Auth__inner">
                    <Routes >
                        <Route path="/auth/accdata" element={<FirstStep savedData={savedData} handleSubmit={handleSubmit} register={register} submitForm={submitForm} />} />
                        <Route path="/auth/choose-category" element={<SecondStep savedData={savedData} handleSubmit={handleSubmit} register={register} submitForm={submitForm} />} />
                        <Route path="/auth/choose-place" element={<ThirdStep savedData={savedData} handleSubmit={handleSubmit} register={register} submitForm={submitForm} />} />
                        <Route path="/auth/tell-about" element={<FourthStep savedData={savedData} handleSubmit={handleSubmit} register={register} submitForm={submitForm} />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Auth;