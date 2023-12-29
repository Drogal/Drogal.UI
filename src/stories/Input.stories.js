import { Input } from '../Components/Input/Input';
import User from './assets/User.png'

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs']
};

export const Default = {
  args: {    
    icon:User,
    placeholder:"Usuário",
    displayError: true,
    errorMessage:"*Campo obrigatório"
  },
};
