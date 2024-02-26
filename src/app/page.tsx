import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="HeroSection">
        <div className="NavBar">
          <div className="navLogo">
            <div className="Logo">
              <Image alt="BITVERSE" src="/navLogo.png" width="56" height="56" />
            </div>
            <div className="LogoName">
              <div className="LogoFirst">
                <span>BITVERSE</span>
              </div>
              <span>FINANCE</span>
            </div>
          </div>

          <div className="navbarText">
            <ul>
              <li className="navbarText-about">About</li>
              <li className="navbarText-product">Our Products</li>
              <li className="navbarText-token">Token Utility</li>
              <li className="navbarText-roadmap">Roadmap</li>
            </ul>

            <button className="cntwlt">Connect Wallet</button>
          </div>
        </div>
        <div className="HeroHome">
          {/* <Image alt="square" src="/Union2.png" width={237} height={237} className="union"/> */}

          <div className="titleBox">
          <Image
                    src="/house.png"
                    width={320}
                    height={100}
                    alt="bitcoin-house"
                    className="house"
                  />
            <div className="titleText">
              <span className="gateway">YOUR GATEWAY</span>
              
                <span className="to">TO</span>
                <span className="bottom-heading">

              <span className="defi on">DEFI ON
              
              </span>
              <span className="bitcoin"> BITCOIN</span>
                </span>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
