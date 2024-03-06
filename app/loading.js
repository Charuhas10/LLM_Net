import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className=" mx-[100px]">
      <Skeleton count={5} />
    </div>
  );
}
