import SkeletonImage from "antd/es/skeleton/Image";

const HotelImages = ({ data, handleOpenModalImages }) => {
  return (
    <div
      onClick={handleOpenModalImages}
      className="flex justify-between mt-[20px] cursor-pointer"
    >
      <div>
        { data?.housing_images?.[0]?.image ? (
          <img
            className="rounded-l-2xl h-[500px] w-[490px] object-cover"
            src={data?.housing_images?.[0]?.image}
            alt="hotelImg"
          />
        ) : (
          <SkeletonImage
          style={{width: '490px', height: '500px'}}
          />
        )}
      </div>
      <div className="">
        <div className="flex justify-between gap-[10px] mb-[10px]">
          {data?.housing_images?.[1]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover"
              src={data?.housing_images?.[1]?.image}
              alt="hotelImg2"
            />
          ) : (
            <SkeletonImage
            style={{width: '365px', height: '245px'}}
            />
          )}
          {data?.housing_images?.[2]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover rounded-tr-2xl"
              src={data?.housing_images?.[2]?.image}
              alt="hotelImg2"
            />
          ) : (
            <SkeletonImage
            style={{width: '365px', height: '245px'}}
            />
          )}
        </div>
        <div className="flex gap-[10px] relative">
        {data?.housing_images?.[3]?.image ? (
            <img
              className="w-[365px] h-[245px] object-cover "
              src={data?.housing_images?.[3]?.image}
              alt="hotelImg2"
            />
          ) : (
            <SkeletonImage
            style={{width: '365px', height: '245px'}}
            />
          )}
          {data?.housing_images?.[4]?.image ? (
            <img
              className="w-[365px] h-[245px] rounded-br-2xl  -2xl object-cover"
              src={data?.housing_images?.[4]?.image}
              alt="hotelImg2"
            />
          ) : (
            <SkeletonImage
              style={{width: '365px', height: '245px'}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelImages;
