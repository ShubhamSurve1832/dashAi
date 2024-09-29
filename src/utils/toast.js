import { toast } from "react-toastify"

export const TOAST_SUCCESS = (message) => {
    return toast.success(message,{autoClose:3000})
}
export const TOAST_ERROR = (message) => {
    return toast.error(message, { autoClose: 3000 })
}
export const TOAST_WARNING = (message) => {
    return toast.warning(message, { autoClose: 3000 })
}