import { MainScreen, PanelContainer, LeftPanel, ImageRightPanel, TopLeftContainer } from "@/components/layout";
import { NavMenu, TitleDesc, Logo, HeroImg } from "@/components/home";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <MainScreen>
        <PanelContainer>
          <LeftPanel>
            <TopLeftContainer>
              <Logo />
              <NavMenu />
            </TopLeftContainer>
            <TitleDesc />
          </LeftPanel>
          <ImageRightPanel>
            <HeroImg src={"/heroimg.jpg"} />
          </ImageRightPanel>
        </PanelContainer>
      </MainScreen>
    </main>
  );
}