import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link' 
import { StyledString } from 'next/dist/build/swc';
import { useRouter } from 'next/navigation';
import { exchangePlublicToken } from '..lib/actions/user.actions';

const PlaidLink = ({ user, variant}: PlaidLinkProps) => {
  const router = useRouter();

  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
    //  const data = await createLinkToken(user);

    //  setToken(data.link_token);

    }

    getLinkToken();

  }, [user]);
  
  const onSuccess = useCallback<PlaidLinkOnSuccess>(async(plublic_token: string) => {
     await exchangePublicToken({
     publicToken: plublic_token,
     user,
     })

    router.push('/')
  }, [user])
  
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const { open, ready } = usePlaidLink(config);
  
  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect Bank
        </Button>
      ): variant === 'ghost' ? (
        <Button>
          Connect Bank
        </Button>
      ): (
        <Button>
          Connect Bank
        </Button>
      )}
    </>
  )
}

export default PlaidLink