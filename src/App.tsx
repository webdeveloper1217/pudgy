import React, { Component } from 'react';
import {
  Home,
  Left_wave,
  Main,
  Main_Header,
  Right_iceberg,
  Right_img,
  Wave_img,
  Disconnect,
  Spanred,
  DisBtn,
  Pudgy_all,
  Pudgy_Left,
  Pudgy_Right,
  Pudgy_Left_Img,
  Pudgy_Left_letter,
  WaveRight,
  WaveRight_img,
  ChangeGIF,
  ChangeGIF_ALL,
  Soldout_letter,
  Border,
  Presents_ALL,
  Presents_Left,
  Presents_Right,
  Presents_Left_GIF,
  Present_Border,
  PudgyPres,
  Header1,
  Content1,
  ContentP,
  BtnConnect,
  PudgyLeft_Ice,
  PudgyRight_Ice,
  PudgyRight_Ice_right,
  CollHeader,
  CollLeft,
  CollRIght_Btn,
  CollRight,
  CollIMGS,
  CollCard,
  CollIMG_img,
  CollIMG_border,
  CollRow,
  TeamHeader,
  TeamHeader_content,
  TeamBody,
  TeamBody_border,
  TeamBody_img,
  TeamRow,
  TeamSubRow,
  TeamBodyCard,
  TeamLetter,
  TeamLetter_img,
  TeamLetter_letter,
  TeamLetter_letter1,
  Team_Ice,
  Team_img,
  Team_Ice_right,
  Team_img_right,
  End_Ice,
  Footer,
  Social,
  SocialA1,
  SocialImg1,
  Contract,
  AContract,
  CollRow1,
  CollCard1,
  ChangeGIF_ALL1,
  Border1,
  CollHeader_cover,
  CollIMGS_cover,
  Home_inner
} from "./components/Components";

