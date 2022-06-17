import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  Create,
  Edit,
  SelectInput,
  NumberInput,
  FunctionField,
} from 'react-admin'
// import moment from 'utils/moment'
// import DateTimeInput from 'components/DateTimeInput'
// import { DateTimeField } from 'components/fields'

const images = [
  { id: 'ania-greenwood.jpg', name: 'ania-greenwood.jpg' },
  { id: 'augustyniaki.jpg', name: 'augustyniaki.jpg' },
  { id: 'ben-jack.jpg', name: 'ben-jack.jpg' },
  { id: 'biskup.jpg', name: 'biskup.jpg' },
  { id: 'jacek-gromadzki.jpg', name: 'jacek-gromadzki.jpg' },
  { id: 'katarzyna-augustyniak.jpg', name: 'katarzyna-augustyniak.jpg' },
  { id: 'kuba-kuzynin.jpg', name: 'kuba-kuzynin.jpg' },
  { id: 'kuba-marciniak.jpg', name: 'kuba-marciniak.jpg' },
  { id: 'lindnerzy.jpg', name: 'lindnerzy.jpg' },
  { id: 'luke-greenwood.jpg', name: 'luke-greenwood.jpg' },
  { id: 'malgorzata-bieniaszewska.jpg', name: 'malgorzata-bieniaszewska.jpg' },
  { id: 'marcin-lindner.jpg', name: 'marcin-lindner.jpg' },
  { id: 'marysia-lindner.jpg', name: 'marysia-lindner.jpg' },
  { id: 'ronnie-kolodziejski.jpg', name: 'ronnie-kolodziejski.jpg' },
  { id: 'tomaszewscy.jpg', name: 'tomaszewscy.jpg' },
  { id: 'weronika-butowicz.jpg', name: 'weronika-butowicz.jpg' },
  { id: 'zbyszek-zarozny.jpg', name: 'zbyszek-zarozny.jpg' },
]

export const SpeakerList = (props) => (
  <List
    {...props}
    // empty={<Empty />}
    title="Lista mówców"
    exporter={false}
    bulkActionButtons={false}
    // sort={{ field: 'published_at', order: 'DESC' }}
  >
    <Datagrid rowClick="show">
      {/* <DateTimeField source="created_at" format="dddd, D MMMM, HH:mm" withRelative /> */}
      <TextField source="name" emptyText="&mdash;" />
      {/* <TextField source="content" emptyText="&mdash;" /> */}
      <FunctionField
        label="opis"
        render={(record) => (
          <div
            style={{
              maxWidth: '42rem',
              wordWrap: 'break-word',
              maxHeight: '2.5rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
            }}
          >
            {record['description']}
          </div>
        )}
      />
      {/* <DeleteButton undoable={false} /> */}
    </Datagrid>
  </List>
)

export const SpeakerCreate = (props) => (
  <Create {...props} title="Dodaj powiadomienie">
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <TextInput source="description" multiline />
      <SelectInput source="image" style={{ width: '256px' }} choices={images} resettable />
      <NumberInput
        label="priorytet"
        source="priority"
        helperText="Priorytet na liście, od najmniejszego, 0 - nie wyświetlaj"
      />
    </SimpleForm>
  </Create>
)

export const SpeakerEdit = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <TextInput source="description" multiline />
      <SelectInput source="image" style={{ width: '256px' }} choices={images} resettable />
      <NumberInput
        label="priorytet"
        source="priority"
        helperText="Priorytet na liście, od najmniejszego, 0 - nie wyświetlaj"
      />
    </SimpleForm>
  </Edit>
)
