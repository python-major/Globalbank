import { LogoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Footer = ({ user, type='desktop' }: FooterProps) => {
  
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await LogoutAccount();

    if(loggedOut) router.push('/sign-in');
  }
  return (
    <footer className="footer">
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className="text-xl font-bold text-gray-700">
                {user.firstName[0]}
            </p>
        </div>

        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className="text-14 truncate text-gray-700 font-semibold">
                {user.firstName}
            </h1>
            <p className="text-14 truncate font-semibold text-gray-600">
              {user.email}  
            </p>
        </div>


        <button className="footer_image" onClick={handleLogOut} aria-label="Log out">
            <Image src="icons/logout.svg" fill alt="jsm" />
        </button>
    </footer>
  )
}

export default Footer