class App extends Component {
  render() {
    return (
      <Home>
        <Left_wave>
          <Wave_img src="assets/img/wave.svg" />
        </Left_wave>
        <Right_iceberg>
          <Right_img src="assets/img/ice1.svg" />
        </Right_iceberg>
        <PudgyLeft_Ice>
          <WaveRight_img src="assets/img/ice2.svg" />
        </PudgyLeft_Ice>
        <PudgyRight_Ice>
          <PudgyRight_Ice_right src="assets/img/icesmall.svg" />
        </PudgyRight_Ice>
        <Team_Ice>
          <Team_img src="assets/img/icesmall.svg" />
        </Team_Ice>
        <Team_Ice_right>
          <Team_img_right src="assets/img/ice1.svg" />
        </Team_Ice_right>
        <Home_inner>

          <Main>
            <Main_Header>
              <DisBtn>
                <Disconnect>
                  <Spanred />
                  Disconnected
                </Disconnect>
              </DisBtn>
            </Main_Header>
            <Pudgy_all>
              <Pudgy_Left>
                <Pudgy_Left_Img src="assets/img/1.svg" />
                <Pudgy_Left_letter>
                  Pudgy Penguins is a collection of 8,888 randomly generated Pudgy Penguin NFTs on the Ethereum blockchain. The 8888 Pudgy Penguins create our community known as: The Huddle. Our penguins are pudgy, cute, fun, and a little goofy. Pudgy Penguins are known for eating too many fish and creating legendary memes.
                </Pudgy_Left_letter>
              </Pudgy_Left>
              <Pudgy_Right>
                <ChangeGIF_ALL>
                  <ChangeGIF src='assets/img/home-gif-v2.gif'></ChangeGIF>
                  <Border></Border>
                  <Soldout_letter>
                    Sold Out!
                  </Soldout_letter>
                </ChangeGIF_ALL>
                <WaveRight>
                  <WaveRight_img src="assets/img/wave.svg" />
                </WaveRight>
              </Pudgy_Right>
            </Pudgy_all>
            <Presents_ALL>
              <ChangeGIF_ALL1>
                <Border1></Border1>
                <ChangeGIF src='assets/img/Pudgy_Present.gif'></ChangeGIF>
                <Soldout_letter>
                </Soldout_letter>
              </ChangeGIF_ALL1>
              <Presents_Right>
                <Header1>
                  <PudgyPres>PUDGY PRESENTS</PudgyPres>
                </Header1>
                <Content1>
                  <ContentP>
                    Pudgy Presents are here to celebrate the upcoming holidays!
                    <br />
                    Pudgy Presents are available for Pudgy Penguin NFT holders.
                    <br />
                    Each Pudgy Penguin can mint one Pudgy Present. The max total supply for Pudgy Presents is 8888.
                    <br />
                    Pudgy Presents are only available to claim for 1 week and they will reveal on
                    <br />
                    December 25, 2021.
                    <br />
                    You can check to see if a Pudgy Penguin has already claimed a Pudgy Present below.
                  </ContentP>
                </Content1>
                <BtnConnect>Connect your wallet</BtnConnect>
              </Presents_Right>
            </Presents_ALL>
            <CollHeader_cover>
              <CollHeader>
                <CollLeft>THE COLLECTION</CollLeft>
                <CollRight>
                  <CollRIght_Btn>
                    Show more
                  </CollRIght_Btn>
                </CollRight>
              </CollHeader>
            </CollHeader_cover>
            <CollIMGS_cover>
              <CollIMGS>
                <CollRow>
                  <CollCard>
                    <CollIMG_img src="assets/img/8262.png" />
                    <CollIMG_border />
                  </CollCard>
                  <CollCard>
                    <CollIMG_img src="assets/img/3699.png" />
                    <CollIMG_border />
                  </CollCard>
                </CollRow>
                <CollRow>
                  <CollCard>
                    <CollIMG_img src="assets/img/813.png" />
                    <CollIMG_border />
                  </CollCard>
                  <CollCard>
                    <CollIMG_img src="assets/img/3419.png" />
                    <CollIMG_border />
                  </CollCard>
                </CollRow>
                <CollRow>
                  <CollCard>
                    <CollIMG_img src="assets/img/5766.png" />
                    <CollIMG_border />
                  </CollCard>
                  <CollCard>
                    <CollIMG_img src="assets/img/3258.png" />
                    <CollIMG_border />
                  </CollCard>
                </CollRow>
              </CollIMGS>
            </CollIMGS_cover>
            <TeamHeader>
              <TeamHeader_content>TEAM</TeamHeader_content>
            </TeamHeader>
            <TeamBody>
              <TeamRow>
                <TeamSubRow>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/mrtubby.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>MRTUBBY</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/micah.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>MICAH</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                </TeamSubRow>
                <TeamSubRow>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/jonah.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>JONAH</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/cole.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>COLE</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                </TeamSubRow>
                <TeamSubRow></TeamSubRow>
              </TeamRow>
              <TeamRow>
                <TeamSubRow>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/wyb0.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>WYBO</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/hiro.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>HIRO</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                </TeamSubRow>
                <TeamSubRow>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/starker.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter1>STARKER-XP</TeamLetter_letter1>
                    </TeamLetter>
                  </TeamBodyCard>
                  <TeamBodyCard>
                    <TeamBody_img src="assets/img/coll6.png" />
                    <TeamBody_border />
                    <TeamLetter>
                      <TeamLetter_img src="assets/img/twitter.png" />
                      <TeamLetter_letter>ECKO</TeamLetter_letter>
                    </TeamLetter>
                  </TeamBodyCard>
                </TeamSubRow>
              </TeamRow>
            </TeamBody>
            <Footer>
              <Social>
                <SocialA1 href="https://twitter.com/pudgy_penguins" target="_blank">
                  <SocialImg1 src="/assets/img/footer-twitter.svg"></SocialImg1>
                </SocialA1>
                <SocialA1 href="https://opensea.io/collection/pudgypenguins" target="_blank">
                  <SocialImg1 src="/assets/img/footer-opensea.svg"></SocialImg1>
                </SocialA1>
                <SocialA1 href="https://discord.gg/SYzRxkQ76H" target="_blank">
                  <SocialImg1 src="/assets/img/footer-discord.svg"></SocialImg1>
                </SocialA1>
              </Social>
              <Contract>
                <AContract href="https://etherscan.io/address/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8#code">Smart Contract</AContract>
              </Contract>
              <End_Ice />
            </Footer>
          </Main>
        </Home_inner>
      </Home>
    )
  }
}
export default App;
