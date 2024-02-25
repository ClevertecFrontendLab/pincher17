import { Registration } from "@pages/Registration/Registration"
import { Auth } from "@pages/auth/Auth"
import { ChangePassword } from "@pages/change-password/change-password"
import { ConfirmEmail } from "@pages/confirm-email/confirm-email"
import { ErrorChangePassword } from "@pages/error-change-password/error-change-password"
import { ErrorCheckEmailNoExist } from "@pages/error-check-email-no-exist/error-check-email-no-exist"
import { ErrorCheckEmail } from "@pages/error-check-email/error-check-email"
import { ErrorLogin } from "@pages/error-login/error-login"
import { ErrorUserExist } from "@pages/error-user-exist/error-user-exist"
import { MainPage } from "@pages/main-page"
import { ResultError } from "@pages/result-error/result-error"
import { SuccessChangePassword } from "@pages/success-change-password/success-change-password"
import { SuccessRegistration } from "@pages/success-registration/success-registration"
import { Navigate, Route, Routes } from "react-router-dom"



export const AppRoutes = () => {
    

    return (
    <>
    
    <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path='/main' element={<MainPage/>} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/auth/registration' element={<Registration />} />
        <Route path='/result/error-login' element={<ErrorLogin />} />
        <Route path='/result/success' element={<SuccessRegistration />} />
        <Route path='/result/error-user-exist' element={<ErrorUserExist />} />
        <Route path='/result/error' element={<ResultError />} />
        <Route path='/auth/confirm-email' element={<ConfirmEmail />} />
        <Route path='/result/error-check-email-no-exist' element={<ErrorCheckEmailNoExist />} />
        <Route path='/result/error-check-email' element={<ErrorCheckEmail />} />
        <Route path='/auth/change-password' element={<ChangePassword />} />
        <Route path='/result/success-change-password' element={<SuccessChangePassword />} />
        <Route path='/result/error-change-password' element={<ErrorChangePassword />} />
    </Routes>
    </>
    )

    }