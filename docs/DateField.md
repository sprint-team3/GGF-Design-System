## Title

- DateField

## Description

- A reusable component for selecting dates, featuring a calendar popup and error handling.

## Anatomy

- `formMethod` : Object containing form management methods and state from React Hook Form.
- `label`: The label text displayed above the input field.
- `name`: The unique identifier for the input field.
- `days`: The number of days to calculate disabled date ranges.
- `color`(optional): The color theme for the input field, defaulting to 'yellow'.
  ```bash
  color: 'yellow' | 'purple'
  ```

## Usage

```jsx
import { FormProvider, useForm } from 'react-hook-form';
import { DateField } from 'ggf-ui';
import { zodResolver } from '@hookform/resolvers/zod'; // optional
import { z } from 'zod'; // optional
```

```tsx
const Schema = z.object({
  DateField: z.string().min(1),
}); // optional

const methods = useForm({
    mode: 'all',
    resolver: zodResolver(Schema), // optional

const options = [
   { title: 'Option 1', value: 1 },
   { title: 'Option 2', value: 2 },
   { title: 'Option 3', value: 3 },
 ];

 const onSubmit = (data: object) => {
	 console.log(data);
 }

return (
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
			<DateField formMethod={methods} label='DateField' name='DateField ' days={20} />
    </form>
  </FormProvider>
);
```

## UI

<img src="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/2-3_116_1714031195941.png" />
