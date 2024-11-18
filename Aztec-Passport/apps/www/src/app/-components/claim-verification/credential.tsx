import React, { useState } from 'react';

import { usePassport } from '~/lib/hooks';
import { truncate } from '~/lib/utils';

import { sleep } from '@aztec/aztec.js';
import { toast } from 'sonner';

import { StepButton } from '~/components/ui/step-button';

import { IssueCredential } from './issue-credential';

import { CreditCardIcon, Loader2Icon } from 'lucide-react';

export const CredentialVerify = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'complete' | 'error'
  >('idle');
  const { verifyJWT } = usePassport();

  const onVerify = async () => {
    try {
      setStatus('loading');
      const tx = await verifyJWT();
      toast.success('JWT verification successful', {
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
    <div className='flex flex-col gap-2 rounded-2xl bg-[#d5c2ff] p-4 text-[#223f26]'>
      <CreditCardIcon className='my-2 h-[2rem] w-[2rem]' />
      <div className='text-xl font-medium'>Verifiable Credential</div>
      <p className='text-sm font-medium text-[#305835]'>
        Verify your age credentials JWT Proof. <IssueCredential />
      </p>
      <StepButton
        className='!dark mt-6 h-9 font-semibold !text-[#223f26]'
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