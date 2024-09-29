import { Dialog } from '@headlessui/react'

export default function Modal({ open, setOpen, children }) {

  return (
    <Dialog as="div" open={open} className="relative z-[9999]" onClose={() => setOpen(false)}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" >
        {children}
      </div>
    </Dialog>
  )
}