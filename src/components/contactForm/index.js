import { Form, FormGroup, Input, Label, TextArea, FormContainer, Container, Map, Error } from './styles/form';

export default function ContactForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

ContactForm.Section = function ContactFormSection({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

ContactForm.Container = function ContactFormContainer({ children, ...restProps }) {
  return <FormContainer {...restProps}>{children}</FormContainer>;
};

ContactForm.Input = function ContactFormInput({ children, isInput, error, type, key, placeholder, ...restProps }) {
  return (
    <FormGroup>
      <Error>{error}</Error>
      {isInput ? (
        <>
          <Input type={type} id={key} label={`${key}-label`} placeholder={placeholder} {...restProps} />
          <Label id={`${key}-label`} for={key} {...restProps}>
            {placeholder}
          </Label>
        </>
      ) : (
        <TextArea type={type} id={key} rows={6} label={`${key}-label`} placeholder={placeholder} {...restProps} />
      )}
    </FormGroup>
  );
};

ContactForm.Map = function ContactFormMap({ children, ...restProps }) {
  return <Map {...restProps}> {children} </Map>;
};
