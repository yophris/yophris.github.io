import EditableList from '@/components/settings/EditableList';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import { Stack } from '@mui/system';
import AppDropdown from 'components/fields/AppDropdown';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON } from 'Utils';

// const fields = [
//   {
//     element: TextInput,
//     attr: {
//       label: 'Department Name',
//       name: 'department.departmentName',
//     },
//     xs: 6,
//   },
//   {
//     element: TextInput,
//     attr: {
//       label: 'Description',
//       name: 'department.description',
//       isMultiline: true,
//     },
//     xs: 12,
//   },
//   {
//     element: AppDropdown,
//     attr: {
//       label: 'Department Head',
//       name: 'department.departmentHead',
//       options: [
//         { text: 'Employee 1', value: 'e1' },
//         { text: 'Employee 2', value: 'e2' },
//       ],
//     },
//     xs: 12,
//   },
// ];

// const validation_department = Yup.object().shape({
//   department: Yup.object().shape({
//     departmentName: Yup.string().required(' name required.'),
//     description: Yup.string().required('type required.'),
//   }),
// });

const plan = {
  sideBarTitle: 'Add Department',
  section: {
    fields: [
      {
        label: 'Department Name',
        isRequired: true,
        type: 'Text',
        id: 'departmentName',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        config: {
          placeholder: 'Department Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Description',
        type: 'Text',
        id: 'description',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        isMultiline: true,
        config: {
          placeholder: 'Description',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'Department Head',
        type: 'Select',
        gridSizes: { xs: 12, sm: 6, md: 12, lg: 12 },
        id: 'departmentHead',
        validations: [
          {
            type: 'required',
          },
        ],
        select: {
          type: 'inLine',
          options: [
            { value: 'c152a174-6024-4490-b1ac-5944337bb943', label: 'Emp 1' },
            { value: 'a107a512-a6a5-11ed-afa1-0242ac120002', label: 'EMp 2' },
            { value: 'a107a6fc-a6a5-11ed-afa1-0242ac120002', label: 'Emp 3' },
          ],
        },
      },
    ],
  },
  postFn: createSetting,
  putFn: updateSetting,
  key: 'department',
  endpoint: 'settings/department',
};
const DeparmentForm = {
  form: [
    {
      header: '',
      fields: '',
    },
  ],
  key: 'department',
  endpoint: 'settings/department',
  texts: {
    key: 'departmentName',
    breadcrumbText: 'Department',
    drawerTitle: 'Add Deparment',
    mainTitle: 'List of Departments',
    mainDescription: 'This is short description for division',
    sideTitle: 'Deparment',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  // validation: validation_department,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

export default function Page() {
  const qc = useQueryClient();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + plan.key, () => getSetting(plan.endpoint, { page: 1 }));

  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [editData, setEditData] = useState(null);
  // Delete
  const onDelete = useMutation((data) => deleteSetting(plan.endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + plan.key);
      alert('Deleted');
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  const editClickCB = (id) => {
    setOpenSideMenu(true);
    // TODO: Very Crucial
    setEditData(id);
  };

  const onDeleteClick = (id) => {
    if (window.confirm('Do you want to delete this ? ')) {
      onDelete.mutate({ id: id });
    }
    // setOpenSideMenu(true)
  };

  useEffect(
    (_) => {
      if (!openSideMenu) {
        setEditData(null);
      }
    },
    [openSideMenu]
  );
  return (
    <SettingPageLayout texts={DeparmentForm.texts}>
      <SmartSideBarForm
        plan={plan}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
        editData={editData}
      />
      <Stack sx={{ rowGap: 1 }}>
        {isLoading
          ? 'Loading'
          : response?.data?.map((e, index) => (
              <EditableList
                key={index}
                label={extractFromJSON(e, `**.departmentName`)}
                cb={{
                  Edit: () => editClickCB(e),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </SettingPageLayout>
  );
}