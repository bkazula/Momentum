import LocationInput from 'components/LocationInput'
import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { formatSession } from './utils'

const TopicCreate = (props) => {
  const defaultValue = props.location && props.location.state ? props.location.state : {}
  const sessionId = defaultValue.session_id
  const redirect = sessionId ? `/session/${sessionId}/show/topics` : 'show'

  return (
    <Create {...props}>
      <SimpleForm defaultValue={defaultValue} redirect={redirect}>
        <ReferenceInput
          label="sesja"
          source="session_id"
          reference="session"
          perPage={Number.POSITIVE_INFINITY}
          validate={[required()]}
          required
          disabled={!!sessionId}
          sort={{
            field: 'begins_at',
            order: 'ASC',
          }}
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
        <ReferenceInput
          label="drugi mówca"
          source="second_speaker_id"
          reference="speaker"
          resettable
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}

export default TopicCreate
