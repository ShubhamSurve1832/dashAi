import Modal from '@/components/UI/Modal'
import React from 'react'
import VehicleSelectionCard from './VehicleSelectionCard'
import Cross from '@/images/icons/Cross'

const VehicleSelectionModal = ({ open, setOpen }) => {
    return (
        <Modal open={open} setOpen={setOpen}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true">
                <div className="flex justify-center items-center min-h-screen overflow-y-auto">
                    <div className="w-full max-w-[90%] p-6 bg-white rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl text-[#000000] font-semibold">Vehicle Selection</h3>
                            <button className="text-sm font-semibold text-[#000000] hover:text-gray-900" onClick={() => setOpen(false)}>
                                <Cross />
                            </button>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <VehicleSelectionCard />
                            <VehicleSelectionCard />
                            <VehicleSelectionCard />
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default VehicleSelectionModal