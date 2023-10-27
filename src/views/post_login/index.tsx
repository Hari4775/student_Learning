import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CourseListing from "./CourseListing/CourseListing";
import { Outlet } from "react-router-dom";

const PostLoginLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PostLoginLayout;
