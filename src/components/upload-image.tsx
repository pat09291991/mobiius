import { Icon } from "./ui/Icon";

export const UploadImage = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="text-left">
      <div
        onClick={onClick}
        className="aspect-card w-full max-w-md bg-gray-800 text-center border rounded-xl w-full flex justify-center items-center border-dashed cursor-pointer overflow-hidden"
      >
        <div className="flex flex-col gap-3 items-center justify-center h-full">
          <Icon
            className="material-icons text-[#611DFC]"
            icon="photo_camera"
            size={60}
          />
          <span className="px-6">
            For faster verification, <br /> upload a high-quality photo of your
            ID
          </span>
        </div>
      </div>
    </div>
  );
};
