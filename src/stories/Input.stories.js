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

export const TypeDefault = {
  args: {    
    icon:User,
    placeholder:"Usuários",
    displayError: true,
    errorMessage:"*Campo obrigatório"
  },
};
