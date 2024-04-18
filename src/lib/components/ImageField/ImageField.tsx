import { useCallback, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import { FileRejection, useDropzone } from 'react-dropzone';

import { SVGS } from '@/constants';
import { bytesToKilobytes } from '@/utils';

import { ConfirmModal, ModalButton } from '@/components/modals';
import useMultiState from '@/hooks/useMultiState';

import styles from './ImageField.module.scss';

const cx = classNames.bind(styles);

const { url: deafultUrl, alt: defaultAlt } = SVGS.upload.default;
const { url: activeUrl, alt: activeAlt } = SVGS.upload.active;
const { url: fileUrl, alt: fileAlt } = SVGS.upload.file;
const { url: closeDefaultUrl, alt: closeDefaultAlt } = SVGS.close.default;
const { url: closeActiveUrl, alt: closeActiveAlt } = SVGS.close.active;

const ONE_MB = 1024 * 1024;

type ImageFiledProps = {
  label: string;
  modalTitle: string;
  modalState: string;
  modalDescription: string;
  modalButtonMessage: string;
  onFilesUpdate: (updatedFiles: File[]) => void;
  maxMB?: number;
  maxFiles?: number;
  recommendMessage?: string;
  dropzoneMessage?: string;
  onFileDelete?: (deletedFile: File) => void;
};

const ImageField = ({
  label,
  modalTitle,
  modalState,
  modalDescription,
  modalButtonMessage,
  onFilesUpdate,
  maxMB = 50,
  maxFiles = 5,
  recommendMessage,
  dropzoneMessage = 'Drag files to upload',
  onFileDelete,
}: ImageFiledProps) => {
  const [files, setFiles] = useState<{ file: File; isCloseActive: boolean }[]>([]);
  const [finalFiles, setFinalFiles] = useState<File[]>([]);

  const { multiState, toggleClick } = useMultiState(['fileExceededModal', 'isUploadActive']);

  const onDrop = useCallback((uploadedFiles: File[]) => {
    const newFiles = uploadedFiles.map((file) => ({ file, isCloseActive: false }));
    setFiles([...newFiles]);
    setFinalFiles(uploadedFiles);
  }, []);

  const onDropRejected = useCallback(
    (rejectedFiles: FileRejection[]) => {
      if (!rejectedFiles) return;
      toggleClick('fileExceededModal');
    },
    [toggleClick],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: maxFiles,
    maxSize: maxMB * ONE_MB,
  });

  useEffect(() => {
    onFilesUpdate(finalFiles);
  }, [finalFiles]);

  const handleDelete = (fileIndex: string) => {
    const updatedFiles = files.filter((_, index) => index !== Number(fileIndex));
    const filteredFiles = finalFiles.filter((_, index) => index !== Number(fileIndex));
    onFileDelete?.(finalFiles[Number(fileIndex)]);
    setFiles(updatedFiles);
    setFinalFiles(filteredFiles);
  };

  const handleMouseEvent = () => toggleClick('isUploadActive');

  const handleMouseEnter = (buttonIndex: number) =>
    setFiles((prevFiles) =>
      prevFiles.map((item, index) => (index === buttonIndex ? { ...item, isCloseActive: true } : item)),
    );

  const handleMouseLeave = (buttonIndex: number) =>
    setFiles((prevFiles) =>
      prevFiles.map((item, index) => (index === buttonIndex ? { ...item, isCloseActive: false } : item)),
    );

  const handleClickModal = () => toggleClick('fileExceededModal');

  return (
    <div className={cx('image-field')}>
      <div className={cx('image-field-label-container')}>
        <span className={cx('image-field-label')}>{label}</span>
        <span className={cx('image-field-label-description')}>{`(${recommendMessage})`}</span>
      </div>
      <div className={cx('image-field-container')}>
        <button
          className={cx('image-field-container-group')}
          type='button'
          onMouseEnter={handleMouseEvent}
          onMouseLeave={handleMouseEvent}
          {...getRootProps()}
        >
          <input className={cx('image-field-container-group')} {...getInputProps()} />
          <div className={cx('image-field-container-group-icon')}>
            <img
              className={cx('image-field-container-group-icon-img')}
              src={multiState.isUploadActive ? activeUrl : deafultUrl}
              alt={multiState.isUploadActive ? activeAlt : defaultAlt}
            />
          </div>
          <p className={cx('image-field-container-group-title', { active: multiState.isUploadActive })}>
            {dropzoneMessage}
          </p>
        </button>

        <ul className={cx('image-field-container-name-list')}>
          {files.map((item, index) => (
            <li className={cx('image-field-container-name-list-item')} key={`filename-${index}`}>
              <div className={cx('item-group')}>
                <div className={cx('image-group')}>
                  <div className={cx('file-upload-image')}>
                    <img className={cx('file-upload-image-img')} src={fileUrl} alt={fileAlt} />
                  </div>
                  <span>{item?.file?.name}</span>
                </div>
                <span className={cx('file-size')}>{bytesToKilobytes(item?.file?.size)}KB</span>
              </div>
              <button
                className={cx('button-group')}
                value={index}
                type='button'
                onClick={(event) => handleDelete(event.currentTarget.value)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  className={cx('button-group-img')}
                  src={item.isCloseActive ? closeActiveUrl : closeDefaultUrl}
                  alt={item.isCloseActive ? closeActiveAlt : closeDefaultAlt}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ConfirmModal
        openModal={multiState.fileExceededModal}
        onClose={handleClickModal}
        title={modalTitle}
        state={modalState}
        description={modalDescription}
        warning
        renderButton={
          <ModalButton variant='warning' onClick={handleClickModal}>
            {modalButtonMessage}
          </ModalButton>
        }
      />
    </div>
  );
};

export default ImageField;
