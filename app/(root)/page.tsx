import HearderBox from '@/components/HearderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HearderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || 'Guest'}
                    subtext="Access and Manage your accounts, Bank funds and transactions efficiently with ease"
                />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1850.00}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 5200.00 },{ currentBalance: 1850.00 }]}
        
        />
    </section>
  )
}

export default Home