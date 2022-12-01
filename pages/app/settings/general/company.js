import { Breadcrumbs, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import SearchInput from 'components/fields/SearchInput';
import SelectDropdown from 'components/fields/SelectDropdown';
import TextInput from 'components/fields/TextInput';
import AppDatePicker from 'components/fields/AppDatePicker';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'next/link';
import AppButton from 'components/AppButton';
import SettingDrawer from 'components/settings/SettingDrawer';
import SettingPageLayout from 'components/settings/SettingPageLayout';

const Organization = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <SettingPageLayout
        texts={{
          breadcrumbText: 'Organization',
          mainTitle: 'Organization Setting',
          mainDescription:
            'It is a long established fact that a reader will be distracted',
          sideTitle: 'Organization Setting',
          sideDescription:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h3_bold_secondary" component="h3">
            Organization Details
          </Typography>
          {/* <form onSubmit={handleSubmit(onSubmit)}></form> */}
          <TextInput
            label="Organization Name"
            register={register}
            name="companyName"
          />
          <TextInput label="Industry" register={register} name="industry" />

          <AppDatePicker
            label="Established"
            register={register}
            name="established"
          />
          <SettingDrawer />

          <AppButton label={'Save'} variant="contained" />
        </Stack>
      </SettingPageLayout>
    </>
  );
};

export default Organization;