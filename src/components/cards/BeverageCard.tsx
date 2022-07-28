import { CardProps } from "@yext/search-ui-react";
import StarRating from "../StarRating";

const BeverageCard = ({ result }: CardProps): JSX.Element => {
  const name = (result.highlightedFields?.name ?? result.name) as string;
  const imageUrl = result.rawData.primaryPhoto?.image.url as string | undefined;
  const rating = result.rawData.c_rating as string | undefined;
  const price = result.rawData.c_price as string | undefined;

  return (
    <div className="flex flex-col border-4 border-transparent px-4 py-4 hover:border-[#FFB563]">
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center">
          <img alt={"beverage image"} className={"w-24 mb-2"} src={imageUrl} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-hidden text-ellipsis text-base h-16">
          <p className="line-clamp-2">{name}</p>
        </div>
        <div>
          <div className="pb-8">
            {price && <div className="text-base">{price}</div>}
            {rating && <StarRating rating={rating} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeverageCard;
