import React from 'react';
import TextInput from 'components/fields/TextInput';
import * as Yup from 'yup';
import {
  createDivisions,
  deleteDivision,
  getDivisions,
  updateDivision,
} from 'requests/settings';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';

const division = [
  {
    element: TextInput,
    attr: {
      label: 'Division Name',
      name: 'division.divisionName',
    },
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Division Type',
      name: 'division.divisionType',
    },
    size: 6,
  },
  {
    element: TextInput,
    attr: {
      label: 'Description',
      name: 'division.description',
    },
    size: 12,
  },
];

const validation_division = Yup.object()
  .shape({
    division: Yup.object().shape({
      divisionName: Yup.string().required(' name required.'),
      divisionType: Yup.string().required('type required.'),
      description: Yup.string().required('description required.'),
    }),
  })
  .required();

const divisionForm = {
  key: 'division',
  form: [
    {
      header: '',
      fields: division,
    },
  ],
  endpoint: 'settings/division',
  texts: {
    key: 'divisionName',
    drawerTitle: 'Add Division',
    mainTitle: 'List of Divisions',
    mainDescription: 'It is short description for division',
    sideTitle: 'List of Divisions',
    sideDescription:
      'This is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation: validation_division,
  getAllFn: getDivisions,
  postFn: createDivisions,
  putFn: updateDivision,
  deleteFn: deleteDivision,
};

export default function Page() {
  return (
    <SettingPageLayout texts={divisionForm.texts}>
      <ListWithSidebarLayout config={divisionForm} />
    </SettingPageLayout>
  );
  // return <ListWithSidebarLayout config={divisionForm}/>
}
