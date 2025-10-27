import { Send, ShieldCheck } from 'lucide-react'
import React from 'react'

const Flow = () => {
    return (
        <>
            <div className=''>
                <h1 className='font-semibold text-center mt-15'>Our Technology: Encrypted Direct Connection</h1>
                <div className='flex text-primary items-center justify-center mt-5 gap-4'>
                    <div className='bg-secondary p-3 rounded-full'>
                        <Send size={28} />
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-0.5 w-12 bg-primary'></div>
                        <span className='font-semibold text-lg px-4 bg-secondary rounded-full py-1'>P2P</span>
                        <div className='h-0.5 w-12 bg-primary'></div>
                    </div>

                    <div className='bg-secondary p-3 rounded-full'>
                        <ShieldCheck size={28} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flow
