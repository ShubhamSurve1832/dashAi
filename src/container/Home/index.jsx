"use client"
import React, { useState } from 'react'
import TabHeader from './HomeComponents/TabHeader';
import QueueCard from './HomeComponents/QueueCard';
import OpenCard from './HomeComponents/OpenCard';
import PaymentFailuerCard from './HomeComponents/PaymentFailuerCard';
import LoanCard from './HomeComponents/LoanCard';
import ModificationCard from './HomeComponents/ModificationCard';
import CloseCard from './HomeComponents/CloseCard';

const DateBtn = ({ date }) => {
  return <div className='bg-[#FBBC051A] rounded-[5px] w-max py-2 px-4 m-auto my-4 text-xs'>{date}</div>;
};

const Home = () => {

  const [open, setOpen] = useState(false)
  return (
    <section className='mt-7'>
      <div className='grid gap-4 xl:grid-cols-5 grid-cols-4 items-start max-h-[85vh] hidden-scroller overflow-hidden' >
        <div className='grid gap-4 items-start'>
          <TabHeader />
          <div className='p-[10px] bg-white hidden-scroller h-[65vh] overflow-auto rounded-[4px]'>
            <QueueCard />
          </div>
        </div>
        <div className='grid gap-4 items-start'>
          <TabHeader />
          <div className='p-[10px] bg-white hidden-scroller h-[65vh] overflow-auto rounded-[4px]'>
            <OpenCard />
            <DateBtn date='27 August' />
            <PaymentFailuerCard />
          </div>
        </div>
        <div className='grid gap-4 items-start'> <TabHeader />
          <div className='p-[10px] bg-white hidden-scroller h-[65vh] overflow-auto rounded-[4px]'>
            <LoanCard />
          </div>
        </div>
        <div className='grid gap-4 items-start'> <TabHeader />
          <div className='p-[10px] bg-white hidden-scroller h-[65vh] overflow-auto rounded-[4px]'>
            <ModificationCard />
          </div>
        </div>
        <div className='grid gap-4 items-start'> <TabHeader />
          <div className='p-[10px] bg-white hidden-scroller h-[65vh] overflow-auto rounded-[4px]'>
            <CloseCard />
            <CloseCard />
          </div>
        </div>
      </div>      
    </section>
  )
}

export default Home;