import React, { useEffect, useRef, useState } from "react";
import {
  FileMetaData,
  FilePreviewContainer,
  FileUploadContainer,
  FormField,
  ImagePreview,
  InputLabel,
  PreviewContainer,
  PreviewList,
  RemoveFileIcon,
  ShowContent,
  UploadFileBtn,
} from "./file-upload.styles";
import BaseService from "services/BaseService";
import pdf from "../../../assets/images/pdf.png";
import Loader from "../../../assets/images/loading-dots.gif";
import { getLang } from "helpers/common";
import { withTranslation } from "react-i18next";
import { toast } from "react-toastify";
// import { VIDEO, FILE, IMAGE } from "Enums/FileTypeEnum";
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000000000;

const FileUpload = ({
  label,
  attachmentType,
  attachmentData,
  updatedAttachment,
  deleteAttachment,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  t,
  hasError,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState([]);
  const [lastAddedFiles, setLastAddedFiles] = useState([]);
  const acceptFileTypes = ["pdf", "doc", "docx"];
  const acceptImageTypes = ["jpg", "jpeg", "png"];
  const acceptVideoTypes = ["mp4"];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFiles(attachmentData);
  }, [attachmentData]);

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    let files = [];
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return [file];
        }
        files.push(file);
      }
    }
    return files; // [...files]
  };

  const handleNewFileUpload = async (e) => {
    setIsLoading(true);
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      //TODO enhance if 50 file will send 50 ajax
      let createdFiles = [];
      Promise.all(
        updatedFiles.map(async (file) => {
          const fileNameParts = file.name.split(".");
          const fileType = fileNameParts[fileNameParts.length - 1]
            .split("")
            .map((character) => character.toLowerCase())
            .join("");
          let res;
          let type = otherProps.file_type;
          switch (type) {
            case VIDEO:
              const isVideo =
                acceptVideoTypes.findIndex((type) => type === fileType) > -1;
              if (isVideo) {
                setIsLoading(true);
                res = await new BaseService().postUploadOther(file);
                setIsLoading(false);
              } else {
                return toast.error("file must be of the following types: mp4");
              }
              break;
            case FILE:
              const isFile =
                acceptFileTypes.findIndex((type) => type === fileType) > -1;
              if (isFile) {
                setIsLoading(true);
                res = await new BaseService().postUploadOther(file);
                setIsLoading(false);
              } else {
                return toast.error(
                  "file must be of the following types: pdf, doc, or docx"
                );
              }
              break;
            case IMAGE:
              const isImage =
                acceptImageTypes.findIndex((type) => type === fileType) > -1;
              if (isImage) {
                setIsLoading(true);
                res = await new BaseService().postUpload(file);
                setIsLoading(false);
              } else {
                return toast.error(
                  "file must be of the following types: jpg, jpeg, png"
                );
              }
              break;
            default:
              return toast.error("provided file type is not supported....");
          }
          // end new logic
          if (!res) return toast.error("please upload another file");
          const createdFile = res?.data?.data;
          createdFiles.push(createdFile);
        })
      )
        .then(() => {
          if (!otherProps.multiple) {
            setFiles(createdFiles);
          } else {
            setFiles([...files, ...createdFiles]);
          }
          setIsLoading(false);
          setLastAddedFiles(createdFiles);
        })
        .catch((e) => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (lastAddedFiles.length) {
      updatedAttachment(lastAddedFiles, attachmentType);
    }
  }, [lastAddedFiles]);

  const removeFile = (id) => {
    const updatedFiles = files.filter((f) => f.id !== id);
    setFiles([...updatedFiles]);
    deleteAttachment(
      files.filter((f) => f.id === id),
      attachmentType
    );
  };

  return (
    <>
      <FileUploadContainer
        style={{
          borderColor: `${
            hasError ? "rgb(220, 53, 69)" : "rgba(0, 0, 0 , 0.3)"
          } `,
          direction: getLang() === "ar" ? "rtl" : "ltr",
        }}
      >
        <InputLabel>{t(label)}</InputLabel>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span>{t(`Upload ${otherProps.multiple ? "files" : "a file"}`)}</span>
        </UploadFileBtn>
        {isLoading && (
          <img src={Loader} alt="loading spinner" width="50" height="50" />
        )}
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      <FilePreviewContainer>
        <PreviewList>
          {files &&
            files.map((file, index) => {
              if (file?.path) {
                return (
                  <PreviewContainer key={index}>
                    <div>
                      {otherProps.file_type === IMAGE && (
                        <ImagePreview
                          src={file.path}
                          alt={`file preview ${index}`}
                        />
                      )}{" "}
                      {otherProps.file_type === FILE && (
                        <ImagePreview src={pdf} alt={`file preview ${index}`} />
                      )}
                      {otherProps.file_type === VIDEO && (
                        <video
                          style={{
                            display: "block",
                            width: "100%",
                            height: "200px",
                            borderBottomLeftRadius: "6px",
                            borderBottomRightRadius: "6px",
                            borderTopLeftRadius: "6px",
                            borderTopRightRadius: "6px",
                          }}
                          controls
                        >
                          <source src={file.path} type="video/mp4" />
                        </video>
                      )}
                      <FileMetaData>
                        <aside>
                          <RemoveFileIcon
                            className="fas fa-trash-alt"
                            onClick={() => removeFile(file.id)}
                          />
                          <ShowContent
                            href={file.path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <RemoveFileIcon className="fas fa-eye" />
                          </ShowContent>
                        </aside>
                      </FileMetaData>
                    </div>
                  </PreviewContainer>
                );
              }
            })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
};

export default withTranslation()(FileUpload);
