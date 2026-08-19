import { CloudUpload, X } from "lucide-react";

const FileUpload = (props) => {
  const {
    inputId = "file-upload",
    files = [],
    onFilesChange,
    onRemoveFile,
    accept = "image/*",
  } = props || {};

  return (
    <>
      {/* UPLOAD */}

      <label
        htmlFor={inputId}
        className="
          mb-2
          flex
          h-[72px]
          w-full
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-[8px]
          border
          border-dashed
          border-[#DCCEFF]
          bg-white
          px-3
          transition-all
          duration-200
          hover:bg-[#FAF8FF]
          active:scale-[0.995]
          sm:h-[78px]
        "
      >
        <CloudUpload
          size={18}
          strokeWidth={1.7}
          className="mb-1 text-[#7434E5]"
        />

        <span
          className="
            text-center
            text-[9px]
            leading-3
            text-[#8A8499]
          "
        >
          Drop or select files here
        </span>

        <input
          id={inputId}
          type="file"
          multiple
          accept={accept}
          onChange={onFilesChange}
          className="hidden"
        />
      </label>

      {/* FILE PREVIEWS */}

      {files.length > 0 && (
        <div className="mb-2">
          <div className="mb-1 text-right">
            <span
              className="
                font-inter
                text-[9px]
                font-medium
                text-[#7A7591]
              "
            >
              {files.length}/20
            </span>
          </div>

          <div
            className="
              grid
              grid-cols-4
              gap-1.5
              sm:grid-cols-5
            "
          >
            {files.map((item) => (
              <div
                key={item.id}
                className="group min-w-0"
              >
                <div
                  className="
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-[5px]
                    border
                    border-[#E7E3ED]
                    bg-[#F7F7F7]
                  "
                >
                  {item.preview ? (
                    <img
                      src={item.preview}
                      alt={item.file.name}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        p-1
                        text-center
                        text-[7px]
                        leading-3
                        text-[#7A7591]
                      "
                    >
                      {item.file.name}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      onRemoveFile?.(item.id)
                    }
                    aria-label={`Remove ${item.file.name}`}
                    className="
                      absolute
                      right-0.5
                      top-0.5
                      flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-black/60
                      text-white
                      opacity-100
                      transition
                      sm:opacity-0
                      sm:group-hover:opacity-100
                    "
                  >
                    <X size={9} />
                  </button>
                </div>

                <p
                  className="
                    mt-0.5
                    overflow-hidden
                    text-ellipsis
                    whitespace-nowrap
                    font-inter
                    text-[10px]
                    leading-3
                    text-[#757575]
                  "
                  title={item.file.name}
                >
                  {item.file.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FileUpload;