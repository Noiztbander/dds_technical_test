import InputSearch from "../../common/input-search/InputSearch";
import Select from "../../common/select/Select";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/header/Header";

const HomeTemplate = () => {
  return (
    <main>
      <Header />
      <InputSearch />
      <Select />
      <Gallery />
    </main>
  );
};

export default HomeTemplate;
