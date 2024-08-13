import { BreadcrumbAdmin } from "@/components";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop
);

const FileUploads = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="FileUploader" subtitle="Forms" />
        <div className="border border-default-200 rounded-lg">
          <div className="p-6">
            <div>
              <h4 className="font-medium text-base text-default-600">
                React FilePond
              </h4>
              <p className="text-default-600">
                FilePond is an open source library that provides drag’n’drop
                file uploads with image previews.
              </p>
            </div>
            <div className="pt-5">
              <FilePond
                className="h-60"
                labelIdle='<div class="lg:mt-44 md:mt-36 mt-9">Upload Image</div>'
                imagePreviewHeight={250}
                imageCropAspectRatio="1:1"
                styleButtonRemoveItemPosition="center bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploads;
