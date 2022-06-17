import LocationInput from 'components/LocationInput'
import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { formatSession } from './utils'

const TopicEdit = (
  props, // TODO: redirect to session?
) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput
        label="sesja"
        source="session_id"
        reference="session"
        sort={{
          field: 'begins_at',
          order: 'ASC',
        }}
        perPage={Number.POSITIVE_INFINITY}
      >
        <SelectInput optionText={formatSession} />
      </ReferenceInput>
      <TextInput source="subject" multiline />
      <TextInput source="description" multiline />
      <NumberInput source="priority" defaultValue="0" />
      <LocationInput />
      <ReferenceInput label="mówca" source="speaker_id" reference="speaker" resettable>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="drugi mówca" source="second_speaker_id" reference="speaker" resettable>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export default TopicEdit
