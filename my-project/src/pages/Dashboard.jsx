import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChat'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
           <DashboardStatsGrid/>
           <div className="flex flex-row gap-4 w-full">
				  <TransactionChart />
				 
			</div>
           
    </div>
  )
}

export default Dashboard