import { RadioButton } from '../Components/RadioButton/RadioButton';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs']
};

export const Default = {
  args: {    
    title: "Radio Button",     
    displayError: false, 
    errorMessage: "*Campo obrigatório"
  },
};
