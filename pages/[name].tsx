import { NextPage } from "next";
import { useRouter } from "next/router";
import IcecreamDetail from "../components/IcecreamDetail/IcecreamDetail";
import { IcecreamList } from "../data/IcecreamList";
import { IcecreamNutritionalList } from "../data/IcecreamNutritionalList";

const IcecreamDetailPage: NextPage = () => {
  const router = useRouter();
  const Iname = router.query.name;
  const DetailData: any = IcecreamList.find((item) => item.name === Iname);
  const NullLiteralData: any = IcecreamNutritionalList.find(
    (item) => item.name === Iname
  );
  return <IcecreamDetail data={DetailData} Ndata={NullLiteralData} />;
};

export default IcecreamDetailPage;
