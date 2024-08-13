import { BreadcrumbAdmin } from "@/components";
import ReactQuill from "react-quill";

// styles

const Editor = () => {
  let valueBubble = "";
  let valueSnow = "";
  valueSnow =
    valueBubble = `<h3><span class="ql-size-large">Hello World!</span></h3>
      <p><br/></p>
      <h3>This is a simple editable area.</h3>
      <p><br/></p>
      <ul>
        <li>Select a text to reveal the toolbar.</li>
        <li>Edit rich document on-the-fly, so elastic!</li>
      </ul>
  <p><br/></p>
  <p>End of simple area</p>`;

  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "super" }, { script: "sub" }],
      [{ header: [false, 1, 2, 3, 4, 5, 6] }, "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["direction", { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Editors" subtitle="Forms" />
        <div className="flex flex-col gap-6">
          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <div>
                <h4 className="uppercase dark:text-gray-300">Snow Editor</h4>
                <p className="text-default-600">
                  Snow is a clean, flat toolbar theme.
                </p>
              </div>
              <div className="pt-5">
                <ReactQuill
                  id="snow-editor"
                  modules={modules}
                  defaultValue={valueSnow}
                  theme="snow"
                />
              </div>
            </div>
          </div>

          <div className="border border-default-200 rounded-lg">
            <div className="p-6">
              <div>
                <h4 className="uppercase dark:text-gray-300">Bubble Editor</h4>
                <p className="text-default-600">
                  Bubble is a simple tooltip based theme.
                </p>
              </div>
              <div className="pt-5">
                <ReactQuill
                  id="bubble-editor"
                  defaultValue={valueBubble}
                  theme="bubble"
                  style={{ height: 300 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
