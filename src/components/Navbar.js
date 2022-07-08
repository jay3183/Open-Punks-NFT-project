import logo from '../images/logo.png'

const Navbar = ({ web3Handler, account, explorerURL }) => {
    return (
        <nav className="navbar fixed-top mx-3">
            <a
                className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
                href="https://rinkeby.etherscan.io/address/0x51f5dB67f2fD12c5BE1CBa095ebC038F321C8aA3/"
                target="_blank"
                rel="noopener noreferrer">
                <img src={logo} className="App-logo" alt="logo" />
                EtherScan 
            </a>

            {account ? (
                <a
                    href={`${explorerURL}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button nav-button btn-sm mx-4">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button nav-button btn-sm mx-4">Connect Wallet</button>
            )}
        </nav>
    )
}

export default Navbar;