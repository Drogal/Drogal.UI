import { Button } from '../Components/Button/Button';


export default {
  title: 'Example/Button',
  component: Button,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs']
};

export const TypeDefault = {
  args: {    
    type:"default",
    label: 'Default',
    disabled: false, 
    size: 'medium'
  },
};

export const TypeSuccess = {
  args: {
    type:"success",
    label: 'Sucess',
    disabled:false,
    size: 'medium' 
  },
};

export const TypeDanger = {
  args: {
    type:"danger",
    label: 'Danger',
    disabled:false,
    size: 'medium' 
  },
};
