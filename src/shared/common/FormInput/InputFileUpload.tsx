import React from "react";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { Dropdown, Image } from "react-bootstrap";

import addPhoto from "@assets/images/add-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { getSize } from "@helpers/utils";
import Flex from "@shared/Flex";
import CardDropdown from "@shared/CardDropdown";

const InputFileUpload = ({ label, name, accept }) => {
  const {t} = useTranslation();
  const [files, setFiles] = React.useState<any>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const handleRemove = (path) => {
    setFiles(files.filter((file: any) => file.path !== path));
  };

  return (
    <div className="h-100">
      <div>
        <label className="text-6-medium">
          {label} <FontAwesomeIcon icon={faCircleQuestion} />
        </label>
        <div {...getRootProps({ className: "dropzone-area" })}>
          <input name={name} {...getInputProps()} />
          <div>
            <img src={addPhoto} alt="add-photo" height={80} />
            <p className="text-6-regular text-gray-700 text-center">
                {t("choose-file")}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        {files.map((file: any) => (
          <Flex
            alignItems="center"
            className="py-3 border-bottom btn-reveal-trigger"
            key={file.path}
          >
            <Image
              rounded
              width={40}
              height={40}
              src={file.preview}
              alt={file.path}
            />
            <Flex
              justifyContent="between"
              alignItems="center"
              className="ms-3 flex-1"
            >
              <div>
                <h6>{file.path}</h6>
                <Flex className="position-relative" alignItems="center">
                  <p className="mb-0 fs--1 text-400 line-height-1">
                    <strong>{getSize(file.size)}</strong>
                  </p>
                </Flex>
              </div>
            </Flex>
            <CardDropdown>
              <div className="py-2">
                <Dropdown.Item
                  className="text-danger"
                  onClick={() => handleRemove(file.path)}
                >
                  {t("button.delete")}
                </Dropdown.Item>
              </div>
            </CardDropdown>
          </Flex>
        ))}
      </div>
    </div>
  );
};

export default InputFileUpload;
