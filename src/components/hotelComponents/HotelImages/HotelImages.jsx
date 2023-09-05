import { Skeleton } from "@mui/material";

const HotelImages = ({ data, id, handleOpenModalImages }) => {
  return (
    <div
      onClick={handleOpenModalImages}
      className="flex justify-between mt-[20px]"
    >
      <div>
        {data?.results?.[id]?.housing_images?.[0]?.image ? (
          <img
            className="rounded-l-2xl h-[500px] w-[490px] object-cover"
            src={data?.results?.[id]?.housing_images?.[0]?.image}
            alt="hotelImg"
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width={490}
            height={500}
            animation="pulse"
          />
        )}
      </div>
      <div className="">
        <div className="flex justify-between gap-[10px] mb-[10px]">
          {data?.results?.[id]?.housing_images?.[1]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover"
              src={data?.results?.[id]?.housing_images?.[1]?.image}
              alt="hotelImg2"
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={365}
              height={245}
              animation="pulse"
            />
          )}
          {data?.results?.[id]?.housing_images?.[2]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover"
              src={data?.results?.[id]?.housing_images?.[2]?.image}
              alt="hotelImg2"
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={365}
              height={245}
              animation="pulse"
            />
          )}
        </div>
        <div className="flex gap-[10px] relative">
        {data?.results?.[id]?.housing_images?.[3]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover"
              src={data?.results?.[id]?.housing_images?.[3]?.image}
              alt="hotelImg2"
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={365}
              height={245}
              animation="pulse"
            />
          )}
          {data?.results?.[id]?.housing_images?.[4]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover"
              src={data?.results?.[id]?.housing_images?.[4]?.image}
              alt="hotelImg2"
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={365}
              height={245}
              animation="pulse"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelImages;