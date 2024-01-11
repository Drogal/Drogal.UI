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
    label: 'default label',
    disabled: false, 
    size: 'medium',
    onClick: () => {
      alert('Button clicked!');
    }
  },
};

export const TypeSuccess = {
  args: {
    type:"success",
    label: 'Sucess',
    disabled:false,
    size: 'medium',
    onClick: () => {
      alert('Button clicked!');
    }
  },
};

export const TypeDanger = {
  args: {
    type:"danger",
    label: 'Danger',
    disabled:false,
    size: 'medium',
    onClick: () => {
      alert('Button clicked!');
    }
  },
};
