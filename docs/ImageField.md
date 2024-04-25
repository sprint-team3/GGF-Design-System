## Title

ImageField

## Description

The ImageField component allows users to upload images with customizable features such as maximum file size, maximum number of files, and visual representations of the uploaded images. It provides a dropzone area for dragging and dropping files, along with a list of uploaded files with options for deletion.

## Anatomy

- **`label`**: The label displayed above the ImageField component.
- **`modalTitle`**: The title of the confirmation modal displayed when file upload exceeds limits.
- **`modalState`**: The state of the confirmation modal.
- **`modalDescription`**: The description text displayed in the confirmation modal.
- **`modalButtonMessage`**: The message displayed on the confirmation modal button.
- **`onFilesUpdate`**: A function to update the list of files after upload or deletion.
- **`maxMB`** (optional): The maximum file size allowed for upload, in `megabytes`. Defaults to `50MB`.
- **`maxFiles`** (optional): The maximum number of files allowed for upload. Defaults to `5` files.
- **`recommendMessage`** (optional): Additional recommendation message displayed next to the label.
- **`dropzoneMessage`** (optional): The message displayed within the dropzone area for uploading files.
- **`onFileDelete`** (optional): A function to be executed when a file is deleted.

## Usage

```tsx
import { ImageField } from 'ggf-ui';
```

```tsx
<ImageField
  label='Upload Images'
  modalTitle='File Upload Exceeded'
  modalState='exceeded'
  modalDescription='You have exceeded the maximum file size or number of files allowed.'
  modalButtonMessage='OK'
  onFilesUpdate={handleFilesUpdate}
/>
```

## UI

<img src="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/2-3_116_1714034645387.png">
