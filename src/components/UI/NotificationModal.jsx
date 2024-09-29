import React from 'react'
import HistoryClockIcon from '@/images/icons/HistoryClockIcon'

const HistoryLog = ({ title, description, editedBy, timestamp }) => {
    return (
        <div className='pb-5 border-b mt-6'>
            <div className='flex gap-2 mb-2'>
                <HistoryClockIcon />
                <p className='text-base font-semibold text-[#150C0B]'>{title}</p>
            </div>
            <div className='bg-[#00000008] rounded mt-4 ml-8 p-4 mb-0'>
                <p className='text-[#000000B2]'>{description}</p>
                <div className='flex justify-between text-sm text-[#00000066] mt-5'>
                    <div className='flex'>
                        <span>Edited by: </span>
                        <p>{editedBy}</p>
                    </div>
                    <span>{timestamp}</span>
                </div>
            </div>
        </div>
    );
};

const NotificationModal = () => {
    return (
        <div className='hidden-scroller h-screen'>
            <h3 className='text-[#000000B2] font-medium text-xl pb-4 border-b'>History</h3>
            <HistoryLog
                title="Personal"
                description="Lorem Ipsum edited a field is simply a dummy text used in printing and typesetting industry."
                editedBy="James Foster"
                timestamp="27 August, 09:00 AM"
            />
            <HistoryLog
                title="Personal"
                description="Lorem Ipsum edited a field is simply a dummy text used in printing and typesetting industry."
                editedBy="James Foster"
                timestamp="27 August, 09:00 AM"
            />
            <HistoryLog
                title="Personal"
                description="Lorem Ipsum edited a field is simply a dummy text used in printing and typesetting industry."
                editedBy="James Foster"
                timestamp="27 August, 09:00 AM"
            />
        </div>
    )
}

export default NotificationModal