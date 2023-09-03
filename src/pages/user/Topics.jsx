import Header from "../../components/user/Header";
import Sidebar from "../../components/user/topics/sidebar";
import Content from "../../components/user/topics/content";
const Topics = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Topics;
