import { styled } from "@material-ui/core/styles";
import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const MainLayoutWrapper = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 64,
});

const MainLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const MainLayout = () => (
  <MainLayoutRoot>
    <MainLayoutWrapper>
      <MainLayoutContainer>
        <MainNavbar />
        <Outlet />
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default MainLayout;
