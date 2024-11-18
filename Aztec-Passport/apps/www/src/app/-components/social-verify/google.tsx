import React, { useState } from 'react';

import { usePassport } from '~/lib/hooks';
import { sleep, truncate } from '~/lib/utils';

import GoogleLogo from 'public/assets/google.svg';

import { StepButton } from '~/components/ui/step-button';

import { Loader2Icon } from 'lucide-react';
import { toast } from 'sonner';

export const GoogleVerify = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'complete' | 'error'
  >('idle');
  const { verifyGoogle } = usePassport();

  const onVerify = async () => {
    try {
      setStatus('loading');
      const tx = await verifyGoogle();
      toast.success('Google verification successful', {
        description: `Transaction ID: ${truncate(tx.txHash.to0xString())}`,
      });
      await sleep(3000);
      setStatus('complete');
      await sleep(1000);
    } catch (error) {
      setStatus('error');
      console.error(error);
      await sleep(3000);
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className='flex flex-col gap-2 rounded-2xl border border-neutral-300 p-4 text-neutral-200'>
      <img
        alt='Google Logo'
        className='my-2 h-[2rem] w-[2rem]'
        src={GoogleLogo}
      />
      <div className='text-xl font-medium'>Google</div>
      <p className='text-sm font-medium text-neutral-400'>
        Verify your Google account.
      </p>
      <StepButton
        className='!dark mt-6 h-9 font-semibold !text-black'
        currentMode={status}
        errorContent={
          <div className='flex flex-row items-center justify-center gap-2'>
            <div>❌</div> Error
          </div>
        }
        finalContent={
          <div className='flex flex-row items-center justify-center gap-2'>
            <div>✅</div> Verified
          </div>
        }
        initialContent={
          <div className='flex flex-row items-center justify-center gap-2'>
            Verify
          </div>
        }
        loadingContent={
          <div className='flex flex-row items-center justify-center gap-1'>
            <Loader2Icon className='animate-spin' size={18} />
            Verifying...
          </div>
        }
        variants={{
          initial: { y: '-120%' },
          animate: { y: '0%' },
          exit: { y: '120%' },
        }}
        onClick={onVerify}
      />
    </div>
  );
};