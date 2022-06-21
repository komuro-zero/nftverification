import { useEffect, useState} from "react";
// import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import "./style.css";
import { Image } from "antd";
const { Header, Footer } = Layout;

const styles = {
  searchbox: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    // marginTop: "130px",
    padding: "10px 200px 10px",
  },
  sitetitle: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    marginTop: "130px",
    padding: "50px 200px 50px",
    fontSize: "50px",
  },
  sitesubtitle: {
    display: "flex",
    justifyContent: "left",
    fontFamily: "Roboto, sans-serif",
    // marginTop: "130px",
    padding: "50px 0px 20px",
    fontSize: "30px",
  },
  aboutthissite: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    marginTop: "100px",
    padding: "10px 20px 10px",
    fontSize: "50px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",    
    marginTop: "30px",
    padding: "10px",
  },
  aboutcontent: {
    // display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",    
    // marginTop: "30px",
    padding: "1px 100px 100px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  headerLogo: {
    width : "60px",
    height : "38px"
  },
  beta: {
    fontSize: "20px"
  }
};
const App = ({ isServerInfo }) => {
  // const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
  //   useMoralis();



  const [inputValue, setInputValue] = useState("explore");
  const [page, setPage] = useState("explore");

  // useEffect(() => {
  //   if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          {/* <Logo /> */}
          {/* <SearchCollections setInputValue={setInputValue}/> */}
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              marginLeft: "50px",
              width: "100%",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
            <Menu.Item key="nftMarket" onClick={() => setPage("explore")} >
              <NavLink to="/NFTMarketPlace">Search</NavLink>
            </Menu.Item>
            {/* <Menu.Item key="nft">
              <NavLink to="/nftBalance">Your NFTs</NavLink>
            </Menu.Item> */}
            <Menu.Item key="about">
              <NavLink to="/about">About this site</NavLink>
            </Menu.Item>
            {/* <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item> */}
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            {/* <NativeBalance />
            <Account /> */}
          </div>
        </Header>
        <Route path="/NFTMarketPlace">
          <div style={styles.sitetitle}>
              NFT Verification Checker<span style={styles.beta}>beta</span>
          </div>
          <div style={styles.searchbox}>
            <SearchCollections setInputValue={setInputValue} setPage={setPage}/>
          </div>
        </Route>
        <Route path="/about">
          <div style={styles.aboutthissite}>
              About "NFT Verification Checker"
          </div>
          <div style={styles.aboutcontent}>
            {/* <div>
              Yes, I know the UI sucks.<br></br>
              Yes, I know the search speed sucks.<br></br>
              Yes, I know the database is small and it sucks<br></br>
              I suck, what I've done sucks, everything I'll do will suck and my life will be one sucky event after another!!!<br></br>
              <br></br>
              But you know what!! I think this site is cool! So you can take your cynicisms and shove them up your [insert_appropriate_word].
            </div> */}
            <div style={styles.sitesubtitle}>
                Overview
            </div>
            <div>
              This website is made as a demonstration of a service that provides a database of <strong>verified</strong> NFTs on multiple marketplaces.<br></br>
              Users can check if their NFT's token address on this site to check if their assets are verified on the marketplace (and most likely not a copy/fake/etc. I only have a portion of the Verified NFT collection at the moment.)<br></br>
              <br></br>
              Of course, being verified on a marketplace is not a proof of authenticity, so users are recommended to do their own research.<br></br>
              <br></br>
              It'll be cool to aggregate a list of all know fake NFT addresses, and real ones and be the official entity for verification in the future.<br></br>
              But that'll go against this whole blockchain narrative of decentralization...<br></br>
              I'll cross that bridge when I get there.s<br></br>
            </div>
            <div style={styles.sitesubtitle}>
                Future Works
            </div>
            <div>
              Some future improvements ideas include:
              <ul>
                <li>Increase NFTs in our Database</li>
                <li>Check with Token Address and Token ID</li>
                <li>Multiple Chain Compatibility</li>
                <li>Bulk check of all NFTs in a wallet</li>
              </ul> 
              etc.
            </div>
            <div style={styles.sitesubtitle}>
                About Me
            </div>
            <div>
              I am a solidity developer based in Tokyo. <br></br>
              This is a side project that I had on the back burner for a while, and I thought was pretty cool.<br></br>
              <br></br>
              Would love to hear feedback, improvement proposals, or just chat with other people in the blockchain space!<br></br>
              DM me on <a href="https://twitter.com/novice_panda">twitter</a>!<br></br>
              Looking forward to talking with you!
            </div>
            <div>
              <br></br>
              <br></br>
              おいらは東京在住のSolidity開発者だドン！<br></br>
              このサイトはFrontendの何か作ってみたくてやってみたの<br></br>
              <br></br>
              サイトの改善点であったり、ただBlockchain関連についてのんびり話したい人いたら気軽に<a href="https://twitter.com/novice_panda">twitter</a>でDMちょうだい<br></br>
              連絡待ってま～す<br></br>
              ばいび～
            </div>
          </div>
        </Route>
        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue} page={page} setPage={setPage}/>
            </Route>
            {/* <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route> */}
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex" }}>
    <Image
      preview={false}
      src={logo || "error"}
      // fallback={fallbackImg}
      alt=""
      style={styles.headerLogo}
    />
    {/* <svg
      width="60"
      height="38"
      viewBox="0 0 50 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.6871 32.3986C43.5973 32.4884 43.53 32.5782 43.4402 32.6905C43.53 32.6007 43.5973 32.5109 43.6871 32.3986Z"
        fill="black"
      />
      <path
        d="M49.7037 14.3715C49.5241 6.2447 42.7891 -0.17592 34.6624 0.00367768C31.0031 0.0934765 27.4784 1.53026 24.8294 4.06708C22.113 1.46291 18.4986 0.00367768 14.727 0.00367768C6.71246 0.00367768 0.202047 6.49164 0 14.5511V14.6633C0 20.8146 2.24497 26.2698 4.26545 30.0189C5.11853 31.5904 6.08387 33.117 7.13901 34.5762C7.5431 35.115 7.8574 35.564 8.10435 35.8559L8.39619 36.2151L8.48599 36.3273L8.50844 36.3498L8.53089 36.3722C10.2146 38.3253 13.1555 38.5498 15.1087 36.8886C15.1311 36.8661 15.1536 36.8437 15.176 36.8212C17.1291 35.0701 17.3312 32.0843 15.625 30.1087L15.6026 30.0638L15.423 29.8618C15.2658 29.6597 15.0189 29.3455 14.727 28.9414C13.9188 27.8189 13.178 26.6515 12.5269 25.4392C10.8881 22.4309 9.42888 18.6145 9.42888 14.7531C9.49623 11.8347 11.9432 9.52236 14.8617 9.58971C17.7128 9.65705 19.9802 11.9694 20.0251 14.8205C20.0476 15.5389 20.2272 16.2348 20.5415 16.8859C21.4844 19.3104 24.2232 20.5227 26.6478 19.5798C28.4438 18.8839 29.6336 17.1553 29.6561 15.2246V14.596C29.7683 11.6775 32.2153 9.38766 35.1562 9.47746C37.94 9.56726 40.1625 11.8122 40.2748 14.596C40.2523 17.6941 39.2645 20.7472 38.1421 23.1718C37.6931 24.1371 37.1992 25.08 36.6379 25.978C36.4359 26.3147 36.2787 26.5617 36.1665 26.6964C36.1216 26.7862 36.0767 26.8311 36.0542 26.8535L36.0318 26.876L35.9869 26.9433C37.6033 24.9004 40.5442 24.5412 42.5871 26.1576C44.4953 27.6617 44.9443 30.3781 43.6198 32.4211L43.6422 32.4435V32.3986L43.6647 32.3762L43.732 32.2864C43.7769 32.1966 43.8667 32.1068 43.9565 31.9721C44.1361 31.7027 44.3606 31.3435 44.6525 30.8945C45.3933 29.6822 46.0668 28.4026 46.673 27.1229C48.1097 24.0249 49.6812 19.5349 49.6812 14.5286L49.7037 14.3715Z"
        fill="#041836"
      />
      <path
        d="M39.7135 25.1249C37.1094 25.1025 34.9991 27.2127 34.9766 29.8169C34.9542 32.4211 37.0645 34.5313 39.6686 34.5538C41.1503 34.5538 42.5647 33.8578 43.4626 32.6905C43.53 32.6007 43.5973 32.4884 43.6871 32.3986C45.1015 30.221 44.4729 27.3025 42.2953 25.9107C41.532 25.3943 40.634 25.1249 39.7135 25.1249Z"
        fill="#B7E803"
      />
    </svg> */}

  </div>
);

export default App;
