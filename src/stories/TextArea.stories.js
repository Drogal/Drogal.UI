import { TextArea } from '../Components/Input/TextArea';
import User from './assets/User.png'


export default {
  title: 'Example/TextArea',
  component: TextArea,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs']
};

export const Default = {
  args: {    
    icon:User,
    placeholder:"Descrição",
    displayError: false,
    errorMessage:"*Campo obrigatório"
  },
};
