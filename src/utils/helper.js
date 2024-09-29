import { DEFAULT_MAX_FILE_SIZE_IN_BYTES, FORMATS } from "@/config/constants"
import dayjs from "dayjs"



export const fileValidator = (files) => {
    if (files.length > 6) return TOAST_ERROR('You can select up to 6 images')
    for (const es of files) {
        const size = es.size
        const format = es.name.split(".").at(-1)
        if (size > DEFAULT_MAX_FILE_SIZE_IN_BYTES) return TOAST_ERROR('Selected file is too large, the maximum file size should be less than 2MB')
        if (!FORMATS.includes(format?.toLowerCase())) return TOAST_ERROR('Selected file format is not supported, acceptable file formats - JPG, JPEG, PNG & GIF.')
    }
    return 'success'
}

export const formatTime = (time, format = "DD-MM-YYYY") => {
    return time ? dayjs(time).format(format) : '-'
}